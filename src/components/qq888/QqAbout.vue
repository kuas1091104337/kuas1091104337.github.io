<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
<img class="q8About_moveBg q8Unit_moveBg" src="@/assets/img/qq888/aboutMoveBg.png">
<div class="q8Unit_wrap">
  <figure class="q8About__imgBox q8Unit__imgBox">
    <img class="q8Unit__imgBox_img q8About__imgBox_backCoin" src="@/assets/img/qq888/aboutBackCoin.png">
    <div class="q8Unit__imgBox_img q8Unit__imgBox_divBg q8About__imgBox_mirror"/>
    <img class="q8Unit__imgBox_img q8About__imgBox_balls" src="@/assets/img/qq888/aboutBalls.png">
    <img class="q8Unit__imgBox_img q8About__imgBox_ship" src="@/assets/img/qq888/aboutShip.png">
    <img class="q8Unit__imgBox_img q8About__imgBox_richGod" src="@/assets/img/qq888/aboutRichGod.png">
    <div class="q8Unit__imgBox_img q8Unit__imgBox_divBg q8About__imgBox_girl"/>
    <img class="q8Unit__imgBox_img q8About__imgBox_cards" src="@/assets/img/qq888/aboutCards.png">
    <img class="q8Unit__imgBox_img q8About__imgBox_frontCoin" src="@/assets/img/qq888/aboutFrontCoin.png">
  </figure>
  <section class="q8About__contentBox q8Unit__contentBox">
    <h2 class="q8Unit__contentBox_title1">
      <em>{{t('head_02')}}</em>
    </h2>
    <h3 class="q8Unit__contentBox_title2">
      <em>{{t('about_01')}}</em>
    </h3>
    <p class="q8Unit__contentBox_text">{{t('about_02')}}</p>
    <p class="q8Unit__contentBox_text">{{t('about_03')}}</p>
    <p class="q8Unit__contentBox_text">
      <span>{{t('about_04')}}</span>
      <strong class="q8About__contentBox__strong">{{t('about_05')}}</strong>
    </p>
    <div class="q8Unit__contentBox_wrap">
      <a href="javascript:;" class="q8Unit__contentBox__btn">{{t('head_07')}}</a>
    </div>
  </section>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/qq888Variables.scss";
$q8AboutW:671;
$q8AboutH:670;
.q8About{
  background:url("@/assets/img/qq888/aboutBg.jpg") no-repeat center top/300% auto, 
             url("@/assets/img/qq888/aboutBgAfter.jpg") repeat center bottom/300% auto;
  &_moveBg{margin-top:24.4%;}
  &__imgBox{
    padding-bottom:calc($q8AboutH/$q8AboutW)*100%;
  }
  &__contentBox__strong{color:#fff;}
}
@media screen and (min-width:640px){
  .q8About__imgBox{padding-bottom:calc($q8AboutH/$q8AboutW)*45%;}
}
@media screen and (min-width:1600px){
  .q8About{
    &-active .q8About__imgBox{
      &_backCoin{animation-name:leftSmallMove-desk;}
      &_balls{animation-name:rightPigMove-desk;}
      &_ship{animation-name:rightSmallMove-desk;}
      &_richGod{animation-name:leftPigMove-desk;}
      &_cards{animation-name:leftSmallMove-desk;}
      &_frontCoin{animation-name:rightPigMove-desk;}
    }
  }
}
</style>