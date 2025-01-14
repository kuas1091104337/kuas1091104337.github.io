import{G as e,j as t}from"./index.d4e2ad35.js";const n={},i=t(`<h3 class="interview__title">\u674F\u9060\u79D1\u6280\u6709\u9650\u516C\u53F8 - \u524D\u7AEF\u8003\u984C</h3><p class="interview__text">1.\u8ACB\u5BEB\u51FA\u57F7\u884C\u7D50\u679C</p><pre class="interview__code">var abc1=&#39;123&#39;;
function show(){
  var abc2=&#39;456&#39;; 
  alert(abc1+&#39; &amp; &#39;+abc2);
}
show(); 
alert(abc1+&#39;&amp;&#39;+abc2);
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"> \u8DF3\u5F48\u7A97 <i class="interview__example__note">&#39;123 &amp; 456&#39;</i></span><span class="interview__example_txt"> ReferenceError: <i class="interview__example__note">abc2 is not defined</i></span></p><p class="interview__text">2.\u8ACB\u5BEB\u51FA\u57F7\u884C\u679C</p><pre class="interview__code">var b = 1;
function print() {
  var b = a = 2;
  console.log(a,b);
}
print();
console.log(a,b);
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">\u7A0B\u5F0F\u78BC\u89E3\u6790\uFF1A</span><span class="interview__example_txt"><i class="interview__example__note">\u5728 print() \u51FD\u6578\u5167\u90E8\uFF0Cvar b = a = 2; \u5BE6\u969B\u4E0A\u505A\u4E86\u5169\u4EF6\u4E8B</i></span><span class="interview__example_txt"><i class="interview__example__note">1. a = 2; \u7531\u65BC\u6C92\u6709\u4F7F\u7528 var\u3001let \u6216 const \u95DC\u9375\u5B57\uFF0C\u9019\u6703\u96B1\u5F0F\u5730\u5275\u5EFA\u4E00\u500B\u5168\u5C40\u8B8A\u91CF a\uFF08\u975E\u56B4\u683C\u6A21\u5F0F\u4E0B\uFF09</i></span><span class="interview__example_txt"><i class="interview__example__note">2. var b = 2; \u5728\u51FD\u6578\u4F5C\u7528\u57DF\u5167\u5275\u5EFA\u4E86\u4E00\u500B\u5C40\u90E8\u8B8A\u91CF b</i></span><span class="interview__example_txt">\u6700\u7D42\u8F38\u51FA</span><span class="interview__example_txt"><i class="interview__example__note">// 2, 2</i></span><span class="interview__example_txt"><i class="interview__example__note">// 2, 1</i></span></p><p class="interview__text">3.\u5982\u4F55\u628A\u4E0A\u984C\u8F38\u51FA\u6539\u6210</p><p class="interview__example"><span class="interview__example_txt"> 2, 2 <br> 1, 1 </span></p><p class="interview__ans">ANS:</p><pre class="interview__code">var b = 1;
function print() {
  var b = a = 2;
  console.log(a,b);
  a = 1;
}
print();
console.log(a,b);
</pre><p class="interview__text">4.\u8ACB\u5BEB\u51FA\u57F7\u884C\u7D50\u679C</p><pre class="interview__code">var a = [1];
var b = a;
a[0] = 2; 
console.log(b);
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">// [2]</span></p><p class="interview__text">5.\u8ACB\u554Ffoo\u8DDFbar\u7684\u503C\u662F?</p><pre class="interview__code">var foo = {n:1};
var bar = foo;
foo.x = foo = {n:2};
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">\u5206\u6790\u57F7\u884C\u904E\u7A0B\uFF1A</span><span class="interview__example_txt"> 1. \u5BA3\u544A\u4E26\u521D\u59CB\u5316 foo \u548C bar\uFF0C\u73FE\u5728\u8A18\u61B6\u9AD4\u4E2D\u7684\u72C0\u614B <i class="interview__example__note">foo -&gt; {n: 1}</i>\uFF0C <i class="interview__example__note">bar -&gt; {n: 1}</i></span><span class="interview__example_txt">2. \u57F7\u884C foo.x = foo = {n: 2};</span><span class="interview__example_txt">\u9019\u884C\u7A0B\u5F0F\u78BC\u6703\u6839\u64DA\uFF0C\u8CE6\u503C\u904B\u7B97\u7684\u9806\u5E8F\u5F9E\u53F3\u5230\u5DE6\u9032\u884C\u8655\u7406\u3002</span><span class="interview__example_txt"><i class="interview__example__note">\u5206\u89E3\u6B65\u9A5F\uFF1A</i></span><span class="interview__example_txt">\u5C07 foo \u66F4\u65B0\u70BA\u6307\u5411 {n: 2}</span><span class="interview__example_txt">foo.x = ...\uFF0C\u6CE8\u610F\u6B64\u6642 foo \u7684\u66F4\u65B0\u662F\u53F3\u908A\u8CE6\u503C\u904B\u7B97\u7684\u7D50\u679C\uFF0C\u4F46 foo.x = \u7684\u5DE6\u908A\u90E8\u5206\u662F\u5728\u8CE6\u503C\u904B\u7B97\u4E4B\u524D\u57F7\u884C\u7684\u3002</span><span class="interview__example_txt">\u56E0\u70BA foo.x \u7684\u8A08\u7B97\u767C\u751F\u6642\uFF0Cfoo \u9084\u6307\u5411\u820A\u7269\u4EF6 {n: 1}\u3002</span><span class="interview__example_txt">\u56E0\u6B64\uFF0Cfoo.x \u5C07\u6703\u5728\u820A\u7269\u4EF6 {n: 1} \u4E0A\u6DFB\u52A0\u4E00\u500B\u5C6C\u6027 x\uFF0C\u800C\u4E0D\u662F\u5F71\u97FF\u65B0\u7269\u4EF6 {n: 2}\u3002</span><span class="interview__example_txt"> foo <i class="interview__example__note">// {n: 2}</i> (\u6307\u5411\u65B0\u7269\u4EF6) </span><span class="interview__example_txt"> bar <i class="interview__example__note">// {n: 1, x: {n: 2}}</i> (\u820A\u7269\u4EF6\uFF0C\u65B0\u589E\u4E86 x \u5C6C\u6027\uFF0C\u6307\u5411\u65B0\u7269\u4EF6) </span></p><p class="interview__text">6.\u5047\u8A2DdataController.php\u53EF\u4EE5\u56DE\u50B3JSON\u8CC7\u6599,\u8ACB\u8A66\u8457\u4EE5\u4F60\u719F\u6089\u7684\u65B9\u65B9\u5F0F(\u539F\u751F\u751Fjs, jQuery, AngularJS, Vue.js...\u7B49)\u62FF\u5230\u8CC7\u6599,\u4E26\u65BC\u9801\u9801\u9762\u9762\u4E0A\u5370\u51FA\u7D50\u679C</p><pre class="interview__code">{
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
</pre><p class="interview__text">7.\u8ACB\u7C21\u55AE\u8AAA\u660E bind , apply , call \u7684\u5DEE\u7570</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">bind\u3001apply \u548C call \u662F JavaScript \u4E2D\u7528\u4F86\u6539\u8B8A\u51FD\u6578\u4E2D this \u6307\u5411\u7684\u65B9\u6CD5 (\u5C07 this \u7D81\u5B9A\u5230 thisArg)</span><span class="interview__example_txt"><i class="interview__example__note">bind</i></span><span class="interview__example_txt">\u8A9E\u6CD5\uFF1A<i class="interview__example__note">function.bind(thisArg, arg1, arg2, ...)</i></span><span class="interview__example_txt">\u5275\u5EFA\u4E00\u500B\u65B0\u7684\u51FD\u6578\uFF0C\u4E0D\u6703\u7ACB\u5373\u57F7\u884C\uFF0C\u8FD4\u56DE\u4E00\u500B\u65B0\u7684\u51FD\u6578\uFF0C\u8A72\u51FD\u6578 this \u7684\u503C\u6C38\u4E45\u7D81\u5B9A\u5230 thisArg\uFF0C\u53EF\u4EE5\u9810\u8A2D\u90E8\u5206\u53C3\u6578\uFF0C\u5275\u5EFA\u7684\u51FD\u6578\u53EF\u4EE5\u91CD\u8907\u4F7F\u7528\u3002</span></p><pre class="interview__code">function greet(message){
  console.log(\`\${message}, \${this.name}\`);
}
const person = { name:&#39;John&#39; };
const boundGreet = greet.bind(person);
boundGreet(&#39;Hello&#39;); <i class="interview__code_note">// &quot;Hello, John&quot;</i>
</pre><p class="interview__example"><span class="interview__example_txt"><i class="interview__example__note">apply</i></span><span class="interview__example_txt">\u8A9E\u6CD5\uFF1A<i class="interview__example__note">function.apply(thisArg, [args])</i></span><span class="interview__example_txt">\u7ACB\u5373\u57F7\u884C\u51FD\u6578\uFF0C\u7B2C1\u500B\u53C3\u6578\u6307\u5B9A this \u7684\u503C\uFF0C\u7B2C2\u500B\u53C3\u6578\u5FC5\u9808\u662F\u9663\u5217\uFF0C\u5305\u542B\u6240\u6709\u53C3\u6578\uFF0C\u8FD4\u56DE\u51FD\u6578\u7684\u57F7\u884C\u7D50\u679C\u3002</span></p><pre class="interview__code">const obj = { x: 10 };
function getX(y, z) {
  console.log(this.x + y + z)
}
getX.apply(obj, [5, 3]); <i class="interview__code_note">// 18</i>

function greet(val1, val2){
    console.log(\`\${val1}, \${this.name}\${val2}\`);
}
const person = { name: &#39;John&#39; };
greet.apply(person,[&#39;Hello&#39;, &#39;!&#39;]);  <i class="interview__code_note">// &quot;Hello, John!&quot;</i>
</pre><p class="interview__example"><span class="interview__example_txt"><i class="interview__example__note">call</i></span><span class="interview__example_txt">\u8A9E\u6CD5\uFF1A<i class="interview__example__note">function.call(thisArg, arg1, arg2, ...)</i></span><span class="interview__example_txt">\u7ACB\u5373\u57F7\u884C\u51FD\u6578\uFF0C\u4E26\u5C07 this \u7D81\u5B9A\u5230 thisArg\uFF0C\u53C3\u6578\u4EE5\u9017\u865F\u5206\u9694\u50B3\u5165\u3002\u8FD4\u56DE\u51FD\u6578\u7684\u57F7\u884C\u7D50\u679C\u3002</span></p><pre class="interview__code">const obj = { x:10 };
function getX(y) {
  console.log(this.x + y);
}
getX.call(obj, 5); <i class="interview__code_note">// 15</i>

const person = { name: &#39;Bob&#39; };
function greet(message){
  console.log(\`\${message}, \${this.name}\`);
}
greet.call(person, &#39;Hi&#39;); <i class="interview__code_note">// Hi, Bob</i>
</pre><p class="interview__text">\u4E3B\u8981\u5340\u5225\uFF1A</p><div class="interview__table"><ul class="interview___head"><li class="interview___head_th interview___body_td-tac">\u65B9\u6CD5</li><li class="interview___head_th interview___body_td-tac">\u57F7\u884C\u6642\u6A5F</li><li class="interview___head_th interview___body_td-tac">\u53C3\u6578\u5F62\u5F0F</li><li class="interview___head_th interview___body_td-tac">\u8FD4\u56DE\u503C</li></ul><ul class="interview___body"><li class="interview___body_td interview___body_td-tac">bind</li><li class="interview___body_td interview___body_td-tac">\u4E0D\u6703\u7ACB\u5373\u57F7\u884C</li><li class="interview___body_td interview___body_td-tac">\u55AE\u500B\u53C3\u6578\u6216\u9017\u865F\u5206\u9694</li><li class="interview___body_td interview___body_td-tac">\u7D81\u5B9A\u4E86 this \u7684\u65B0\u51FD\u6578</li></ul><ul class="interview___body"><li class="interview___body_td interview___body_td-tac">apply</li><li class="interview___body_td interview___body_td-tac">\u7ACB\u5373\u57F7\u884C</li><li class="interview___body_td interview___body_td-tac">\u53C3\u6578\u4EE5\u9663\u5217\u5F62\u5F0F\u50B3\u5165</li><li class="interview___body_td interview___body_td-tac">\u51FD\u6578\u57F7\u884C\u7D50\u679C</li></ul><ul class="interview___body"><li class="interview___body_td interview___body_td-tac">call</li><li class="interview___body_td interview___body_td-tac">\u7ACB\u5373\u57F7\u884C</li><li class="interview___body_td interview___body_td-tac">\u55AE\u500B\u53C3\u6578\u6216\u9017\u865F\u5206\u9694</li><li class="interview___body_td interview___body_td-tac">\u51FD\u6578\u57F7\u884C\u7D50\u679C</li></ul></div><p class="interview__text">8.\u8ACB\u8209\u4F8B\u4F8BCSS\u5782\u76F4\u7F6E\u4E2D\u7684\u6280\u5DE7</p><p class="interview__ans">ANS:</p><div class="testBox"><div class="testBox_center"></div></div><pre class="interview__code">&lt;div class=&quot;testBox&quot;&gt;
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
</pre><p class="interview__text">9.\u8ACB\u7C21\u55AE\u8AAA\u660ECSS position absolute \u3001 relative \u3001 fixed \u7684\u5DEE\u7570</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">\u540C \u5D34\u62D3\u8CC7\u8A0A 17\u984C</span></p><p class="interview__text">10.\u8ACB\u4EE5 @media \u8A9E\u6CD5\u8AAA\u660E\u4F60\u5982\u4F55\u8A2D\u8A08RWD\u9801\u9801\u9762\u9762\u7684breakpoint</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">@media screen and (min-width:640px){ }</span><span class="interview__example_txt">@media screen and (min-width:768px){ }</span><span class="interview__example_txt">@media screen and (min-width:1200px){ }</span><span class="interview__example_txt">@media screen and (min-width:1280px){ }</span><span class="interview__example_txt">@media screen and (min-width:1440px){ }</span><span class="interview__example_txt">@media screen and (min-width:1600px){ }</span><span class="interview__example_txt">@media screen and (min-width:1920px){ }</span></p><p class="interview__text">11.\u6700\u8FD1\u5728\u73A9\u4EC0\u4EC0\u9EBC\u6709\u8DA3\u6280\u8853\u5462?\u8A66\u8457\u8AAA\u660E\u559C\u6B61\u7684\u9EDE\u8207\u7F3A\u9EDE\u3002</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"> Pinia\uFF0C\u559C\u6B61\u7684\u9EDE\uFF1A\u628A actions \u548C mutations \u5408\u4F75\u5728\u4E00\u8D77\uFF0C\u7C21\u5316 vuex \uFF0C\u7F3A\u9EDE\uFF1AVue3 \u5C08\u6848\u624D\u80FD\u7528 </span></p><h3 class="interview__title">\u674F\u9060\u79D1\u6280\u6709\u9650\u516C\u53F8 - Vue2\u8003\u984C</h3><p class="interview__text">1.Vue \u5B98\u65B9\u5EFA\u8B70 v-for \u8207 v-if \u4E0D\u8981\u540C\u6642\u4F7F\u7528\uFF0C\u5982\u679C\u9700\u8981\u4F9D\u7167\u7279\u5B9A\u689D\u4EF6\u624D\u51FA\u73FE\u5143\u7D20\u6642\u8A72\u5982\u4F55\u505A\u5462\uFF1F</p><p class="interview__ans">ANS:</p><pre class="interview__code"><i class="interview__code_note">vue2</i>
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

<i class="interview__code_note">\u6216</i>

&lt;ul&gt;
  &lt;template v-for=&quot;item in listArr&quot; :key=&quot;item.id&quot;&gt;
    &lt;li v-if=&quot;item.isShow&quot;&gt;&lt;p&gt;{{ item.name }}&lt;/p&gt;&lt;/li&gt;
  &lt;/template&gt;
&lt;/ul&gt;
</pre><p class="interview__text">2.\u8ACB\u8AAA\u660E\u5728 vue2 \u4E2D\uFF0C\u5F9E\u5B50 component \u4E2D\u900F\u904E props \u5411\u4E0A\u50B3\u905E\u503C\u7D66 parent \u7684\u8A2D\u7F6E\u8207\u89F8\u767C\u65B9\u5F0F\u3002</p><p class="interview__ans">ANS:</p><pre class="interview__code"><i class="interview__code_note">parent</i>
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

<i class="interview__code_note">\u5B50</i>
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
  &lt;p&gt;&lt;button @click=&quot;addFn&quot;&gt;num \u52A0 1&lt;/button&gt;&lt;/p&gt;
  &lt;p&gt;&lt;button @click=&quot;sendValToParent&quot;&gt;\u4E0A\u50B3\u905E\u503C\u7D66\u7236\u5C64&lt;/button&gt;&lt;/p&gt;
&lt;/template&gt;
</pre><p class="interview__text">3.\u4E0B\u9762\u662F\u4E00\u500B\u7C21\u55AE\u7684 api \u547C\u53EB method\uFF0C\u8ACB\u554F\u8A72 method \u88AB\u547C\u53EB\u6642\u6703\u6709\u4EC0\u9EBC\u932F\u8AA4\u6216 bug? </p><p class="interview__text">\u53C8\u70BA\u4EC0\u9EBC\u6703\u6709\u9019\u6A23\u7684\u932F\u8AA4\u5462\uFF1F\u53C8\u5982\u4F55\u4FEE\u6B63\uFF1F</p><pre class="interview__code">queryList(){
  axios.get(&#39;/xxxx/aaa/&#39;).then(function(res){
    this.mainData = res.data.list;
  }).catch(function(error){
    console.log(error);
  });
},
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">\u8A72\u65B9\u6CD5\u5728\u88AB\u547C\u53EB\u6642\u6703\u51FA\u73FE this \u662F undefined\uFF0C\u5C0E\u81F4 this.mainData = res.data.list; \u7121\u6CD5\u6B63\u78BA\u57F7\u884C\u3002</span><span class="interview__example_txt">\u932F\u8AA4\u7684\u539F\u56E0\u662F JavaScript \u4E2D this \u7684\u6307\u5411\u554F\u984C\u3002</span><span class="interview__example_txt">\u5728 Vue \u7D44\u4EF6\u7684 method \u4E2D\uFF0Cthis \u6307\u5411 Vue \u5BE6\u4F8B\u3002</span><span class="interview__example_txt">\u7136\u800C\uFF0C\u5728 axios.get().then() \u4E2D\u7684\u56DE\u8ABF\u51FD\u6578(function (res))\uFF0Cthis \u7684\u6307\u5411\u6703\u9ED8\u8A8D\u8B8A\u70BA undefined\u3002</span><span class="interview__example_txt"></span><span class="interview__example_txt"><i class="interview__example__note">\u5982\u4F55\u4FEE\u6B63\uFF1F</i></span><span class="interview__example_txt">1. \u4F7F\u7528\u7BAD\u982D\u51FD\u6578(\u63A8\u85A6)</span><span class="interview__example_txt">\u7BAD\u982D\u51FD\u6578\u4E0D\u6703\u5275\u5EFA\u81EA\u5DF1\u7684 this\uFF0C\u5B83\u6703\u6355\u7372\u5916\u5C64\u4F5C\u7528\u57DF\u7684 this\uFF0C\u56E0\u6B64\u53EF\u4EE5\u6B63\u78BA\u6307\u5411 Vue \u5BE6\u4F8B\u3002</span></p><pre class="interview__code">.then(res =&gt; {
  this.mainData = res.data.list; <i class="interview__code_note">// this \u6B63\u78BA\u6307\u5411 Vue \u5BE6\u4F8B</i>
}).catch(error =&gt; { console.log(error) });
</pre><p class="interview__example"><span class="interview__example_txt">2. \u5728\u5916\u5C64\u4FDD\u5B58 this(\u820A\u65B9\u6CD5)</span><span class="interview__example_txt">\u5728\u56DE\u8ABF\u51FD\u6578\u57F7\u884C\u4E4B\u524D\uFF0C\u7528\u4E00\u500B\u8B8A\u91CF\u4FDD\u5B58\u5916\u5C64\u7684 this\u3002</span></p><pre class="interview__code">const self = this; <i class="interview__code_note">// \u4FDD\u5B58 this</i>
axios.get(&#39;/xxxx/aaa/&#39;).then(function(res){
  self.mainData = res.data.list; <i class="interview__code_note">// \u4F7F\u7528\u4FDD\u5B58\u7684 this</i>
}).catch(function(error){ console.log(error) });
</pre><p class="interview__example"><span class="interview__example_txt">3. \u4F7F\u7528 bind() \u660E\u78BA\u7D81\u5B9A this</span><span class="interview__example_txt">\u624B\u52D5\u7528 .bind(this) \u660E\u78BA\u7D81\u5B9A this \u5230 Vue \u5BE6\u4F8B\u3002</span></p><pre class="interview__code">.then(function(res){
  this.mainData = res.data.list; <i class="interview__code_note">// this \u7D81\u5B9A\u5230 Vue \u5BE6\u4F8B</i>
}.bind(this)) <i class="interview__code_note">// \u7D81\u5B9A this</i>
.catch(function(error){ console.log(error) });
</pre><p class="interview__example"><span class="interview__example_txt">4. \u4F7F\u7528 async/await(\u53EF\u8B80\u6027\u9AD8)</span><span class="interview__example_txt">\u4F7F\u7528 async/await \u4F86\u66FF\u4EE3 then\uFF0C\u4E26\u78BA\u4FDD this \u7684\u6B63\u78BA\u6307\u5411\u3002</span></p><pre class="interview__code">async queryList(){
  try{
    const res = await axios.get(&#39;/xxxx/aaa/&#39;);
    this.mainData = res.data.list; <i class="interview__code_note">// this \u81EA\u7136\u6307\u5411 Vue \u5BE6\u4F8B</i>
  }catch(error){ console.log(error) }
},
</pre><p class="interview__text">4.\u5982\u4F55\u900F\u904E computed \u5BE6\u4F5C checkbox \u5217\u8868\u7684 \u5168\u9078 / \u53D6\u6D88\u5168\u9078 \u529F\u80FD\uFF0C\u9700\u8981\u5305\u542B\u7684\u529F\u80FD\u5982\u4E0B</p><ol class="interview__text"><li>\u52FE\u9078 \u5168\u9078 checkbox \u6642\uFF0C\u81EA\u52D5\u9078\u8D77\u6240\u6709\u6E05\u55AE</li><li>\u6240\u6709\u6E05\u55AE\u5099\u9078\u8D77\u4F86\u6642\uFF0C\u81EA\u52D5\u52FE\u9078\u5168\u9078 checkbox</li><li>\u53D6\u6D88\u5168\u9078 checkbox \u6642\uFF0C\u81EA\u52D5\u53D6\u6D88\u6240\u6709\u6E05\u55AE\u7684\u52FE\u9078</li><li>\u6240\u6709\u6E05\u55AE\u90FD\u662F\u52FE\u9078\u7684\u72C0\u614B\u4E0B\uFF0C\u53D6\u6D88\u6E05\u55AE\u5176\u4E2D\u4E00\u500B\uFF0C\u81EA\u52D5\u53D6\u6D88\u5168\u9078 checkbox</li></ol><p class="interview__ans">ANS:</p><pre class="interview__code"><i class="interview__code_note">vue2</i>
data(){
  return {
    checkArry:[
      {name:&#39;\u9805\u76EE1&#39;, isSelect:false, id:Math.random()},
      {name:&#39;\u9805\u76EE2&#39;, isSelect:false, id:Math.random()},
      {name:&#39;\u9805\u76EE3&#39;, isSelect:false, id:Math.random()},
      {name:&#39;\u9805\u76EE4&#39;, isSelect:false, id:Math.random()},
      {name:&#39;\u9805\u76EE5&#39;, isSelect:false, id:Math.random()}
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
        {name:&#39;\u9805\u76EE1&#39;, isSelect:false, id:Math.random()},
        {name:&#39;\u9805\u76EE2&#39;, isSelect:false, id:Math.random()},
        {name:&#39;\u9805\u76EE3&#39;, isSelect:false, id:Math.random()},
        {name:&#39;\u9805\u76EE4&#39;, isSelect:false, id:Math.random()},
        {name:&#39;\u9805\u76EE5&#39;, isSelect:false, id:Math.random()}
      ]),
      isAllSelect= computed({
        get(){ return checkArry.value.every(item =&gt; item.isSelect) },
        set(val){ checkArry.value.forEach(item =&gt; item.isSelect = val) }
      });

&lt;label for=&quot;checkAll&quot;&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;checkAll&quot; v-model=&quot;isAllSelect&quot;&gt;\u5168\u9078
&lt;/label&gt;
&lt;div&gt;
  &lt;label :for=&quot;&#39;checkList&#39;+idx&quot; v-for=&quot;(item,idx) in checkArry&quot; :key=&quot;item.id&quot;&gt;
    &lt;input type=&quot;checkbox&quot; :id=&quot;&#39;checkList&#39;+idx&quot; v-model=&quot;item.isSelect&quot;&gt; {{ item.name }}
  &lt;/label&gt;
&lt;/div&gt;
</pre><p class="interview__example"></p><p class="interview__text">5.\u8ACB\u7C21\u55AE\u8AAA\u660E\u60A8\u5C0D vuex \u7684\u7406\u89E3\uFF0C\u5305\u542B vuex \u7684\u4F7F\u7528\u6642\u6A5F\u8207\uFF0Cvuex \u4E2D store, mutations, getters, actions, \u8207 modules \u7684\u4F5C\u7528</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">Vuex \u662F\u72C0\u614B\u7BA1\u7406\u6A21\u5F0F\uFF0C\u7528\u65BC\u96C6\u4E2D\u7BA1\u7406\u61C9\u7528\u4E2D\u7684\u5171\u4EAB\u72C0\u614B\u3002\u63D0\u4F9B\u5168\u5C40\u5B58\u5132(store)\uFF0C\u8B93\u7D44\u4EF6\u4E4B\u9593\u53EF\u4EE5\u9AD8\u6548\u5730\u5171\u4EAB\u6578\u64DA\uFF0C\u4E26\u89E3\u6C7A\u591A\u500B\u7D44\u4EF6\u9700\u8981\u5171\u540C\u7BA1\u7406\u72C0\u614B\u7684\u554F\u984C\u3002</span><span class="interview__example_txt">\u4F7F\u7528\u6642\u6A5F\uFF1A</span><span class="interview__example_txt">1. \u591A\u500B\u7D44\u4EF6\u9700\u8981\u5171\u4EAB\u72C0\u614B\u6642\uFF0C\u4F8B\u5982\u7528\u6236\u8A8D\u8B49\u8CC7\u8A0A\u3001\u8CFC\u7269\u8ECA\u6578\u64DA\u7B49\u3002</span><span class="interview__example_txt">2. \u9700\u8981\u8DE8\u7D44\u4EF6\u901A\u4FE1\u6642\uFF0C\u4F7F\u7528\u7236\u5B50\u901A\u4FE1(rops\u548Cemit\uFF0C\u53EF\u4EE5\u907F\u514D\u900F\u904Eprops\u548C\u4E8B\u4EF6\u9010\u5C64\u50B3\u905E\u6578\u64DA\uFF0C\u5F9E\u800C\u7C21\u5316\u72C0\u614B\u7BA1\u7406)\u6216\u5144\u5F1F\u7D44\u4EF6\u901A\u4FE1(\u4E8B\u4EF6\u7E3D\u7DDA)\u7684\u4EE3\u78BC\u96E3\u4EE5\u7DAD\u8B77\u6642\u3002</span><span class="interview__example_txt">3. \u61C9\u7528\u8F03\u70BA\u8907\u96DC\uFF0C\u9700\u8981\u96C6\u4E2D\u7BA1\u7406\u72C0\u614B\u6642\uFF0C\u8B93\u72C0\u614B\u8B8A\u5316\u900F\u660E\u5316\uFF0C\u53EF\u4EE5\u8FFD\u8E2A\u6BCF\u4E00\u6B21\u72C0\u614B\u7684\u8B8A\u66F4\uFF0C\u65B9\u4FBF\u8ABF\u8A66(\u63D0\u4F9B\u4E86 Actions \u548C Mutations\uFF0C\u53EF\u4EE5\u5C07\u72C0\u614B\u7684\u66F4\u65B0\u908F\u8F2F\u96C6\u4E2D\u7BA1\u7406\u3002)\u3002</span><span class="interview__example_txt">4. \u9700\u8981\u6301\u4E45\u5316\u67D0\u4E9B\u72C0\u614B\u6642</span><span class="interview__example_txt">State(\u72C0\u614B)\uFF1A\u5132\u5B58\u61C9\u7528\u7684\u72C0\u614B\u6578\u64DA\uFF0C\u662F\u552F\u4E00\u7684\u6578\u64DA\u6E90\uFF0C\u662F\u97FF\u61C9\u5F0F\u7684\uFF0C\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539\uFF0C\u5FC5\u9808\u901A\u904E mutations\u3002</span><span class="interview__example_txt">Mutations(\u8B8A\u66F4)\uFF1A\u7528\u65BC\u4FEE\u6539 state\uFF0C\u5FC5\u9808\u662F\u540C\u6B65\u51FD\u6578\uFF0C\u901A\u904E commit \u89F8\u767C\uFF0C\u7B2C1\u500B\u53C3\u6578\u662F state\uFF0C\u7B2C2\u500B\u662F commit\u50B3\u5165\u7684\u7B2C2\u500B\u53C3\u6578\u3002</span><span class="interview__example_txt">Actions(\u52D5\u4F5C)\uFF1A\u53EF\u4EE5\u5305\u542B\u7570\u6B65\u64CD\u4F5C\uFF0C\u901A\u904E dispatch \u89F8\u767C\uFF0C\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539 state\uFF0C\u9700\u8981\u901A\u904E commit \u89F8\u767C mutations \u4F86\u4FEE\u6539\u72C0\u614B\uFF0C\u53EF\u4EE5\u5305\u542B\u8907\u96DC\u7684\u696D\u52D9\u908F\u8F2F\u3002</span><span class="interview__example_txt">Getters(\u7372\u53D6\u5668)\u53EF\u4EE5\u8A8D\u70BA\u662F store \u7684\u8A08\u7B97\u5C6C\u6027\uFF0C\u53EF\u4EE5\u5C0D state \u9032\u884C\u52A0\u5DE5\uFF0C\u53EF\u4EE5\u63A5\u6536\u5176\u4ED6 getters \u4F5C\u70BA\u7B2C\u4E8C\u500B\u53C3\u6578\uFF0C\u7D50\u679C\u6703\u88AB\u7DE9\u5B58\u3002</span><span class="interview__example_txt">Modules(\u6A21\u584A)\uFF1A\u7528\u65BC\u5C07 store \u5206\u5272\u6210\u6A21\u584A\uFF0C\u6BCF\u500B\u6A21\u584A\u53EF\u4EE5\u6709\u81EA\u5DF1\u7684 state\u3001mutations\u3001actions\u3001getters\uFF0C\u53EF\u4EE5\u901A\u904E namespaced \u5BE6\u73FE\u547D\u540D\u7A7A\u9593\u9694\u96E2\uFF0C\u6709\u52A9\u65BC\u7BA1\u7406\u5927\u578B\u61C9\u7528\u7684\u72C0\u614B\u3002</span><span class="interview__example_txt">\u6700\u4F73\u5BE6\u8E10\uFF1A</span><span class="interview__example_txt"> 1. \u5408\u7406\u5283\u5206\u6A21\u584A</span><span class="interview__example_txt"> 2. \u4FDD\u6301 mutations \u7C21\u55AE\u7D14\u7CB9</span><span class="interview__example_txt"> 3. \u8907\u96DC\u908F\u8F2F\u653E\u5728 actions</span><span class="interview__example_txt"> 4. \u5584\u7528 getters \u8655\u7406\u6578\u64DA</span></p><pre class="interview__code">import { createStore } from &quot;vuex&quot;;
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
  namespaced: true,
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
<i class="interview__code_note">// \u7D44\u4EF6\u4E2D\u4F7F\u7528</i>
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
</pre>`,76);function s(a,_){return i}const r=e(n,[["render",s]]);export{r as default};
