import{p as i,o as a,L as l,b as d,c as n,d as o,t as c,n as r,j as u}from"./index.b241fbed.js";const v="/assets/bg-01.059f9d06.mp4",e="/assets/ball.dd503df3.mp4";const p={class:"pos"},h=u('<ul class="lottoMachine__underList"><li class="lottoMachine__underList_item"><div class="lottoMachine__underList__inside"><div class="lottoMachine__underList___mask"><video class="lottoMachine__underList____video" src="'+e+'" autoplay loop></video></div></div></li><li class="lottoMachine__underList_item"><div class="lottoMachine__underList__inside"><div class="lottoMachine__underList___mask"><video class="lottoMachine__underList____video" src="'+e+'" autoplay loop></video></div></div></li><li class="lottoMachine__underList_item"><div class="lottoMachine__underList__inside"><div class="lottoMachine__underList___mask"><video class="lottoMachine__underList____video" src="'+e+'" autoplay loop></video></div></div></li><li class="lottoMachine__underList_item"><div class="lottoMachine__underList__inside"><div class="lottoMachine__underList___mask"><video class="lottoMachine__underList____video" src="'+e+'" autoplay loop></video></div></div></li><li class="lottoMachine__underList_item"><div class="lottoMachine__underList__inside"><div class="lottoMachine__underList___mask"><video class="lottoMachine__underList____video" src="'+e+'" autoplay loop></video></div></div></li></ul>',1),f={__name:"underScreen",setup(M){const s=i(null),t=i(!1),_=i(null);return a(()=>{setTimeout(()=>{t.value=s.value.autoplay},400)}),l(()=>{_.value=s.value.readyState}),(m,L)=>(d(),n("div",{class:r(["lottoMachine_wrap",{start:t.value}])},[o("div",p,c(_.value),1),o("video",{ref_key:"video",ref:s,class:"lottoMachine__bgVideo",src:v,autoplay:"",loop:"",muted:""},null,512),h],2))}};export{f as default};
