import{m as b,p as t,o as B,k as $,b as y,c as F,d as e,v as p,n as f,e as l,s as o,t as H,g as I,l as N,f as c}from"./index.b00a033d.js";const x={class:"head_wrap"},z={class:"head__title"},D={class:"head__title__icon"},V=e("span",{class:"head__title__txt"},"Dot A",-1),A=e("div",{class:"head__mBtn_wrap"},[e("span",{class:"head__mBtn__bar"})],-1),E=[A],L={class:"head__menu"},M={class:"head__menu_item"},O=o(" \u5B98\u7DB2\u5C08\u6848 "),R=e("span",{class:"head__menu__link_frontSide"},"\u5B98\u7DB2\u5C08\u6848",-1),T=e("span",{class:"head__menu__link_backSide"},"\u5B98\u7DB2\u5C08\u6848",-1),w={class:"head__menu_item"},U=o(" \u6D3B\u52D5\u7DB2\u9801 "),W=e("span",{class:"head__menu__link_frontSide"},"\u6D3B\u52D5\u7DB2\u9801",-1),j=e("span",{class:"head__menu__link_backSide"},"\u6D3B\u52D5\u7DB2\u9801",-1),q=e("li",{class:"head__menu_item"},[e("a",{href:"https://kuas1091104337.github.io/old/",class:"head__menu__link",target:"_blank"},[o(" \u65E9\u671F\u4F5C\u54C1 "),e("span",{class:"head__menu__link_frontSide"},"\u65E9\u671F\u4F5C\u54C1"),e("span",{class:"head__menu__link_backSide"},"\u65E9\u671F\u4F5C\u54C1")])],-1),G={class:"head__menu_lang"},J={class:"head__menu___icon"},K={class:"head__menu__menu"},X={__name:"Head",setup(P){const{t:v,locale:g}=b(),h=t(null),a=t(!1),n=t(!1),u=t(0),C=()=>{a.value=!1,n.value=!1},m=()=>a.value=!a.value,S=()=>n.value=!n.value,d=_=>{g.value=_,localStorage.setItem("locale",_),document.body.className=_,a.value=!1,n.value=!1};return B(()=>{u.value=h.value.offsetHeight}),(_,s)=>{const r=N,i=$("RouterLink");return y(),F("header",{ref_key:"head",ref:h,class:f(["head",{open:a.value}])},[e("div",{class:"head_bg",onClick:C}),e("div",x,[p(_.$slots,"title",{},()=>[e("h1",z,[l(i,{to:"/",class:"head__title_link"},{default:c(()=>[e("i",D,[l(r,{name:"icon-dota",color:"#fff"})]),V]),_:1})])]),e("div",{class:"head__mBtn",onClick:m},E),e("ul",L,[p(_.$slots,"nav",{headH:u.value,headBtnFn:m},()=>[e("li",M,[l(i,{to:"/",class:"head__menu__link"},{default:c(()=>[O,R,T]),_:1})]),e("li",w,[l(i,{to:"/",class:"head__menu__link"},{default:c(()=>[U,W,j]),_:1})]),q]),e("li",G,[e("span",{class:f(["head__menu__link head__menu__lang",{open:n.value}]),onClick:S},[e("i",J,[l(r,{name:"icon-globe",color:"#fff"})]),o(H(I(v)("DAlanguage")),1)],2),e("ul",K,[e("li",null,[e("span",{onClick:s[0]||(s[0]=k=>d("en-US")),class:"head__menu____link"},"English")]),e("li",null,[e("span",{onClick:s[1]||(s[1]=k=>d("zh-TW")),class:"head__menu____link"},"\u7E41\u9AD4\u4E2D\u6587")]),e("li",null,[e("span",{onClick:s[2]||(s[2]=k=>d("zh-CN")),class:"head__menu____link"},"\u7B80\u4F53\u4E2D\u6587")])])])])])],2)}}};export{X as _};