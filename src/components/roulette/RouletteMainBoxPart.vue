<script setup>
const props = defineProps({
        rouletteAwardArr:{
          type:Array,
          default:() => []
        }
      });
</script>

<template>
<ul :class="['roulette_main___box__part roulette_main___box__part-'+props.rouletteAwardArr.length]">
  <li 
    v-for="(item, idx) in props.rouletteAwardArr" :key="idx"
    :class="[
      'roulette_main___box__part_list',
      'roulette_main___box__part_list-prize'+item.awards,
      'roulette_main___box__part_list-num'+idx
    ]" 
  >
    <span class="roulette_main___box__part__color"/>
    <p class="roulette_main___box__part__prizeName">
      <span class="roulette_main___box__part__prizeName_txt roulette_main___box__part__prizeName_txt-1">{{item.name}}</span>
      <span class="roulette_main___box__part__prizeName_txt roulette_main___box__part__prizeName_txt-2">{{item.name}}</span>
    </p>
    <span :class="['roulette_main___box__part__awards roulette_main___box__part__awards-'+item.awards]"></span>
  </li>
</ul>
</template>

<style lang="scss">
@keyframes rouletteRotate{
  0%{transform:rotate3d(0,0,1,0deg);}
  50%{transform:rotate3d(0,0,1,180deg);}
  100%{transform:rotate3d(0,0,1,360deg);}
}
@font-face {
  font-family:'rouletteFont';
  src:url('@/assets/font/icomoon.eot?9e2chz');
  src:url('@/assets/font/icomoon.eot?9e2chz#iefix') format('embedded-opentype'),
      url('@/assets/font/icomoon.ttf?9e2chz') format('truetype'),
      url('@/assets/font/icomoon.woff?9e2chz') format('woff'),
      url('@/assets/font/icomoon.svg?9e2chz#icomoon') format('svg');
}
%lotteryATpart{
  animation-duration:.5s;
  animation-delay:1.5s;
  animation-iteration-count:infinite;
  animation-direction:alternate;
}
.roulette_main___box__part{
  @extend %ulReset;
  width:100%;
  height:100%;
  border-radius: 50%;
  overflow: hidden;
  transform:rotate3d(0,0,0,0deg);
  position:relative;
  z-index:-1;
  &:after{
    content:"";
    @extend %wh100pPosaT0L0;
    border-radius:50%;
    box-shadow:0 0 size_pxToVw(12,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba(#000,.5) inset;
    // 解safari bug transform:(0,0,0); 
  }
  &_list{
    line-height:1;
    height: 50%;
    @extend %disFlexJustifyAlignCenter;
    flex-direction: column;
    padding-bottom: 1.5%;
    position: absolute;
    top: 0;
    transform-origin: 50% 100%;
    &:before{
      content:"";
      width:size_pxToVw(2,$rouletteGameMobW);
      height:100%;
      margin-left:-1px;
      position:absolute;
      top:0;
      left:50%;
      z-index:1;
      transform-origin:50% 100%;
      @extend %lotteryATpart;
    }
  }
  &__color{
    @extend %wh100pPosaT0L0;
    z-index:-1; // 解safari bug
    &:before, &:after{
      content:"";
      width: 100%;
      height: 100%;
      position:absolute;
      top:0;
    }
    &:before{
      left: -50%;
      transform-origin: 100% 100%;
    }
    &:after{
      left: 50%;
      transform-origin: 0% 100%;
    }
  }
  &__prizeName{
    font-size:size_pxToVw(14,$rouletteGameMobW);
    text-align: center;
    width: 70%;
    padding-bottom:size_pxToVw(12,$rouletteGameMobW);
    margin: 0;
    position: relative;
    &_txt{
      &-1{
        display: block;
        @extend %lotteryATpart;
      }
      &-2{@extend %wh100pPosaT0L0}
    }
  }
  &__awards{
    font-size:size_pxToVw(38,$rouletteGameMobW);
    font-family:Verdana, sans-serif;
    font-weight: bold;
    position: relative;
    &:before{
      display:block;
      @extend %lotteryATpart;
    }
    &:after{@extend %posaT0L0;}
    @for $i from 1 through 9{
      &-#{$i}{
        &:before, &:after{content:"#{$i}"}
      }
    }
  }
}
// 動畫區
.roulette{
  &-popupOpen .roulette_main___box__part{
    &_list:before, &__prizeName_txt-1, &__awards:before{
      animation-play-state:paused;
    }
  }
}
@media screen and (min-width: 568px){
  %rouletteLotteryBeforeMobPig{
    &:before{animation-name:listYellowBorder-mobPigSize;}
  }
  %rouletteLotteryListMobPig{
    @extend %rouletteLotteryBeforeMobPig;
    > .roulette_main___box__part__awards:before{animation-name:rouletteAwardsNumShadow-mobPigSize;}
    .roulette_main___box__part__prizeName_txt-1{animation-name:roulettePrizeNameShadow-mobPigSize;}
  }
  .roulette_main___box{
    &__part{
      &:after{box-shadow:0 0 20px 20px rgba(#000,.5) inset;}
      &_list{
        &:before{width:3px;}
        &-prize, &-prize0{
          > .roulette_main___box__part__prizeName{padding-bottom:27px;}
        }
      }
      &__prizeName{
        font-size:21px;
        padding-bottom:18px;
      }
      &__awards{
        font-size:58px;
        &:before{-webkit-text-stroke:9px $Dpink}
        &-, &-0{
          font-size:40px;
          text-indent:-1.5px;
        }
      }
    }
  }
}
</style>