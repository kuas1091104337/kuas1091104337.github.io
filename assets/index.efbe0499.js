import{G as e,j as i}from"./index.78805dac.js";const n={},t=i(`<h3 class="interview__title">\u5982\u4F55\u7522\u751F\u9589\u5305 Closure ?</h3><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt">\u7576\u4E00\u500B\u5D4C\u5957\u7684\u5167\u90E8\u51FD\u6578\u5F15\u7528\u4E86\u5D4C\u5957\u7684\u5916\u90E8\u51FD\u6578\u7684\u8B8A\u6578\u6642\uFF0C\u5C31\u7522\u751F\u4E86\u9589\u5305\u3002</span><span class="interview__example_txt">\u6CE8\u610F\uFF1A\u9589\u5305\u5B58\u5728\u65BC\u5D4C\u5957\u7684\u5167\u90E8\u51FD\u6578\u4E2D</span><span class="interview__example_txt">\u600E\u9EBC\u770B\u9589\u5305\u5C0D\u8C61\u5275\u5EFA\u5E7E\u500B(\u5167\u90E8\u51FD\u6578\u5C0D\u8C61)\uFF0C\u770B\u5916\u90E8\u51FD\u6578\u57F7\u884C\u5E7E\u6B21(fn1())</span></p><pre class="interview__code">function fn1(){
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
</pre><h3 class="interview__title">\u7BAD\u982D\u51FD\u6578 \u8207 \u666E\u901A\u51FD\u6578 \u7684\u5DEE\u7570</h3><div class="interview__table"><ul class="interview___head"><li class="interview___head_th"></li><li class="interview___head_th">\u8A9E\u6CD5\u683C\u5F0F</li><li class="interview___head_th">this\u6307\u5411</li><li class="interview___head_th">call, apply, bind</li></ul><ul class="interview___body"><li class="interview___body_td">\u7BAD\u982D\u51FD\u6578</li><li class="interview___body_td"> function(){} <br> \u53EF\u4EE5\u662F\u51FD\u6578\u8072\u660E\uFF0C\u6216\u51FD\u6578\u8868\u9054\u5F0F </li><li class="interview___body_td">\u52D5\u614B\u7684\uFF0C\u8981\u770B\u4E0A\u4E0B\u6587</li><li class="interview___body_td">\u4FEE\u6539this\u503C</li></ul><ul class="interview___body"><li class="interview___body_td">\u7BAD\u982D\u51FD\u6578</li><li class="interview___body_td"> () =&gt; {} <br> \u53EA\u80FD\u662F\u51FD\u6578\u8868\u9054\u5F0F </li><li class="interview___body_td"> \u4E00\u822C\u662F\u5168\u5C40\u5C0D\u8C61 <br> \u88AB\u666E\u901A\u51FD\u6578\u5305\u542B\u6307\u5411\u4E0A\u4E00\u5C64 </li><li class="interview___body_td">\u4E0D\u53EF\u4FEE\u6539this\u503C</li></ul></div><h3 class="interview__title">JavaScript\u5C0F\u6578\u7CBE\u5EA6\u554F\u984C</h3><p class="interview__text">0.92 + 0.8 = 1.7200000000000002(\u4E0D\u662F)\uFF0C\u61C9\u8A72\u662F1.72</p><p class="interview__text">0.9 - 0.2 + 0.6 = 1.2999999999999998(\u4E0D\u662F)\uFF0C\u61C9\u8A72\u662F1.3</p><p class="interview__text">0.2 + 0.4 - 0.1 = 0.5000000000000001(\u4E0D\u662F)\uFF0C\u61C9\u8A72\u662F0.5</p><p class="interview__text">0.7 - 0.2 = 0.49999999999999994(\u4E0D\u662F)\uFF0C\u61C9\u8A72\u662F0.5</p><p class="interview__ans">ANS:</p><pre class="interview__code">const precise = (num,digits = 15) =&gt; parseFloat(num.toFixed(digits))
<i class="interview__code_note">\u6216</i>
const precise = (num,digits = 15) =&gt; return num.toFixed(digits)*1
</pre><p class="interview__example"><span class="interview__example_txt">\u5EFA\u8B70\uFF1A</span><span class="interview__example_txt">\u5C0D\u65BC\u7C21\u55AE\u7684\u6578\u5B78\u904B\u7B97\uFF0C\u9019\u7A2E\u65B9\u6CD5\u57FA\u672C\u53EF\u7528\uFF0C\u4F46\u91D1\u878D\u3001\u79D1\u5B78\u8A08\u7B97\u7B49\u7CBE\u78BA\u5EA6\u8981\u6C42\u9AD8\u7684\u5834\u666F\uFF0C\u63A8\u85A6\u4F7F\u7528\u5C08\u696D\u6578\u5B57\u8655\u7406\u5EAB</span><span class="interview__example_txt">decimal.js\uFF1A\u9069\u5408\u8655\u7406\u9AD8\u7CBE\u5EA6\u904B\u7B97</span><span class="interview__example_txt">bignumber.js\uFF1A\u8F15\u91CF\u7D1A\u7CBE\u5EA6\u8655\u7406\u5EAB</span></p><h3 class="interview__title">\u53BB\u6389\u9663\u5217\u4E2D\u91CD\u8907\u6027\u7684\u503C</h3><p class="interview__text">let arr = [8, 11, 20, 5, 20, 8, 0, 2, 4, 0, 8]</p><p class="interview__text">\u8F38\u51FA [8, 11, 20, 5, 0, 2, 4]</p><p class="interview__ans">ANS:</p><pre class="interview__code">const removeRepeat = (arr) =&gt; {
  return arr.reduce((prev,next) =&gt; prev.indexOf(next) !== -1 ? prev : [...prev, next],[]);
}

<i class="interview__code_note">\u6216</i>

const removeRepeat = (arr) =&gt; {
  return arr.filter((el, idx) =&gt; arr.indexOf(el) === idx);
}

<i class="interview__code_note">\u6216</i>

const removeRepeat = (arr) =&gt; {
  return [...new Set(arr)];
}
</pre><h3 class="interview__title">\u7D71\u8A08\u5C0D\u8C61</h3><p class="interview__text">const votes = [&#39;apple&#39;, &#39;banana&#39;, &#39;apple&#39;, &#39;orange&#39;];</p><p class="interview__ans">ANS:</p><pre class="interview__code">const voteCount = votes.reduce((count, fruit) =&gt; {
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
</pre>`,31);function s(_,a){return t}const l=e(n,[["render",s]]);export{l as default};
