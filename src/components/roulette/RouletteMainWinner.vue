<script setup>
const props = defineProps({
        winnerListArr:{
          type:Array,
          default:() => []
        },
        winnerRecordArr:{
          type:Array,
          default:() => []
        }
      }),
      winnerRecordShow = ref(false),
      winnerToggleFn = (val) => winnerRecordShow.value = val;
</script>

<template>
<div class="roulette_main___winner">
  <div :class="['roulette_main___winner_wrap',{'roulette_main___winner_wrap-record':winnerRecordShow}]">
    <div class="roulette_main___winner__nav">
      <p class="roulette_main___winner__nav_item" @click="winnerToggleFn(false)">中獎名單</p>
      <p class="roulette_main___winner__nav_item" @click="winnerToggleFn(true)">中獎記錄</p>
      <span class="roulette_main___winner__nav_cursor"></span>
    </div>
    <aside class="roulette_main___winner__slide">
      <ul class="roulette_main___winner__slide_list">
        <li>
          <WTextLoading v-if="!props.winnerListArr.length"/>
        </li>
        <li 
          v-for="item in props.winnerListArr" :key="item.name"
          class="roulette_main___winner__slide__item"
        >
          <p class="roulette_main___winner__slide__item_date">{{item.date}}</p>
          <p class="roulette_main___winner__slide__item_name">{{item.name}}</p>
          <p class="roulette_main___winner__slide__item_prize">{{item.prize}}</p>
        </li>
      </ul>
      <ul class="roulette_main___winner__slide_list">
        <li>
          <WTextLoading v-if="!props.winnerRecordArr.length"/>
        </li>
        <li
          v-for="item in props.winnerRecordArr" :key="item.name"
          class="roulette_main___winner__slide__item"
        >
          <p class="roulette_main___winner__slide__item_date">{{item.date}}</p>
          <p class="roulette_main___winner__slide__item_name">{{item.name}}</p>
          <p class="roulette_main___winner__slide__item_prize">{{item.prize}}</p>
        </li>
      </ul>
    </aside>
  </div>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/rouletteVariables.scss";
.roulette_main___winner{
  height: 0;
  background-size:cover;
  padding-bottom:calc(550/670)*100%;
  position: relative;
  &_wrap{
    @extend %wh100pPosaT0L0;
    display: flex;
    flex-direction: column;
    padding:size_pxToVw(15,$rouletteGameMobW);
    &-record .roulette_main___winner{
      &__nav_cursor{left:50%;}
    }
    &:before, &:after {
      content:"";
      height: 0;
      background-size:cover;
      position:absolute;
      left: 50%;
    }
    &:before {
      top:0;
      transform:translate(-50%,-95.5%);
    }
    &:after {
      width:calc(366/$rouletteAwardsW)*100%;
      background-image:url("@/assets/img/roulette/normal/rouletteWinnerListBottom.png");
      padding-bottom:calc(85/366)*calc(366/335)*100%;
      bottom:0;
      transform:translate(-50%, 42%);
    }
  }
  &__nav{
    display: flex;
    background-color: rgba(#fff,.15);
    border-radius: 20px;
    margin-bottom: 12px;
    position: relative;
    z-index: 1;
  }
  &__slide{
    display: flex;
    flex: 1 1 0;
    overflow: hidden;
  }
}
@media screen and (min-width: 568px){
  .roulette_main___winner{
    &_wrap{padding:23px}
    &__slide__item{font-size:16px;}
  }
}
@media screen and (min-width:1024px){
  .roulette_main___winner{
    width:calc($rouletteAwardsW/$rouletteGameW)*100%;
    padding-bottom:calc(600/$rouletteAwardsW*$rouletteAwardsW/$rouletteGameW)*100%;
    z-index:1;
    &__slide__item{
      font-size: 14px;
      line-height: 22px;
      flex-wrap:wrap;
      padding:4px 8px;
      &_date, &_prize{width:50%;}
      &_name, &_prize{text-align:left;}
      &_name{
        width:100%;
        order:-1;
      }
    }
  }
}
@media screen and (min-width: 1440px){
  .roulette_main___winner__nav_item{
    font-size:18px;
    line-height:34px;
  }
}
</style>