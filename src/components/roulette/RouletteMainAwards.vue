<script setup>
const props = defineProps({
  awardsPrizeImgArr:{
    type:Array,
    default:() => []
  }
});
</script>

<template>
<ul class="roulette_main___awards">
  <li v-if="!props.awardsPrizeImgArr.length">
    <Wbox3dLoading/>
  </li>
  <li 
    v-for="item in props.awardsPrizeImgArr" :key="item.name"
    class="roulette_main___awards_item"
  >
    <div :class="['roulette_main___awards__wrap roulette_main___awards__wrap-'+item.awards]">
      <span class="roulette_main___awards___medals"/>
      <div class="roulette_main___awards___prize">
        <img class="roulette_main___awards___prize_img" :src="item.src">
      </div>
      <p class="roulette_main___awards___name">{{item.name}}</p>
    </div>
  </li>
</ul>
</template>

<style lang="scss">
@keyframes rouletteSpecialAward-mob{
  0%{box-shadow:0 0 0 0 $pink, 0 0 0 $pink, 0 0 1px $pink inset}
  100%{
    box-shadow: 0 0 size_pxToVw(38,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) $pink, 
                0 0 size_pxToVw(16,$rouletteGameMobW) $pink, 
                0 0 1px $pink inset;
  }
}
.roulette_main___awards{
  @extend %ulReset;
  padding: 0 15px;
  position: relative;
  z-index:1;
  &_item{
    height: 0;
    padding-bottom:calc($rouletteAwardsItemMobH/$rouletteAwardsW)*100%;
    position: relative;
    + .roulette_main___awards_item{margin-top:calc(25/$rouletteAwardsW)*100%;}
  }
  &___medals{
    font-size:size_pxToVw(14,$rouletteGameMobW);
    font-weight:bold;
    width:calc(28/273)*100%;
    height:calc(28/$rouletteAwardsItemMobH)*100%;
    background-image:url("@/assets/img/roulette/normal/rouletteAwardsMedals.png");
    background-size:400% 100%;
    @extend %disFlexJustifyAlignCenter;
  }
  &___prize{
    width:calc(55/273)*100%;
    &_img{width:100%}
  }
  &___name{
    font-size:size_pxToVw(16,$rouletteGameMobW);
    text-align: center;
    width:48%;
    margin:0;
  }
}
</style>