import{p as l,w as _,o as m,b as s,c as u,d as t,x as p,F as v,C as h,D as y}from"./index.ab869174.js";import{d as g}from"./debounce.9fa10780.js";const k={key:0},f={key:1},b=["onKeyup"],C={__name:"index",setup(x){const o=l(1),a=l(null),n=l(null),c=()=>{h.get("https://jsonplaceholder.typicode.com/todos/"+o.value).then(e=>{a.value=e.data,console.log(e.data)}).catch(e=>console.log(e.response))},r=()=>{console.log(n.value.value)},i=()=>{console.log(n.value.value)};return _(o,g(c,300)),m(()=>{c()}),(e,d)=>(s(),u(v,null,[t("p",null,"Todo id: "+p(o.value),1),t("button",{onClick:d[0]||(d[0]=B=>o.value++)},"Fetch next todo"),a.value?(s(),u("pre",f,p(a.value),1)):(s(),u("p",k,"Loading...")),t("input",{type:"number",placeholder:"number",ref_key:"inputVal",ref:n,onKeyup:y(r,["enter"])},null,40,b),t("label",{onClick:i},"click")],64))}};export{C as default};
