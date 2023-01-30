<script setup>
</script>

<template>
<Head/>
<article class="lotteryAT">
  <h2 class="lotteryAT_title">Lottery Animation</h2>
  <RouterView/>
  <nav class="lotteryAT_nav">
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/">開獎動畫 1</RouterLink>
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/suibao">開獎動畫 2</RouterLink>
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/slot">開獎動畫 3</RouterLink>
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/niuniu">開獎動畫 5</RouterLink>
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/aircraft">開獎動畫 6</RouterLink>
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/racing">開獎動畫 7</RouterLink>
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/candy">開獎動畫 4</RouterLink>
  </nav>
</article>
<Foot class="DAfoot-normal"/>
</template>

<style lang="scss">
@keyframes ATshow{
 0%{
  opacity:0;
  transform:scale3d(.8,.8,1);
 }
 100%{
  opacity:1;
  transform:scale3d(1,1,1);
 }
}
$yeekeeW:1920;
.ATtest{
  color:rgba(#fff,.6);
  font-size: 32px;
  font-weight:lighter;
  text-align:center;
  width: 90%;
  margin:auto;
  transform: skew(-8deg);
}
.lotteryAT{
  color:#fff;
  background-color: #000;
  flex-grow: 1;
  border: 5px solid $GrayColor;
  margin-top: 44px;
  &_title{
    color:rgba(#fff,.85);
    font-size:size_pxToVw(240,$yeekeeW);
    text-shadow:size_pxToVw(-6,$yeekeeW) size_pxToVw(-6,$yeekeeW) 0 rgba(#0ff,.6),
                size_pxToVw(-12,$yeekeeW) size_pxToVw(-12,$yeekeeW) size_pxToVw(6,$yeekeeW) rgba(#0ff,.6),
                size_pxToVw(6,$yeekeeW) size_pxToVw(6,$yeekeeW) 0 rgba(#f0f,.6),
                size_pxToVw(12,$yeekeeW) size_pxToVw(12,$yeekeeW) size_pxToVw(6,$yeekeeW) rgba(#f0f,.6);
    text-align: center;
    width: 90%;
    margin:1em auto;
    transform: skew(-8deg);
  }
  &_nav{
    display: flex;
    flex-wrap:wrap;
    padding:30px 10px;
    &_item{
      color:#fff;
      font-size: 14px;
      text-shadow: 0 0 2px rgba(#000,.35);
      line-height: 1;
      text-align:center;
      text-decoration:none;
      width: calc(50% - 20px);
      border-radius: 4px;
      padding: 10px;
      background-color:#c0c;
      margin: 10px;
      transition:background-color .4s;
      &.router-link-exact-active{
        background-color:#0080ff;
      }
    }
  }
}
@media screen and (min-width: 667px) {
  .lotteryAT_nav_item{width: calc(20% - 20px);}
}
// === 平板拿直的時候 portrait ===
@media screen and (min-width: 600px) and (max-width: 1024px)  and (orientation:portrait){
  .lotteryAT{
    &_title{margin:2em auto;}
    &_nav{padding: 35px;}
  }
}
@media screen and (min-width: 1024px) {
  .lotteryAT{
    &_title{margin: .75em auto}
    &_nav{
      justify-content:center;
      padding: 35px;
      &_item{
        font-size: 16px;
        width: auto;
      }
    }
  }
}
</style>