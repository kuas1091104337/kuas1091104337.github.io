import{p as l,a as k,o as x,C as D,b as o,c as i,e as r,d as _,F as m,q as b,g as w,E as L,D as A,_ as C,n as F,P as y}from"./index.3d89934d.js";import{_ as B}from"./Head.d41a568d.js";const N={class:"DAwrap DAgifImg"},V=["onClick"],$=["width","height","src"],E=_("span",{class:"DAgifImg_box_close"},null,-1),H={__name:"gifImg",setup(P){const t=l([]),{isImgLoaded:d,imgLoadFn:f}=k(),n=l(""),u=(s,a)=>{n.value=s,a.currentTarget.classList.contains("show")&&(n.value="")},p=s=>{s.target.parentNode.classList.contains("show")&&s.stopPropagation()};return x(()=>{D.get("https://run.mocky.io/v3/32e0f766-ef6d-4b09-9ad0-772d8b98f632").then(s=>{t.value=s.data,f(t.value,"src")}).catch(s=>{console.log(s.message,s.response.data)})}),(s,a)=>{const h=B,I=y,v=C;return o(),i(m,null,[r(h),_("div",N,[(o(!0),i(m,null,b(t.value,(e,g)=>(o(),i("div",{key:e.src,class:F(["DAgifImg_box",{show:n.value===g}]),onClick:c=>u(g,c)},[_("img",{class:"DAgifImg_box_img",width:e.width,height:e.height,src:e.src,onClick:a[0]||(a[0]=c=>p(c))},null,8,$),E],10,V))),128)),w(d)?A("",!0):(o(),L(I,{key:0}))]),r(v,{class:"DAfoot-normal"})],64)}}};export{H as default};
