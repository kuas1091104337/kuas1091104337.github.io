<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
<img class="q8Sexy_moveBg q8Unit_moveBg" src="@/assets/img/qq888/sexyMoveBg.jpg">
<div class="q8Unit_wrap">
  <figure class="q8Sexy__imgBox q8Unit__imgBox">
    <img class="q8Unit__imgBox_img q8Sexy__imgBox_girls" src="@/assets/img/qq888/sexyGirls.png" alt="q8Sexy girls">
    <img class="q8Unit__imgBox_img q8Sexy__imgBox_coin" src="@/assets/img/qq888/sexyCoin.png" alt="q8Sexy coin">
    <img class="q8Unit__imgBox_img q8Sexy__imgBox_card" src="@/assets/img/qq888/sexyCard.png" alt="q8Sexy card">
  </figure>
  <section class="q8Sexy__contentBox q8Unit__contentBox">
    <h2 class="q8Unit__contentBox_title1">
      <em>{{t('head_06')}}</em>
    </h2>
    <h3 class="q8Unit__contentBox_title2">
      <em>{{t('sexy_01')}}</em>
    </h3>
    <p class="q8Unit__contentBox_text">{{t('sexy_02')}}</p>
    <p class="q8Unit__contentBox_text">{{t('sexy_03')}}</p>
    <ul class="q8Unit__contentBox_list">
      <li class="q8Unit__contentBox__item">
        <span>{{t('sexy_04')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('sexy_05')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('sexy_06')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('sexy_07')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('sexy_08')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('sexy_09')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('sexy_10')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('sexy_11')}}</span>
      </li>
    </ul>
    <div class="q8Unit__contentBox_wrap">
      <a href="javascript:;" class="q8Unit__contentBox__btn">{{t('lottery_12')}}</a>
    </div>
  </section>
</div>
</template>

<style lang="scss">
$q8SexyW:679;
$q8SexyH:609;
@keyframes q8SexyBgAT{
  0%{
		opacity:.35;
		transform:scale3d(1.5,1.5,1);
  }
  50%{opacity:1;}
  100%{
		opacity:.25;
		transform:scale3d(2.3,2.3,1);
  }
}
.q8Sexy{
  background-color:#0b0b0b;
  &_moveBg{
    box-shadow:0 0 6px #0b0b0b;
  }
  &__imgBox{
    padding-bottom:calc($q8SexyH/$q8SexyW)*100%;
  }
  &__contentBox{
    > .q8Unit__contentBox_title1{color:#e4007f;}
    > .q8Unit__contentBox_text{color:#ff818f;}
  }
  &-active .q8Sexy{
    &_moveBg{animation-play-state:running;}
  }
}
@media screen and (min-width:640px){
  .q8Sexy{
    &_moveBg.q8Unit_moveBg{width:45%;}
  }
}
@media screen and (min-width:1280px){
  .q8Sexy_moveBg.q8Unit_moveBg{
    width:540px;
    left:45%;
    transform:translate3d(-100%,0,0);
  }
}
@media screen and (min-width:1600px){
  .q8Sexy{
    &_moveBg.q8Unit_moveBg{
      width:660px;
      left:53.75%;
    }
    &-active .q8Sexy__imgBox{
      &_girls{animation-name:rightLeftMove-desk;}
      &_coin{animation-name:rightPigMove-desk;}
      &_card{animation-name:leftPigMove-desk;}
    }
  }
}
</style>