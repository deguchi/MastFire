#Twoot MML

## これはなに

Mastodon上でMMLを配信、再生するための規格です。

## MML

[https://ja.wikipedia.org/wiki/Music_Macro_Language](https://ja.wikipedia.org/wiki/Music_Macro_Language)

## Twoot Sample
    
    #MML TITLE:TSSCCjs's Theme|CREATOR:aike|LICENSE:CC-BY
    t165;#A=l4dr8d16e16f2.r8gf8e8f8e.d.ec.d.efr8f16g16a2.r8b-a8g8d8fr8fr8fgr8gr8
    ;#B=d.a2r8g.c+2r8c+.d.ef2.rd.a2r8g.c2r8c+.g.df2.r;#C=l4ar8a16g16a2.r8ga<d8c.
    >a.<c>a.a+.<c>a.b-16<c16d2.r8c.>a+ar8ar8a;#D=a.d8>a8.<d8.f8er8e8e8ef8g.a8a+8
    ga+8;#E=dgfdgdfd>a<fd>a<f>a<d>a<cgecgcec>a<ec>a<e>a<c>a<dgfdgdfdcgecgcec>b-<
    fd>b-<f>b-<d>b-;#F=fgfde.f8g.r8efg8aa+8ac+defgfde.f8g.r8efg8aa+8d2.r;#G=l4d.
    >a.<d>b-r8b-.<dc.>g.<c>ar8ar8a<d.>a.<dcr8cr8c>b-r8b-r8b-a16r16a16r16a16r16a1
    6r16<e>a<;#H=l16[dagfdfga][c+agfc+fga][eagfefga][dagfdfga];#I=[4arararar]<[d
    rdrdrdr]frfrfrfrgrgrgrgr;#J=AeAa+BB;#K=C<cr8cr8c>C<c+r8c+r8c+Da2.rDa.d2r8Da2
    .rDa.d2r8;#L=l8Ea<ec>a<e>a<c>a<Ea<ec+>a<e>a<c+>al4<FF>;#M=GGHHHH;#N=l8[8r1]I
    [16r1];#O=%3v10ml3q6s5;#P=%3v10mp1,4,1,2,0k1q6s5;#Q=%3q10s3;#FMC3(B2(A));Oo6
    $J;Po6$J;Qp1o6v6$J;#FMC3(B2(A));Oo5p2$K;Po5p2$K;Qp2o5v6p2$K;#FMC3(B2(A));Oo5
    $L;Po5$L;Qo5v4$L;#FMC4(B2(A));%3o4l4v15$q0s1o3M;%3o4l4v13$q0s3o3M;%3o4l4v4$q
    13s1o3M;o6v4q4s4$N;o6v4q4s4k5$N;o6v2q4s4r8.$N;o6v2q4s4k5r8.$N;o8%2q0s50l16v8
    $[16arararaaarararaa][16araaaraaaraaaraa];#R=[7rara]ral16s20;%2q0l4o3s12,18v
    8$Rarrraaaal4s12Raaaaaaaal4s12Rarrraaaal4s12Raaaaaaaal4s12;%3o4v15s1,-15q1l1
    6$[16crrrrrcrcrrrrrcr][16crccrcrccrccrcrc];


## \#MML

MMLの先頭に#MMLとつけます。

## メタ情報

\#MMLのあとに半角空白を入れて、曲についてのメタ情報を同じ行内に入れます。

TITLE:曲名  
CREATOR:作成者  
URL:引用元URL  
LICENSE:ライセンス
INDEX:何分割の何個目か 例)1/4

区切りは|を使います。

# 複数Twootに分割

たいていのMMLは500文字では収まらないので、複数Twootに分割することになります。
その時の分割方法は以下のようになります。

    #MML TITLE:TSSCCjs's Theme|CREATOR:aike|LICENSE:CC-BY|INDEX:1/2
    t165;#A=l4dr8d16e16f2.r8gf8e8f8e.d.ec.d.efr8f16g16a2.r8b-a8g8d8fr8fr8fgr8gr8
    ;#B=d.a2r8g.c+2r8c+.d.ef2.rd.a2r8g.c2r8c+.g.df2.r;#C=l4ar8a16g16a2.r8ga<d8c.
    >a.<c>a.a+.<c>a.b-16<c16d2.r8c.>a+ar8ar8a;#D=a.d8>a8.<d8.f8er8e8e8ef8g.a8a+8
    ga+8;#E=dgfdgdfd>a<fd>a<f>a<d>a<cgecgcec>a<ec>a<e>a<c>a<dgfdgdfdcgecgcec>b-<
    fd>b-<f>b-<d>b-;#F=fgfde.f8g.r8efg8aa+8ac+defgfde.f8g.r8efg8aa+8d2.r;#G=l4d.
    >a.<d>b-r8b-.<dc.>g.<c>ar8ar8a<d.>a.<dcr8cr8c>b-r8b-r8b-a16r16a16r16a16r16a1
    6r16<e>a<;#H=l16[dagfdfga][c+agfc+fga][eagfefga][dagfdfga];#I=[4arararar]<[d
    rdrdrdr]frfrfrfrgrgrgrgr;#J=AeAa+BB;#K=C<cr8cr8c>C<c+r8c+r8c+Da2.rDa.d2r8Da2

    #MML TITLE:TSSCCjs's Theme|CREATOR:aike|LICENSE:CC-BY|INDEX:2/2
    rdrdrdr]frfrfrfrgrgrgrgr;#J=AeAa+BB;#K=C<cr8cr8c>C<c+r8c+r8c+Da2.rDa.d2r8Da2
    .rDa.d2r8;#L=l8Ea<ec>a<e>a<c>a<Ea<ec+>a<e>a<c+>al4<FF>;#M=GGHHHH;#N=l8[8r1]I
    [16r1];#O=%3v10ml3q6s5;#P=%3v10mp1,4,1,2,0k1q6s5;#Q=%3q10s3;#FMC3(B2(A));Oo6
    $J;Po6$J;Qp1o6v6$J;#FMC3(B2(A));Oo5p2$K;Po5p2$K;Qp2o5v6p2$K;#FMC3(B2(A));Oo5
    $L;Po5$L;Qo5v4$L;#FMC4(B2(A));%3o4l4v15$q0s1o3M;%3o4l4v13$q0s3o3M;%3o4l4v4$q
    13s1o3M;o6v4q4s4$N;o6v4q4s4k5$N;o6v2q4s4r8.$N;o6v2q4s4k5r8.$N;o8%2q0s50l16v8
    $[16arararaaarararaa][16araaaraaaraaaraa];#R=[7rara]ral16s20;%2q0l4o3s12,18v
    8$Rarrraaaal4s12Raaaaaaaal4s12Rarrraaaal4s12Raaaaaaaal4s12;%3o4v15s1,-15q1l1
    6$[16crrrrrcrcrrrrrcr][16crccrcrccrccrcrc];

このようにメタ情報は共通で、INDEXに何分割の何個目か明示します。
再生環境側は、この情報をもとにMMLをマージし、再生します。

#Version

Draft 2017/05/17 Satoshi Deguchi deguchi@bookn.me