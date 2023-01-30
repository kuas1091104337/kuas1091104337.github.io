<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
<img class="q8Chess_moveBg q8Unit_moveBg" src="@/assets/img/qq888/chessMoveBg.png">
<div class="q8Unit_wrap">
  <figure class="q8Chess__imgBox q8Unit__imgBox">
    <div class="q8Unit__imgBox_img q8Unit__imgBox_divBg q8Chess__imgBox_stage"/>
    <img class="q8Unit__imgBox_img q8Chess__imgBox_girl" src="@/assets/img/qq888/chessGirl.png" alt="q8Chess girl">
    <img class="q8Unit__imgBox_img q8Chess__imgBox_cow" src="@/assets/img/qq888/chessCow.png" alt="q8Chess cow">
    <img class="q8Unit__imgBox_img q8Chess__imgBox_cardMan" src="@/assets/img/qq888/chessCardMan.png" alt="q8Chess card man">
    <img class="q8Unit__imgBox_img q8Chess__imgBox_prime" src="@/assets/img/qq888/chessPrime.png" alt="q8Chess prime">
  </figure>
  <section class="q8Chess__contentBox q8Unit__contentBox">
    <h2 class="q8Unit__contentBox_title1">
      <em>{{t('chess_01')}}</em>
    </h2>
    <h3 class="q8Unit__contentBox_title2">
      <em>{{t('chess_02')}}</em>
    </h3>
    <p class="q8Unit__contentBox_text">{{t('chess_03')}}</p>
    <p class="q8Unit__contentBox_text">{{t('chess_04')}}</p>
    <ul class="q8Unit__contentBox_list">
      <li class="q8Unit__contentBox__item">
        <span>{{t('chess_05')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('chess_06')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('chess_07')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('chess_08')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('chess_09')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('chess_10')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('chess_11')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('chess_12')}}</span>
      </li>
    </ul>
    <div class="q8Unit__contentBox_wrap">
      <a href="javascript:;" class="q8Unit__contentBox__btn">{{t('chess_13')}}</a>
    </div>
  </section>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/qq888Variables.scss";
$q8ChessW:641;
$q8ChessH:638;
.q8Chess{
  &_moveBg{margin-top:29.2%;}
  &__imgBox{
    padding-bottom:calc($q8ChessH/$q8ChessW)*100%;
  }
}
@media screen and (min-width:1600px){
  .q8Chess{
    &__imgBox{
      padding-bottom:calc($q8ChessH/$q8ChessW)*55%;
    }
    &-active .q8Chess__imgBox{
      &_girl{animation-name:rightLeftMove-desk;}
      &_cow{animation-name:leftPigMove-desk;}
      &_cardMan{animation-name:rightPigMove-desk;}
      &_prime{animation-name:rightSmallMove-desk;}
    }
  }
}
</style>