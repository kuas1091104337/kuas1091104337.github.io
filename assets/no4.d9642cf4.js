import{G as e,j as a}from"./index.6f1c15d5.js";const s={},t=a('<h3 class="interview__title">\u81FA\u7063\u9EA5\u5B87\u667A\u6167\u5A1B\u6A02</h3><p class="interview__text">1.vue\u7684\u751F\u547D\u9031\u671F Vue3 / Vue2</p><p class="interview__ans">ANS:</p><p class="interview__example"><span class="interview__example_txt"><i class="interview__example__note">setup() / onBeforeCreated</i></span><span class="interview__example_txt">\u5C07\u8981\u5275\u5EFA (\u7D44\u4EF6\u5BE6\u4F8B\u88AB\u5275\u5EFA\u4E4B\u521D)</span><span class="interview__example_txt">\u6B64\u6642\u7121\u6CD5\u904E vm \u8A2A\u554F\u5230 data \u4E2D\u7684\u6578\u64DA\u3001methods \u4E2D\u7684\u65B9\u6CD5\uFF0C\u6578\u64DA\u76E3\u6E2C\u3001\u4EE3\u7406\u4E4B\u524D</span><span class="interview__example_txt"><i class="interview__example__note">setup() / onCreated</i></span><span class="interview__example_txt">\u5275\u5EFA\u5B8C\u7562 (\u7D44\u4EF6\u5BE6\u4F8B\u5DF2\u5B8C\u5168\u5275\u5EFA)</span><span class="interview__example_txt">\u6B64\u6642\u53EF\u4EE5\u904E vm \u8A2A\u554F\u5230 data \u4E2D\u7684\u6578\u64DA\u3001methods \u4E2D\u7684\u65B9\u6CD5</span><span class="interview__example_txt"><i class="interview__example__note">onBeforeMount / beforeMount</i></span><span class="interview__example_txt">\u5C07\u8981\u639B\u8F09 (\u7D44\u4EF6\u639B\u8F09\u4E4B\u524D)</span><span class="interview__example_txt">\u9801\u9762\u5448\u73FE\u7684\u662F\u672A\u7D93 Vue \u7DE8\u8B6F\u7684 DOM \u7D50\u69CB\u3002\u6240\u6709\u5C0D DOM \u7684\u64CD\u4F5C\uFF0C\u6700\u7D42\u90FD\u4E0D\u594F\u6548(DOM \u6E32\u67D3\u524D)</span><span class="interview__example_txt"><i class="interview__example__note">onMounted / mounted</i></span><span class="interview__example_txt">\u639B\u8F09\u5B8C\u7562 (\u5143\u4EF6\u639B\u8F09\u5230\u5BE6\u4F8B\u4E0A\u53BB\u4E4B\u5F8C)</span><span class="interview__example_txt"></span><span class="interview__example_txt">\u9801\u9762\u5448\u73FE\u7684\u662F\u7D93\u904E Vue \u7DE8\u8B6F\u7684DOM\u7D50\u69CB\u3002\u5C0D DOM \u7684\u64CD\u4F5C\u5747\u6709\u6548(\u76E1\u53EF\u80FD\u907F\u514D)\uFF0C\u81F3\u6B64\u521D\u59CB\u5316\u904E\u7A0B\u7D50\u675F\uFF0C\u4E00\u822C\u5728\u6B64\u9032\u884C\u521D\u59CB\u5316\u64CD\u4F5C(\u7D81\u5B9A\u81EA\u5B9A\u7FA9\u4E8B\u4EF6\u3001\u958B\u555F\u8A08\u6642\u5668\u3001\u8A02\u95B1\u6D88\u606F\u7B49)\u3002Vue \u5B8C\u6210\u6A21\u677F\u89E3\u6790\u4E26\u628A\u521D\u59CB\u7684\u771F\u5BE6 DOM \u5143\u7D20\u653E\u5165\u9801\u9762\u5F8C\uFF0C\u639B\u8F09\u5B8C\u7562\u5F8C\u8ABF\u7528\u3002</span><span class="interview__example_txt"><i class="interview__example__note">onBeforeUpdate / beforeUpdate</i></span><span class="interview__example_txt">\u5C07\u8981\u66F4\u65B0 (\u5143\u4EF6\u8CC7\u6599\u767C\u751F\u8B8A\u5316\uFF0C\u66F4\u65B0\u524D)</span><span class="interview__example_txt">\u6B64\u6642\u6578\u64DA\u662F\u65B0\u7684\uFF0C\u4F46\u9801\u9762\u662F\u820A\u7684\uFF0C\u5373\u9801\u9762\u5C1A\u672A\u548C\u6578\u64DA\u4FDD\u6301\u540C\u6B65</span><span class="interview__example_txt"><i class="interview__example__note">onUpdated / updated</i></span><span class="interview__example_txt">\u66F4\u65B0\u5B8C\u7562 (\u5143\u4EF6\u8CC7\u6599\u66F4\u65B0\u4E4B\u5F8C)</span><span class="interview__example_txt">\u6B64\u6642\u6578\u64DA\u662F\u65B0\u7684\uFF0C\u9801\u9762\u4E5F\u662F\u65B0\u7684\uFF0C\u5373\u9801\u9762\u548C\u6578\u64DA\u4FDD\u6301\u540C\u6B65(\u72C0\u614B\u66F4\u65B0\u5C0E\u81F4DOM\u88AB\u6539\u8B8A\u5F8C\u57F7\u884C)</span><span class="interview__example_txt"><i class="interview__example__note">beforeUnmount / beforeDestroy</i></span><span class="interview__example_txt">\u5C07\u8981\u92B7\u6BC0 / \u5378\u8F09\u4E4B\u524D (\u5143\u4EF6\u5BE6\u4F8B\u92B7\u6BC0\u4E4B\u524D)</span><span class="interview__example_txt">\u6B64\u6642vm\u4E2D\u6240\u6709\u7684data\u3001methods\u3001\u6307\u4EE4\u7B49\uFF0C\u90FD\u8655\u65BC\u53EF\u7528\u72C0\u614B\uFF0C\u99AC\u4E0A\u8981\u57F7\u884C\u92B7\u6BC0\u904E\u7A0B\uFF0C\u4E00\u822C\u5728\u6B64\u968E\u6BB5\u95DC\u9589\u8A08\u6642\u5668\u3001\u89E3\u7D81\u81EA\u5B9A\u7FA9\u4E8B\u4EF6\u3001\u53D6\u6D88\u8A02\u95B1\u6D88\u606F\u7B49\u6536\u5C3E\u64CD\u4F5C</span><span class="interview__example_txt"><i class="interview__example__note">onUnmounted / destroyed</i></span><span class="interview__example_txt">\u92B7\u6BC0\u5B8C\u7562 / \u5378\u8F09\u5B8C\u7562 (\u5143\u4EF6\u5BE6\u4F8B\u92B7\u6BC0\u4E4B\u5F8C)</span><span class="interview__example_txt">\u7D44\u4EF6\u88AB\u79FB\u9664\u5F8C\u57F7\u884C</span><span class="interview__example_txt"><i class="interview__example__note">onActivated / activated</i></span><span class="interview__example_txt">\u8DEF\u7531\u7D44\u4EF6\u88AB\u6FC0\u6D3B\u6642\u89F8\u767C (keep-alive \u5FEB\u53D6\u7684\u5143\u4EF6\u555F\u52D5\u6642)</span><span class="interview__example_txt"></span><span class="interview__example_txt"><i class="interview__example__note">onDeactivated / deactivated</i></span><span class="interview__example_txt">\u8DEF\u7531\u7D44\u4EF6\u5931\u6D3B\u6642\u89F8\u767C (keep-alive \u5FEB\u53D6\u7684\u5143\u4EF6\u505C\u7528\u6642\u8ABF\u7528)</span><span class="interview__example_txt"></span><span class="interview__example_txt"><i class="interview__example__note">nextTick / this.$nextTick()</i></span><span class="interview__example_txt">\u7576\u4F60\u4FEE\u6539\u4E86\u6578\u64DA\u4E4B\u5F8C\uFF0Cvue\u64CD\u4F5C\u5B8CDOM\u4E4B\u5F8C\uFF0C\u628A\u771F\u5BE6DOM\u653E\u5165\u9801\u9762</span><span class="interview__example_txt"></span></p><p class="interview__example"><span class="interview__example_txt"><i class="interview__example__note">directive</i></span><span class="interview__example_txt"><i class="interview__example__note">created</i></span><span class="interview__example_txt">\u5728\u7D81\u5B9ADOM\u7684 attribute \u6216\u4E8B\u4EF6\u76E3\u807D\u88AB\u4F7F\u7528\u4E4B\u524D\u8ABF\u7528</span><span class="interview__example_txt"><i class="interview__example__note">beforeMount</i></span><span class="interview__example_txt">\u5728\u7D81\u5B9ADOM\u7684\u7236\u7D44\u4EF6\u639B\u8F09\u4E4B\u524D\u8ABF\u7528</span><span class="interview__example_txt"><i class="interview__example__note">mounted</i></span><span class="interview__example_txt">\u7D81\u5B9ADOM\u7684\u7236\u7D44\u4EF6\u88AB\u639B\u8F09\u6642\u8ABF\u7528</span><span class="interview__example_txt"><i class="interview__example__note">beforeUpdate</i></span><span class="interview__example_txt">\u5728\u5305\u542B\u7D44\u4EF6\u7684 VNode \u66F4\u65B0\u4E4B\u524D\u8ABF\u7528</span><span class="interview__example_txt"><i class="interview__example__note">updated</i></span><span class="interview__example_txt">\u5728\u5305\u542B\u7D44\u4EF6\u7684 VNode \u53CA\u5176\u5B50\u7D44\u4EF6\u7684 VNode \u66F4\u65B0\u4E4B\u5F8C\u8ABF\u7528</span><span class="interview__example_txt"><i class="interview__example__note">beforeUnmount</i></span><span class="interview__example_txt">\u5728\u7D81\u5B9ADOM\u7684\u7236\u7D44\u4EF6\u79FB\u9664\u4E4B\u524D\u8ABF\u7528</span><span class="interview__example_txt"><i class="interview__example__note">unmounted</i></span><span class="interview__example_txt">\u79FB\u9664\u7D81\u5B9ADOM\u7684\u7236\u7D44\u4EF6\u6642\u8ABF\u7528</span></p>',5);function _(n,i){return t}const l=e(s,[["render",_]]);export{l as default};
