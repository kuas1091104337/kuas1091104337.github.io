import{_ as t,g as n}from"./index-Cx30kA3y.js";const i={};function s(a,e){return e[0]||(e[0]=n(`<h3 class="interview__title">杏遠科技有限公司 - 前端考題</h3><p class="interview__text">1.請寫出執行結果</p><pre class="interview__code">var abc1=&#39;123&#39;;
function show(){
  var abc2=&#39;456&#39;; 
  alert(abc1+&#39; &amp; &#39;+abc2);
}
show(); 
alert(abc1+&#39;&amp;&#39;+abc2);
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"> 跳彈窗 <i class="interview__example__note">&#39;123 &amp; 456&#39;</i></span><span class="interview__example_txt"> ReferenceError: <i class="interview__example__note">abc2 is not defined</i></span></p><p class="interview__text">2.請寫出執行果</p><pre class="interview__code">var b = 1;
function print() {
  var b = a = 2;
  console.log(a,b);
}
print();
console.log(a,b);
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">程式碼解析：</span><span class="interview__example_txt"><i class="interview__example__note">在 print() 函數內部，var b = a = 2; 實際上做了兩件事</i></span><span class="interview__example_txt"><i class="interview__example__note">1. a = 2; 由於沒有使用 var、let 或 const 關鍵字，這會隱式地創建一個全局變量 a（非嚴格模式下）</i></span><span class="interview__example_txt"><i class="interview__example__note">2. var b = 2; 在函數作用域內創建了一個局部變量 b</i></span><span class="interview__example_txt">最終輸出</span><span class="interview__example_txt"><i class="interview__example__note">// 2, 2</i></span><span class="interview__example_txt"><i class="interview__example__note">// 2, 1</i></span></p><p class="interview__text">3.如何把上題輸出改成</p><p class="interview__example"><span class="interview__example_txt"> 2, 2 <br> 1, 1 </span></p><p class="interview__ans">ANS:</p><pre class="interview__code">var b = 1;
function print() {
  var b = a = 2;
  console.log(a,b);
  a = 1;
}
print();
console.log(a,b);
</pre><p class="interview__text">4.請寫出執行結果</p><pre class="interview__code">var a = [1];
var b = a;
a[0] = 2; 
console.log(b);
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">// [2]</span></p><p class="interview__text">5.請問foo跟bar的值是?</p><pre class="interview__code">var foo = {n:1};
var bar = foo;
foo.x = foo = {n:2};
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">分析執行過程：</span><span class="interview__example_txt"> 1. 宣告並初始化 foo 和 bar，現在記憶體中的狀態 <i class="interview__example__note">foo -&gt; {n: 1}</i>， <i class="interview__example__note">bar -&gt; {n: 1}</i></span><span class="interview__example_txt">2. 執行 foo.x = foo = {n: 2};</span><span class="interview__example_txt">這行程式碼會根據，賦值運算的順序從右到左進行處理。</span><span class="interview__example_txt"><i class="interview__example__note">分解步驟：</i></span><span class="interview__example_txt">將 foo 更新為指向 {n: 2}</span><span class="interview__example_txt">foo.x = ...，注意此時 foo 的更新是右邊賦值運算的結果，但 foo.x = 的左邊部分是在賦值運算之前執行的。</span><span class="interview__example_txt">因為 foo.x 的計算發生時，foo 還指向舊物件 {n: 1}。</span><span class="interview__example_txt">因此，foo.x 將會在舊物件 {n: 1} 上添加一個屬性 x，而不是影響新物件 {n: 2}。</span><span class="interview__example_txt"> foo <i class="interview__example__note">// {n: 2}</i> (指向新物件) </span><span class="interview__example_txt"> bar <i class="interview__example__note">// {n: 1, x: {n: 2}}</i> (舊物件，新增了 x 屬性，指向新物件) </span></p><p class="interview__text">6.假設dataController.php可以回傳JSON資料,請試著以你熟悉的方方式(原生生js, jQuery, AngularJS, Vue.js...等)拿到資料,並於頁頁面面上印出結果</p><pre class="interview__code">{
  movies:[
    { name:&#39;Fantastic Beasts and Where to Find Them&#39; }
    { name:&#39;The Accountant&#39; }
    { name:&#39;Doctor Strange&#39; }
    { name:&#39;Trolls&#39; }
  ]
}
</pre><p class="interview__ans">ANS:</p><pre class="interview__code"><i class="interview__code_note">vue2</i>
data(){
  return{
    movieArr:[]
  }
}
this.movieArr = res.data.movies;

<i class="interview__code_note">vue3</i>
const movieArr = ref([]);
movieArr.value = res.data.movies;

&lt;ul v-for=&quot;item in movieArr&quot; :key=&quot;Math.random()&quot;&gt;
  &lt;li&gt;&lt;p&gt;{{ item.name }}&lt;/p&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre><p class="interview__text">7.請簡單說明 bind , apply , call 的差異</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">bind、apply 和 call 是 JavaScript 中用來改變普通函數中 this 指向的方法 (將 this 綁定到 thisArg)，箭頭函數無法修改this值。</span><span class="interview__example_txt"><i class="interview__example__note">bind</i></span><span class="interview__example_txt">語法：<i class="interview__example__note">function.bind(thisArg, arg1, arg2, ...)</i></span><span class="interview__example_txt">創建一個新的函數，不會立即執行，創建的函數可以重複使用。第1個參數指定為 this 的值，該 this 值將永久綁定，傳入參數以逗號分隔傳入。</span></p><pre class="interview__code">function greet(message){
  console.log(\`\${message}, \${this.name}\`);
}
const person = { name:&#39;John&#39; };
const boundGreet = greet.<i class="interview__code_note">bind</i>(person);
boundGreet(&#39;Hello&#39;); <i class="interview__code_note">// &quot;Hello, John&quot;</i>
</pre><p class="interview__example"><span class="interview__example_txt"><i class="interview__example__note">apply</i></span><span class="interview__example_txt">語法：<i class="interview__example__note">function.apply(thisArg, [args])</i></span><span class="interview__example_txt">立即執行函數，並返回函數的執行結果。第1個參數指定為 this 的值，第2個參數必須是陣列(包含所有傳入參數)。</span></p><pre class="interview__code">const obj = { x: 10 };
function getX(y, z) {
  console.log(this.x + y + z)
}
getX.<i class="interview__code_note">apply</i>(obj, [5, 3]); <i class="interview__code_note">// 18</i>

function greet(val1, val2){
    console.log(\`\${val1}, \${this.name}\${val2}\`);
}
const person = { name: &#39;John&#39; };
greet.<i class="interview__code_note">apply</i>(person,[&#39;Hello&#39;, &#39;!&#39;]);  <i class="interview__code_note">// &quot;Hello, John!&quot;</i>
</pre><p class="interview__example"><span class="interview__example_txt"><i class="interview__example__note">call</i></span><span class="interview__example_txt">語法：<i class="interview__example__note">function.call(thisArg, arg1, arg2, ...)</i></span><span class="interview__example_txt">立即執行函數，並返回函數的執行結果。第1個參數指定為 this 的值，傳入參數以逗號分隔傳入。</span></p><pre class="interview__code">const obj = { x:10 };
function getX(y) {
  console.log(this.x + y);
}
getX.<i class="interview__code_note">call</i>(obj, 5); <i class="interview__code_note">// 15</i>

const person = { name: &#39;Bob&#39; };
function greet(message){
  console.log(\`\${message}, \${this.name}\`);
}
greet.<i class="interview__code_note">call</i>(person, &#39;Hi&#39;); <i class="interview__code_note">// Hi, Bob</i>
</pre><p class="interview__text">主要區別：</p><div class="interview__table"><ul class="interview___head"><li class="interview___head_th interview___body_td-tac">方法</li><li class="interview___head_th interview___body_td-tac">執行時機</li><li class="interview___head_th interview___body_td-tac">參數形式</li><li class="interview___head_th interview___body_td-tac">返回值</li></ul><ul class="interview___body"><li class="interview___body_td interview___body_td-tac">bind</li><li class="interview___body_td interview___body_td-tac">不會立即執行</li><li class="interview___body_td interview___body_td-tac">單個參數或逗號分隔</li><li class="interview___body_td interview___body_td-tac">綁定了 this 的新函數</li></ul><ul class="interview___body"><li class="interview___body_td interview___body_td-tac">apply</li><li class="interview___body_td interview___body_td-tac">立即執行</li><li class="interview___body_td interview___body_td-tac">參數以陣列形式傳入</li><li class="interview___body_td interview___body_td-tac">函數執行結果</li></ul><ul class="interview___body"><li class="interview___body_td interview___body_td-tac">call</li><li class="interview___body_td interview___body_td-tac">立即執行</li><li class="interview___body_td interview___body_td-tac">單個參數或逗號分隔</li><li class="interview___body_td interview___body_td-tac">函數執行結果</li></ul></div><p class="interview__text">8.請舉例例CSS垂直置中的技巧</p><p class="interview__ans">ANS:</p><div class="testBox"><div class="testBox_center"></div></div><pre class="interview__code">&lt;div class=&quot;testBox&quot;&gt;
  &lt;div class=&quot;testBox_center&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

.box{
  width:100px;
  height:100px;
  background-color:blue;
  <i class="interview__code_note">display:flex;</i>
  &amp;_center{
    width:50px;
    height:50px;
    background-color:yellow;
    <i class="interview__code_note">margin:auto;</i>
  }
}
</pre><p class="interview__text">9.請簡單說明CSS position absolute 、 relative 、 fixed 的差異</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">同 崴拓資訊 17題</span></p><p class="interview__text">10.請以 @media 語法說明你如何設計RWD頁頁面面的breakpoint</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">@media screen and (min-width:640px){ }</span><span class="interview__example_txt">@media screen and (min-width:768px){ }</span><span class="interview__example_txt">@media screen and (min-width:1200px){ }</span><span class="interview__example_txt">@media screen and (min-width:1280px){ }</span><span class="interview__example_txt">@media screen and (min-width:1440px){ }</span><span class="interview__example_txt">@media screen and (min-width:1600px){ }</span><span class="interview__example_txt">@media screen and (min-width:1920px){ }</span></p><p class="interview__text">11.最近在玩什什麼有趣技術呢?試著說明喜歡的點與缺點。</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"> Pinia，喜歡的點：把 actions 和 mutations 合併在一起，簡化 vuex ，缺點：Vue3 專案才能用 </span></p><h3 class="interview__title">杏遠科技有限公司 - Vue2考題</h3><p class="interview__text">1.Vue 官方建議 v-for 與 v-if 不要同時使用，如果需要依照特定條件才出現元素時該如何做呢？</p><p class="interview__ans">ANS:</p><pre class="interview__code"><i class="interview__code_note">vue2</i>
data(){
  return{
    listArr:[
      {id:1, name:&#39;AA&#39;, isShow:true},
      {id:2, name:&#39;BB&#39;, isShow:false},
      {id:3, name:&#39;CC&#39;, isShow:true}
    ]
  }
},
computed:{
  filterArr(){
    return this.listArr.filter(el =&gt; el.isShow)
  }
},

<i class="interview__code_note">vue3</i>
const listArr = ref([
        {id:1, name:&#39;AA&#39;, isShow:true},
        {id:2, name:&#39;BB&#39;, isShow:false},
        {id:3, name:&#39;CC&#39;, isShow:true}
      ]),
      filterArr = computed(() =&gt; listArr.value.filter(el =&gt; el.isShow));

&lt;ul v-for=&quot;item in filterArr&quot; :key=&quot;item.id&quot;&gt;
  &lt;li&gt;&lt;p&gt;{{ item.name }}&lt;/p&gt;&lt;/li&gt;
&lt;/ul&gt;

<i class="interview__code_note">或</i>

&lt;ul&gt;
  &lt;template v-for=&quot;item in listArr&quot; :key=&quot;item.id&quot;&gt;
    &lt;li v-if=&quot;item.isShow&quot;&gt;&lt;p&gt;{{ item.name }}&lt;/p&gt;&lt;/li&gt;
  &lt;/template&gt;
&lt;/ul&gt;
</pre><p class="interview__text">2.請說明在 vue2 中，從子 component 中透過 props 向上傳遞值給 parent 的設置與觸發方式。</p><p class="interview__ans">ANS:</p><pre class="interview__code"><i class="interview__code_note">parent</i>
&lt;script&gt; <i class="interview__code_note">vue2</i>
  import ChildComponent from &#39;@/components/ChildComponent.vue&#39;
  export default {
    components: { ChildComponent },
    methods: {
      getChildVal(value){ console.log(value) },
    }
  }
&lt;/script&gt;
&lt;script setup&gt; <i class="interview__code_note">vue3</i>
  import ChildComponent from &#39;@/components/ChildComponent.vue&#39;
  const getChildVal = value =&gt; console.log(value);
&lt;/script&gt;

&lt;template&gt;
  &lt;ChildComponent :getChildValFn=&quot;getChildVal&quot;/&gt;
&lt;/template&gt;

<i class="interview__code_note">子</i>
&lt;script&gt; <i class="interview__code_note">vue2</i>
export default {
  props:{
    getChildValFn:{
      type:Function,
      default:() =&gt; {}
    },
  },
  data(){
    return {
      num:0,
    }
  },
  methods:{
    addFn(){ this.num++ },
    sendValToParent(){ this.getChildValFn(this.num); },
  }
}
&lt;/script&gt;
&lt;script setup&gt; <i class="interview__code_note">vue3</i>
const props = defineProps({
        getChildValFn:{
          type:Function,
          default:() =&gt; {}
        },
      }),
      num = ref(0),
      addFn = () =&gt; num.value++,
      sendValToParent = () =&gt; props.getChildValFn(num.value);
&lt;/script&gt;

&lt;template&gt;
  &lt;p&gt;{{ num }}&lt;/p&gt;
  &lt;p&gt;&lt;button @click=&quot;addFn&quot;&gt;num 加 1&lt;/button&gt;&lt;/p&gt;
  &lt;p&gt;&lt;button @click=&quot;sendValToParent&quot;&gt;上傳遞值給父層&lt;/button&gt;&lt;/p&gt;
&lt;/template&gt;
</pre><p class="interview__text">3.下面是一個簡單的 api 呼叫 method，請問該 method 被呼叫時會有什麼錯誤或 bug? </p><p class="interview__text">又為什麼會有這樣的錯誤呢？又如何修正？</p><pre class="interview__code">queryList(){
  axios.get(&#39;/xxxx/aaa/&#39;).then(function(res){
    this.mainData = res.data.list;
  }).catch(function(error){
    console.log(error);
  });
},
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">該方法在被呼叫時會出現 this 是 undefined，導致 this.mainData = res.data.list; 無法正確執行。</span><span class="interview__example_txt">錯誤的原因是 JavaScript 中 this 的指向問題。</span><span class="interview__example_txt">在 Vue 組件的 method 中，this 指向 Vue 實例。</span><span class="interview__example_txt">然而，在 axios.get().then() 中的回調函數(function (res))，this 的指向會默認變為 undefined。</span><span class="interview__example_txt"></span><span class="interview__example_txt"><i class="interview__example__note">如何修正？</i></span><span class="interview__example_txt">1. 使用箭頭函數(推薦)</span><span class="interview__example_txt">箭頭函數不會創建自己的 this，它會捕獲外層作用域的 this，因此可以正確指向 Vue 實例。</span></p><pre class="interview__code">.then(res =&gt; {
  this.mainData = res.data.list; <i class="interview__code_note">// this 正確指向 Vue 實例</i>
}).catch(error =&gt; { console.log(error) });
</pre><p class="interview__example"><span class="interview__example_txt">2. 在外層保存 this(舊方法)</span><span class="interview__example_txt">在回調函數執行之前，用一個變量保存外層的 this。</span></p><pre class="interview__code">const self = this; <i class="interview__code_note">// 保存 this</i>
axios.get(&#39;/xxxx/aaa/&#39;).then(function(res){
  self.mainData = res.data.list; <i class="interview__code_note">// 使用保存的 this</i>
}).catch(function(error){ console.log(error) });
</pre><p class="interview__example"><span class="interview__example_txt">3. 使用 bind() 明確綁定 this</span><span class="interview__example_txt">手動用 .bind(this) 明確綁定 this 到 Vue 實例。</span></p><pre class="interview__code">.then(function(res){
  this.mainData = res.data.list; <i class="interview__code_note">// this 綁定到 Vue 實例</i>
}.bind(this)) <i class="interview__code_note">// 綁定 this</i>
.catch(function(error){ console.log(error) });
</pre><p class="interview__example"><span class="interview__example_txt">4. 使用 async/await(可讀性高)</span><span class="interview__example_txt">使用 async/await 來替代 then，並確保 this 的正確指向。</span></p><pre class="interview__code">async queryList(){
  try{
    const res = await axios.get(&#39;/xxxx/aaa/&#39;);
    this.mainData = res.data.list; <i class="interview__code_note">// this 自然指向 Vue 實例</i>
  }catch(error){ console.log(error) }
},
</pre><p class="interview__text">4.如何透過 computed 實作 checkbox 列表的 全選 / 取消全選 功能，需要包含的功能如下</p><ol class="interview__text"><li>勾選 全選 checkbox 時，自動選起所有清單</li><li>所有清單備選起來時，自動勾選全選 checkbox</li><li>取消全選 checkbox 時，自動取消所有清單的勾選</li><li>所有清單都是勾選的狀態下，取消清單其中一個，自動取消全選 checkbox</li></ol><p class="interview__ans">ANS:</p><pre class="interview__code"><i class="interview__code_note">vue2</i>
data(){
  return {
    checkArry:[
      {name:&#39;項目1&#39;, isSelect:false, id:Math.random()},
      {name:&#39;項目2&#39;, isSelect:false, id:Math.random()},
      {name:&#39;項目3&#39;, isSelect:false, id:Math.random()},
      {name:&#39;項目4&#39;, isSelect:false, id:Math.random()},
      {name:&#39;項目5&#39;, isSelect:false, id:Math.random()}
    ],
  }
},
computed:{
  isAllSelect:{
    get(){ return this.checkArry.every(item =&gt; item.isSelect) },
    set(val){ this.checkArry.forEach(item =&gt; item.isSelect = val) }
  }
},

<i class="interview__code_note">vue3</i>
const checkArry = ref([
        {name:&#39;項目1&#39;, isSelect:false, id:Math.random()},
        {name:&#39;項目2&#39;, isSelect:false, id:Math.random()},
        {name:&#39;項目3&#39;, isSelect:false, id:Math.random()},
        {name:&#39;項目4&#39;, isSelect:false, id:Math.random()},
        {name:&#39;項目5&#39;, isSelect:false, id:Math.random()}
      ]),
      isAllSelect= computed({
        get(){ return checkArry.value.every(item =&gt; item.isSelect) },
        set(val){ checkArry.value.forEach(item =&gt; item.isSelect = val) }
      });

&lt;label for=&quot;checkAll&quot;&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;checkAll&quot; v-model=&quot;isAllSelect&quot;&gt;全選
&lt;/label&gt;
&lt;div&gt;
  &lt;label :for=&quot;&#39;checkList&#39;+idx&quot; v-for=&quot;(item,idx) in checkArry&quot; :key=&quot;item.id&quot;&gt;
    &lt;input type=&quot;checkbox&quot; :id=&quot;&#39;checkList&#39;+idx&quot; v-model=&quot;item.isSelect&quot;&gt; {{ item.name }}
  &lt;/label&gt;
&lt;/div&gt;
</pre><p class="interview__example"></p><p class="interview__text">5.請簡單說明您對 vuex 的理解，包含 vuex 的使用時機與，vuex 中 store, mutations, getters, actions, 與 modules 的作用</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">Vuex 是狀態管理模式，用於集中管理應用中的共享狀態。提供全局存儲(store)，讓組件之間可以高效地共享數據，並解決多個組件需要共同管理狀態的問題。</span><span class="interview__example_txt">使用時機：</span><span class="interview__example_txt">1. 多個組件需要共享狀態時，例如用戶認證資訊、購物車數據等。</span><span class="interview__example_txt">2. 需要跨組件通信時，使用父子通信(rops和emit，可以避免透過props和事件逐層傳遞數據，從而簡化狀態管理)或兄弟組件通信(事件總線)的代碼難以維護時。</span><span class="interview__example_txt">3. 應用較為複雜，需要集中管理狀態時，讓狀態變化透明化，可以追踪每一次狀態的變更，方便調試(提供了 Actions 和 Mutations，可以將狀態的更新邏輯集中管理。)。</span><span class="interview__example_txt">4. 需要持久化某些狀態時</span><span class="interview__example_txt">State(狀態)：儲存應用的狀態數據，是唯一的數據源，是響應式的，不能直接修改，必須通過 mutations。</span><span class="interview__example_txt">Mutations(變更)：用於修改 state，必須是同步函數，通過 commit 觸發，第1個參數是 state，第2個是 commit傳入的第2個參數。</span><span class="interview__example_txt">Actions(動作)：可以包含異步操作，通過 dispatch 觸發，不能直接修改 state，需要通過 commit 觸發 mutations 來修改狀態，可以包含複雜的業務邏輯。</span><span class="interview__example_txt">Getters(獲取器)可以認為是 store 的計算屬性，可以對 state 進行加工，可以接收其他 getters 作為第二個參數，結果會被緩存。</span><span class="interview__example_txt">Modules(模塊)：用於將 store 分割成模塊，每個模塊可以有自己的 state、mutations、actions、getters，可以通過 namespaced 實現命名空間隔離，有助於管理大型應用的狀態。(模塊化+命名空間，目得讓代碼更好維護，讓多種數據分類更加明確)</span><span class="interview__example_txt">最佳實踐：</span><span class="interview__example_txt"> 1. 合理劃分模塊</span><span class="interview__example_txt"> 2. 保持 mutations 簡單純粹</span><span class="interview__example_txt"> 3. 複雜邏輯放在 actions</span><span class="interview__example_txt"> 4. 善用 getters 處理數據</span></p><pre class="interview__code">import { createStore } from &quot;vuex&quot;;
export default createStore({
  state: {
    count: 0,
    userInfo: null
  },
  mutations: {
    INCREMENT(state, payload) {
      state.count += payload
    },
    SET_USER(state, user) {
      state.userInfo = user
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() =&gt; { commit(&#39;INCREMENT&#39;, 1) }, 500)
    }
    async login({ commit }, credentials) {
      try{
        const user = await api.login(credentials)
        commit(&#39;SET_USER&#39;, user)
      }catch(error){ console.error(error) }
    },
  },
  getters: {
    doubleCount: state =&gt; state.count * 2,
    isLoggedIn: state =&gt; !!state.userInfo
  }
});
const moduleA = {
  namespaced: true, <i class="interview__code_note">// 開啟命名空間</i>
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}
const store = {
  modules: {
    auth: moduleA,
    cart: moduleB
  }
}
<i class="interview__code_note">// 組件中使用</i>
export default {
  methods: {
    increment(){ this.$store.commit(&#39;INCREMENT&#39;, 1) },
    async login(){
      await this.$store.dispatch(&#39;login&#39;,{
        username:&#39;user&#39;,
        password:&#39;pass&#39;
      })
    }
  }
}
</pre>`,76))}const l=t(i,[["render",s]]);export{l as default};
