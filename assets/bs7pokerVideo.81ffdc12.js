import{r as I,o as F,C as N,b as l,c as a,e as h,d as t,g as e,F as g,q as m,G as d,x as j,n as w,V as z,p as S,S as T,_ as X,z as k,U as y}from"./index.09c0f9e6.js";import{_ as q}from"./Head.18f37391.js";const E={class:"DAwrap DAvideo"},G={class:"DAwrap_box DAvideo_wrap"},H=t("h2",{class:"DAvideo_wrap_title"},"BS 7Poker \u5BA3\u50B3\u5F71\u7247\u4F01\u5283",-1),M={class:"DAvideo__box"},U={key:0,class:"DAvideo__box_wrap"},Y=["src","alt"],J={class:"DAvideo__box_ctrl"},K={class:"DAvideo__box_ctrl_num"},O={key:1,class:"DAvideo__box_load"},Q=t("h3",{class:"DAvideo_wrap_title"},"BS 7Poker \u7B2C\u4E00\u7248 \u5BA3\u50B3\u5F71\u7247",-1),R={class:"DAvideo__box"},W={key:0,class:"DAvideo__box_wrap"},Z=["src","alt"],ss={key:2,class:"DAvideo__box_load"},es=t("h3",{class:"DAvideo_wrap_title"},"BS 7Poker \u7B2C\u4E8C\u7248 \u5BA3\u50B3\u5F71\u7247",-1),os={class:"DAvideo__box"},ts={key:0,class:"DAvideo__box_wrap"},is=["src","alt"],ls={key:2,class:"DAvideo__box_load"},as=t("h3",{class:"DAvideo_wrap_title"},"BS 7Poker \u7B2C\u4E09\u7248 \u5BA3\u50B3\u5F71\u7247",-1),rs={class:"DAvideo__box"},_s={key:0,class:"DAvideo__box_wrap"},ds=["src","alt"],ns={key:2,class:"DAvideo__box_load"},cs=t("h3",{class:"DAvideo_wrap_title"},"BS 7Poker \u5B8C\u7A3F\u7248 \u5BA3\u50B3\u5F71\u7247",-1),vs={class:"DAvideo__box"},us={key:0,class:"DAvideo__box_wrap"},ps=["src","alt"],xs={key:2,class:"DAvideo__box_load"},As=t("h3",{class:"DAvideo_wrap_title"},"BS 7Poker YouTube\u7248",-1),hs=t("div",{class:"DAvideo_wrap_video"},[t("iframe",{class:"DAvideo_wrap_video_iframe",width:"560",height:"315",src:"https://www.youtube.com/embed/8vAXeBS1yLA?hd=1&loop=1&playlist=8vAXeBS1yLA",frameborder:"0",allowfullscreen:""})],-1),ms={__name:"bs7pokerVideo",setup(gs){let V=250;const{imgArrsLoad:D}=z(),i=I({plan:[],first:[],second:[],third:[],fourth:[]}),b=()=>{const r=S(0),s=S(!1),_=S(null),n=(c,o)=>{r.value+=c,r.value=(r.value+o)%o};return{idx:()=>r.value,timer:()=>_.value,isPlay:()=>s.value,next:c=>n(1,c),prev:c=>n(-1,c),change:c=>{s.value=!s.value,s.value&&(clearInterval(_.value),_.value=setInterval(()=>n(1,c),V)),s.value||clearInterval(_.value)}}},f=b(),u=b(),p=b(),x=b(),A=b(),$=D(),C=D(),L=D(),P=D(),B=D();return F(async()=>{try{const r=await N.get("https://kuas1091104337.github.io/DotA_img/json/videoData.json");i.plan=r.data.plan.imgArr.map((s,_)=>({src:s,alt:`${r.data.plan.title} ${_}`})),i.first=r.data.first.imgArr.map((s,_)=>({src:s,alt:`${r.data.first.title} ${_}`})),i.second=r.data.second.imgArr.map((s,_)=>({src:s,alt:`${r.data.second.title} ${_}`})),i.third=r.data.third.imgArr.map((s,_)=>({src:s,alt:`${r.data.third.title} ${_}`})),i.fourth=r.data.fourth.imgArr.map((s,_)=>({src:s,alt:`${r.data.fourth.title} ${_}`})),$.imgLoad(i.plan,"src"),C.imgLoad(i.first,"src"),L.imgLoad(i.second,"src"),P.imgLoad(i.third,"src"),B.imgLoad(i.fourth,"src")}catch(r){console.log(r.response.data)}}),(r,s)=>{const _=q,n=T,c=X;return l(),a(g,null,[h(_),t("div",E,[t("main",G,[H,t("div",M,[e($).isLoad()?d("",!0):(l(),a("div",U,[(l(!0),a(g,null,m(i.plan,(o,v)=>k((l(),a("img",{class:"DAvideo__box_wrap_img",key:o.src,src:o.src,alt:o.alt},null,8,Y)),[[y,e(f).idx()===v]])),128))])),t("ul",J,[t("li",{class:"DAvideo__box_ctrl_prev",onClick:s[0]||(s[0]=o=>e(f).prev(i.plan.length))}),t("li",K,j(e(f).idx()+1),1),t("li",{class:"DAvideo__box_ctrl_next",onClick:s[1]||(s[1]=o=>e(f).next(i.plan.length))})]),e($).isLoad()?(l(),a("div",O,[h(n,{class:"posCenter"})])):d("",!0)]),Q,t("div",R,[e(C).isLoad()?d("",!0):(l(),a("div",W,[(l(!0),a(g,null,m(i.first,(o,v)=>k((l(),a("img",{class:"DAvideo__box_wrap_img",key:o.src,src:o.src,alt:o.alt},null,8,Z)),[[y,e(u).idx()===v]])),128))])),e(u).timer()?d("",!0):(l(),a("div",{key:1,class:"DAvideo__box_play",onClick:s[2]||(s[2]=o=>e(u).change(i.first.length))})),t("ul",{class:w(["DAvideo__box_ctrl",{play:e(u).isPlay()}])},[t("li",{class:"DAvideo__box_ctrl_prev",onClick:s[3]||(s[3]=o=>e(u).prev(i.first.length))}),t("li",{class:"DAvideo__box_ctrl_switch",onClick:s[4]||(s[4]=o=>e(u).change(i.first.length))}),t("li",{class:"DAvideo__box_ctrl_next",onClick:s[5]||(s[5]=o=>e(u).next(i.first.length))})],2),e(C).isLoad()?(l(),a("div",ss,[h(n,{class:"posCenter"})])):d("",!0)]),es,t("div",os,[e(L).isLoad()?d("",!0):(l(),a("div",ts,[(l(!0),a(g,null,m(i.second,(o,v)=>k((l(),a("img",{class:"DAvideo__box_wrap_img",key:o.src,src:o.src,alt:o.alt},null,8,is)),[[y,e(p).idx()===v]])),128))])),e(p).timer()?d("",!0):(l(),a("div",{key:1,class:"DAvideo__box_play",onClick:s[6]||(s[6]=o=>e(p).change(i.second.length))})),t("ul",{class:w(["DAvideo__box_ctrl",{play:e(p).isPlay()}])},[t("li",{class:"DAvideo__box_ctrl_prev",onClick:s[7]||(s[7]=o=>e(p).prev(i.second.length))}),t("li",{class:"DAvideo__box_ctrl_switch",onClick:s[8]||(s[8]=o=>e(p).change(i.second.length))}),t("li",{class:"DAvideo__box_ctrl_next",onClick:s[9]||(s[9]=o=>e(p).next(i.second.length))})],2),e(L).isLoad()?(l(),a("div",ls,[h(n,{class:"posCenter"})])):d("",!0)]),as,t("div",rs,[e(P).isLoad()?d("",!0):(l(),a("div",_s,[(l(!0),a(g,null,m(i.third,(o,v)=>k((l(),a("img",{class:"DAvideo__box_wrap_img",key:o.src,src:o.src,alt:o.alt},null,8,ds)),[[y,e(x).idx()===v]])),128))])),e(x).timer()?d("",!0):(l(),a("div",{key:1,class:"DAvideo__box_play",onClick:s[10]||(s[10]=o=>e(x).change(i.third.length))})),t("ul",{class:w(["DAvideo__box_ctrl",{play:e(x).isPlay()}])},[t("li",{class:"DAvideo__box_ctrl_prev",onClick:s[11]||(s[11]=o=>e(x).prev(i.third.length))}),t("li",{class:"DAvideo__box_ctrl_switch",onClick:s[12]||(s[12]=o=>e(x).change(i.third.length))}),t("li",{class:"DAvideo__box_ctrl_next",onClick:s[13]||(s[13]=o=>e(x).next(i.third.length))})],2),e(P).isLoad()?(l(),a("div",ns,[h(n,{class:"posCenter"})])):d("",!0)]),cs,t("div",vs,[e(B).isLoad()?d("",!0):(l(),a("div",us,[(l(!0),a(g,null,m(i.fourth,(o,v)=>k((l(),a("img",{class:"DAvideo__box_wrap_img",key:o.src,src:o.src,alt:o.alt},null,8,ps)),[[y,e(A).idx()===v]])),128))])),e(A).timer()?d("",!0):(l(),a("div",{key:1,class:"DAvideo__box_play",onClick:s[14]||(s[14]=o=>e(A).change(i.fourth.length))})),t("ul",{class:w(["DAvideo__box_ctrl",{play:e(A).isPlay()}])},[t("li",{class:"DAvideo__box_ctrl_prev",onClick:s[15]||(s[15]=o=>e(A).prev(i.fourth.length))}),t("li",{class:"DAvideo__box_ctrl_switch",onClick:s[16]||(s[16]=o=>e(A).change(i.fourth.length))}),t("li",{class:"DAvideo__box_ctrl_next",onClick:s[17]||(s[17]=o=>e(A).next(i.fourth.length))})],2),e(B).isLoad()?(l(),a("div",xs,[h(n,{class:"posCenter"})])):d("",!0)]),As,hs])]),h(c,{class:"DAfoot-normal"})],64)}}};export{ms as default};
