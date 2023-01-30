<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
<img class="q8Esports_moveBg q8Unit_moveBg" src="@/assets/img/qq888/eSportsMoveBg.png">
<div class="q8Unit_wrap">
  <figure class="q8Esports__imgBox q8Unit__imgBox">
    <img class="q8Unit__imgBox_img q8Esports__imgBox_deviceShadow" src="@/assets/img/qq888/eSportsDeviceShadow.png" alt="q8Esports device shadow">
    <img class="q8Unit__imgBox_img q8Esports__imgBox_desktop" src="@/assets/img/qq888/eSportsDesktop.png" alt="q8Esports desktop">
    <img class="q8Unit__imgBox_img q8Esports__imgBox_pad" src="@/assets/img/qq888/eSportsPad.png" alt="q8Esports pad">
    <img class="q8Unit__imgBox_img q8Esports__imgBox_phone" src="@/assets/img/qq888/eSportsPhone.png" alt="q8Esports phone">
    <img class="q8Unit__imgBox_img q8Esports__imgBox_coin" src="@/assets/img/qq888/eSportsCoin.png" alt="q8Esports coin">
  </figure>
  <section class="q8Esports__contentBox q8Unit__contentBox">
    <h2 class="q8Unit__contentBox_title1">
      <em>{{t('head_05')}}</em>
    </h2>
    <h3 class="q8Unit__contentBox_title2">
      <em>{{t('eSsports_01')}}</em>
    </h3>
    <p class="q8Unit__contentBox_text">{{t('eSsports_02')}}</p>
    <p class="q8Unit__contentBox_text">{{t('eSsports_03')}}</p>
    <ul class="q8Unit__contentBox_list">
      <li class="q8Unit__contentBox__item">
        <span>{{t('eSsports_04')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('eSsports_05')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('eSsports_06')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('eSsports_07')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('eSsports_08')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('eSsports_09')}}</span>
      </li>
    </ul>
    <div class="q8Unit__contentBox_wrap">
      <a href="javascript:;" class="q8Unit__contentBox__btn">{{t('lottery_12')}}</a>
    </div>
  </section>
</div>
</template>

<style lang="scss">
img{max-width:100%;}
$q8EsportsW:651;
$q8EsportsH:509;
.q8Esports{
  &_moveBg{margin-top:23.5%;}
  &__imgBox{
    padding-bottom:calc($q8EsportsH/$q8EsportsW)*100%;
  }
}
@media screen and (min-width:1600px){
  .q8Esports{
    &__imgBox{padding-bottom:calc($q8EsportsH/$q8EsportsW)*55%;}
    &-active .q8Esports__imgBox{
      &_desktop{animation-name:rightLeftMove-desk;}
      &_pad{animation-name:leftSmallMove-desk;}
      &_phone{animation-name:rightPigMove-desk;}
      &_coin{animation-name:leftPigMove-desk;}
    }
  }
}
</style>