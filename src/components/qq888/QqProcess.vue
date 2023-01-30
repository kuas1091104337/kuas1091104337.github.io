<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
<section class="q8Unit_wrap">
  <h2 class="q8Process__title1">
    <em>{{t('head_07')}}</em>
  </h2>
  <h3 class="q8Process__title2">
    <em>Service Process</em>
  </h3>
  <ol class="q8Process__list">
    <li class="q8Process__list_item">
      <span class="q8Process__list__icon q8Process__list__icon-0"></span>
      <p class="q8Process__list__text">
        <span class="q8Process__list__text_title">{{t('process_01')}}</span>
        <span class="q8Process__list__text_light"> Inquiry</span>
      </p>
    </li>
    <li class="q8Process__list_arrow"></li>
    <li class="q8Process__list_item">
      <span class="q8Process__list__icon q8Process__list__icon-1"></span>
      <p class="q8Process__list__text">
        <span class="q8Process__list__text_title">{{t('process_02')}}</span>
        <span class="q8Process__list__text_light"> Signing</span>
      </p>
    </li>
    <li class="q8Process__list_arrow"></li>
    <li class="q8Process__list_item">
      <span class="q8Process__list__icon q8Process__list__icon-2"></span>
      <p class="q8Process__list__text">
        <span class="q8Process__list__text_title">{{t('process_03')}}</span>
        <span class="q8Process__list__text_light"> Choosing</span>
      </p>
    </li>
    <li class="q8Process__list_arrow"></li>
    <li class="q8Process__list_item">
      <span class="q8Process__list__icon q8Process__list__icon-3"></span>
      <p class="q8Process__list__text">
        <span class="q8Process__list__text_title">{{t('process_04')}}</span>
        <span class="q8Process__list__text_light"> Customization</span>
      </p>
    </li>
    <li class="q8Process__list_arrow"></li>
    <li class="q8Process__list_item">
      <span class="q8Process__list__icon q8Process__list__icon-4"></span>
      <p class="q8Process__list__text">
        <span class="q8Process__list__text_title">{{t('process_05')}}</span>
        <span class="q8Process__list__text_light"> Launching</span>
      </p>
    </li>
    <li class="q8Process__list_arrow"></li>
    <li class="q8Process__list_item">
      <span class="q8Process__list__icon q8Process__list__icon-5"></span>
      <p class="q8Process__list__text">
        <span class="q8Process__list__text_title">{{t('process_06')}}</span>
        <span class="q8Process__list__text_light"> Maintenance</span>
      </p>
    </li>
  </ol>
</section>
</template>

<style lang="scss">
@keyframes processArrow{
  0%{transform: translate3d(0, 0, 0);}
  50%, 100%{transform: translate3d(0, 14px, 0);}
}
.q8Process{
  text-align:center;
  background:url("@/assets/img/qq888/processBg_m.jpg") no-repeat center top/cover;
  padding:70px 0;
  &__title1, &__title2{font-weight:normal;}
  &__title1{
    font-size:36px;
    line-height:40px;
    margin:0 0 12px 0;
  }
  &__title2{
    font-size:24px;
    margin:0 0 28px 0;
  }
  &__list{
    list-style:none;
    padding-left:0;
    &_item{padding:15px 0;}
    &__icon{
      width:90px;
      height:90px;
      display:block;
      background-color:#fff;
      background-image:linear-gradient(180deg,#fdfdfd 0%,#cfcece 100%);
      border-radius:50%;
      box-shadow:0 9px 25px rgba(#000,.5);
      margin:0 auto;
      position:relative;
      &:after{
        content:"";
        width:calc(50/90)*100%;
        height:calc(50/90)*100%;
        background-image:url("@/assets/img/qq888/processIcon.jpg");
        background-size:600% 100%;
        @extend %maPosaT0L0R0B0;
      }
    }
    &__text{
      line-height:24px;
      margin:10px 0 0;
    }
    &_arrow{
      width:82px;
      height:32px;
      box-sizing:content-box;
      padding:2px 0 16px;
      margin:0 auto;
      &:before, &:after {
        content:"";
        width:0;
        height:0;
        border-style:solid;
        display:block;
      }
      &:before {
        border-width:16px 41px 0 41px;
        border-color:transparent rgba(#000,.5);
      }
      &:after {
        border-width:16px 41px 0 41px;
        border-color:rgba(#000,.5) transparent transparent transparent;
      }
    }
  }
  &-active .q8Process__list_arrow{
    animation:processArrow 1s linear infinite;
  }
}
// ===== 手機版型區 =====
@media screen and (min-width:768px){
  .q8Process__list{
    &_item{flex-basis:90px;}
    &__icon{box-shadow:0 9px 25px rgba(#000,.5);}
    &__text_light{font-size:14px;}
    &_arrow{padding:15px 18px 0 2px;}
  }
}
// ===== 桌機版型區 =====
@media screen and (min-width:1024px) {
  .q8Process{
    &__title2{font-weight:300;}
    &__list{
      &_item{flex-basis:100px;}
      &__text{
        &_light{font-size:16px;}
        &_title{margin:0 -28px;}
      }
      &_arrow{
        flex-basis:32px;
        height:82px;
        padding-top:6px;
        &:before, &:after{border-width:41px 0 41px 16px;}
      }
    }
  }
}
</style>