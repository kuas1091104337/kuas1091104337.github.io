import{_ as e,g as n}from"./index-Cx30kA3y.js";const s={};function i(a,t){return t[0]||(t[0]=n(`<p class="interview__text"> 1.There is an array, each item has such format(有一個數組，每一項的格式如下) : {firstName: &#39;xxx&#39;, lastName: &#39;xxx&#39;, customerID: &#39;xxx&#39;, note: &#39;xxx&#39;, profession: ‘xxx’} <strong>lastName, note</strong> can be empty(可以為空), <strong>customerID</strong> can only be a set of digital numbers(只能是一組數字). <strong>profession</strong> can only have(只能有) ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’. </p><p class="interview__text"> Q1. Please follow the principle(請依照) (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out(的原則對此陣列進行排序並列印出來). </p><p class="interview__ans">ANS:</p><pre class="interview__code">function sortUserName(user){
  if(!Array.isArray(user)){
    console.error(&quot;Input must be an array&quot;); 
    return;
  } 
  return user.sort((a, b) =&gt; {
    <i class="interview__code_note">// 先按 firstName + lastName 排序</i>
    const nameA = a.firstName + (a.lastName || &#39;&#39;);
    const nameB = b.firstName + (b.lastName || &#39;&#39;);
    const nameComparison = nameA.localeCompare(nameB);
    if(nameComparison !== 0) return nameComparison;
    <i class="interview__code_note">// 姓名相同時，按 customerID 數字大小排序</i>
    return Number(a.customerID) - Number(b.customerID);
  });
}
const users = [ 
 {firstName:&quot;John&quot;,lastName:&quot;Smith&quot;,customerID:123,note:&quot;&quot;,profession:&quot;engineer&quot;},
 {firstName:&quot;Alice&quot;,lastName:&quot;&quot;,customerID:100,note:&quot;note1&quot;,profession:&quot;student&quot;},
 {firstName:&quot;Bob&quot;,lastName:&quot;Brown&quot;,customerID:300,note:&quot;note2&quot;,profession:&quot;freelancer&quot;},
 {firstName:&quot;John&quot;,lastName:&quot;Smith&quot;,customerID:122, note:&quot;&quot;,profession:&quot;engineer&quot;},
 {firstName:&quot;Eve&quot;,lastName:&quot;&quot;,customerID:123,note:&quot;&quot;,profession:&quot;systemAnalytics&quot;} 
]; 
sortUserName(users)
</pre><p class="interview__text"> Q2. Please sort by ‘profession’ to follow the principle(請依「職業」排序以遵循原則). </p><p class="interview__text"> (‘systemAnalytics’ &gt; ‘engineer’ &gt; ‘productOwner’ &gt; ‘freelancer’ &gt; ‘student’) </p><p class="interview__ans">ANS:</p><pre class="interview__code">function sortByType(user){
 const professionSort = { systemAnalytics:5, engineer:4, productOwner:3, freelancer:2, student:1 }; 
 return user.sort((a, b) =&gt; {
  const rankA = professionSort[a.profession] || 0;
  const rankB =  professionSort[b.profession] || 0;
  return rankB - rankA;
 }); 
}
sortByType(users)
</pre><p class="interview__text">2. </p><pre class="interview__code">// HTML
&lt;div class=&quot;container&quot;&gt;
 &lt;div class=&quot;header&quot;&gt;5/8 外出確認表&lt;/div&gt;
  &lt;div class=&quot;content&quot;&gt;
    &lt;ol class=&quot;shop-list&quot;&gt;
      &lt;li class=&quot;item&quot;&gt;麵包&lt;/li&gt;  &lt;li class=&quot;item&quot;&gt;短袖衣服&lt;/li&gt;  &lt;li class=&quot;item&quot;&gt;飲用水&lt;/li&gt;  &lt;li class=&quot;item&quot;&gt;帳篷&lt;/li&gt; 
    &lt;/ol&gt;
    &lt;ul class=&quot;shop-list&quot;&gt;
      &lt;li class=&quot;item&quot;&gt;暈車藥&lt;/li&gt;  &lt;li class=&quot;item&quot;&gt;感冒藥&lt;/li&gt; &lt;li class=&quot;item&quot;&gt;丹木斯&lt;/li&gt;  &lt;li class=&quot;item&quot;&gt;咳嗽糖漿&lt;/li&gt; 
    &lt;/ul&gt;
  &lt;/div&gt; 
  &lt;div class=&quot;footer&quot;&gt;以上僅共參考&lt;/div&gt; 
&lt;/div&gt;
// CSS
.container {font-size: 14px; } 
.container .header {font-size: 18px; } 
.container .shop-list { list-style: none; margin-left: -15px; } 
.container .shop-list li.item { color: green; } 
<i class="interview__code_note">Q1. Explain why does this color not works, and how to fix make it work on 1st list</i>
<i class="interview__code_note">解釋為什麼這種顏色不起作用，以及如何修復使其在第一個列表中起作用</i>
.container .shop-list .item { color: blue; } 
</pre><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"> 1.因為.container .shop-list li.item 的選取器權重比 .container .shop-list .item多了li，所以color是green。 </span><span class="interview__example_txt"> 2.如何修復使其在第一個列表中起作用，將 .container .shop-list .item 改成 .container ol.shop-list .item{color: blue;} </span><span class="interview__example_txt">利用後壓前的權重使1st list是藍色</span></p><p class="interview__text"> Q2. Write styling make every other line give background color to next one (編寫樣式使每隔一行都為下一行提供背景顏色) </p><p class="interview__ans">ANS:</p><pre class="interview__code"><i class="interview__code_note">加入偽元素選擇器</i>
.container .shop-list .item:nth-of-type(even){background-color: #fff2cc;}
</pre><p class="interview__text"> 3. let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1]; </p><p class="interview__text"> Please write down a function to console log unique value from this array. (請寫下一個函數來控制記錄該陣列的唯一值) </p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"> 同 Wow Gaming 3. </span></p><p class="interview__text"> 4. What is different between &lt;section&gt; and &lt;article&gt;, can you make an example how you will be using it? &lt;section&gt; 和 &lt;article&gt; 之間有什麼不同，您能舉例說明如何使用它嗎？ </p><p class="interview__ans">ANS:</p><div class="interview__table interview__table-m"><ul class="interview___hd"><li class="interview___hd_grid"></li><li class="interview___hd_grid">section</li><li class="interview___hd_grid">article</li></ul><ul class="interview___bd"><li class="interview___bd_grid interview___bd_grid-tac">目的</li><li class="interview___bd_grid">內容的主題分組</li><li class="interview___bd_grid">獨立的組合</li></ul><ul class="interview___bd"><li class="interview___bd_grid interview___bd_grid-tac">與其他元素的關係</li><li class="interview___bd_grid">可以包含其他部分、文章或其他內容</li><li class="interview___bd_grid">通常是獨立的</li></ul><ul class="interview___bd"><li class="interview___bd_grid interview___bd_grid-tac">可重複使用性</li><li class="interview___bd_grid">可以在頁面內重複使用</li><li class="interview___bd_grid">可以獨立分發或重複使用</li></ul></div><p class="interview__text"> 5. Please explain about what is CSS boxing model and the layout components that it consists of. (請解釋一下什麼是 CSS boxing model 以及它由哪些佈局元件組成) </p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"> CSS Box Model由四個主要部分組成：內容(Content)、內距(Padding)、邊框(Border)和外距(Margin) </span><span class="interview__example_txt"> box-sizing:border-box; <i class="interview__example__note">寬等於：width + padding + border 、 高等於：height + padding + border</i></span><span class="interview__example_txt"> box-sizing:content-box; <i class="interview__example__note">寬等於：width 、 高等於：height</i></span></p><p class="interview__text"> 6. Can you explain CSS priority, and what principle are your used to writing CSS stylesheet. (能否解釋一下CSS優先級，以及您編寫CSS樣式表時遵循什麼原則) </p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"><i class="interview__example__note"></i></span><span class="interview__example_txt"> 1. !important 最高優先級，會覆蓋所有其他樣式 </span><span class="interview__example_txt"> 2. 行內樣式style=&quot;&quot; &gt; id選擇器(#main) &gt; 類選擇器(.head)/偽類選擇器(:hover)/屬性選擇器([class^=&quot;list&quot;]) &gt; 元素(ul)/偽元素選擇器(:before) </span><span class="interview__example_txt"> 3. 層疊規則，相同屬性，後面的樣式會覆蓋前面的 </span><span class="interview__example_txt"> 4. 我工作上常用的 CSS 樣式原則主要自已改良後的 BEM 寫法，如 </span><span class="interview__example_txt"> a.元素層級：避免只是版排就用了超過三層的css選取器 </span><span class="interview__example_txt"> b.元素狀態：在-後面的狀態加入menu在open狀態或link在active狀態的style樣式，如此可必免css子代選取器複雜的樣式干擾 </span></p><pre class="interview__code">.DAhead{
  &amp;_menu{
    &amp;-open{
      <i class="interview__code_note">// 寫menu在open狀態的style樣式</i>
      .DAhead_menu{
        &amp;_wrap{
          &amp;__item{}
        }
      }
    }
    &amp;___link{
      &amp;-active{
        <i class="interview__code_note">// 寫link在active狀態的style樣式</i>
      }
    }
  }
}

<i class="interview__code_note"></i>
</pre><p class="interview__text"> 7. Can you introducing some of Semantic HTML elements that you already know and how you used it ever, please make some example. (您能否介紹一些您已經知道的語義 HTML 元素以及您曾經如何使用它，請舉一些例子) </p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">header 網頁或文章的頁首</span><span class="interview__example_txt">nav 定義導航連結，內放 a link，通常會放 ul li 架構</span><span class="interview__example_txt">main 網頁的主要內容 </span><span class="interview__example_txt">article 網頁中的一篇文意</span><span class="interview__example_txt">section 定義文章中的章節，通常包含標題及內容</span><span class="interview__example_txt">pre 預格式文本，將以HTML檔案中的原樣呈現</span><span class="interview__example_txt">ol 有序列表</span><span class="interview__example_txt">ul 無序列表</span><span class="interview__example_txt">figure 引用區塊，裡面用來引用任何內容像是文字段落、圖片、圖表或程式碼片段等</span><span class="interview__example_txt">figcaption 用來說明該 figure 區塊的標題</span><span class="interview__example_txt">aside 側邊欄元素 </span><span class="interview__example_txt">footer 網頁或文章的頁尾，或section的頁腳 </span><span class="interview__example_txt">video 定義視頻 </span><span class="interview__example_txt"></span></p><pre class="interview__code">&lt;figure&gt;
 &lt;img src=&quot;/img/author1.jpg&quot;&gt;
 &lt;figcaption&gt;《春曉》作者：孟浩然&lt;/figcaption&gt;
 春眠不覺曉，處處聞啼鳥。夜來風雨聲，花落知多少。 
&lt;/figure&gt;
&lt;figure&gt;
 &lt;img src=&quot;/img/author2.jpg&quot;&gt;
 &lt;figcaption&gt;《夜思》作者：李白&lt;/figcaption&gt; 
 床前明月光，疑是地上霜。舉頭望明月，低頭思故鄉。
&lt;/figure&gt; 
&lt;video width=&quot;100%&quot; poster=&quot;封面圖片.png&quot; autoplay controls&gt; 
 &lt;source src=&quot;http://www.../movie.mp4&quot; type=&quot;video/mp4&quot;&gt; 
&lt;/video&gt;
</pre>`,33))}const l=e(s,[["render",i]]);export{l as default};
