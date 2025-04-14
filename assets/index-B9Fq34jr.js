import{q as i,x,d as g,D as d,e as f,o as h,g as a,f as s,s as r,t as p,k as m,F as b}from"./index-CNwOqUnJ.js";const j={class:"interview__code"},A={class:"interview__example_txt"},N={__name:"index",setup(S){const v="https://...",o=i(null),_=i(""),u=n=>new Promise((e,w)=>{const t=new Image;t.src=n,t.onload=()=>e(t),t.onerror=()=>w(new Error("圖片有誤"))}),l=i([]),c=x(()=>{const n=[];return l.value.forEach(e=>{e.style==="oldWorks"&&n.push(e.src)}),n});return g(async()=>{u(v).then(n=>{o.value.appendChild(n)}).catch(n=>{_.value=n});try{const n=await d.get("https://kuas1091104337.github.io/DotA_img/json/index.json");console.log(n.data),l.value=n.data,console.log(c.value)}catch(n){console.error(n)}}),(n,e)=>(h(),f(b,null,[e[4]||(e[4]=a('<h3 class="interview__title">圖片懶加載</h3><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">1. 使用原生 loading 屬性：只需要為圖片添加 loading=&quot;lazy&quot; 屬性即可。</span><span class="interview__example_txt">&lt;img src=&quot;&quot; alt=&quot;&quot; <i class="interview__example__note">loading=&quot;lazy&quot;</i>&gt;</span><span class="interview__example_txt">2. 使用 Intersection Observer API</span><span class="interview__example_txt">是瀏覽器提供的構造函數(交叉觀察)</span><span class="interview__example_txt">const observer = new IntersectionObserver(callback)</span><span class="interview__example_txt">observer.observe(DOM節點)</span><span class="interview__example_txt">observer.unobserve(DOM節點)</span><span class="interview__example_txt"></span></p>',3)),s("pre",j,[r(""+p(m(c))+`
`,1),e[0]||(e[0]=s("i",{class:"interview__code_note"},"3. 使用滾動事件監聽 (Scroll Event)",-1)),e[1]||(e[1]=r(`

`)),e[2]||(e[2]=s("i",{class:"interview__code_note"},"4. 背景圖片的懶加載",-1)),e[3]||(e[3]=r(`


`))]),e[5]||(e[5]=a(`<p class="interview__example"><span class="interview__example_txt"> 5. 使用第三方庫 <a class="interview__example_txt" href="https://github.com/aFarkas/lazysizes" target="_blank">lazysizes</a></span><span class="interview__example_txt">6. 結合虛擬滾動(Virtual Scrolling)</span><span class="interview__example_txt">當圖片數量非常龐大時(如數千張圖片)，可以只渲染當前視口範圍內的圖片。</span><span class="interview__example_txt">使用 Vue Virtual Scroller / React Virtualized</span></p><h3 class="interview__title">封裝函數進行字串駝峰命名的轉換</h3><p class="interview__ans">ANS:</p><pre class="interview__code">const txt = &#39;get-elements-by-className&#39;,
      toUpperCaseString = (txt) =&gt; {
        const Arr = txt.split(&#39;-&#39;);
        for(let i = 1, max = Arr.length; i &lt; max; i++){
          Arr[i] = Arr[i].charAt(0).toUpperCase()+Arr[i].substr(1);
        }
        return Arr.join(&#39;&#39;);
      };
</pre><h3 class="interview__title">深拷貝與淺拷貝</h3><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">深拷貝：指的是創建一個新對象，這個新對象完全複製了原對象的所有屬性和嵌套結構，且兩者之間完全獨立，互不影響。</span><span class="interview__example_txt">1. const deepCopy = JSON.parse(JSON.stringify(obj1));</span><span class="interview__example_txt">無法處理特殊類型數據(如函數、undefined、Date、RegExp、Map、Set、循環引用 等)。</span><span class="interview__example_txt">2. 用 lodash.js 庫，const obj2 = _.cloneDeep(obj1);</span><span class="interview__example_txt">3. 遞歸拷貝</span><span class="interview__example_txt">淺拷貝：只會複製對象的第一層屬性，當這些屬性是對象或陣列時，它們的引用仍然指向同一個內存地址。</span><span class="interview__example_txt">1. const arr1 = [0,0,0], arr2 = arr1.slice(0), arr3 =[...arr1]; </span><span class="interview__example_txt">2. const obj1 = {name:&#39;mike&#39;}, obj2 = Object.assign({ },obj1), obj3 = {...obj1}</span></p><h3 class="interview__title">new Promise</h3><p class="interview__ans">ANS:</p><pre class="interview__code">const isPregnant = true;
console.log(111);
const promise = new Promise((resolve, reject) =&gt; isPregnant ? resolve(&#39;孩子他爹&#39;) : reject(&#39;老公&#39;));
console.log(222);
promise.then(name =&gt; { <i class="interview__code_note">//resolve</i>
  console.log(\`男人成為了\${name}\`);
}).catch(name =&gt; { <i class="interview__code_note">//reject</i>
  console.log(\`男人成為了\${name}\`);
}).finally(() =&gt; {
  console.log(&#39;男人和女人最終結婚了!&#39;);
});
console.log(333);
<i class="interview__code_note">111</i>
<i class="interview__code_note">222</i>
<i class="interview__code_note">333</i>
<i class="interview__code_note">男人成為了孩子他爹</i>
<i class="interview__code_note">男人和女人最終結婚了!</i>

const test = ref(null),
      errMsg = ref(&#39;&#39;),
      imgAddress = &#39;https://...&#39;,
      imgPromise = url =&gt; {
        return new Promise((resolve, reject) =&gt; {
          const img = new Image();
          img.src = url;
          img.onload = () =&gt; resolve(img);
          img.onerror = () =&gt; reject(new Error(&#39;圖片有誤&#39;));
        })
      };
onMounted(() =&gt; {
  imgPromise(imgAddress).then(img =&gt; {
    test.value.appendChild(img)
  }).catch(err =&gt; {
    errMsg.value = err
  })
});
</pre>`,10)),s("p",{class:"interview__example",ref_key:"test",ref:o},[s("span",A,p(m(_)),1)],512),e[6]||(e[6]=a(`<h3 class="interview__title">宏任務 與 微任務</h3><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">同步任務 -&gt; 微任務 -&gt; 宏任務</span><span class="interview__example_txt">微任務：</span><span class="interview__example_txt">1.Promise .then() .catch() .finally()</span><span class="interview__example_txt">2.MutationObserver</span><span class="interview__example_txt">3.Object.observe</span><span class="interview__example_txt">宏任務：</span><span class="interview__example_txt">1.新程式或子程式被直接執行</span><span class="interview__example_txt">2.事件回調函數</span><span class="interview__example_txt">3.setTimeout() 和 setInterval()</span></p><h3 class="interview__title">作用域</h3><p class="interview__ans">ANS:</p><pre class="interview__code">var num1 = 11, num2 = 22;
function fv(num,num1){
  <i class="interview__code_note">// var num = 11</i>
  <i class="interview__code_note">// var num1 = 22</i>
  num = 100; num1 = 100; num2 = 100;
  <i class="interview__code_note">或是 var num = num1 = num2 = 100;</i>
  <i class="interview__code_note">或是 num = num1 = num2 = 100;</i>
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
  <i class="interview__code_note">或是 var num = num3 = num4 = 100;</i>
  <i class="interview__code_note">或是 num = num3 = num4 = 100;</i>
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
  <i class="interview__code_note">或是 var num = num5 = num6 = 100;</i>
  <i class="interview__code_note">或是 num = num5 = num6 = 100;</i>
  console.log(num); console.log(num5); console.log(num6);
}
fc(num5,num6) <i class="interview__code_note">Uncaught TypeError : Assignment to constant variable.</i>
<i class="interview__code_note">const num6 不可改變該常數的值</i>
console.log(num); <i class="interview__code_note">num is not defined</i>
console.log(num5); <i class="interview__code_note">//55</i>
console.log(num6); <i class="interview__code_note">//66</i>
</pre><h3 class="interview__title">值類型引用類型的傳遞</h3><p class="interview__ans">ANS:</p><pre class="interview__code">function Person(name,age,salary){
  this.name = name;
  this.age = age;
  this.salary = salary;
}
function f1(person){
  <i class="interview__code_note">var person = p;</i>
  person.name = &#39;ls&#39;; <i class="interview__code_note">改 0x110 的 name = &#39;ls&#39;</i>
  person = new Person(&#39;aa&#39;,18,10)
  <i class="interview__code_note">將 person (棧內存 0x111) 重新指向-&gt; new Person(&#39;aa&#39;,18,10) (堆內存 0x111)</i>
}
var p = new Person(&#39;zs&#39;,18,1000)
<i class="interview__code_note">var p (棧內存 0x110) 指向-&gt; new Person(&#39;zs&#39;,18,1000) (堆內存 0x110)</i>
console.log(p.name) <i class="interview__code_note">//zs</i>
f1(p)
console.log(p.name) <i class="interview__code_note">//ls (0x110 的 name)</i>
</pre><h3 class="interview__title">如何產生閉包 Closure ?</h3><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">當一個嵌套的內部函數引用了嵌套的外部函數的變數時，就產生了閉包。</span><span class="interview__example_txt">注意：閉包存在於嵌套的內部函數中</span><span class="interview__example_txt">怎麼看閉包對象創建幾個(內部函數對象)，看外部函數執行幾次(fn1())</span></p><pre class="interview__code">function fn1(){
  var a = 2,
      b = function(){ <i class="interview__code_note">//不會產生閉包</i>
        console.log(a)
      };
  function fn2(){ <i class="interview__code_note">//執行函數定義就會產生閉包(不用調用內部函數)</i>
    a++
    console.log(a)
  }
  return fn2 <i class="interview__code_note">//1.將內部函式作為外部函式的返回值</i>
}
fn1() <i class="interview__code_note">//3</i>
var f = fn1()
f() <i class="interview__code_note">//3</i>
f() <i class="interview__code_note">//4</i>

function showDelay(msg, time){ <i class="interview__code_note">//2.將函式作為實參傳遞給另一個函式調用</i>
  setTimeout(function(){
    alert(msg)
  },time)
}
showDelay(&#39;Closure&#39;,2000) 
</pre><h3 class="interview__title">冒泡排序</h3><p class="interview__example"><span class="interview__example_txt">const arr = [911, 520, 888, 555, 2323] =&gt;  [520, 555, 888, 911, 2323]</span></p><p class="interview__ans">ANS:</p><pre class="interview__code">const bubbleSort = (arr) =&gt; {
  let temp;
  for(let i = 0; i &lt; arr.length - 1; i++){
    for (let j = 0; j &lt; arr.length - 1 - i; j++) {
      if(arr[j] &gt; arr[j+1]){ <i class="interview__code_note">把較大的數字往後推</i>
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
</pre><h3 class="interview__title">JavaScript小數精度問題</h3><p class="interview__text">0.92 + 0.8 = 1.7200000000000002(不是)，應該是1.72</p><p class="interview__text">0.9 - 0.2 + 0.6 = 1.2999999999999998(不是)，應該是1.3</p><p class="interview__text">0.2 + 0.4 - 0.1 = 0.5000000000000001(不是)，應該是0.5</p><p class="interview__text">0.7 - 0.2 = 0.49999999999999994(不是)，應該是0.5</p><p class="interview__ans">ANS:</p><pre class="interview__code">const precise = (num,digits = 15) =&gt; parseFloat(num.toFixed(digits))
<i class="interview__code_note">或</i>
const precise = (num,digits = 15) =&gt; return num.toFixed(digits)*1
</pre><p class="interview__example"><span class="interview__example_txt">建議：</span><span class="interview__example_txt">對於簡單的數學運算，這種方法基本可用，但金融、科學計算等精確度要求高的場景，推薦使用專業數字處理庫</span><span class="interview__example_txt">decimal.js：適合處理高精度運算</span><span class="interview__example_txt">bignumber.js：輕量級精度處理庫</span></p><h3 class="interview__title">統計對象</h3><p class="interview__text">const votes = [&#39;apple&#39;, &#39;banana&#39;, &#39;apple&#39;, &#39;orange&#39;];</p><p class="interview__ans">ANS:</p><pre class="interview__code">const voteCount = votes.reduce((count, fruit) =&gt; {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
},{});
</pre><p class="interview__example">{apple: 2, banana: 1, orange: 1}</p><h3 class="interview__title">兩數總和 Two Sum - leetcode</h3><p class="interview__text">給定一個整數數組nums和一個目標值target，請你在該數組中找出和為目標值的那兩個整數，並返回他們的數組下標。</p><p class="interview__text">你可以假設每個輸入只會對應一個答案。但是，你不能重複利用這個陣列中同樣的元素。</p><p class="interview__text">示例：</p><p class="interview__example"><span class="interview__example_txt">例：給定nums = ［2,7,11,15］, target = 9</span><span class="interview__example_txt">因為nums[0] + nums[1] = 2+7 = 9，所以回傳[0,1]</span></p><p class="interview__ans">ANS:</p><pre class="interview__code">const nums = [2, 7, 11, 15], sum = 26,
      twoSum = (arr,target) =&gt; {
        const box = {};
        for(let i = 0; i &lt; arr.length; i++){
          if(box[target - arr[i]] !== undefined){ <i class="interview__code_note">// 使用 !== undefined檢查是否存在</i>
            return [box[target - arr[i]], i];
          }
          box[arr[i]] = i; <i class="interview__code_note">// 正確儲存索引</i>
        }
        return null; <i class="interview__code_note">// 如果没有找到，返回 null 或其他合适的值</i>
      };
const ansArr = twoSum(nums, sum);
</pre>`,37))],64))}};export{N as default};
