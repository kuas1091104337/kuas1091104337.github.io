import{a as x,p as i,r as w,o as y,C,b as t,c as _,e as u,d as s,n as l,F as d,q as g,g as B,G as p,E as h,_ as F,x as L,z as S,S as $,Q as E}from"./index.ab869174.js";import{_ as N}from"./BTextLoading.4634c1aa.js";import{_ as V}from"./Head.480e4ae4.js";const z={class:"DAwrap DAedm"},M={class:"DAedm_menu_box"},T=["onClick"],q=["src","alt"],G={class:"DAedm_menu___txt"},H={class:"DAwrap_box DAedm_wrap"},Q=["src","alt"],j=s("span",{class:"DAedm_btn_bar"},null,-1),J=[j],X={__name:"edm",setup(K){const{isImgLoaded:r,imgLoadFn:v}=x(),m=i(0),o=i(!0),n=w({tagImg:[],edmImg:[]}),f=()=>o.value=!o.value,D=a=>{m.value=a,o.value=!1};return y(()=>{C.get("https://run.mocky.io/v3/fd7becbb-00bb-40f5-b146-b5e2c5ed3f94").then(a=>{n.tagImg=a.data.tagImg,n.edmImg=a.data.edmImg,v(n.tagImg,"src")}).catch(a=>{console.log(a.response.data)}),r&&setTimeout(()=>o.value=!1,1e3)}),(a,O)=>{const b=V,I=N,A=E,k=F;return t(),_(d,null,[u(b),s("div",z,[s("aside",{class:l(["DAedm_menu",{show:o.value}])},[s("ul",M,[(t(!0),_(d,null,g(n.tagImg,(e,c)=>(t(),_("li",{key:e.src,class:l(["DAedm_menu__item",{active:m.value===c}]),onClick:P=>D(c)},[s("img",{class:"DAedm_menu___img",src:e.src,alt:e.alt},null,8,q),s("p",G,L(e.alt),1)],10,T))),128)),B(r)?h("",!0):(t(),p(I,{key:0}))])],2),s("div",H,[n.edmImg.length?h("",!0):(t(),p(A,{key:0})),(t(!0),_(d,null,g(n.edmImg,(e,c)=>S((t(),_("img",{class:"DAedm_wrap_img",key:e.src,src:e.src,alt:e.alt},null,8,Q)),[[$,m.value===c]])),128))]),s("div",{class:l(["DAedm_btn",{show:o.value}]),onClick:f},J,2)]),u(k,{class:"DAfoot-normal"})],64)}}};export{X as default};
