import{p as d,x as w,b as u,c as i,d as e,i as f,y as x,z as m,F as h,q as T,g as C,t as r,A as S,n as V}from"./index.918dc2e6.js";const M={class:"wrap"},U={class:"wrap_exp"},A=["onSubmit"],B=e("button",null,"Add Todo",-1),H=["onUpdate:modelValue"],$=["onClick"],z={class:"wrap_exp"},D=["onSubmit"],F=e("button",null,"Add Todo",-1),J={class:"listText"},X=["onClick"],j={__name:"todoList",setup(q){let v=0;const p=d(""),c=d(""),l=d([{id:v++,text:"Learn HTML",done:!0},{id:v++,text:"Learn JavaScript",done:!0},{id:v++,text:"Learn Vue",done:!1}]),n=d([{text:"Learn HTML"},{text:"Learn JavaScript"},{text:"Learn Vue"}]),_=d(!1),b=w(()=>_.value?l.value.filter(a=>!a.done):l.value),k=()=>{l.value.push({id:v++,text:p.value,done:!1}),p.value="",console.log(l.value)},L=a=>{l.value=l.value.filter(o=>o!==a),console.log(l.value)},y=()=>{n.value.push({text:c.value}),c.value="",console.log(n.value)},g=a=>{n.value=n.value.filter(o=>o!==a),console.log(n.value)};return(a,o)=>(u(),i("div",M,[e("div",U,[e("form",{onSubmit:f(k,["prevent"])},[x(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>p.value=t)},null,512),[[m,p.value]]),B],40,A),e("ul",null,[(u(!0),i(h,null,T(C(b),t=>(u(),i("li",{key:t.id},[e("p",null,[x(e("input",{type:"checkbox","onUpdate:modelValue":s=>t.done=s},null,8,H),[[S,t.done]]),e("span",{class:V(["listText",{done:t.done}])},r(t.id+1)+" . "+r(t.text),3),e("button",{onClick:s=>L(t)},"X",8,$)])]))),128))]),e("button",{onClick:o[1]||(o[1]=t=>_.value=!_.value)},r(_.value?"Show all":"Hide completed"),1)]),e("div",z,[e("form",{onSubmit:f(y,["prevent"])},[x(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=t=>c.value=t)},null,512),[[m,c.value]]),F],40,D),e("ul",null,[(u(!0),i(h,null,T(n.value,(t,s)=>(u(),i("li",{key:s},[e("p",null,[e("span",J,r(s+1)+" . "+r(t.text),1),e("button",{onClick:E=>g(t)},"X",8,X)])]))),128))])])]))}};export{j as default};
