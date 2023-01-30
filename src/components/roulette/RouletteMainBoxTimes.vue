<script setup>
const props = defineProps({
        drawTimesNum:{
          type:Number,
          default:0
        }
      });
</script>

<template>
<div class="roulette_main___box__times">
  <p class="roulette_main___box__times_wrap">
    <span class="roulette_main___box__times__num">{{props.drawTimesNum}}</span>
    <span class="roulette_main___box__times__unit">次</span>
  </p>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/rouletteVariables.scss";
@keyframes rouletteNumberTimes{
  0%{box-shadow:0 0 0 0 rgba(#fcff00,.6), 0 0 1px rgba(#fcff00,.6) inset;}
  100%{box-shadow:0 0 24px 2px rgba(#fcff00,.6), 0 0 1px rgba(#fcff00,.6) inset;}
}
.roulette_main___box__times{
  height:0;
  background-size:cover;
  position: absolute;
  top:2%;
  right:1%;
  z-index:1;
  &_wrap{
    font-weight: bold;
    text-align: center;
    @extend %wh100pPosaT0L0;
    @extend %disFlexJustifyAlignCenter;
    padding-bottom:0.5%;
    margin:0;
    transform:skew(-6deg);
  }
  &__num{font-size:size_pxToVw(27,$rouletteGameMobW)}
  &__unit{
    font-size:size_pxToVw(12,$rouletteGameMobW);
    margin:11% 0 0 2%;
  }
}
@media screen and (min-width: 568px){
  .roulette_main___box__times{
    &__num{font-size:41px}
    &__unit{font-size:18px}
  }
  .normal, .xmas{
    .roulette_main___box__times{
      box-shadow:0 0 27px 5px rgba(#fcff00,.6);
      &_wrap{text-shadow:1.5px 3px 0 #f3cb00}
    }
  }
  .newYear .roulette_main___box__times_wrap{
    text-shadow:1.5px 3px 0 #b25800, 1.5px 3px 6px rgba(#000,.5);
  }
}
@media screen and (min-width:1024px){
  .roulette_main___box__times{
    top: 0;
    right: 0;
    &_wrap{padding-bottom:1%;}
    &__num{font-size:size_pxToVw(46,$rouletteGameW)}
    &__unit{font-size:size_pxToVw(18,$rouletteGameW)}
  }
}
@media screen and (min-width: 1440px){
  .roulette_main___box__times{
    &__num{font-size:46px}
    &__unit{font-size:18px}
  }
}
</style>