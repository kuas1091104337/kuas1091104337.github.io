import{_ as z}from"./DArightMenu.0cc00be6.js";import{_ as E,a as P}from"./brand.scss_vue_type_style_index_0_src_true_lang.c6d75793.js";import{r as u,u as W,G as F,p as d,o as L,z as G,C as y,D as R,b as v,c as w,e as b,f as j,d as a,n as p,F as $,q,g as t,h as U,i as J,j as x,t as K,s as A}from"./index.b241fbed.js";const Q="/assets/lg_goddess.f55be5ab.png",X="/assets/lg_menu.36dca39f.jpg",Y="/assets/lg_texasPoker.e1df54df.png",Z="/assets/lg_cow.a5d2ab02.png",ss="/assets/lg_dragonTiger.cff9acdc.png",es="/assets/lg_baccarat.6e7a6af0.png",ls="/assets/lg_fortunePull.d205bf7b.png",ts="/assets/lg_fruitTurntable.d66fe8b8.png",as="/assets/lg_banner.a6777d3b.png";const is=A("Dot A \u5A1B\u6A02"),ns=x('<main class="lgMain_goddess"><h2 class="lgMain_goddess_title">\u76F4\u64AD\u5927\u5ABD\u89AA\u8072\u6253\u6C23\uFF0C\u5404\u7A2E\u904A\u6232\u5F88\u4E0D\u9806\u5229</h2><p class="lgMain_goddess_txt"><a class="lgMain_goddess__link" href="javascript:;">\u99AC\u4E0A\u6E38\u6232</a></p><img class="lgMain_goddess_img" src="'+Q+'" alt="\u76F4\u64AD\u5927\u5ABD\u89AA\u8072\u6253\u6C23\uFF0C\u5404\u7A2E\u904A\u6232\u5F88\u4E0D\u9806\u5229"></main>',1),_s={class:"lgMain_bar"},os={class:"lgMain__news"},rs={class:"lgMain__news__list__txt"},cs=a("div",{class:"lgMain__news_title"},null,-1),gs=a("h4",{class:"lgMain__promotions"},[a("a",{href:"javascript:;",class:"lgMain__promotions_link"},"\u512A\u60E0\u6D3B\u52D5 PROMOTION")],-1),us=x('<article class="lgMenu_wrap"><img class="lgMenu__img" src="'+X+'" alt="\u5927\u5ABD\u76F4\u64AD \u8207\u4F60\u5171\u904A \u591A\u7A2E\u904A\u6232\u76F4\u64AD\u5927\u5ABD\u7DDA\u4E0A\u8207\u4F60\u5171\u904A"><h3 class="lgMenu__title">\u5927\u5ABD\u76F4\u64AD \u8207\u4F60\u5171\u904A</h3><p class="lgMenu__txt"><em>\u591A\u7A2E\u904A\u6232\u76F4\u64AD\u5927\u5ABD\u7DDA\u4E0A\u8207\u4F60\u5171\u904A</em></p><ul class="lgMenu__list"><li class="lgMenu__list_item"><a href="javascript:;" class="lgMenu__list__link"><img class="lgMenu__list__link_img" src="'+Y+'" alt="texas poker"></a></li><li class="lgMenu__list_item"><a href="javascript:;" class="lgMenu__list__link"><img class="lgMenu__list__link_img" src="'+Z+'" alt="niu niu"></a></li><li class="lgMenu__list_item"><a href="javascript:;" class="lgMenu__list__link"><img class="lgMenu__list__link_img" src="'+ss+'" alt="dragon tiger"></a></li><li class="lgMenu__list_item"><a href="javascript:;" class="lgMenu__list__link"><img class="lgMenu__list__link_img" src="'+es+'" alt="baccarat"></a></li><li class="lgMenu__list_item"><a href="javascript:;" class="lgMenu__list__link"><img class="lgMenu__list__link_img" src="'+ls+'" alt="fortune pull"></a></li><li class="lgMenu__list_item"><a href="javascript:;" class="lgMenu__list__link"><img class="lgMenu__list__link_img" src="'+ts+'" alt="fruit turntable"></a></li></ul></article>',1),ds=[us],ps=x('<div class="lgBanner"><article class="lgBanner_wrap"><img class="lgBanner__img" src="'+as+'" alt="\u5B8C\u7F8E\u914D\u5408\u5404\u7A2E\u88DD\u7F6E\uFF0C\u76E1\u60C5\u4EAB\u53D7\u904A\u6232\u5FEB\u611F"><h3 class="lgBanner__title">\u5B8C\u7F8E\u914D\u5408\u5404\u7A2E\u88DD\u7F6E\uFF0C\u76E1\u60C5\u4EAB\u53D7\u904A\u6232\u5FEB\u611F</h3><p class="lgBanner__txt"><a class="lgBanner__txt_link" href="javascript:;">\u7ACB\u5373\u9AD4\u9A57</a></p></article></div>',1),ms=A("Copyright \xA9 Dot A \u5A1B\u6A02 Reserved"),bs={__name:"lg",setup(fs){let _;const m=u({W:0,H:0}),{isDArightMenuShow:B,windowPos:k,DArightMenuHide:S,DArightMenuShow:T}=W(m),{windowScrollMiddle:o}=F(),r=d([]),f=d(null),h=d(null),n=d(null),c=u({top:0,bottom:0}),g=u({top:0,bottom:0}),s=u({idx:0,height:0,isSlide:!0}),N=(e,l)=>{m.W=e.value,m.H=l.value},M=()=>{const e=f.value.offsetTop,l=h.value.offsetTop;c.top=e,c.bottom=e+f.value.offsetHeight,g.top=l,g.bottom=l+h.value.offsetHeight,s.height=n.value.offsetHeight},D=()=>{s.idx<r.value.length?n.value.scrollTo({top:s.height*s.idx,behavior:"smooth"}):(s.idx=0,n.value.scrollTo({top:0}),s.idx++,n.value.scrollTo({top:s.height*s.idx,behavior:"smooth"})),s.idx++},C=()=>{s.isSlide=!1,clearInterval(_)},H=e=>{s.isSlide=!0,s.idx=Math.round(e.target.scrollTop/s.height),n.value.scrollTo({top:s.height*s.idx}),clearInterval(_),_=setInterval(D,3500)};return L(()=>{G.get("https://run.mocky.io/v3/ecfde131-172a-429b-be16-b7fd1b1de89d").then(e=>{r.value=e.data,r.value.push(e.data[0])}).catch(e=>{console.log(e.response.data)}),M(),_=setInterval(D,3500),window.addEventListener("resize",y(M,400))}),R(()=>{clearInterval(_),window.removeEventListener("resize",y(M,400))}),(e,l)=>{const I=E,O=P,V=z;return v(),w("div",{class:"lg",onClick:l[1]||(l[1]=(...i)=>t(S)&&t(S)(...i)),onContextmenu:l[2]||(l[2]=J((...i)=>t(T)&&t(T)(...i),["prevent"]))},[b(I,null,{default:j(()=>[is]),_:1}),a("div",{class:p(["lgMain",{active:c.top<t(o)&&c.bottom>=t(o)}]),ref_key:"lgMain",ref:f},[ns,a("aside",_s,[a("div",os,[a("div",{class:"lgMain__news_wrap",ref_key:"lgNewsWrap",ref:n,onMouseenter:C,onMouseleave:l[0]||(l[0]=i=>H(i))},[a("ul",{class:p(["lgMain__news__list",{stop:!s.isSlide}])},[(v(!0),w($,null,q(r.value,i=>(v(),w("li",{class:"lgMain__news__list_item",key:i.news},[a("p",rs,K(i.news),1)]))),128))],2)],544),cs]),gs])],2),a("div",{class:p(["lgMenu",{active:g.top<t(o)&&g.bottom>=t(o)}]),ref_key:"lgMenu",ref:h},ds,2),ps,b(O,null,{default:j(()=>[ms]),_:1}),b(V,{class:p({active:t(B)}),style:U({top:t(k).top+"px",left:t(k).left+"px"}),onDArightMenuEle:N},null,8,["class","style"])],32)}}};export{bs as default};
