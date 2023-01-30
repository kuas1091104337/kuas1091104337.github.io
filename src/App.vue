<script setup>
  
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
::selection{
	color:#fffcd9;
	text-shadow:none;
	background-color:rgba(0,0,0,0.5);
}
// --- css共用區 (常用預設值) ---
html, body{ 
    font-size:16px;
    font-family:"Microsoft YaHei", Helvetica, Arial, "Microsoft JhengHei", "PingFangTC", sans-serif;
    // 多國語言版	font-family:"Helvetica Neue",Helvetica,Arial,"微軟正黑體","微软雅黑","メイリオ","맑은 고딕",sans-serif;
    width:max(100%,$mobileMinWidth);
    height:100%;
    -webkit-text-size-adjust:none; // 在 iOS 旋轉畫面鎖定文字不縮放 
    -webkit-overflow-scrolling:touch; // 安卓和IOS使用滾動回彈效果 
}
#app{
  height:100%;
  display: flex;
  flex-direction: column;
}
img{vertical-align: top;}
a{
  text-decoration:none;
  display:block;
  -webkit-tap-highlight-color:rgba(#000,0);
}
*, *:before, *:after{box-sizing:border-box;}
</style>
