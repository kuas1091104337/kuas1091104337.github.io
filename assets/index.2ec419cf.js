import{p as i,x as w,o as x,B as d,b as g,c as h,d as s,s as a,t as p,g as f,F as b,j as _}from"./index.d46e0714.js";const j=_('<h3 class="interview__title">\u5716\u7247\u61F6\u52A0\u8F09</h3><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">1. \u4F7F\u7528\u539F\u751F loading \u5C6C\u6027\uFF1A\u53EA\u9700\u8981\u70BA\u5716\u7247\u6DFB\u52A0 loading=&quot;lazy&quot; \u5C6C\u6027\u5373\u53EF\u3002</span><span class="interview__example_txt">&lt;img src=&quot;&quot; alt=&quot;&quot; <i class="interview__example__note">loading=&quot;lazy&quot;</i>&gt;</span><span class="interview__example_txt">2. \u4F7F\u7528 Intersection Observer API</span><span class="interview__example_txt">\u662F\u700F\u89BD\u5668\u63D0\u4F9B\u7684\u69CB\u9020\u51FD\u6578(\u4EA4\u53C9\u89C0\u5BDF)</span><span class="interview__example_txt">const observer = new IntersectionObserver(callback)</span><span class="interview__example_txt">observer.observe(DOM\u7BC0\u9EDE)</span><span class="interview__example_txt">observer.unobserve(DOM\u7BC0\u9EDE)</span><span class="interview__example_txt"></span></p>',3),A={class:"interview__code"},S=s("i",{class:"interview__code_note"},"3. \u4F7F\u7528\u6EFE\u52D5\u4E8B\u4EF6\u76E3\u807D (Scroll Event)",-1),y=a(`

`),N=s("i",{class:"interview__code_note"},"4. \u80CC\u666F\u5716\u7247\u7684\u61F6\u52A0\u8F09",-1),P=a(`


`),z=_(`<p class="interview__example"><span class="interview__example_txt"> 5. \u4F7F\u7528\u7B2C\u4E09\u65B9\u5EAB <a class="interview__example_txt" href="https://github.com/aFarkas/lazysizes" target="_blank">lazysizes</a></span><span class="interview__example_txt">6. \u7D50\u5408\u865B\u64EC\u6EFE\u52D5(Virtual Scrolling)</span><span class="interview__example_txt">\u7576\u5716\u7247\u6578\u91CF\u975E\u5E38\u9F90\u5927\u6642(\u5982\u6578\u5343\u5F35\u5716\u7247)\uFF0C\u53EF\u4EE5\u53EA\u6E32\u67D3\u7576\u524D\u8996\u53E3\u7BC4\u570D\u5167\u7684\u5716\u7247\u3002</span><span class="interview__example_txt">\u4F7F\u7528 Vue Virtual Scroller / React Virtualized</span></p><h3 class="interview__title">\u5C01\u88DD\u51FD\u6578\u9032\u884C\u5B57\u4E32\u99DD\u5CF0\u547D\u540D\u7684\u8F49\u63DB</h3><p class="interview__ans">ANS:</p><pre class="interview__code">const txt = &#39;get-elements-by-className&#39;,
      toUpperCaseString = (txt) =&gt; {
        const Arr = txt.split(&#39;-&#39;);
        for(let i = 1, max = Arr.length; i &lt; max; i++){
          Arr[i] = Arr[i].charAt(0).toUpperCase()+Arr[i].substr(1);
        }
        return Arr.join(&#39;&#39;);
      };
</pre><h3 class="interview__title">\u6DF1\u62F7\u8C9D\u8207\u6DFA\u62F7\u8C9D</h3><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">\u6DF1\u62F7\u8C9D\uFF1A\u6307\u7684\u662F\u5275\u5EFA\u4E00\u500B\u65B0\u5C0D\u8C61\uFF0C\u9019\u500B\u65B0\u5C0D\u8C61\u5B8C\u5168\u8907\u88FD\u4E86\u539F\u5C0D\u8C61\u7684\u6240\u6709\u5C6C\u6027\u548C\u5D4C\u5957\u7D50\u69CB\uFF0C\u4E14\u5169\u8005\u4E4B\u9593\u5B8C\u5168\u7368\u7ACB\uFF0C\u4E92\u4E0D\u5F71\u97FF\u3002</span><span class="interview__example_txt">1. const deepCopy = JSON.parse(JSON.stringify(obj1));</span><span class="interview__example_txt">\u7121\u6CD5\u8655\u7406\u7279\u6B8A\u985E\u578B\u6578\u64DA(\u5982\u51FD\u6578\u3001undefined\u3001Date\u3001RegExp\u3001Map\u3001Set\u3001\u5FAA\u74B0\u5F15\u7528 \u7B49)\u3002</span><span class="interview__example_txt">2. \u7528 lodash.js \u5EAB\uFF0Cconst obj2 = _.cloneDeep(obj1);</span><span class="interview__example_txt">3. \u905E\u6B78\u62F7\u8C9D</span><span class="interview__example_txt">\u6DFA\u62F7\u8C9D\uFF1A\u53EA\u6703\u8907\u88FD\u5C0D\u8C61\u7684\u7B2C\u4E00\u5C64\u5C6C\u6027\uFF0C\u7576\u9019\u4E9B\u5C6C\u6027\u662F\u5C0D\u8C61\u6216\u9663\u5217\u6642\uFF0C\u5B83\u5011\u7684\u5F15\u7528\u4ECD\u7136\u6307\u5411\u540C\u4E00\u500B\u5167\u5B58\u5730\u5740\u3002</span><span class="interview__example_txt">1. const arr1 = [0,0,0], arr2 = arr1.slice(0), arr3 =[...arr1]; </span><span class="interview__example_txt">2. const obj1 = {name:&#39;mike&#39;}, obj2 = Object.assign({ },obj1), obj3 = {...obj1}</span></p><h3 class="interview__title">new Promise</h3><p class="interview__ans">ANS:</p><pre class="interview__code">const isPregnant = true;
console.log(111);
const promise = new Promise((resolve, reject) =&gt; isPregnant ? resolve(&#39;\u5B69\u5B50\u4ED6\u7239&#39;) : reject(&#39;\u8001\u516C&#39;));
console.log(222);
promise.then(name =&gt; { <i class="interview__code_note">//resolve</i>
  console.log(\`\u7537\u4EBA\u6210\u70BA\u4E86\${name}\`);
}).catch(name =&gt; { <i class="interview__code_note">//reject</i>
  console.log(\`\u7537\u4EBA\u6210\u70BA\u4E86\${name}\`);
}).finally(() =&gt; {
  console.log(&#39;\u7537\u4EBA\u548C\u5973\u4EBA\u6700\u7D42\u7D50\u5A5A\u4E86!&#39;);
});
console.log(333);
<i class="interview__code_note">111</i>
<i class="interview__code_note">222</i>
<i class="interview__code_note">333</i>
<i class="interview__code_note">\u7537\u4EBA\u6210\u70BA\u4E86\u5B69\u5B50\u4ED6\u7239</i>
<i class="interview__code_note">\u7537\u4EBA\u548C\u5973\u4EBA\u6700\u7D42\u7D50\u5A5A\u4E86!</i>

const test = ref(null),
      errMsg = ref(&#39;&#39;),
      imgAddress = &#39;https://...&#39;,
      imgPromise = url =&gt; {
        return new Promise((resolve, reject) =&gt; {
          const img = new Image();
          img.src = url;
          img.onload = () =&gt; resolve(img);
          img.onerror = () =&gt; reject(new Error(&#39;\u5716\u7247\u6709\u8AA4&#39;));
        })
      };
onMounted(() =&gt; {
  imgPromise(imgAddress).then(img =&gt; {
    test.value.appendChild(img)
  }).catch(err =&gt; {
    errMsg.value = err
  })
});
</pre>`,10),k={class:"interview__example_txt"},D=_(`<h3 class="interview__title">\u5B8F\u4EFB\u52D9 \u8207 \u5FAE\u4EFB\u52D9</h3><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">\u540C\u6B65\u4EFB\u52D9 -&gt; \u5FAE\u4EFB\u52D9 -&gt; \u5B8F\u4EFB\u52D9</span><span class="interview__example_txt">\u5FAE\u4EFB\u52D9\uFF1A</span><span class="interview__example_txt">1.Promise .then() .catch() .finally()</span><span class="interview__example_txt">2.MutationObserver</span><span class="interview__example_txt">3.Object.observe</span><span class="interview__example_txt">\u5B8F\u4EFB\u52D9\uFF1A</span><span class="interview__example_txt">1.\u65B0\u7A0B\u5F0F\u6216\u5B50\u7A0B\u5F0F\u88AB\u76F4\u63A5\u57F7\u884C</span><span class="interview__example_txt">2.\u4E8B\u4EF6\u56DE\u8ABF\u51FD\u6578</span><span class="interview__example_txt">3.setTimeout() \u548C setInterval()</span></p><h3 class="interview__title">\u4F5C\u7528\u57DF</h3><p class="interview__ans">ANS:</p><pre class="interview__code">var num1 = 11, num2 = 22;
function fv(num,num1){
  <i class="interview__code_note">// var num = 11</i>
  <i class="interview__code_note">// var num1 = 22</i>
  num = 100; num1 = 100; num2 = 100;
  <i class="interview__code_note">\u6216\u662F var num = num1 = num2 = 100;</i>
  <i class="interview__code_note">\u6216\u662F num = num1 = num2 = 100;</i>
  console.log(num); console.log(num1); console.log(num2);
}
fv(num1,num2) <i class="interview__code_note">//100 //100 //100</i>
console.log(num); <i class="interview__code_note">num is not defined</i>
console.log(num1); <i class="interview__code_note">//11</i>
console.log(num2); <i class="interview__code_note">//100</i>

let num3=33, num4=44;
function fl(num,num3){
  <i class="interview__code_note">// var num = 33</i>
  <i class="interview__code_note">// var num3 = 44</i>
  num = 100; num3 = 100; num4 = 100;
  <i class="interview__code_note">\u6216\u662F var num = num3 = num4 = 100;</i>
  <i class="interview__code_note">\u6216\u662F num = num3 = num4 = 100;</i>
  console.log(num); console.log(num3); console.log(num4);
}
fl(num3,num4) <i class="interview__code_note">//100 //100 //100</i>
console.log(num); <i class="interview__code_note">num is not defined</i>
console.log(num3); <i class="interview__code_note">//33</i>
console.log(num4); <i class="interview__code_note">//100</i>

const num5=55, num6=66
function fc(num,num5){
  <i class="interview__code_note">// var num = 55</i>
  <i class="interview__code_note">// var num5 = 66</i>
  num = 100; num5 = 100; num6 = 100;
  <i class="interview__code_note">\u6216\u662F var num = num5 = num6 = 100;</i>
  <i class="interview__code_note">\u6216\u662F num = num5 = num6 = 100;</i>
  console.log(num); console.log(num5); console.log(num6);
}
fc(num5,num6) <i class="interview__code_note">Uncaught TypeError : Assignment to constant variable.</i>
<i class="interview__code_note">const num6 \u4E0D\u53EF\u6539\u8B8A\u8A72\u5E38\u6578\u7684\u503C</i>
console.log(num); <i class="interview__code_note">num is not defined</i>
console.log(num5); <i class="interview__code_note">//55</i>
console.log(num6); <i class="interview__code_note">//66</i>
</pre><h3 class="interview__title">\u503C\u985E\u578B\u5F15\u7528\u985E\u578B\u7684\u50B3\u905E</h3><p class="interview__ans">ANS:</p><pre class="interview__code">function Person(name,age,salary){
  this.name = name;
  this.age = age;
  this.salary = salary;
}
function f1(person){
  <i class="interview__code_note">var person = p;</i>
  person.name = &#39;ls&#39;; <i class="interview__code_note">\u6539 0x110 \u7684 name = &#39;ls&#39;</i>
  person = new Person(&#39;aa&#39;,18,10)
  <i class="interview__code_note">\u5C07 person (\u68E7\u5167\u5B58 0x111) \u91CD\u65B0\u6307\u5411-&gt; new Person(&#39;aa&#39;,18,10) (\u5806\u5167\u5B58 0x111)</i>
}
var p = new Person(&#39;zs&#39;,18,1000)
<i class="interview__code_note">var p (\u68E7\u5167\u5B58 0x110) \u6307\u5411-&gt; new Person(&#39;zs&#39;,18,1000) (\u5806\u5167\u5B58 0x110)</i>
console.log(p.name) <i class="interview__code_note">//zs</i>
f1(p)
console.log(p.name) <i class="interview__code_note">//ls (0x110 \u7684 name)</i>
</pre><h3 class="interview__title">\u5982\u4F55\u7522\u751F\u9589\u5305 Closure ?</h3><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">\u7576\u4E00\u500B\u5D4C\u5957\u7684\u5167\u90E8\u51FD\u6578\u5F15\u7528\u4E86\u5D4C\u5957\u7684\u5916\u90E8\u51FD\u6578\u7684\u8B8A\u6578\u6642\uFF0C\u5C31\u7522\u751F\u4E86\u9589\u5305\u3002</span><span class="interview__example_txt">\u6CE8\u610F\uFF1A\u9589\u5305\u5B58\u5728\u65BC\u5D4C\u5957\u7684\u5167\u90E8\u51FD\u6578\u4E2D</span><span class="interview__example_txt">\u600E\u9EBC\u770B\u9589\u5305\u5C0D\u8C61\u5275\u5EFA\u5E7E\u500B(\u5167\u90E8\u51FD\u6578\u5C0D\u8C61)\uFF0C\u770B\u5916\u90E8\u51FD\u6578\u57F7\u884C\u5E7E\u6B21(fn1())</span></p><pre class="interview__code">function fn1(){
  var a = 2,
      b = function(){ <i class="interview__code_note">//\u4E0D\u6703\u7522\u751F\u9589\u5305</i>
        console.log(a)
      };
  function fn2(){ <i class="interview__code_note">//\u57F7\u884C\u51FD\u6578\u5B9A\u7FA9\u5C31\u6703\u7522\u751F\u9589\u5305(\u4E0D\u7528\u8ABF\u7528\u5167\u90E8\u51FD\u6578)</i>
    a++
    console.log(a)
  }
  return fn2 <i class="interview__code_note">//1.\u5C07\u5167\u90E8\u51FD\u5F0F\u4F5C\u70BA\u5916\u90E8\u51FD\u5F0F\u7684\u8FD4\u56DE\u503C</i>
}
fn1() <i class="interview__code_note">//3</i>
var f = fn1()
f() <i class="interview__code_note">//3</i>
f() <i class="interview__code_note">//4</i>

function showDelay(msg, time){ <i class="interview__code_note">//2.\u5C07\u51FD\u5F0F\u4F5C\u70BA\u5BE6\u53C3\u50B3\u905E\u7D66\u53E6\u4E00\u500B\u51FD\u5F0F\u8ABF\u7528</i>
  setTimeout(function(){
    alert(msg)
  },time)
}
showDelay(&#39;Closure&#39;,2000) 
</pre><h3 class="interview__title">\u5192\u6CE1\u6392\u5E8F</h3><p class="interview__example"><span class="interview__example_txt">const arr = [911, 520, 888, 555, 2323] =&gt; \xA0[520, 555, 888, 911, 2323]</span></p><p class="interview__ans">ANS:</p><pre class="interview__code">const bubbleSort = (arr) =&gt; {
  let temp;
  for(let i = 0; i &lt; arr.length - 1; i++){
    for (let j = 0; j &lt; arr.length - 1 - i; j++) {
      if(arr[j] &gt; arr[j+1]){ <i class="interview__code_note">\u628A\u8F03\u5927\u7684\u6578\u5B57\u5F80\u5F8C\u63A8</i>
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
</pre><h3 class="interview__title">JavaScript\u5C0F\u6578\u7CBE\u5EA6\u554F\u984C</h3><p class="interview__text">0.92 + 0.8 = 1.7200000000000002(\u4E0D\u662F)\uFF0C\u61C9\u8A72\u662F1.72</p><p class="interview__text">0.9 - 0.2 + 0.6 = 1.2999999999999998(\u4E0D\u662F)\uFF0C\u61C9\u8A72\u662F1.3</p><p class="interview__text">0.2 + 0.4 - 0.1 = 0.5000000000000001(\u4E0D\u662F)\uFF0C\u61C9\u8A72\u662F0.5</p><p class="interview__text">0.7 - 0.2 = 0.49999999999999994(\u4E0D\u662F)\uFF0C\u61C9\u8A72\u662F0.5</p><p class="interview__ans">ANS:</p><pre class="interview__code">const precise = (num,digits = 15) =&gt; parseFloat(num.toFixed(digits))
<i class="interview__code_note">\u6216</i>
const precise = (num,digits = 15) =&gt; return num.toFixed(digits)*1
</pre><p class="interview__example"><span class="interview__example_txt">\u5EFA\u8B70\uFF1A</span><span class="interview__example_txt">\u5C0D\u65BC\u7C21\u55AE\u7684\u6578\u5B78\u904B\u7B97\uFF0C\u9019\u7A2E\u65B9\u6CD5\u57FA\u672C\u53EF\u7528\uFF0C\u4F46\u91D1\u878D\u3001\u79D1\u5B78\u8A08\u7B97\u7B49\u7CBE\u78BA\u5EA6\u8981\u6C42\u9AD8\u7684\u5834\u666F\uFF0C\u63A8\u85A6\u4F7F\u7528\u5C08\u696D\u6578\u5B57\u8655\u7406\u5EAB</span><span class="interview__example_txt">decimal.js\uFF1A\u9069\u5408\u8655\u7406\u9AD8\u7CBE\u5EA6\u904B\u7B97</span><span class="interview__example_txt">bignumber.js\uFF1A\u8F15\u91CF\u7D1A\u7CBE\u5EA6\u8655\u7406\u5EAB</span></p><h3 class="interview__title">\u7D71\u8A08\u5C0D\u8C61</h3><p class="interview__text">const votes = [&#39;apple&#39;, &#39;banana&#39;, &#39;apple&#39;, &#39;orange&#39;];</p><p class="interview__ans">ANS:</p><pre class="interview__code">const voteCount = votes.reduce((count, fruit) =&gt; {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
},{});
</pre><p class="interview__example">{apple: 2, banana: 1, orange: 1}</p><h3 class="interview__title">\u5169\u6578\u7E3D\u548C Two Sum - leetcode</h3><p class="interview__text">\u7D66\u5B9A\u4E00\u500B\u6574\u6578\u6578\u7D44nums\u548C\u4E00\u500B\u76EE\u6A19\u503Ctarget\uFF0C\u8ACB\u4F60\u5728\u8A72\u6578\u7D44\u4E2D\u627E\u51FA\u548C\u70BA\u76EE\u6A19\u503C\u7684\u90A3\u5169\u500B\u6574\u6578\uFF0C\u4E26\u8FD4\u56DE\u4ED6\u5011\u7684\u6578\u7D44\u4E0B\u6A19\u3002</p><p class="interview__text">\u4F60\u53EF\u4EE5\u5047\u8A2D\u6BCF\u500B\u8F38\u5165\u53EA\u6703\u5C0D\u61C9\u4E00\u500B\u7B54\u6848\u3002\u4F46\u662F\uFF0C\u4F60\u4E0D\u80FD\u91CD\u8907\u5229\u7528\u9019\u500B\u9663\u5217\u4E2D\u540C\u6A23\u7684\u5143\u7D20\u3002</p><p class="interview__text">\u793A\u4F8B\uFF1A</p><p class="interview__example"><span class="interview__example_txt">\u4F8B\uFF1A\u7D66\u5B9Anums = \uFF3B2,7,11,15\uFF3D, target = 9</span><span class="interview__example_txt">\u56E0\u70BAnums[0] + nums[1] = 2+7 = 9\uFF0C\u6240\u4EE5\u56DE\u50B3[0,1]</span></p><p class="interview__ans">ANS:</p><pre class="interview__code">const nums = [2, 7, 11, 15], sum = 26,
      twoSum = (arr,target) =&gt; {
        const box = {};
        for(let i = 0; i &lt; arr.length; i++){
          if(box[target - arr[i]] !== undefined){ <i class="interview__code_note">// \u4F7F\u7528 !== undefined\u6AA2\u67E5\u662F\u5426\u5B58\u5728</i>
            return [box[target - arr[i]], i];
          }
          box[arr[i]] = i; <i class="interview__code_note">// \u6B63\u78BA\u5132\u5B58\u7D22\u5F15</i>
        }
        return null; <i class="interview__code_note">// \u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u8FD4\u56DE null \u6216\u5176\u4ED6\u5408\u9002\u7684\u503C</i>
      };
const ansArr = twoSum(nums, sum);
</pre>`,37),q={__name:"index",setup(M){const m="https://...",r=i(null),o=i(""),v=e=>new Promise((n,u)=>{const t=new Image;t.src=e,t.onload=()=>n(t),t.onerror=()=>u(new Error("\u5716\u7247\u6709\u8AA4"))}),l=i([]),c=w(()=>{const e=[];return l.value.forEach(n=>{n.style==="oldWorks"&&e.push(n.src)}),e});return x(async()=>{v(m).then(e=>{r.value.appendChild(e)}).catch(e=>{o.value=e});try{const e=await d.get("https://kuas1091104337.github.io/DotA_img/json/index.json");console.log(e.data),l.value=e.data,console.log(c.value)}catch(e){console.error(e)}}),(e,n)=>(g(),h(b,null,[j,s("pre",A,[a(""+p(f(c))+`
`,1),S,y,N,P]),z,s("p",{class:"interview__example",ref_key:"test",ref:r},[s("span",k,p(o.value),1)],512),D],64))}};export{q as default};
