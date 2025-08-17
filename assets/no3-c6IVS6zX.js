import{_ as s,g as i}from"./index-Cx30kA3y.js";const t={};function _(n,e){return e[0]||(e[0]=i(`<h3 class="interview__title">崴拓資訊有限公司</h3><p class="interview__text">1.以下關於let和const的說法中，請選出正確的。(可複選)</p><p class="interview__text">(a) let聲明的變數值和類型都可以改變。(X)</p><p class="interview__text">(b) const聲明的常量不可以改變。(X)</p><p class="interview__text">(c) 兩者都不存在變量提升，同時存在暫時性死區，只能在聲明的位置後面使用。(O)</p><p class="interview__text">(d) const可以先聲明再初始化，可以後賦值。(X)</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"> (a) let允許值改變，但不建議改變類型 <br> let x = 10; <br> x = 20; <i class="interview__example__note">// 正確：值可以改變</i><br> x = &quot;hello&quot;; <i class="interview__example__note">//不推薦：雖然可以，但會改變類型</i></span><span class="interview__example_txt"> (b) 原始類型完全不可變；複雜類型可以修改內部內容，但不能重新賦值 <br> const num = 10; <i class="interview__example__note">// 完全不可變</i><br> num = 20; <i class="interview__example__note">// 錯誤</i><br> const arr = [1, 2, 3]; <br> arr.push(4); <i class="interview__example__note">// 可以修改內容</i><br> arr = [5, 6]; <i class="interview__example__note">// 錯誤：不能重新賦值</i></span><span class="interview__example_txt"> (d) const x; <i class="interview__example__note">// 錯誤：必須立即初始化</i><br> x = 10; <i class="interview__example__note">// 錯誤：不能後賦值</i><br> const y = 10; <i class="interview__example__note">// 正確的初始化方式</i></span></p><p class="interview__text">2.請問執行以下程式後，會照順序列印出什麼內容？</p><pre class="interview__code">myName = &#39;global&#39;
function func(){
  console.log(myName)
  var myName = &#39;local&#39;
  console.log(myName)
}
func()
console.log(myName)
</pre><p class="interview__text"></p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">第一個console.log(myName)會輸出 undefined</span><span class="interview__example_txt">這是因為var myName被提升到函數作用域的頂部，變量聲明被提升，但初始化不會被提升</span></p><pre class="interview__code">  function func() {
    var myName; <i class="interview__code_note">//變量聲明被提升</i>
    console.log(myName); <i class="interview__code_note">//此時myName是undefined</i>
    myName = &#39;local&#39;;
    console.log(myName);
  }
</pre><p class="interview__example"><i class="interview__example__note">undefined</i><span class="interview__example_txt">第二個 console.log(myName) 會輸出&#39;local&#39;，此時myName已經被賦值</span><i class="interview__example__note">&#39;local&#39;</i><span class="interview__example_txt">最後的 console.log(myName) 會輸出&#39;global&#39;，因為全局作用域中的myName不變</span><i class="interview__example__note">&#39;global&#39;</i></p><p class="interview__text">3.請問執行以下程式後，會照順序列印出什麼內容？</p><pre class="interview__code">var fullName = &#39;Peter&#39;,
    age = 30,
    obj = {
      fullName: &#39;Peter&#39;,
      age: 18,
      prop:{
        getFullName:function(){ return this.fullName; }
      },
      getAge:() =&gt; { return this.age; }
    };
console.log(obj.prop.getFullName()); 
console.log(obj.getAge());
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"> 第一個console.log，getFullName是普通函數(非箭頭函數)，作為物件方法調用時， <br> this指向直接調用的物件，這裡this指向obj.prop，obj.prop沒有fullName屬性 </span><span class="interview__example_txt">結果將輸出 <i class="interview__example__note">undefined</i></span><span class="interview__example_txt"> 第二個console.log，getAge是箭頭函數，箭頭函數的this是在定義時綁定的，此處this指向全域物件(瀏覽器中的window) </span><span class="interview__example_txt">全域作用域中的 <i class="interview__example__note">this.age是30</i></span></p><p class="interview__text">4.請問執行以下程式後，會照順序列印出什麼內容？</p><pre class="interview__code">setTimeout(() =&gt; console.log(&#39;A&#39;),100)
new Promise(resolve =&gt; {
  console.log(&#39;B&#39;)
  resolve()
}).then(() =&gt; console.log(&#39;C&#39;))
setTimeout(() =&gt; console.log(&#39;D&#39;),0)
async function main(){
  await Promise.resolve()
  console.log(&#39;E&#39;)
}
main()
console.log(&#39;F&#39;)
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">執行順序解析：</span><span class="interview__example_txt"> 1.首先執行同步程式碼： <br> console.log(&#39;B&#39;)立即執行 <br> main()被調用 <br> console.log(&#39;F&#39;)立即執行 </span><span class="interview__example_txt"> 2.排隊任務： <br> Promise的then回調進入微任務隊列 <br> await後面的Promise.resolve()也進入微任務隊列 <br> 兩個setTimeout進入宏任務隊列 </span><span class="interview__example_txt"> 3.執行詳細步驟： <br> 執行console.log(&#39;B&#39;) - 同步 <br> 執行console.log(&#39;F&#39;) - 同步 <br> 執行Promise的then回調console.log(&#39;C&#39;) - 微任務 <br> 執行await後的console.log(&#39;E&#39;) - 微任務 <br> 執行setTimeout(() =&gt; console.log(&#39;D&#39;), 0) - 宏任務 <br> 執行setTimeout(() =&gt; console.log(&#39;A&#39;), 100) - 宏任務 </span><span class="interview__example_txt"><i class="interview__example__note">B F C E D A</i></span></p><p class="interview__text">5.請問下題印出來的結果</p><pre class="interview__code">for(var i=1; i&lt;= 3; i++){
  setTimeout(() =&gt; {
    console.log(i)
  },0)
}
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">setTimeout 是異步函數，會在事件循環的下一個階段執行，當 setTimeout 回調函數執行時，迴圈已經執行完畢，此時 i 已經被遞增到 4</span><span class="interview__example_txt"><i class="interview__example__note">3個 setTimeout 回調都會印出 4</i></span></p><p class="interview__text">6.請問下題印出來的結果</p><pre class="interview__code">function runAsync(x){
  const p = new Promise(r =&gt; setTimeout(() =&gt; r(x, console.log(x)), 1000)) 
  return p
}
Promise.all([runAsync(1),runAsync(2),runAsync(3)]).then(res =&gt; console.log(res))
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"> 1.runAsync(x) 函數： <br> 這個函數接受參數x，並回傳一個 Promise。 <br> 在 Promise 建構函式中，使用 setTimeout 來模擬非同步操作，延遲1秒後執行。 <br> setTimeout 回調函數會調用 r(x,console.log(x)) <br> 這裡有兩個問題： <br> console.log(x) 會立即印出x值。 <br> r(x,...) 只會將x作為第1個參數傳遞給 resolve 函數，但第2個參數 (console.log(x) 的回傳值，即 undefined) 不會被使用。 </span><span class="interview__example_txt"> 2.調用 Promise.all(...) 並會行執行3個 runAsync 調用。 <br> 每個調用都會在1秒後解析，並傳回一個數組，其中包含每個 Promise 的解析結果。 </span><span class="interview__example_txt"> 3.執行順序 <br> 當調用 runAsync(1)、runAsync(2)和runAsync(3) 时，3個 Promise 開始運作並設置定計時器。 <br> 在大約1秒後，所有的定時器都會觸發，分別列印出1,2,和3。 <br> 然後，所有的 Promise 被解析，並且它們的結果(即每個 Promise 的第1個參數)將被收集到一個陣列中。 </span><span class="interview__example_txt"> 最終輸出 <br><i class="interview__example__note">1<br>2<br>3<br>[ 1, 2, 3 ]</i></span></p><p class="interview__text">7.請實踐陣列扁平化 (flatten)，完成圖中的flattenDeep function。</p><pre class="interview__code">let array = [1, 2, [3, [4, 5, [6, 7, [8]]]]];
function flattenDeep(arr){
  ...
}
const flattenArray = flattenDeep(array);
console.log(flattenArray); <i class="interview__code_note">//[1,2,3,4,5,6,7,8]</i>
</pre><p class="interview__ans">ANS:</p><pre class="interview__code">return arr.flat(Infinity);

<i class="interview__code_note">或</i>

function flattenDeep(arr){
  const stack = [...arr], result = [];
  while(stack.length){
    const next = stack.pop();
    if(Array.isArray(next)){
      <i class="interview__code_note">//如果是陣列，將其元素重新放入stack中</i>
      stack.push(...next);
    }else{
      <i class="interview__code_note">//如果是普通元素，加入result</i>
      result.unshift(next);
    }
  }
  return result;
}
</pre><p class="interview__text">8. 請完成下列function</p><pre class="interview__code">times(2)(5); <i class="interview__code_note">=&gt; 回傳10</i>
</pre><p class="interview__ans">ANS:</p><pre class="interview__code">function times(a){
  return function(b){
    return a * b;
  }
}
<i class="interview__code_note">或</i>
const times = a =&gt; b =&gt; a * b;
console.log(times(2)(5)); <i class="interview__code_note">//輸出 10</i>
</pre><p class="interview__text">9.React 或 Vue 組件中，溝通的方式有哪些，可以達到互相傳遞資料的目的。</p><p class="interview__ans">ANS:</p><div class="interview__table interview__table-s"><ul class="interview___hd"><li class="interview___hd_grid">溝通方式</li><li class="interview___hd_grid">Vue</li><li class="interview___hd_grid">React</li></ul><ul class="interview___bd"><li class="interview___bd_grid">父向子傳遞資料</li><li class="interview___bd_grid">Props</li><li class="interview___bd_grid">Props、State 提升</li></ul><ul class="interview___bd"><li class="interview___bd_grid">子向父傳遞資料</li><li class="interview___bd_grid">emit</li><li class="interview___bd_grid">回調函數</li></ul><ul class="interview___bd"><li class="interview___bd_grid">跨層級溝通</li><li class="interview___bd_grid">provide、inject</li><li class="interview___bd_grid">Context API</li></ul><ul class="interview___bd"><li class="interview___bd_grid">全域狀態管理</li><li class="interview___bd_grid">Vuex、Pinia</li><li class="interview___bd_grid">Redux、MobX</li></ul><ul class="interview___bd"><li class="interview___bd_grid">組件雙向綁定</li><li class="interview___bd_grid">v-model ( defineModel() )</li><li class="interview___bd_grid"></li></ul></div><p class="interview__text">10.為什麼 React or Vue 渲染列表時需要加上 key ?</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">加 key 動態綁定&quot;資料與 dom 元素&quot;在一起，當改變某個資料時它就會只改變那個資料，就不會全部重新渲染。</span><span class="interview__example_txt">但動態資料不要拿索引 idx 來當 key ，要找唯一的值當 key。 </span></p><p class="interview__text">11.請簡單解釋Redux(React) or Vue(Pinia) 的工作流程。</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">Vue(Pinia)</span><span class="interview__example_txt">1. <i class="interview__example__note">State</i> 就是 ref( )：當前 store 的資料，不推薦直接寫入，希望透過 Action 寫入</span><span class="interview__example_txt">2. <i class="interview__example__note">Getter</i> 就是 computed( )：重新計算資料</span><span class="interview__example_txt">3. <i class="interview__example__note">Action</i> 就是 function( )：專門用來寫入資料，處理非同步相關的動作</span></p><p class="interview__example"><span class="interview__example_txt">Redux(React)</span><span class="interview__example_txt">1. 定義初始 State</span><span class="interview__example_txt">2. 創建 Action Types</span><span class="interview__example_txt">3. 編寫 Action Creators</span><span class="interview__example_txt">4. 實作 Reducer 處理 State 變化</span><span class="interview__example_txt">5. 使用 useDispatch 觸發 Action</span><span class="interview__example_txt">6. 使用 useSelector 獲取 State</span></p><p class="interview__text">12.說明debounce與throttle的差異</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">debounce 和 throttle 都是用於控制函數執行頻率的技術，但它們的應用場景和工作方式有所不同</span><span class="interview__example_txt"><i class="interview__example__note">防抖函數：debounce(functionName,delayTime)</i></span><span class="interview__example_txt">目的：需要頻繁觸發的函數，在規定時間內，只讓最後1次(delayTime後)生效，前面不生效</span><span class="interview__example_txt">應用場景：搜索框輸入、視窗大小調整、表單提交</span></p><pre class="interview__code">const debounce = (fn,delay) =&gt; {
  let timeoutId = null;
  return () =&gt; {
    if(timeoutId) clearTimeout(timeoutId); <i class="interview__code_note">//清除上次延時</i>
    timeoutId = setTimeout(() =&gt; { <i class="interview__code_note">//重新設置延時</i>
      <i class="interview__code_note">// fn().apply(this); //修正this指向問題</i>
      fn();
    },delay);
  };
};
</pre><p class="interview__example"><span class="interview__example_txt"><i class="interview__example__note">函數節流：throttle(functionName,delayTime)</i></span><span class="interview__example_txt">目的：需要頻繁觸發的函數，出於優化性能，只讓函數觸發的第1次(和delayTime後)生效，後面不生效</span><span class="interview__example_txt">應用場景：滾動事件處理、遊戲中的按鍵重複、拖曳事件、即時渲染</span></p><pre class="interview__code">const throttle = (fn,delay) =&gt; {
  let inThrottle = false;
  return () =&gt; {
    if(!inThrottle){
      <i class="interview__code_note">// fn().call(this); //修正this指向問題</i>
      fn();
      inThrottle = true;
      setTimeout(() =&gt; inThrottle = false, delay);
    }
  };
};
</pre><p class="interview__text">13.localstorage ,sessionStorage ,cookie的區別。舉例在何種情況會相對應的方式</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">cookie、localstorage、sessionstorage 都是常見的瀏覽器暫存方案，會保存在用戶端(不可跨瀏覽器)</span><span class="interview__example_txt">key 跟 value 只能用 string 儲存，所以儲存字串以外的類型要用 JSON.stringify() 將對象(物件、陣列)轉換為字串存入，用 JSON.parse() 將json的字串轉換為對象(物件、陣列)取回 </span></p><div class="interview__table"><ul class="interview___head"><li class="interview___head_th"></li><li class="interview___head_th">Cookie</li><li class="interview___head_th">LocalStorage</li><li class="interview___head_th">SessionStorage</li></ul><ul class="interview___body"><li class="interview___body_td">生命週期</li><li class="interview___body_td">可設定過期時間，瀏覽器關閉還會存在</li><li class="interview___body_td">瀏覽器關閉還會存在， 除非被清除，不然不會過期</li><li class="interview___body_td">每次分頁或瀏覽器關掉後就會清除</li></ul><ul class="interview___body"><li class="interview___body_td">作用域</li><li class="interview___body_td interview___body_td-long">同域名的所有視窗可共享，可以在主網域跟子網域共享</li><li class="interview___body_td">不可跨頁共享(只存在單一分頁中，如另開分頁就不存在)</li></ul><ul class="interview___body"><li class="interview___body_td">資料儲存大小</li><li class="interview___body_td interview___body_td-tac">不能超過 4KB</li><li class="interview___body_td interview___body_td-long">可達 5MB</li></ul><ul class="interview___body"><li class="interview___body_td">存儲位置</li><li class="interview___body_td">在客戶端和伺服器之間共享數據 + 使用 expires 屬性指定 Cookie 失效日期</li><li class="interview___body_td">只在客戶端長期儲存 + 無需與伺服器交互</li><li class="interview___body_td">只在客戶端 + 使用網頁期間暫存</li></ul><ul class="interview___body"><li class="interview___body_td">內容是否發送到伺服器端</li><li class="interview___body_td">每次請求時都會被夾帶在 HTTP header 中，保存過多數據會帶來效能問題</li><li class="interview___body_td interview___body_td-long">請求時並不會夾帶在 HTTP header 中，只保存本地(瀏覽器)，不與伺服器發生任何交互</li></ul><ul class="interview___body"><li class="interview___body_td">安全性</li><li class="interview___body_td">安全性較低，容易被竊取</li><li class="interview___body_td interview___body_td-long">相對安全，但易受XSS攻擊</li></ul><ul class="interview___body"><li class="interview___body_td">使用場景</li><li class="interview___body_td"><p class="interview___body__txt">常見的用途是識別是否有用戶登入。當用戶登入時，server 會在其 cookie 中儲存一個加密的 token 之後，只需檢查這個 token 即可確認 user 的登入狀態。</p><p class="interview___body__txt"><em class="interview___body___note">身份驗證</em>：保存使用者登入狀態(如Session ID或Token)以便後續請求中進行身份驗證。</p><p class="interview___body__txt"><em class="interview___body___note">追蹤使用者行為</em>：如分析使用者存取模式、記錄使用者偏好等。</p><p class="interview___body__txt"><em class="interview___body___note">跨網域請求中的身分資訊傳遞</em>：cookie可以在不同頁間共用，適合需要跨網域存取的場景。</p><p class="interview___body__txt"><em class="interview___body___note">判斷用戶是否登錄</em>：針對登錄過的用戶，伺服器端會在他登錄時往 Cookie 插入一段加密過的辨識碼，下次只要讀取這個值就可以判斷用戶是否登錄。</p></li><li class="interview___body_td"><p class="interview___body__txt">LocalStorage取代了Cookie 在購物車管理上的角色，並且還能完成更多任務。</p><p class="interview___body__txt"><em class="interview___body___note">長期儲存使用者偏好設定</em>：如主題顏色、購物車管理、語言選擇等，這些資訊不需要頻繁更新。</p><p class="interview___body__txt"><em class="interview___body___note">快取不易變動的數據</em>：例如應用程式配置或靜態數據、HTML遊戲產生的數據，以減少伺服器請求。</p><p class="interview___body__txt"><em class="interview___body___note">跨頁面資料共享</em>：在同一網域下不同頁面之間共享資料。</p></li><li class="interview___body_td"><p class="interview___body__txt">可以先使用 SessionStorage 暫存部分表單資料，user 要回上一頁就可以看到剛剛填寫好的表單內容還在，不用重新填寫。</p><p class="interview___body__txt"><em class="interview___body___note">暫時儲存表單輸入資料</em>：如在填寫多步驟表單時，可用來儲存使用者輸入的信息，以便使用者在頁面刷新後不遺失資料。</p><p class="interview___body__txt interview___body__txt-note">內容特別多的表單，為了提升用戶體驗，把表單頁面拆分成多個子頁面，然後按照步驟引導用戶。</p><p class="interview___body__txt"><em class="interview___body___note">1次性頁面資料</em>：如使用者登入狀態、臨時設定等，僅在目前頁面中有效。</p></li></ul></div><p class="interview__example"><span class="interview__example_txt">cookie：會被自動夾帶在 HTTP 請求中，在瀏覽器和伺服器間來回傳遞，所以常使用在需要辨識用戶的場景或追蹤使用者行為</span><span class="interview__example_txt">LocalStorage：可以永久保存不擔心遺失，可儲存用戶的偏好設置(操作方便友好)</span><span class="interview__example_txt">SessionStorage：刷新頁面仍保有原來數據、每個頁面間資料獨立，適合儲存多步驟表單流程(操作方便友好)</span></p><p class="interview__text">14.使用者在瀏覽器上輸入url後，到最後看到畫面呈現，請描述瀏覽器中間走了哪些過程。</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">當使用者在瀏覽器中輸入 URL 並按下 ENTER 後，會經歷一系列複雜的步驟，從發送請求到最終呈現網頁。</span><span class="interview__example_txt"><i class="interview__example__note">1. URL 解析</i></span><span class="interview__example_txt"> 瀏覽器將 URL 分解成不同的部分，例如：協議(Protocol)：http 或 https、主機名稱(Host)：www.google.com、路徑(Path)：/page、查詢參數(Query String)：?key=value </span><span class="interview__example_txt"><i class="interview__example__note">2. DNS 解析</i></span><span class="interview__example_txt"> 瀏覽器向 DNS 伺服器查詢 URL 中的主機名稱，將其轉換為對應的 IP 地址，如果 DNS 查詢結果已經緩存在本地或路由器中，則會直接使用緩存，否則會向上級 DNS 伺服器遞迴查詢。 </span><span class="interview__example_txt"><i class="interview__example__note">3. 建立 TCP 連線</i></span><span class="interview__example_txt"> 瀏覽器使用目標 IP 地址和端口號(預設 HTTP 為 80，HTTPS 為 443)與伺服器建立 TCP 連線，使用三次握手來建立連線：客戶端發送 SYN 封包、伺服器回應 SYN-ACK 封包、客戶端回應 ACK 封包。 </span><span class="interview__example_txt"><i class="interview__example__note">4. TLS/SSL 握手 (如果是 HTTPS)</i></span><span class="interview__example_txt"> 如果 URL 使用的是 HTTPS 協議，瀏覽器和伺服器會進行 TLS/SSL 握手以建立安全加密通道，這包括：驗證伺服器的數位憑證、協商加密算法和密鑰、建立加密通訊。 </span><span class="interview__example_txt"><i class="interview__example__note">5. 發送 HTTP 請求</i></span><span class="interview__example_txt"></span><span class="interview__example_txt"><i class="interview__example__note"></i></span><span class="interview__example_txt"></span> 瀏覽器構造 HTTP/HTTPS 請求 包含請求方法（GET/POST） 請求頭 可能攜帶 Cookie 等信息 <span class="interview__example_txt"></span> 发送请求：建立连接后，浏览器会向服务器发送一个HTTP请求，通常是GET请求，请求HTML文档4。请求中包含请求头信息，例如用户代理、接受的内容类型等。 <span class="interview__example_txt"></span> 瀏覽器組裝並發送 HTTP 請求給伺服器，請求內容包括： 請求方法 (如 GET、POST) 請求頭 (Headers)：包含瀏覽器資訊、Cookie、首選語言等。 請求主體 (Body)：通常用於 POST 請求中包含表單數據。 <span class="interview__example_txt"></span> 瀏覽器向伺服器發送請求： 瀏覽器會向伺服器發送 HTTP 請求，請求獲取網頁的資源。 HTTP 請求包含： 請求方法（GET、POST 等）、請求頭（包含用戶代理、Cookie 等資訊）、請求網址等。 <span class="interview__example_txt"></span><i class="interview__example__note"></i><span class="interview__example_txt">簡單的分析，從輸入 URL到回車後發生的行為如下： </span><span class="interview__example_txt"><i class="interview__example__note">URL 解析</i></span><span class="interview__example_txt"><i class="interview__example__note">DNS 查詢</i></span><span class="interview__example_txt"><i class="interview__example__note">TCP 連線</i></span><span class="interview__example_txt"><i class="interview__example__note">HTTP 請求</i></span><span class="interview__example_txt"><i class="interview__example__note">回應請求</i></span><span class="interview__example_txt"><i class="interview__example__note">頁面渲染</i></span></p><p class="interview__text">15.請描述event bubbling</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"> 事件冒泡 是一種 JavaScript 事件傳播的機制，當一個元素上的事件被觸發時，這個事件會從該元素開始，逐級向其祖先元素傳播，直到 document 層級。 </span><span class="interview__example_txt">簡單來說，當你點擊這個按鈕時，事件的傳播順序如下：</span><span class="interview__example_txt">1. 按鈕元素 首先接收到點擊事件</span><span class="interview__example_txt">2. .inner 接收到點擊事件</span><span class="interview__example_txt">3. .outer 接收到點擊事件</span><span class="interview__example_txt">4. document 接收到點擊事件</span></p><pre class="interview__code">&lt;div class=&quot;outer&quot;&gt;
  &lt;div class=&quot;inner&quot;&gt;
    &lt;button&gt;按鈕&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre><p class="interview__example"><span class="interview__example_txt">阻止冒泡：使用event.stopPropagation()</span></p><pre class="interview__code">const button = document.querySelector(&#39;button&#39;);
button.addEventListener(&#39;click&#39;,e =&gt; {
  console.log(&#39;button click&#39;);
  e.stopPropagation(); <i class="interview__code_note">//阻止事件冒泡</i>
});
</pre><p class="interview__text">16.請描述出你所了解的css box model</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"> CSS Box Model由四個主要部分組成：內容(Content)、內距(Padding)、邊框(Border)和外距(Margin) </span><span class="interview__example_txt"> box-sizing:border-box; <i class="interview__example__note">寬等於：width + padding + border 、 高等於：height + padding + border</i></span><span class="interview__example_txt"> box-sizing:content-box; <i class="interview__example__note">寬等於：width 、 高等於：height</i></span></p><p class="interview__text">17.請說明 relative, fixed, absolute and static positioned element 的差異?</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">static(靜態定位)：</span><span class="interview__example_txt"><i class="interview__example__note">值預設，無法定義 top、left、bottom、right、z-index</i></span><span class="interview__example_txt">relative(相對定位)：</span><span class="interview__example_txt"><i class="interview__example__note">與 static 位置相同，可定義 top、left、bottom 、right、z-index</i></span><span class="interview__example_txt">absolute(絕對定位)：</span><span class="interview__example_txt"><i class="interview__example__note">從父層向外找有設置 relative 的元素為定位基準，若都沒有則會根據 html 定位，可定義 top、left、bottom 、right、z-index</i></span><span class="interview__example_txt">fixed(固定定位)：</span><span class="interview__example_txt"><i class="interview__example__note">以目前瀏覽器視窗定位，可定義 top、left、bottom 、right、z-index</i></span><span class="interview__example_txt">sticky(黏貼定位)：</span><span class="interview__example_txt"><i class="interview__example__note"> 結合了 relative 與 fixed 兩大特性，在頁面滾動到特定點時，才會 fixed 在特定的位置(設定 top、left、bottom 、right 值來讓該物件呈現 fixed 在視窗的效果)， 其所能 fixed 的空間是該物件的父層空間，當視窗往下捲到超過物件的父層空間時，則不會再呈現 fixed 的效果，而是會被捲離視窗範圍。但頁面回滾到元素的原始位置，元素就會恢復到相對定位。 </i></span></p><p class="interview__text">18.請問User1和User2分別是什麼型別。</p><p class="interview__ans">ANS:</p><pre class="interview__code">interface UserProfile {
  id: number;
  username: string;
  email: string;
  age: number; 
  bio: string;
}
interface User1 extends Omit&lt;UserProfile, &#39;email&#39;&gt; {}
interface User2 extends Pick&lt;UserProfile, &#39;username&#39; | &#39;bio&#39;&gt; {}

<i class="interview__code_note">// 改寫為 type 版本</i>
type UserProfile2 = {
  id: number;
  username: string;
  email: string;
  age: number;
  bio: string;
};

<i class="interview__code_note">// User1 的 type 版本 (Omit)</i>
type User1Type = Omit&lt;UserProfile2, &#39;email&#39;&gt;;

<i class="interview__code_note">// User2 的 type 版本 (Pick)</i>
type User2Type = Pick&lt;UserProfile2, &#39;username&#39; | &#39;bio&#39;&gt;;
</pre><p class="interview__example"><span class="interview__example_txt"><i class="interview__example__note">TypeScript 型別操作關鍵字</i></span><span class="interview__example_txt"><i class="interview__example__note">interface：定義1個介面，描述了1個物件的結構。</i></span><span class="interview__example_txt"><i class="interview__example__note">extends：表示1個介面繼承自另1個介面，子介面包含父介面的所有屬性，並且可新增或覆蓋屬性。</i></span><span class="interview__example_txt"><i class="interview__example__note">Omit&lt;Type, Keys&gt;：從型別 Type 中移除屬性 Keys，並生成一個新的型別。</i></span><span class="interview__example_txt"><i class="interview__example__note">Pick&lt;Type, Keys&gt;：從型別 Type 中選取屬性 Keys，並生成一個新的型別。</i></span><span class="interview__example_txt">UserProfile：是基礎的使用者配置文件介面，包含了使用者 ID、名稱、電子郵件、年齡和簡介等資訊。</span><span class="interview__example_txt">User1：繼承自 UserProfile，但省略了 email 屬性。</span><span class="interview__example_txt">User2：繼承自 UserProfile，只包含了 username 和 bio 屬性。</span><span class="interview__example_txt"></span></p><pre class="interview__code"><i class="interview__code_note">// User1 型別</i>
{
  id:number;
  username:string;
  age:number;
  bio:string;
}
<i class="interview__code_note">// User2 型別</i>
{
  username:string;
  bio:string;
}
</pre><p class="interview__text">19.當遇到頁面回覆速度緩慢，你會從那些方面去做效能優化?</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"><i class="interview__example__note">1. 圖片優化</i></span><span class="interview__example_txt">壓縮圖片：使用工具壓縮圖片檔案大小，可以考慮使用WebP格式，或是非透明圖片的檔案使用.jpg而非.png。</span><span class="interview__example_txt">使用適當的圖片尺寸：確保圖片的尺寸與顯示需求相匹配，避免載入過大的圖片。</span><span class="interview__example_txt">2. 程式碼優化<i class="interview__example__note"></i></span><span class="interview__example_txt">壓縮HTML、CSS和JavaScript，刪除未使用的CSS和JavaScript</span><span class="interview__example_txt"></span><span class="interview__example_txt"><i class="interview__example__note">3. 啟用快取</i></span><span class="interview__example_txt"></span><span class="interview__example_txt"><i class="interview__example__note">4. 減少HTTP請求</i></span><span class="interview__example_txt"></span><span class="interview__example_txt"><i class="interview__example__note">5. 使用非同步加載</i></span><span class="interview__example_txt">減少 JavaScript 阻塞：使用 async 或 defer 屬性非同步載入 JavaScript。</span><span class="interview__example_txt"><i class="interview__example__note">6. 提升頁面結構與 SEO</i></span><span class="interview__example_txt">減少 DOM 複雜度：減少嵌套層級優化結構，減少頻繁使用 JavaScript操作 DOM，優化動畫。</span><span class="interview__example_txt"><i class="interview__example__note"></i></span><span class="interview__example_txt">資源載入優化</span><span class="interview__example_txt">CSS Image Sprites</span><span class="interview__example_txt">Lazy Loading 延遲載入圖片、影片或非必要的資源。</span><br><span class="interview__example_txt">1. 減小入口文件積</span><span class="interview__example_txt">在 vue-router 配置路由的時候，採用動態載入路由的形式</span><span class="interview__example_txt">component: () =&gt; import(&#39;@/pages/About.vue&#39;)</span><span class="interview__example_txt">以函數的形式載入路由，這樣就可以把各自的路由檔案分別打包，只有在解析給定的路由時，才會載入路由元件</span><span class="interview__example_txt">2. 靜態資源本地緩存</span><span class="interview__example_txt">後端返回資源問題：採用HTTP緩存，設置Cache-Control，Last-Modified，Etag等響應頭，採用Service Worker離線緩存</span><span class="interview__example_txt">前端合理利用localStorage</span><span class="interview__example_txt">3. UI框架按需加載</span><span class="interview__example_txt">在日常使用UI框架，我們經常性地直接引用整個UI庫，輸入我們要按需引用的</span><span class="interview__example_txt">4. 組件重複打包</span><span class="interview__example_txt">假設A.js文件是一個常用的庫，現在有多個路由使用了A.js文件，這就造成了重複下載</span><span class="interview__example_txt">解決方案：在webpack的config檔案中，修改CommonsChunkPlugin的配置</span><span class="interview__example_txt">minChunks: 3</span><span class="interview__example_txt">minChunks為3表示會把使用3次及以上的包抽離出來，放進公共依賴文件，避免了重複加載組件</span><span class="interview__example_txt">5. 圖片資源的壓縮</span><span class="interview__example_txt">6. 組件重複打包</span><span class="interview__example_txt">7. 開啟GZip壓縮</span><span class="interview__example_txt">8. 使用SSR</span><span class="interview__example_txt">SSR(Server side)，也就是服務端渲染，元件或頁面透過伺服器產生html字串，再傳送到瀏覽器</span><span class="interview__example_txt">從頭建立一個服務端渲染是很複雜的，vue應用建議使用Nuxt.js實作服務端渲染</span></p><p class="interview__text">20.webpack中plugin與loader的區別?</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">如果需要處理資源文件（如 CSS、圖片等），應使用 Loader。</span><span class="interview__example_txt">如果需要自定義構建過程或優化打包過程，應使用 Plugin。</span><span class="interview__example_txt">Loader 解決資源處理問題，Plugin 擴展構建功能</span></p>`,86))}const l=s(t,[["render",_]]);export{l as default};
