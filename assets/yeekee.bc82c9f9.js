import{K as b,r as g,o as N,b as _,c as s,d as a,t as f,g as p,F as c,q as u,n as l}from"./index.156ec83b.js";const x="/assets/yeekeeBg2.da0a592b.jpg",k="/assets/yeekeeTitle.2213ba49.png";const v={class:"lottoMachine_wrap start"},T=a("img",{class:"lottoMachine__yeekeeBg",src:x,alt:"yeekee bg"},null,-1),E=a("img",{class:"lottoMachine__yeekeeTitle",src:k,alt:"yeekee title"},null,-1),B={class:"lottoMachine__yeekee_title"},A={class:"lottoMachine__yeekee__text"},S={class:"lottoMachine__draw_info"},R={class:"lottoMachine__draw__box"},D=a("h3",{class:"lottoMachine__draw__box_title"},"YEEKEE SUMMARY",-1),F=a("span",{class:"lottoMachine__draw__bar"},null,-1),L={class:"lottoMachine__draw__box"},$=a("h3",{class:"lottoMachine__draw__box_title"},"DRAW NUMBER",-1),K=a("div",{class:"lottoMachine__draw__box__dot"},null,-1),U=[K],Y={class:"lottoMachine__draw_lottery"},z={__name:"yeekee",setup(j){const{numTimes:m,numTimesAdd:d}=b(1,4),e=g({lottoTimes:1,ready:!1,summaryNum:[...Array(6)],num:[...Array(3)],drawNum:[{color:"blue",num:""},{color:"yellow",num:""},{color:"red",num:""},{color:"yellow",num:""},{color:"blue",num:""}]}),h=()=>{e.ready=!1,d(),setTimeout(()=>i(),1e3)},i=()=>{e.summaryNum=[...Array(6)],e.num=[...Array(3)],e.drawNum.forEach((r,t)=>e.drawNum[t].num=""),e.ready=!0,setTimeout(()=>y(),5e3)},y=()=>{e.summaryNum.forEach((r,t)=>{setTimeout(()=>{e.summaryNum[t]=Math.round(Math.random()*9).toString(),t===e.summaryNum.length-1&&setTimeout(()=>M(),500)},t*500)})},M=()=>{e.drawNum.forEach((r,t)=>{setTimeout(()=>{e.drawNum[t].num=Math.round(Math.random()*9).toString(),t===e.drawNum.length-1&&setTimeout(()=>w(),500)},t*500)})},w=()=>{e.num.forEach((r,t)=>{setTimeout(()=>{e.num[t]=Math.round(Math.random()*9).toString(),t===e.num.length-1&&setTimeout(()=>h(),3e3)},t*500)})};return N(()=>{i()}),(r,t)=>(_(),s("div",v,[T,E,a("div",{class:l(["lottoMachine__draw",{lottoMachine__drawReady:e.ready}])},[a("div",B,[a("p",A,f(p(m)),1)]),a("div",S,[a("section",R,[D,(_(!0),s(c,null,u(e.summaryNum,(o,n)=>(_(),s("div",{key:n,class:l(["lottoMachine__draw__box_num",o?`lottoMachine__draw__box_num-${o}`:""])},null,2))),128))]),F,a("section",L,[$,(_(!0),s(c,null,u(e.drawNum,(o,n)=>(_(),s("div",{key:n,class:l(["lottoMachine__draw__box_ball lottoMachine__draw__box_ball-"+o.color,o.num?`lottoMachine__draw__box_ball-num${o.num}`:""])},U,2))),128))])]),a("ul",Y,[(_(!0),s(c,null,u(e.num,(o,n)=>(_(),s("li",{key:n,class:"lottoMachine__draw__frame"},[a("span",{class:l(["lottoMachine__draw__frame_num",o?`lottoMachine__draw__frame_num-${o}`:""])},null,2)]))),128))])],2)]))}};export{z as default};