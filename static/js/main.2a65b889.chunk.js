(this["webpackJsonpphylo-demo"]=this["webpackJsonpphylo-demo"]||[]).push([[0],{63:function(A,G,U){A.exports=U(74)},68:function(A,G,U){},74:function(A,G,U){"use strict";U.r(G);var C=U(0),n=U.n(C),e=U(32),t=U.n(e),a=(U(68),U(4)),E=U(7),o=U(84),r=U(87),c=U(85),l=Object(o.a)((function(A){return{tree_div:{display:"flex",flexDirection:"row",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .3)",width:"calc(100vw - 32px)"}}})),d=0;function u(A){var G=A.treedata,U=A.msadata,e=A.layout,t=Object(C.useState)(null),o=Object(a.a)(t,2),u=o[0],i=o[1],s=l();return d+=1,console.log(d+": getConfig Response",u),n.a.createElement(r.a,{key:1,item:!0},n.a.createElement("div",{className:s.tree_div},n.a.createElement(c.a,{width:"50%"},n.a.createElement(E.b,{data:G,layout:e,getConfig:null===u?i:function(A){}})),n.a.createElement(c.a,{width:"50%",style:{overflowX:"scroll"}},null!==u?n.a.createElement(E.a,{data:U,heigtoftree:u.treeheight,dataToShow:u.leafloc}):null)))}function i(A){var G=A.treedata,U=A.msadata,e=A.layout,t=Object(C.useState)(null),o=Object(a.a)(t,2),u=o[0],i=o[1],s=l();return d+=1,console.log(d+": getConfig Response",u),n.a.createElement(r.a,{key:1,item:!0},n.a.createElement("div",{className:s.tree_div},n.a.createElement(c.a,{width:"50%"},n.a.createElement(E.b,{data:G,layout:e,getConfig:i})),n.a.createElement(c.a,{width:"50%",style:{overflowX:"scroll"}},null!==u?n.a.createElement(E.a,{data:U,heigtoftree:u.treeheight,dataToShow:u.leafloc}):null)))}var s=U(12),P=U.n(s),m=U(33),h=Object(o.a)((function(A){return{tree_div:{display:"flex",flexDirection:"row",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .3)",width:"calc(100vw - 32px)"}}})),_="";function b(A){var G;for(G=0;G<2;G+=1){if(!A.children)return void(_+=A.sequence.id[0].accession+" "+A.sequence.mol_seq.seq+"\n");b(A.children[G])}}function f(A){var G=A.treedata,U=A.msadata,e=A.layout,t=Object(C.useState)(null),o=Object(a.a)(t,2),l=o[0],d=o[1],u=h();return console.log("msadata",U),n.a.createElement(r.a,{key:1,item:!0},n.a.createElement("div",{className:u.tree_div},n.a.createElement(c.a,{width:"50%"},n.a.createElement(E.b,{data:G,layout:e,getConfig:null===l?d:function(A){}})),n.a.createElement(c.a,{width:"50%",style:{overflowX:"scroll"}},null!==l?n.a.createElement(E.a,{data:U,heigtoftree:240,dataToShow:l.leafloc}):null)))}var p=function(){var A=Object(C.useState)(),G=Object(a.a)(A,2),U=G[0],e=G[1],t=Object(C.useState)(),E=Object(a.a)(t,2),o=E[0],r=E[1],c=Object(C.useState)(),l=Object(a.a)(c,2),d=l[0],u=l[1],i=Object(C.useState)(),s=Object(a.a)(i,2),h=s[0],p=s[1],g=Object(C.useState)(!0),S=Object(a.a)(g,2),v=S[0],y=S[1],w=Object(C.useState)("ENSGT00390000003602"),x=Object(a.a)(w,2),j=x[0],O=x[1],L=Object(C.useState)(!1),F=Object(a.a)(L,2),k=F[0],M=F[1];return n.a.createElement("div",{className:"App"},n.a.createElement("form",{onSubmit:function(){var A=Object(m.a)(P.a.mark((function A(G){var U,C,n,t;return P.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return G.preventDefault(),p(!0),A.next=4,k?fetch("https://rest.ensembl.org/cafe/genetree/id/".concat(j,"?content-type=text/x-nh;nh_format=simple")):fetch("https://rest.ensembl.org/genetree/id/".concat(j,"?content-type=text/x-nh;nh_format=simple"));case 4:return U=A.sent,A.next=7,fetch("https://rest.ensembl.org/genetree/id/".concat(j,"?content-type=application/json;aligned=1;sequence=cdna"));case 7:if(C=A.sent,U.ok||C.ok){A.next=12;break}return u(U.statusText),p(!1),A.abrupt("return");case 12:return A.next=14,U.text();case 14:return n=A.sent,A.next=17,C.json();case 17:return t=A.sent,A.next=20,b(t.tree);case 20:e(n),r(_),u(void 0),p(!1);case 24:case"end":return A.stop()}}),A)})));return function(G){return A.apply(this,arguments)}}()},n.a.createElement("label",null,"Enter Ensembl gene ID",n.a.createElement("input",{id:"geneid",value:j,onChange:function(A){return O(A.target.value)},type:"text"})),n.a.createElement("label",null,"Show branch length",n.a.createElement("input",{type:"checkbox",checked:v,onChange:function(A){y(A.target.checked)}})),n.a.createElement("label",null,"Species (CAFE) tree or gene tree?",n.a.createElement("input",{type:"checkbox",checked:k,onChange:function(A){M(A.target.checked)}})),n.a.createElement("button",{type:"submit"},"Submit")),h?n.a.createElement("p",null,"Loading..."):null,d?n.a.createElement("p",{style:{color:"red"}},d):null,U?n.a.createElement(f,{treedata:U,msadata:o,showBranchLength:v,layout:"linear"}):null)},g="\n# STOCKHOLM 1.0\n#=GF NH                  ((AE013039.1/9145-9323:0.3910808817,AE001799.1/20444-20268:0.3376622139)node_116:0.5253933898,(AE006448.1/6071-6253:0.0940155812,(AF269536.1/680-500:0.2724450475,(AE016747.1/182196-182375:0.0080651569,(AF306669.1/1019-1194:0.0085335955,(AP003362.3/86114-86289:0.0044201319,(AP004826.1/205532-205707:0.0001051631,(AE016947.1/224792-224618:0.0216013901,(AE017274.1/20257-20449:0.0099521033,(AE017033.1/217118-217310:0.0130556605,(AE017007.1/287994-288186:0.0052067476,(AE010489.1/2647-2468:0.0141142610,(AE007856.1/5090-5262:0.2137752816,(AP003187.2/139222-139393:0.1221701288,(AE015944.1/195870-195703:0.0233508189,(AE004193.1/5679-5861:0.0249451096,(AE017154.1/86844-87014:0.0312858057,(AE007576.1/1562-1747:0.0628224203,(Z99121.2/6040-5861:0.1030279286,(AE013149.1/9167-9356:0.0767122527,(AL591976.1/186683-186486:0.0108633478,(AL596166.1/112469-112272:0.0040537632,(U32832.1/9495-9319:0.0430024152,(AE015937.1/285886-286061:0.0988472465,(AF270308.1/2156-2331:0.0211087990,(AP004827.1/261938-261763:0.0098767272,(AE007843.1/1920-1745:0.0257194872,(AP003194.2/187997-187828:0.0429137911,(AE015545.1/1265-1436:0.0934978146,(AP001517.1/215539-215348:0.1136029715,(AP001513.1/19957-19775:0.0386965374,(AP005076.1/290738-290918:0.1185087793,(AP004601.1/22341-22165:0.1238930952,(AP001512.1/119931-120105:0.1129613280,(AP005335.1/123141-123320:0.1028852530,(AE004361.1/7554-7382:0.0932529190,(AP001518.1/272531-272358:0.1471145915,(AE017000.1/234265-234084:0.0086453589,(AE017026.1/274819-274638:0.0125032137,(AE017267.1/95018-94836:0.0109416360,(M93419.1/332-511:0.0986816736,(J03294.1/2297-2476:0.0332320019,(AP003189.2/159236-159062:0.0961252166,(AP004598.1/253855-254037:0.1504648995,(AE006126.1/222-48:0.1424780559,(AE017029.1/246029-245843:0.0036184890,(AE017270.1/85304-85118:0.0082248886,(AE017003.1/180245-180059:0.0073439836,(AL935254.1/261916-262097:0.2049568888,(AE017269.1/77627-77808:0.0005521530,(AE017028.1/200117-200298:0.0007256834,(AE015829.1/4454-4280:0.0137411355,(AP005342.1/28132-28310:0.0098431157,(AP005082.1/169934-170112:0.0534519197,(AE004127.1/7715-7538:0.0087658364,(AE016770.1/235405-235209:0.0300185388,(X00008.1/296-492:0.0001615519,(U00006.1/98763-98567:0.0001000010,X15196.1/270-75:0.0211645370)node_60:0.0208146477)node_61:0.0003179659)node_62:0.5682781539)node_63:0.0907793738)node_64:0.0395011894)node_65:0.3653111406)node_66:0.8150272954)node_67:0.0004705034)node_68:0.1893322388)node_69:0.4974498996)node_70:0.0318101514)node_71:0.0039620552)node_72:0.3462339095)node_73:0.2318621806)node_74:0.1804652027)node_75:0.3907367381)node_76:0.1202422859)node_77:0.5063463732)node_78:0.0608076638)node_79:0.0009089909)node_80:0.3118689640)node_81:0.2640158710)node_82:0.2004379176)node_83:0.2590946109)node_84:0.2020955869)node_85:0.2856898497)node_86:0.4062047927)node_87:0.2326094051)node_88:0.2993848474)node_89:0.3853528708)node_90:0.1881174496)node_91:0.6318140703)node_92:0.1856734567)node_93:0.3919517912)node_94:0.2914760676)node_95:0.8053572692)node_96:0.0614436461)node_97:0.4465092521)node_98:0.2585299829)node_99:0.3191436763)node_100:0.5961160173)node_101:0.4073565007)node_102:0.5658135775)node_103:0.1959536193)node_104:0.1232262850)node_105:0.3213264571)node_106:0.7573510279)node_107:0.0174343884)node_108:0.0109886627)node_109:0.5119223578)node_110:0.9194599033)node_111:0.0001000010)node_112:0.0459985531)node_113:0.1515951036)node_114:0.6603579677)node_115:0.5723686206)node_117:0.5254007368)root;\n\n#=GS M93419.1/332-511 SS Test #=GS annotation\n\n#=GC SS_cons             .....<<<<<<.....<<<<<<<<<............<<<<<<<<..........\n#=GR M93419.1/332-511 SS ................<<<<<<<<<............<<<<<<<<..........\nJ03294.1/2297-2476       GGUGAAGAUAGAGGU-GCGAACUUC-AAGA--GUA--UGCCUUUGGAGA------\nM93419.1/332-511         AGUGAAGAUAGAGGU-GCGAACUUC-AUCA--GUA--AAAGCUUGGAGAA-----\nZ99121.2/6040-5861       CAGUGAGGUAGAGGUUGCGCGGAUG-AUGA--GUC--ACACAUGCUA--------\nAE017003.1/180245-180059 ACGUGAGAUAGAGGUUGCGAUACUU-AUGA--GUA--UUCUAAUGGAGAC-----\nAE017026.1/274819-274638 CGGUGAGGUAGAGGUUGCAGUCAUU-AAGA--GUA--UCAUUUCUGGA-------\nAE017007.1/287994-288186 CGAUGAGGUAGAGGUUGCGACUUUU-AAGA--GUA--CGACGGAC----------\nAE017033.1/217118-217310 CGAUGAGGUAGAGGUUGCGACUUUU-AAGA--GUA--AAACGGAC----------\nAE017267.1/95018-94836   CGGUGAGGUAGAGGUUGCAGUCAUU-AAGA--GUA--UCAUUUCAGGA-------\nAE017270.1/85304-85118   ACGUGAGAUAGAGGUUGCGAUACUU-AUGA--GUA--UUCUAAUGGAGAC-----\nAE017029.1/246029-245843 ACGUGAGAUAGAGGUUGCGAUACUU-AUGA--GUA--UUCUAAUGGAGAC-----\nAE017028.1/200117-200298 CUCAAAGGUAGAGGCCGCGAUAGGA-AAGA--GUA--AGCUAUGGG---------\nAE017274.1/20257-20449   CGAUGAGGUAGAGGUUGCGACUUUU-AAUA--GUA--AAACGGAC----------\nAE017269.1/77627-77808   CUCAAAGGUAGAGGCCGCGAUAGGA-AAGA--GUA--AGCUAUGGG---------\nAE017000.1/234265-234084 CGGUGAGGUAGAGGUUGCAAUCAUU-AAGA--GUA--UCAUUUCAGGA-------\nAP001513.1/19957-19775   AGUGAGGAUAGAGGU-GCAAAAACC-AAGA--GUA--CACAAUUGGAGGA-----\nAP001518.1/272531-272358 AGAUGGGGUAGAGGA-GCGGGUUUU-AAGA--GUA--AGCGCUUGG---------\nAP001517.1/215539-215348 AGUGAUGGUAGAGGU-GCGAAAACC-AAGA--GUA--CACAGUCUG---------\nAP001512.1/119931-120105 GGAUGAGGUAGAGGU-GCAAUGCGA-AUCA--GUA--CCCACUUGG---------\nAP004598.1/253855-254037 GUUUUGGAUAGAGGU-GCGGAGACC-AUCA--GUA--UAUACGCGGAAGG-----\nAP004601.1/22341-22165   CGGUGAGGUAGAGGA-GCAUACAAC-AUUA--GUA--AUCGACAAG---------\nAL596166.1/112469-112272 UGGUGAGGUAGAGGUUGCGAGAUGC-ACUA--GUA--AUUUUUUCGAGGCGAA--\nAL591976.1/186683-186486 UGGUGAGGUAGAGGUUGCGAGAUGC-ACUA--GUA--AUUUUUUCGAGGCGAA--\nAE016747.1/182196-182375 AGAUUUUGAUGAGGC-GCAUCAAUC-AUGA--GUA--AACUUUAGAUAAUU----\nAF306669.1/1019-1194     AUAUUUUGAUGAGGC-GCAUCAAUC-AUGA--GUA--AAGUUUAGAUUAC-----\nAF269536.1/680-500       AAUAGAGUUAGAGGUUGCAUUAUUA-AUGA--CUA--ACUUAUCAGAAGUCGU--\nAF270308.1/2156-2331     AAUAGAGUUAGAGGUUGCAUUAUUA-AUGA--CUA--ACUUAUCAGAAGUCGU--\nAP003362.3/86114-86289   AUAUUUUGAUGAGGC-GCAUCAAUC-AUGA--GUA--AAGUUUAGAUUAC-----\nAP004826.1/205532-205707 AUAUUUUGAUGAGGC-GCAUCAAUC-AUGA--GUA--AAGUUUAGAUUAC-----\nAP004827.1/261938-261763 AAUUGAGUUAGAGGUUGCAUGUUUA-AUUA--GUA--ACUUGUCAGAAGUAUUU-\nAP003187.2/139222-139393 GACCAAAGUAGAGGU-GCCGUAAUU-AAGA--GUA--GUCAUAAG----------\nAE015937.1/285886-286061 UAGAAAGGUAGAGGC-GCGGUAUUU-AAUA--GUA--UCUGUACA----------\nAE007576.1/1562-1747     ACCUUUUGUAGAGGU-GCUUUAAGUCAAGA--GUA--ACCGUUUGG---------\nAE007843.1/1920-1745     AACUGAGGUAGAGGC-GCAAAAUUU-AAGA--GUA--GAACUGUG----------\nAP003194.2/187997-187828 AAAAGAGGUAGAGGC-GCGAGAAUC-AAGA--UUA--CUAAAAUGG---------\nAE015944.1/195870-195703 ACCCAGGGUAGAGGA-GCUAUAAUU-AAGA--GUA--CUUAUCUU----------\nAP003189.2/159236-159062 AACUGAGAUAGAGGC-GCGAUGAUU-AAUA--GUA--UCUUUGCA----------\nAE007856.1/5090-5262     ACCUAGGGUAAAGGU-GCUGUAGUU-AUUA--UUA--UUUAUUCUU---------\nAE013149.1/9167-9356     AGGUGAGGUAGAGGC-GCGGGUCAUCAAGA--GUA--ACAUGCCAGAGG------\nAE013039.1/9145-9323     CGCAUAAAUAGAGGA-GCUGCCAAGCAU----GUA--UUUGGCGAGGUGUUAAGG\nAE016947.1/224792-224618 AAAAGAGGUAGAGGUCGCGGUUUUU-A-----UUA--CGCUUGUGG---------\nAL935254.1/261916-262097 AUCGAAAGAAGAGGAUGCGGUUAAC-AAUA--GUA--GCCGGCUGGAAGU-----\nAE006448.1/6071-6253     CACAUCGAUAGAGGUCGCAACUGAU-AUGAAUCUACGCCGAGUUGG---------\nAE010489.1/2647-2468     AUAAAAAAUAGAGGU-GCAUAUAUGUA--G--GUA--GUGUGAAAAUGUUAAGG-\nAE015829.1/4454-4280     AGGAACAGAAGAGGA-GCGUUAACU-A--G--GUA--GUCAAUCAGAGGA-----\nAE015545.1/1265-1436     CCUUUAAGUAGAGGC-GCGCUGCCU-AUGA--CUA--CUUGUGCGG---------\nU00006.1/98763-98567     CAGGCCAGAAGAGGC-GCGUUGCCC-A--A--GUAA-CGGUGUUGGA--------\nX15196.1/270-75          GCAGCCAGAAGAGGC-GCGUUGCCA-A-----GUAA-CGGUGUUGGA--------\nAE016770.1/235405-235209 CAGGCCAGAAGAGGC-GCGUUGCCC-A--A--GUAA-CGGUGUUGGA--------\nX00008.1/296-492         CAGGCCAGAAGAGGC-GCGUUGCCC-A--A--GUAA-CGGUGUUGGA--------\nU32832.1/9495-9319       UACAAAAGUAGAGGC-GCAAUUAUU-AUAA--GUA--UUUUUUCA----------\nAE017154.1/86844-87014   ACAAAUUGUAGAGGU-GCAAAUCCG-AUAA--GUA--UUUCUUCU----------\nAE006126.1/222-48        UACUUGUGUAGAGGA-GCGAUCACU-AUAA--GUA--UUUUUUCU----------\nAE004361.1/7554-7382     CCUUUAAGUAGAGGC-GCGCUGUUC-AUGA--GUC--GCCAGUCGU---------\nAE004193.1/5679-5861     UUUCGCCGUAGAGGA-GCGGUUACG-AAAA--GUA--UCCACAGUU---------\nAP005342.1/28132-28310   UUUUGCAGAAGAGGA-GCACUGCCC-A--G--GCA--GAUGUUUUGUGGA-----\nAP005076.1/290738-290918 UGUUGCCGUAGAGGC-GCAGUCUCG-AAGA--GUA--GCUAUUAUU---------\nAP005082.1/169934-170112 UUAUGUAGAAGAGGA-GCACUGCCC-A--G--GCA--GAUGAUUUGUGGA-----\nAE004127.1/7715-7538     UCUAGCAGAAGAGGA-GCACUGCCC-A--G--GCA--GAUGUUUUGUGGA-----\nAP005335.1/123141-123320 UAUCGACGUAGAGGC-GCAAUGGUA-AAGA--GUA--ACUAUUAUU---------\nAE001799.1/20444-20268   -GACCCGACGGAGGC-GCGCCCGAG-AUGA--GUA--GGCUGUCCC---------\n\n#=GC SS_cons             ........................>>>>>>>>........>>>.>.>>>>>...<\n#=GR M93419.1/332-511 SS ........................>>>>>>>>........>>>.>.>>>>>...<\nJ03294.1/2297-2476       -AAGAUGGAUUC-UGUG------AAAAAGGCU-GAAAGG-GGA-GCGUCGCCGAA\nM93419.1/332-511         -GAAUGAGCUUC-AAUG------AAAAGCUUU-GAAAGG-GAACG-UUCGCCGAA\nZ99121.2/6040-5861       -GGCUGACAGGG-GCUGUUA---AACAUGUGU-AAAAGG-CAU-C-AGCGCCGAA\nAE017003.1/180245-180059 -ACAGAGAUGUC-UAUG------AACUUAGAU-GAAAGG-AAG-U-AUUGCCGAA\nAE017026.1/274819-274638 -GAUGUAGUGGC-AUUGAUG---AAGGAAUGA-GAAAGG-AAU-G-AUUGCCGAA\nAE017007.1/287994-288186 -GAGACACAGAG-AAUGUCACCGACUCCGUUU-GAAAGG-AAA-A-GUUGCCGAA\nAE017033.1/217118-217310 -GAGAUACAGAG-AAUGUCUAAGACUCCGUUU-GAAAGG-AAA-A-GUUGCCGAA\nAE017267.1/95018-94836   -GAUGUAGUGGC-AUUGAUG---AACGAAUGA-GAAAGG-AAU-G-AUUGCCGAA\nAE017270.1/85304-85118   -ACAGAGAGGUC-UAUG------AAAUUAGAU-GAAAGG-AAG-U-AUUGCCGAA\nAE017029.1/246029-245843 -ACAGAGAGGUC-CAUG------AAAUUAGAU-GAAAGG-AAG-U-AUUGCCGAA\nAE017028.1/200117-200298 -AGAUUUAAUGG-AAUCUGUG--AUCAUAGGUUGAAAGG-GAC-U-AUUGCCGAA\nAE017274.1/20257-20449   -GAGACACAGAG-AAUGUCUUAGACUCCGUUU-GAAAGG-AAA-A-GUUGCCGAA\nAE017269.1/77627-77808   -AGAUUUAAUGG-GAUCUGUG--AUCAUAGGUUGAAAGG-GAC-U-AUUGCCGAA\nAE017000.1/234265-234084 -GAUGUAGUGGC-AUUGAUG---AAGGAAUGA-GAAAGG-AAU-G-GUUGCCGAA\nAP001513.1/19957-19775   -GAAUGAGAUCC-GUUG------AGAAUUGUG-GAAAGG-GGA-A-UUUGCCGAA\nAP001518.1/272531-272358 -AGGAUGACAAC-GAGG------AUAAGCGCC-GAAAGG-AAA-A-CUCGCCGAA\nAP001517.1/215539-215348 -AGAGAAAUGAG-AAUCGUUG--ACGACUGUUGGAAAGG-GGG-A-UUCGCCGAA\nAP001512.1/119931-120105 -AGUUUGAUGGA-ACUAGG----AAGAGUGGG-GAAAGG-UCA-A-UUUGCCGAA\nAP004598.1/253855-254037 -GAAAUGAGCCCUAGUG------AAGCGUAUG-GAAAGG-GGA-A-UCUGCCGAA\nAP004601.1/22341-22165   -AGGAUGACAAC-GAUG------AUAGUUGGU-GGAAGG-GUU-G-UUUGCCGAA\nAL596166.1/112469-112272 -ACAAAGACGCC-AAUG------ACAAAAAAC-GAACAG-GUU-A-AUCGCCGAA\nAL591976.1/186683-186486 -ACAAAGACGCC-GACG------ACAAAGAAU-GAACAG-GUU-G-AUCGCCGAA\nAE016747.1/182196-182375 -UGUCUGCUAAC-AAUU-------AUAGAGUU-AAAAGG-GUG-A-GAUGCCGAA\nAF306669.1/1019-1194     -UGUCUGCUAAC-AG---------CUAAAUUU-GAAAGG-GUG-C-GAUGCCGAA\nAF269536.1/680-500       -AUGGGACAUGU-GUUG------A--AUAAGU-GAAAGG-UAA-U-AAUGCCGAA\nAF270308.1/2156-2331     -AUGGGACAUGU-GUUG------A--AUAAGU-GAAAGG-UAA-U-AAUGCCGAA\nAP003362.3/86114-86289   -UGUCUGCUAAC-AG---------CUGAAUUU-GAAAGG-GUG-C-GAUGCCGAA\nAP004826.1/205532-205707 -UGUCUGCUAAC-AG---------CUAAAUUU-GAAAGG-GUG-C-GAUGCCGAA\nAP004827.1/261938-261763 -AUGGUACAUAA-GUUG------A--ACAAGU-GAAAGG-UAA-A-GAUGCCGAA\nAP003187.2/139222-139393 -UAGCUGACAAG-UGUUUU----AUGUAUGAU-GAAAGG-GAU-U-AUGGCCGAA\nAE015937.1/285886-286061 -GAUAAAAGCAA-GAUG------AUGUACAGU-GAAAGG-AAA-U-AUCGCCGAA\nAE007576.1/1562-1747     -AGUUGGCAAAC-UUAG------AUGAACGGU-AAAAGGGGCU-U-UUAGCCGAA\nAE007843.1/1920-1745     -GAGACAAGCAC-UAUG------AAGCAGUUU-AAAAGG-AAA-U-UUUGCCGAA\nAP003194.2/187997-187828 -AGUUAAGUAGC-GUAG------AAGUUUUAG-GAAAGG-GAU-U-AUCGCCGAA\nAE015944.1/195870-195703 -AAACUGCCAAGUAAUG------AUAGAUAGG-AAAAGG-AAU-U-AUAGCCGAA\nAP003189.2/159236-159062 -GAGGUAAGCAC-AUUG------AAGCAAAGU-GAAAGG-AUG-A-AUCGCCGAA\nAE007856.1/5090-5262     -AGCUGGCAAGC-UUUG------AGGGAUAAA-GAAAGG-AAU-U-GCAGCCGAA\nAE013149.1/9167-9356     -UGUUAAGGGCC-GAUG------AAGGUGUGU-GAAAGG-GGU-G-CCCGCCGAA\nAE013039.1/9145-9323     AGAAGAACCUCC-AAUA------CUCGCUGAA-GAA-GG-UUU-G-GCUGCCGAA\nAE016947.1/224792-224618 -AGUGAGAGGAC-ACUGGG----AAGCAAGUU-UA--GG-AUC-A-AUCGCCGAA\nAL935254.1/261916-262097 -GGGUCACCACU-UAUG------AAGGUCAGU-GAACGG-GGC-A-ACCGCCGAA\nAE006448.1/6071-6253     -AGCACAACAAA-GACG------CGUAUUUAG-AGGAGG-AGA-G-GUUGCCGAA\nAE010489.1/2647-2468     -UAUAAGCCACC-AAUG-------UUUCACAU-GAAGGG-CAU-A-GUUGCCGAA\nAE015829.1/4454-4280     -GCACAAACUCC-AGCG------AUGAUUGAU-GAGGGA-GAU-U-AGCGCCGAG\nAE015545.1/1265-1436     -AGGGUGAUGCC-GCAG------AUGUACAAG-GAAAGG-AGU-C-AGCGCCGAA\nU00006.1/98763-98567     -GGAGCCAGUCC-UGUG------AUAACACCU-GAGGGG-GUG-C-AUCGCCGAG\nX15196.1/270-75          -GGAGCCAGUCC-UGUG------AUAACACCU-GAGGGG-GUG-C-AUCGCCGAG\nAE016770.1/235405-235209 -GGAGCCAGUCC-UGUG------AUAACACCU-GAGGGG-GUG-C-AUCGCCGAG\nX00008.1/296-492         -GGAGCCAGUCC-UGUG------AUAACACCU-GAGGGG-GUG-C-AUCGCCGAG\nU32832.1/9495-9319       -GAGUGGAUAAC-GAAG------AAGAAAAAA-GAAAGG-AAU-A-GUUGCCGAA\nAE017154.1/86844-87014   -GAGUGGAAAGC-GAUG------AAGGGGAAG-GAAAGG-CGU-A-UUUGCCGAA\nAE006126.1/222-48        -GAGUGGAUAAC-GAAG------AGGAAAAAG-GAAAGG-AGU-G-ACCGCCGAA\nAE004361.1/7554-7382     -AGGUUGACCCC-GAUG------AUGACUGGU-UAAAGG-GUA-C-AGCGCCGAA\nAE004193.1/5679-5861     -GGGGUGAUGCC-AAUG------AAUUGUGGA-AAAAGG-CGU-U-GCCGCCGAA\nAP005342.1/28132-28310   -GCCGCAACUCC-AACA------CAGAACAUU-CAGGGG-GAG-U-AGUGCCGAG\nAP005076.1/290738-290918 -GGGGUGAUGCC-AAUG------AAUAAUAGU-GGAAGG-CGAAG-AUUGCCGAA\nAP005082.1/169934-170112 -ACCGCAAUUCC-AAUA------CCAAUCAUU-CAGGGG-GAG-U-AGUGCCGAG\nAE004127.1/7715-7538     -GCCUCAACUCC-AAUA------CAGAACAUU-CAGGGG-GAG-U-AGUGCCGAG\nAP005335.1/123141-123320 -GGGGUGAUGCC-AAUG------AAUAAUAGU-GAAAGG-UAUCC-AUUGCCGAA\nAE001799.1/20444-20268   -AUCAGGGGAGG-AAUCG-----GGGACGGCU-GAAAGG-CGA-G-GGCGCCGAA\n\n#=GC SS_cons             <<<<<<<<<<<..............>>>>>>>>.>>>><<<.<<<<.<<<<....\n#=GR M93419.1/332-511 SS <<<<<<<<<<<..............>>>>>>>>.>>>><<<.<<<<.<<<<....\nJ03294.1/2297-2476       GCAAAUAAAACCCC-AUCG------GUAUUAUU-UGCUGGC-CGUG-CAUU--GA\nM93419.1/332-511         GUGAAGAAAAA----CUCAUU----UUUUUCUU-UGCUGGU-CCUG-CAUU--UA\nZ99121.2/6040-5861       GUGUGGAGAAAGCC-GAUC------CUUCUCUA-UGCUGGG-ACUG-UAUCU-GA\nAE017003.1/180245-180059 AUUGAUAAAUUU---CUCU-G----CAUUUAUC-AAUUGGG-GCUG-UUUUC-GA\nAE017026.1/274819-274638 GUAAGUUGUGUCC--ACCA-U----GCAC-ACU-UGCUGGG-UCUG-CAUU--UA\nAE017007.1/287994-288186 GUUUAUAUUUCUU--CUCU-G----GAAAUAUG-AGCUGGG-GCUG-UCUCC-GA\nAE017033.1/217118-217310 GUUUAUAUUUCUU--CUCU-G----GAAAUAUG-AGCUGGG-GCUG-UGUCU-GA\nAE017267.1/95018-94836   GUAAGCCCGUGUCC-ACCAUG----CAC--GCU-UGCUGGG-UCUG-CAUU--GA\nAE017270.1/85304-85118   AUCGAUAUAUUU---CUCU-G----UAUGUAUC-GAUUGGG-GCUG-UUUUC-GA\nAE017029.1/246029-245843 AUCGAUAUAUUU---CUCU-G----UAUGUAUC-GAUUGGG-GCUG-UUUUC-GA\nAE017028.1/200117-200298 AUAUAAGAAUAACC-AUCU------UAUUCAUA-UAUUGGG-ACUG-CAUU--GA\nAE017274.1/20257-20449   GUUUAUAUUUCUU--CUCU-G----GAAAUAUG-AGCUGGG-GCUG-UCUCC-GA\nAE017269.1/77627-77808   AUAUAAGAAUAACC-AUCU------UAUUCAUA-UAUUGGG-ACUG-CAUU--GA\nAE017000.1/234265-234084 GUAAGUCGUGUCC--ACCA-U----GCAC-GCU-UGCUGGG-UCUG-CAUU--UA\nAP001513.1/19957-19775   GCUGGAAGAAU----CUCA-U----GUUCUGAA-GGCUGGU-UCUG-UAUU--AA\nAP001518.1/272531-272358 GC-GGAAGAUGA---GUCAAG----CGUCUUCU-UGCUGGG-GUUG-CAUU--GA\nAP001517.1/215539-215348 GUGCAGAUCGGGG--CUCAUU----CCCAUUUG-CGCUGGA-CCUA-UGUU--GA\nAP001512.1/119931-120105 GUGAAUGUAUGUCC-AUCC------CAUACGUU-UGCUGGG-UCGU-UUUU--GA\nAP004598.1/253855-254037 GCGAGUGAAAUA---CUCAUU----CAUUAACU-CGUUGGU-GCUGCUAUU--GA\nAP004601.1/22341-22165   GC-AUAAUAAGG---GUCAGA----CUUAUUAU-UGCUGGU-ACAU-CUUU--GA\nAL596166.1/112469-112272 GUGACUAUUUUUU--CUUU-GUAUCGAAAUAGU-UGUUGGG-ACAG-UUUCC-UA\nAL591976.1/186683-186486 GUGACUAUUUUCU--CUUU-GUUUAGAAAUAGU-UGUUGGG-ACAG-UUUCC-UA\nAE016747.1/182196-182375 AUGAUUCAUAAU---AGCA-G----UUAUGAAU-CGUUGGA-CUUAAUGGU--UA\nAF306669.1/1019-1194     GC-AAUUAUAAU---AGCA-G----UUAUAAUU-UGUUGGA-CUUUUUGGU--UA\nAF269536.1/680-500       AUGAUGUUAUUUC--CAUA-A----AUUAGCAU-UGUGAAG-UUGG-UUGAA-CA\nAF270308.1/2156-2331     AUGAUGUUAUUUC--CAUA-A----AUUAGCAU-UGUUGGG-ACAA-CUUUC-GA\nAP003362.3/86114-86289   GCGAUUAUAAU----AGCA------GUUAUAAUUUGUUGGA-CUUUUUGGU--UA\nAP004826.1/205532-205707 GCGAUUAUAAU----AGCA------GUUAUAAUUUGUUGGA-CUUUUUGGU--UA\nAP004827.1/261938-261763 AUAGAUAUAAAC---CAUA-A----AUUAUAUC-UAUUGGG-ACAG-UUUUC-GA\nAP003187.2/139222-139393 GAGAUAUUAAU----GGUG------AUUAAUAU-UUCUGGG-UAUA-UGUA--UA\nAE015937.1/285886-286061 GC-AUGCAGUUAAAGCUUUGA----UACUGUAU-GACUGGU-CUUA-UUUA--AA\nAE007576.1/1562-1747     GCAUUUAGAUU----GGCA------GAUUUAUU-UGCUGGC-UUUU-CAUA--CA\nAE007843.1/1920-1745     GCGUAUAGCUAAUG-CUUU-A----AUGCUGUACUGCUGGG-UUUG-UAUA--AA\nAP003194.2/187997-187828 GUUUUUGGCUAAUA-CUUU-A----AGGCUAAA-UGCUGGG-GUUG-UAUA--GA\nAE015944.1/195870-195703 GAAAAUAGGGU----GGUA------A-UCUAUU-UUCUGGC-UUUG-CAUA--AA\nAP003189.2/159236-159062 ACCAUUAGAAGAGG-CUUU-A----AUUCUAUUAGGUUGGG-GUUG-CAUA--GA\nAE007856.1/5090-5262     GAAGGAUUUCC----GGCA------GGAACUUU-UUCUGGU-UUUG-UAUA--AA\nAE013149.1/9167-9356     GC-GCGUAAACUUC-CUUAAG----GUUUACGC-AGCUGGG-CCUA-UGCC--GA\nAE013039.1/9145-9323     AGGGUGAGCUUG---UUCU-U----GAGCUCAU-CCUUGGU-GGUA-AAC-A-CA\nAE016947.1/224792-224618 AUGCAUAACGGAGC-CUCU-U----CUGUUGUG-UGUUGGG-ACGU-AAGU--UA\nAL935254.1/261916-262097 AUCGAUGGAUCAGU-GACC------GAUUCAUC-CGUUGGG-CCUU-GGUU--GA\nAE006448.1/6071-6253     AGAAUUUUGUU----GCUC------AGCAAGGU-UCUUGGG-CUAG-UGAG--AA\nAE010489.1/2647-2468     AGAAAGUUAAUUG--CUUAUG----AUUAAUUU-UCUUGGU--CAA-UGU---CA\nAE015829.1/4454-4280     GCAUAGAUGUGGU--UGCU-G----CAUGUUUA-UGUCGGU-CGCU-UAGGCUGA\nAE015545.1/1265-1436     GUAGCCAGGUC----AUCA------AACCGAGC-UGCUGGU-UUUG-CAUC--AA\nU00006.1/98763-98567     GUGAUUGAACGGCU-GGCC-A----CGUUCA-U-CAUCGGC-UACA-GGGGCUGA\nX15196.1/270-75          GUGAUUGAACGGCU-GGCC-A----CGUUCA-U-CAUCGGC-UACA-GGGGCUGA\nAE016770.1/235405-235209 GUGAUUGAACGGCU-GGCC-A----CGUUCA-U-CAUCGGCUACAG-GGGC--UA\nX00008.1/296-492         GUGAUUGAACGGCU-GGCC-A----CGUUCA-U-CAUCGGC-UAAG-GGGGCUGA\nU32832.1/9495-9319       AUCAAAUAAAA----GUCG------UUUUGUUU-GGUUGGU-GGCG-UGCUC-GA\nAE017154.1/86844-87014   AUCAAUUAAGC----GUCA------UCUUAGUU-GGUUGGG-GUCG-UUGCC-GA\nAE006126.1/222-48        AUCAAUUGAAA----GUCA------UUUUGAUU-GGUUGGU-GGCG-UAUUC-GA\nAE004361.1/7554-7382     GUGAUCGUUGC----GUCA------UCAACGUU-CGCUGGG-CCAG-CAUU--GA\nAE004193.1/5679-5861     GUCAACUUGCCC---AUCA-A----CGCA-GUU-GGCUGGG-GUUA-CAUU--CA\nAP005342.1/28132-28310   GUAGAUCAAAAU---UGCAGG----AUUUGAUC-UGUCGGU-UGACUUGGGUUGA\nAP005076.1/290738-290918 GUAAGUCGUAU----AUCA------AAACGCCU-UGCUGGG-GUUG-UAUCU-GA\nAP005082.1/169934-170112 GUAAGUCAAAAU---UGCAGG----GUUUGGCU-UGUCGGU-UGACUUGGGUUGA\nAE004127.1/7715-7538     GUGAAUCAAAGU---UGUG-G----CUUUGGUU-UAUCGGU-UGAA-CGGGCUGA\nAP005335.1/123141-123320 GUGAAUUGCAU----AUCA------AAGCAGUU-UGCUGGG-GUUG-CAUCC-GA\nAE001799.1/20444-20268   GG-GUGCAGAGUUC-CUCCCG----CUCUGCAU-GCCUGGG-GGUA-UGGG--GA\n\n#=GC SS_cons             ...>>>>.>>>>>>>.<<<<<<<.............................>>>\n#=GR M93419.1/332-511 SS ...>>>>.>>>>>>>.<<<<<<<.............................>>>\nJ03294.1/2297-2476       AUAAAUG-UAAGGCUGUCAAGAAA--UCA---------------------UUUUC\nM93419.1/332-511         AGAGAUG-CCGGAUUGUCAAGGCGG-UGC----------------------CGCC\nZ99121.2/6040-5861       AUAAGUG-CAGGACUGCCGCGUGC--UUU-----------------------UUC\nAE017003.1/180245-180059 AUAGAAA-CAGAACUGUCAUAUGU--ACAGACGUG---------------UACGU\nAE017026.1/274819-274638 AUAAGUG-CAGAACUGUCACAAACG-UUU---------------------CGUUU\nAE017007.1/287994-288186 AA-GGAA-CAGAACUGUCACGUUU--ACAAAAUUACCGUG----------UAAAC\nAE017033.1/217118-217310 AA-GGAA-CAGAACUGUCACGUUU--ACAAAAUUACCGUG----------UAAAC\nAE017267.1/95018-94836   AUAAGUG-CAGAACUGUCACAAACG-UUU---------------------CGUUU\nAE017270.1/85304-85118   AUAGAAA-CAGAACUGUCAUAUGU--ACAGACGCG---------------UAUGU\nAE017029.1/246029-245843 AUAGAAA-CAGAACUGUCAUAUGU--ACAGACAUG---------------UACGU\nAE017028.1/200117-200298 AUAAAUG-UAGUACUGUCAUAAGA--UUU---------------------AUUUU\nAE017274.1/20257-20449   AA-GGAA-CAGAACUGUCACGUUU--ACAAAAUUACCGUG----------UAAAC\nAE017269.1/77627-77808   AUAAAUG-UAGUACUGUCAUAAGA--UUU---------------------AUUUU\nAE017000.1/234265-234084 AUAAGUG-CAGAACUGUCACAAACG-UUU---------------------CGUUU\nAP001513.1/19957-19775   AUAAAUA-CAGAACUGUCAUAUAGC-GGAUGUU-----------------GCUAU\nAP001518.1/272531-272358 AUAAAUG-UAACACUGUCACAGCAG-AUU-----------------------GCU\nAP001517.1/215539-215348 AUAAGCA-UAGGGCUGUCACAACA--CUAGCCCCAACUA-----------GUGCU\nAP001512.1/119931-120105 AUAAAAA-ACGAACUGCCGCUGAC--UGU-----------------------U-A\nAP004598.1/253855-254037 ACAAAUAACAGUGCUGUCAUAUAGG-AGA----------------------CUAU\nAP004601.1/22341-22165   AUAAAAG-AUGCACUGUCAUGCAAAAUUA---------------------AGUGC\nAL596166.1/112469-112272 AA-GGAG-CUGGACUGCUAUAAGAA-UUUGUCGAAAU-------------UUCUU\nAL591976.1/186683-186486 AA-GGGG-CUGGACUGCUAUAAGAA-UUUGUCGAAAU-------------UUCUU\nAE016747.1/182196-182375 AGAGCUA-UAAGUUUGUCAUUAUU--AUU---------------------AAAUA\nAF306669.1/1019-1194     AGAGCUG-AGAGUUUGUCAUUAUU--UAA---------------------AAAUA\nAF269536.1/680-500       AUAAAAA-CAUCACAACCACGAAU--GCU-----------------------UUC\nAF270308.1/2156-2331     AUAGAAG-UUGUACUGUCACU-----UUA-------------------------U\nAP003362.3/86114-86289   AGAGCUG-AGAGUUUGUCAUUAUU--UAA---------------------AAAUA\nAP004826.1/205532-205707 AGAGCUG-AGAGUUUGUCAUUAUU--UAA---------------------AAAUA\nAP004827.1/261938-261763 AUAGGAA-CUGUACUGUCACA-----GAA-------------------------U\nAP003187.2/139222-139393 AUAUGCA-UAUAACUGUCACUUUG--AAA-----------------------AAA\nAE015937.1/285886-286061 AUAUGAA-UAAGAUUGUCACAAAA--UGA----------------------AUUU\nAE007576.1/1562-1747     ACAUAUG-AAUGGCUGUCACUUUA--UUAGUUAGUUAUUA----------GGUAA\nAE007843.1/1920-1745     AUAUGUG-CAAAACUGUCACAAAG--UAU----------------------AAUU\nAP003194.2/187997-187828 AUAUAUA-CAACACUGUCACA-----AAA-------------------------U\nAE015944.1/195870-195703 AUAUGUG-UAAAGCUGUCACUUU----AA-----------------------AAA\nAP003189.2/159236-159062 AUAUAUG-UAACACUGUCACAAAU--UAU-----------------------UUU\nAE007856.1/5090-5262     AUAUAUG-CAGAACUGUCACUAUUC-UUU----------------------UAUA\nAE013149.1/9167-9356     ACAGGUA-UAGGACUGUCACUGAAG-GCUCCCCAGGC-------------CUUCA\nAE013039.1/9145-9323     AA--GUU-UACCACUGUCAUGGGA--CCU-----------------------CCC\nAE016947.1/224792-224618 AGAGCUU-GCGGACUGUCUUAGUAG-UGA----------------------UGCU\nAL935254.1/261916-262097 AUAAAUC-AUGGACUGUCGCAGCUA-GAA---------------------UAGUU\nAE006448.1/6071-6253     AAACUCA-CUAGACUGUCGCAAAUG-GUUAAUA-----------------ACCAU\nAE010489.1/2647-2468     ACAAGCA-UUG-ACUGUCAUAUUC--UUU---------------------UGAAU\nAE015829.1/4454-4280     AU-CCU--AACGAUUGUCACCUG---UAA-----------------------UUG\nAE015545.1/1265-1436     AUAGGUG-CAAGACUGCCAUAGUC--AUC----------------------CACU\nU00006.1/98763-98567     AU-CCCC-UG-GGUUGUCACCAGA--AGCGUUCGCAGUCGGGCGUUUCGCAAGUG\nX15196.1/270-75          AU-CCCC-UG-GGUUGUCACCAGA--AGCGUUCGCAGUCGGGCGUUUCGCAAGUG\nAE016770.1/235405-235209 AA-UCCC-CUGGGUUGUCACCAGA--AGCGUUCGCAGUCGGGCGUUUCGCAAGUG\nX00008.1/296-492         AU-CCC--CUGGGUUGUCACCAGA--AGCGUUCGCAGUCGGGCGUUUCGCAAGUG\nU32832.1/9495-9319       AA-GGGG-CGACACUGUCAUAGUU--UUUCUGAU----------------UAACU\nAE017154.1/86844-87014   AA-GGGA-CGACACUGUCGUAAUUC-AAU-----------------------AUU\nAE006126.1/222-48        AA-GGAA-CGUCAUUGUCAUAGUC--UUUUUU------------------AAACU\nAE004361.1/7554-7382     ACAAAUG-CCGGACUGCCAUAGUG--UGU---------------------UGUCU\nAE004193.1/5679-5861     AUAGGUG-UAACACUGCCAUAGUC--UAUAUUGUUGUU------------AAACU\nAP005342.1/28132-28310   GU-CCCA--UCAACUGUCAUCAGC--UCA---------------------GCCUG\nAP005076.1/290738-290918 AA-GGAA-CAACACUGCCAUAGUA--UAUUUACAUU--------------AAACU\nAP005082.1/169934-170112 GU-CCCA--UCAACUGUCAUCAGC--ACC---------------------GUCUG\nAE004127.1/7715-7538     AU-CCC--UUCAACUGUCAUCAGCU-CGA---------------------AUCUG\nAP005335.1/123141-123320 AA-GGAA-CAACACUGCCAUAGUA--UUUAAUGUA---------------UAACU\nAE001799.1/20444-20268   AUACCCA-UACCACUGUCACGGAGG-UCU----------------------CUCC\n\n#=GC SS_cons             >>>>.....>>>>>>.....\n#=GR M93419.1/332-511 SS >>>>................\nJ03294.1/2297-2476       UUGG-AGGGCUAUCUCGUUG\nM93419.1/332-511         UUGG-AGAGCUAUCUCACUG\nZ99121.2/6040-5861       GCGG-AGGGCUAUCCGGAGA\nAE017003.1/180245-180059 AUGA-AGAGCUAUCUACAAA\nAE017026.1/274819-274638 GUGG-AGAGCUAUCGAGAGG\nAE017007.1/287994-288186 GUGG-GGUGCUAUCUUAACG\nAE017033.1/217118-217310 GUGG-GGUGCUAUCUUAACG\nAE017267.1/95018-94836   GUGG-AGAGCUAUCGAGAGG\nAE017270.1/85304-85118   AUGA-AGAGCUAUCUACAAA\nAE017029.1/246029-245843 AUGA-AGAGCUAUCUACAAA\nAE017028.1/200117-200298 AUGG-AGAGCUAUUUGGAGA\nAE017274.1/20257-20449   GUGG-GGUGCUAUCUUAACG\nAE017269.1/77627-77808   AUGG-AGAGCUAUUUGGAGA\nAE017000.1/234265-234084 GUGG-AGAGCUAUCGAGAGG\nAP001513.1/19957-19775   AUGG-AGGGCUAUCUCACGC\nAP001518.1/272531-272358 GUGG-AGAACUACUAACGUU\nAP001517.1/215539-215348 GUGG-AGAACUAUCUCACGU\nAP001512.1/119931-120105 GCGG-AGAGCUAUCUGCCAA\nAP004598.1/253855-254037 AUGG-AGGGCUAUCGAGCUG\nAP004601.1/22341-22165   AUGG-AGAACUACUGAUCGA\nAL596166.1/112469-112272 AUAGGUGUGCUAUCUGACAA\nAL591976.1/186683-186486 AUAGGUGUGCUAUCUGACAA\nAE016747.1/182196-182375 AUGG-AGUGCAUCACUUGUA\nAF306669.1/1019-1194     AUGG-AGUGCAUCACUUGUA\nAF269536.1/680-500       UUCA-AUAUUUAUUUGAAUU\nAF270308.1/2156-2331     GUGA-UGUGCUACCUUAUAU\nAP003362.3/86114-86289   AUGG-AGUGCAUCACUUGUA\nAP004826.1/205532-205707 AUGG-AGUGCAUCACUUGUA\nAP004827.1/261938-261763 GUGA-UGUGCUACCUUAUAU\nAP003187.2/139222-139393 GUGG-AGUGCUACAAGGUAC\nAE015937.1/285886-286061 GUGG-AGAGCUAUCAUUCAA\nAE007576.1/1562-1747     GUGG-AGCGCUACAAGGUAC\nAE007843.1/1920-1745     GUGG-AGAACUAUCAUUGGU\nAP003194.2/187997-187828 GUGG-AGAGCUAUCAUCUUA\nAE015944.1/195870-195703 GUGU-UGAGCUACAGAGGUC\nAP003189.2/159236-159062 GUGG-UGUGCUAUCAUGAAA\nAE007856.1/5090-5262     GUGG-AGAGCUACAAGGUGC\nAE013149.1/9167-9356     GUGG-AGAGCUAUCUCGCUA\nAE013039.1/9145-9323     AUGA-AGCGCUAUUUAUGCA\nAE016947.1/224792-224618 AAGU-UGUGCUAUGUUUCGU\nAL935254.1/261916-262097 GCGG-GGCGCUAUCGACGAU\nAE006448.1/6071-6253     GCGG-AGGGCUAUUCGUUCA\nAE010489.1/2647-2468     AUGG-AGAGCUAUUUAUAGU\nAE015829.1/4454-4280     GUGG-AGAGCUUCUGGUGAC\nAE015545.1/1265-1436     AUGG-AGCGCUACCUGAAGG\nU00006.1/98763-98567     GUGG-AGCACUUCUGGGUGA\nX15196.1/270-75          GUGG-AGCACUUCUGGGUGA\nAE016770.1/235405-235209 GUGG-AGCACUUCUGGGUGA\nX00008.1/296-492         GUGG-AGCACUUCUGGGUGA\nU32832.1/9495-9319       AUGG-AGUGCUACGGUUGUU\nAE017154.1/86844-87014   ACGG-AGUGCUACUAUUAGG\nAE006126.1/222-48        AUGG-AGCGCUACUGGUUGG\nAE004361.1/7554-7382     AUGG-AGCGCUACCUUGAAG\nAE004193.1/5679-5861     AUGG-AGCGCUACUGUAGGG\nAP005342.1/28132-28310   AUGA-AGAGCUUCUGAGAUG\nAP005076.1/290738-290918 AUGG-AGCGCUACUGUAGGG\nAP005082.1/169934-170112 AUGA-AGAGCUUCUGAGGGU\nAE004127.1/7715-7538     AUGA-AGAGCUUCUGAGGGA\nAP005335.1/123141-123320 AUGG-AGCGCUACUGUAGGU\nAE001799.1/20444-20268   GUGG-AGAGCCGAUCGGGUC\n//\n",S="\n(((((J03294.1/2297-2476:0.16693,M93419.1/332-511:0.18169):0.06995,(AP001513.1/19957-19775:0.16586,AP004598.1/253855-254037:0.19409):0.05349):0.04909,AP001517.1/215539-215348:0.28114):0.06663,((((Z99121.2/6040-5861:0.30380,AE013149.1/9167-9356:0.25995):0.04587,((AE017026.1/274819-274638:0.01762,AE017000.1/234265-234084:0.01905):0.01984,AE017267.1/95018-94836:0.04107):0.19441):0.02141,(((((AE017007.1/287994-288186:0.00973,AE017274.1/20257-20449:0.00470):0.01300,AE017033.1/217118-217310:0.00158):0.22337,AE007843.1/1920-1745:0.20784):0.07029,AP003194.2/187997-187828:0.25172):0.02557,(((AF269536.1/680-500:0.29465,AF270308.1/2156-2331:-0.05059):0.14883,AP004827.1/261938-261763:0.06197):0.26443,(AE015937.1/285886-286061:0.25621,AP003189.2/159236-159062:0.17616):0.03395):0.04009):0.00883):0.03746,(((((AE017003.1/180245-180059:0.01473,(AE017270.1/85304-85118:0.00193,AE017029.1/246029-245843:0.00525):0.01455):0.18162,((AL596166.1/112469-112272:0.02169,AL591976.1/186683-186486:0.01513):0.25227,AE016947.1/224792-224618:0.42485):0.02631):0.04069,(AE017028.1/200117-200298:0.00242,AE017269.1/77627-77808:0.00478):0.22792):0.01676,AP001512.1/119931-120105:0.32335):0.02583,AL935254.1/261916-262097:0.41357):0.01606):0.00435):0.02849,(((AP001518.1/272531-272358:0.17833,AP004601.1/22341-22165:0.26773):0.05269,(((AE016747.1/182196-182375:0.05593,((AF306669.1/1019-1194:0.08316,AP004826.1/205532-205707:-0.03117):0.01636,AP003362.3/86114-86289:-0.00898):0.08175):0.42566,(AE015829.1/4454-4280:0.24176,(((U00006.1/98763-98567:0.00283,(AE016770.1/235405-235209:0.04647,X00008.1/296-492:-0.02468):0.01924):0.00343,X15196.1/270-75:0.01880):0.30786,((AP005342.1/28132-28310:0.01559,AE004127.1/7715-7538:0.12567):0.02662,AP005082.1/169934-170112:0.04429):0.20718):0.06618):0.12822):0.10053,(AP003187.2/139222-139393:0.20864,((AE007576.1/1562-1747:0.19785,AE007856.1/5090-5262:0.25015):0.02151,AE015944.1/195870-195703:0.20865):0.03191):0.12368):0.05429):0.01627,(((AE015545.1/1265-1436:0.24517,AE004361.1/7554-7382:0.22892):0.01828,(AE004193.1/5679-5861:0.22444,(AP005076.1/290738-290918:0.09791,AP005335.1/123141-123320:0.07846):0.03081):0.07227):0.07172,((U32832.1/9495-9319:0.12117,AE006126.1/222-48:0.12126):0.01298,AE017154.1/86844-87014:0.20298):0.17443):0.04515):0.00292,((AE013039.1/9145-9323:0.36667,AE010489.1/2647-2468:0.21973):0.08030,(AE006448.1/6071-6253:0.38756,AE001799.1/20444-20268:0.46678):0.03318):0.10168);\n";var v=function(){var A=Object(C.useState)("none"),G=Object(a.a)(A,2),U=G[0],e=G[1],t=Object(C.useState)(!0),E=Object(a.a)(t,1)[0];return n.a.createElement("div",null,n.a.createElement("h1",null,"Phylo React"),n.a.createElement("div",{className:"App"},n.a.createElement("button",{onClick:function(){return e("fixed")}},"Attach hacky fixed Tree MSA"),n.a.createElement("button",{onClick:function(){return e("buggy")}},"Attach Tree MSA"),n.a.createElement("button",{onClick:function(){return e("ensem")}},"EnsembleDemo"),"none"===U?n.a.createElement("h3",null,"Click on any button above"):null,"buggy"===U?n.a.createElement(i,{treedata:S,msadata:g,showBranchLength:E,layout:"linear"}):null,"fixed"===U?n.a.createElement(u,{treedata:S,msadata:g,showBranchLength:E,layout:"linear"}):null,"ensem"===U?n.a.createElement(p,null):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()})).catch((function(A){console.error(A.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.2a65b889.chunk.js.map