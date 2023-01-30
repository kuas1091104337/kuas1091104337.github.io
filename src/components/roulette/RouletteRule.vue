<script setup>
const props = defineProps({
  rouletteRule:{
    type:String,
    default:'text'
  }
});
</script>

<template>
<div class="roulette_rule">
  <article class="roulette_rule_wrap">
    <h2 class="roulette_rule__title">活動規則</h2>
    <div class="roulette_rule__content" v-html="props.rouletteRule"/>
  </article>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/rouletteVariables.scss";
.roulette_rule{
  padding:0 20px 70px;
  &_wrap{
    line-height: 1.5;
    min-height: 125px;
    border-radius: 20px;
    box-shadow: 0 size_pxToVw(4,$rouletteGameMobW) size_pxToVw(7,$rouletteGameMobW) rgba(#fff,.3) inset,
                0 size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(7,$rouletteGameMobW) rgba(#000,.25) inset,
                0 0 size_pxToVw(45,$rouletteGameMobW) rgba(#000,.6);
    padding: 40px 15px 20px;
    position: relative;
  }
  &__title{
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    text-shadow: 0 size_pxToVw(-1,$rouletteGameMobW) size_pxToVw(3,$rouletteGameMobW) rgba(#000, 0.5);
    width: 200px;
    height: 41px;
    background-size:cover;
    padding-top: 3px;
    margin:0;
    position: absolute;
    top:0;
    left:50%;
    transform:translate3d(-50%,-50%,0);
  }
}
@media screen and (min-width: 568px){
  .roulette_rule{
    &_wrap{
      box-shadow: 0 6px 11px rgba(#fff,.3) inset,
                  0 -6px 11px rgba(#000,.25) inset,
                  0 0 68px rgba(#000,.7);
    }
    &__title{text-shadow: 0 -2px 5px rgba(#000, 0.5)}
  }
}
@media screen and (min-width:1024px){
  .roulette_rule{
    &_wrap{
      max-width:1000px;
      min-height:350px;
      padding:70px 30px;
      margin:0 auto;
      box-shadow: 0 4px 7px rgba(#fff,.35) inset,
                  0 -4px 7px rgba(#000,.25) inset, 
                  0 0 45px rgba(#000,.7);
    }
    &__title{
      font-size: 24px;
      line-height: 75px;
      text-shadow: 0 -2px 5px rgba(#000,.5);
      width: 366px;
      height: 75px;
      padding-top: 0;
    }
  }
}
</style>