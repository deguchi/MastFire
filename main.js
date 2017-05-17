(function () {

  function playmmlButtonTemplate() {
    var playmmlButtonTemplate = document.createElement("A");
    playmmlButtonTemplate.innerHTML = "play";
    playmmlButtonTemplate.style.cssText = "background-color:#606984;color:#ffffff;font-weight:bold;cursor:pointer;line-height:1.25em;padding:0.3em;border-radius:0.5em;margin-left: 18px; float: right; position: relative; top: -24px;font-size:0.75em";
    return playmmlButtonTemplate;
  }

  var mmls = [];

  // MutationObserver
  // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

  // select the target node
  var target = document.querySelector('.status-list');

  // create an observer instance
  var observer = new MutationObserver(function(mutations) {

    // var targetContentsList = document.querySelectorAll('.status__content:not(.ox-playflagged):not(.muted)');

    mutations.forEach(function(mutation) {
      console.log(mutation);
      if (mutation.type!=='childList' || mutation.addedNodes.length===0) return;
      const targetContent = mutation.addedNodes[0].querySelector('.status__content:not(.ox-playflagged):not(.muted)');
      console.log(targetContent)
      if (!targetContent) return;
      const sourceText = targetContent.textContent;
      const playmmlButton = playmmlButtonTemplate().cloneNode(true);

      const playmmlAnchor = document.createElement("DIV");
      playmmlAnchor.id = "playmml_" + Math.round(Math.random() * 1000);
      const targetId = playmmlAnchor.id;
      targetContent.appendChild(playmmlAnchor);
      targetContent.classList.add("ox-playflagged");

      console.log(sourceText.replace('\n', ''))
      const mml = sourceText.replace('\n', '').match(/#MML (.*?)\|\|(.*)/);
      // console.log(sourceText)
      console.log(mml)
      if (mml) {
        const meta = mml[1];
        const index = meta.match(/INDEX:(.*)/)[1];
        mmls.push({index: index, mml:mml[2]});
        console.log(mmls);
        targetContent.parentNode.appendChild(playmmlButton);
        playmmlButton.addEventListener('click', function (e) {

            console.log('played');
            mmls.sort(function(a,b){
                if(a.index<b.index) return -1;
                if(a.index > b.index) return 1;
                return 0;
            });
            console.log(mmls);
            var pmml = [];
            mmls.map(function (m) {
              pmml.push(m.mml);
            });
            playmml(pmml.join(''));
          }
          , false);
      }
    });
  });

  // configuration of the observer:
  var config = { attributes: true, childList: true, characterData: true };

  // pass in the target node, as well as the observer options
  observer.observe(target, config);

  console.log('test')

  var parser = new MMLParser();

  var looper = new AudioLooper(2048);
  var master = new MasterChannel();
  master.setVolume(1);

  var player = new TsdPlayer();
  player.device = new TssChannel();
  player.device.setPlayer(player);

  master.addChannel(player.device);
  player.setMasterChannel(master);

  var lastsel = '';

  document.onkeydown = function (e){
      var ctrl = (e.ctrlKey || e.metaKey);
      if (ctrl && e.keyCode === 67) {

        var sel = String(document.getSelection());

        if (looper.channel) {
          looper.setChannel(null); // stop
          if (sel === lastsel) {
            return;
          }
        }

        lastsel = sel;
        playmml(sel);
      }
  };

  // console.log(window)
  function playmml (mml) {
    if (looper.channel) {
      looper.setChannel(null); // stop
      if (sel === lastsel) {
        return;
      }
    }

    var tsc = new TssCompiler();

    var tssmml = parser.compile(mml);
    // if (e.shiftKey) {
    // 	console.log(tssmml);
    // }
    if (tssmml === '') {
      console.log('MML not found');
      return;
    }

    var ret = tsc.compile(tssmml);
    if (ret === null) {
      console.log("MML compile error");
    } else {
      setTimeout(function () {
        looper.setChannel(master);
        player.play(ret);
      }, 300);
    }

  }


})();
