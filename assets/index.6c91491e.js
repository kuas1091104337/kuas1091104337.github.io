import{p as r,x as f,w,o as B,b as a,c as t,d as l,F as u,q as y,g as b,t as n,B as _,C as x,D as C,E as S}from"./index.b00a033d.js";const D={key:0},A={key:0},V={key:1},F=["onKeyup"],H={__name:"index",setup(K){const s=r(2),c=r(null),i=r(null),d=r([{id:1,name:"AA",isShow:!0},{id:2,name:"BB",isShow:!1},{id:3,name:"CC",isShow:!0}]),p=f(()=>d.value.filter(e=>e.isShow)),h=async()=>{try{const e=await _.get("https://jsonplaceholder.typicode.com/todos/"+s.value);c.value=e.data,console.log(e.data)}catch(e){console.log(e.response)}},g=async()=>{try{const e=await _.get("https://vue-lessons-api.vercel.app/photo/list");console.log(e.data)}catch(e){console.log(e.response)}},m=()=>{console.log(i.value.value)},k=()=>{console.log(i.value.value)};return w(s,x(h,300)),B(()=>{console.log(p.value),h(),g()}),(e,v)=>(a(),t(u,null,[l("div",null,[(a(!0),t(u,null,y(d.value,o=>(a(),t(u,{key:o.id},[o.isShow?(a(),t("span",D,n(o.id)+" - "+n(o.name),1)):C("",!0)],64))),128))]),l("ul",null,[(a(!0),t(u,null,y(b(p),o=>(a(),t("li",{key:o.id},[l("p",null,n(o.id)+" - "+n(o.name),1)]))),128))]),l("p",null,"Todo id: "+n(s.value),1),l("button",{onClick:v[0]||(v[0]=o=>s.value++)},"Fetch next todo"),c.value?(a(),t("pre",V,n(c.value),1)):(a(),t("p",A,"Loading...")),l("input",{type:"number",placeholder:"number",ref_key:"inputVal",ref:i,onKeyup:S(m,["enter"])},null,40,F),l("label",{onClick:k},"click")],64))}};export{H as default};