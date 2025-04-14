import{_,g as e}from"./index-CNwOqUnJ.js";const t={};function l(n,i){return i[0]||(i[0]=e(`<h3 class="interview__title">Wow Gaming</h3><p class="interview__text">1.var、let、const的區别</p><div class="interview__table"><ul class="interview___head"><li class="interview___head_th">特性</li><li class="interview___head_th">var</li><li class="interview___head_th">let</li><li class="interview___head_th">const</li></ul><ul class="interview___body"><li class="interview___body_td">作用域</li><li class="interview___body_td interview___body_td-tac"> 函數作用域 <br> 它的作用域限制在函數內部，而不是塊作用域內部(如 if、for 等)。 </li><li class="interview___body_td interview___body_td-long"> 塊作用域 <br> 它的作用域限制在最近的一對 { } 中。 </li></ul><ul class="interview___body"><li class="interview___body_td">變量提升</li><li class="interview___body_td interview___body_td-tac"> 是 <br> 會被提升(hoisting)，可以在變數聲明之前使用，但其值為 undefined。 </li><li class="interview___body_td interview___body_td-long"> 否 <br> 存在暫時性死區。在變數聲明之前使用會報錯。 </li></ul><ul class="interview___body"><li class="interview___body_td">允許重複聲明(多次定義)</li><li class="interview___body_td interview___body_td-tac">是</li><li class="interview___body_td interview___body_td-long"> 否 <br> 在同一塊作用域內不能重複聲明。 </li></ul><ul class="interview___body"><li class="interview___body_td">必須初始化</li><li class="interview___body_td interview___body_td-long">否</li><li class="interview___body_td interview___body_td-tac">是</li></ul><ul class="interview___body"><li class="interview___body_td">是否可重新賦值(修改值)</li><li class="interview___body_td interview___body_td-long"> 是 <br> 可以重新賦值。 </li><li class="interview___body_td interview___body_td-tac"> 否 <br> 聲明時必須賦值，並且之後不可改變對該變數的引用(可引用不可改變)。 </li></ul></div><p class="interview__example"><span class="interview__example_txt">const 對物件和陣列：雖然引用本身不可改變，但物件的屬性或陣列的內容可以改變。</span></p><p class="interview__text">2.箭頭函數 與 普通函數 的區别</p><div class="interview__table"><ul class="interview___head"><li class="interview___head_th"></li><li class="interview___head_th">語法格式</li><li class="interview___head_th">this指向</li><li class="interview___head_th">call, apply, bind</li></ul><ul class="interview___body"><li class="interview___body_td">普通函數</li><li class="interview___body_td"> function(){} ： 可以為普通函數命名，或函數表達式。 <br>可用 new 創建構造函數的實例，有原型和 arguments (類似數組的對象) 可用。 </li><li class="interview___body_td">是動態綁定到調用它的對象，主要看調用的那個對象。</li><li class="interview___body_td">修改this值</li></ul><ul class="interview___body"><li class="interview___body_td">箭頭函數</li><li class="interview___body_td"> () =&gt; {} ： 不能為箭頭函數命名，只能是函數表達式，而且是匿名的。 <br>不能用 new 創建，無原型和 arguments 可用。 </li><li class="interview___body_td"> 在定義的時侯就確定了，繼承自定義它的上下文，一般是全局對象(window)。<br> 但被普通函數包含時，箭頭函數的this值，取決於外部普通函數裡的this值。<br> 用 e.target 可以取得調用它的對象。 </li><li class="interview___body_td">不可修改this值</li></ul></div><p class="interview__text">3.去掉陣列中重複性的值</p><p class="interview__text">let arr = [8, 11, 20, 5, 20, 8, 0, 2, 4, 0, 8]</p><p class="interview__text">輸出 [8, 11, 20, 5, 0, 2, 4]</p><p class="interview__ans">ANS:</p><pre class="interview__code">const removeRepeat = (arr) =&gt; {
  const arrObj = {}, <i class="interview__code_note">//用物件來記錄是否已經出現過</i>
        result = []; <i class="interview__code_note">//用來存放去重後的結果</i>
  arr.forEach(val =&gt; {
    if(!arrObj[val]){ <i class="interview__code_note">//如果物件中沒有該值 (undefined)</i>
      arrObj[val] = true; <i class="interview__code_note">//標記該值為已存在</i>
      result.push(val); <i class="interview__code_note">//將該值加入結果陣列</i>
    }
  });
  return result;
}

<i class="interview__code_note">或</i>

const removeRepeat = (arr) =&gt; {
  return arr.reduce((prev,next) =&gt; prev.indexOf(next) !== -1 ? prev : [...prev, next],[]);
}

<i class="interview__code_note">或</i>

const removeRepeat = (arr) =&gt; {
  return arr.filter((el, idx) =&gt; arr.indexOf(el) === idx);
}

<i class="interview__code_note">或</i>

const removeRepeat = (arr) =&gt; {
  return [...new Set(arr)];
}
</pre>`,11))}const r=_(t,[["render",l]]);export{r as default};
