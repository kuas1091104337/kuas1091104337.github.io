import{a as w,p as i,r as x,o as y,z as B,b as t,c as _,e as u,d as s,n as l,F as d,q as g,g as C,y as p,v as h,_ as F,t as L,A as S,Q as $,O as N}from"./index.97fb6c15.js";import{_ as V}from"./BTextLoading.d84d290d.js";import{_ as z}from"./Head.15df8264.js";const E={class:"DAwrap DAedm"},M={class:"DAedm_menu_box"},T=["onClick"],q=["src","alt"],H={class:"DAedm_menu___txt"},O={class:"DAwrap_box DAedm_wrap"},Q=["src","alt"],j=s("span",{class:"DAedm_btn_bar"},null,-1),G=[j],X={__name:"edm",setup(J){const{isImgLoaded:r,imgLoadFn:v}=w(),m=i(0),o=i(!0),n=x({tagImg:[],edmImg:[]}),D=()=>o.value=!o.value,f=a=>{m.value=a,o.value=!1};return y(()=>{B.get("https://run.mocky.io/v3/5e47b9cc-e4c8-4449-8c9b-1076dafbc5a5").then(a=>{n.tagImg=a.data.tagImg,n.edmImg=a.data.edmImg,v(n.tagImg,"src")}).catch(a=>{console.log(a.response.data)}),r&&setTimeout(()=>o.value=!1,1e3)}),(a,K)=>{const A=z,I=V,k=N,b=F;return t(),_(d,null,[u(A),s("div",E,[s("aside",{class:l(["DAedm_menu",{show:o.value}])},[s("ul",M,[(t(!0),_(d,null,g(n.tagImg,(e,c)=>(t(),_("li",{key:e.src,class:l(["DAedm_menu__item",{active:m.value===c}]),onClick:P=>f(c)},[s("img",{class:"DAedm_menu___img",src:e.src,alt:e.alt},null,8,q),s("p",H,L(e.alt),1)],10,T))),128)),C(r)?h("",!0):(t(),p(I,{key:0}))])],2),s("div",O,[n.edmImg.length?h("",!0):(t(),p(k,{key:0})),(t(!0),_(d,null,g(n.edmImg,(e,c)=>S((t(),_("img",{class:"DAedm_wrap_img",key:e.src,src:e.src,alt:e.alt},null,8,Q)),[[$,m.value===c]])),128))]),s("div",{class:l(["DAedm_btn",{show:o.value}]),onClick:D},G,2)]),u(b,{class:"DAfoot-normal"})],64)}}};export{X as default};
