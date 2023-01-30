<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n(),
      goTopFn = () => window.scrollTo({top:0,behavior:'smooth'});
</script>

<template>
<div class="q8Contact_goTop" @click="goTopFn">
  <span class="q8Contact_goTop_bar"></span>
  <span class="q8Contact_goTop_bar"></span>
</div>
<div class="q8Unit__contentBox_wrap">
  <a href="javascript:;" class="q8Unit__contentBox__btn">{{t('chess_13')}}</a>
</div>
<div class="q8Contact_wrap">
  <div class="q8Contact_wrap_left">
    <h4 class="q8Contact_wrap__title">
      <em>{{t('contact_01')}}</em>
    </h4>
    <div class="q8Contact_wrap__list">
      <p class="q8Contact_wrap__list_text">
        <em>{{t('contact_02')}}</em>
      </p>
      <a class="q8Contact_wrap__list_link" href="mailto:kuas1091104337@gmail.com?subject=Hi,Amos. 你好，我是…">
        <img class="q8Contact_wrap__list__icon" src="@/assets/img/qq888/iconMail.svg">
        kuas1091104337@gmail.com
      </a>
    </div>
    <div class="q8Contact_wrap__list">
      <p class="q8Contact_wrap__list_text">
        <em>{{t('contact_03')}}</em>
      </p>
      <a class="q8Contact_wrap__list_link" href="mailto:kuas1091104337@gmail.com?subject=Hi,Amos. 你好，我是…">
        <img class="q8Contact_wrap__list__icon" src="@/assets/img/qq888/iconMail.svg">
        kuas1091104337@gmail.com
      </a>
    </div>
    <div class="q8Contact_wrap__list">
      <p class="q8Contact_wrap__list_text">
        <em>{{t('contact_04')}}</em>
      </p>
    </div>
  </div>
  <div class="q8Contact_wrap_right">
    <h4 class="q8Contact_wrap__title">
      <em>{{t('contact_05')}}</em>
    </h4>
    <a class="q8Contact_wrap__link" href="mailto:kuas1091104337@gmail.com?subject=Hi,Amos. 你好，我是…">
      <img class="q8Contact_wrap__link_icon" src="@/assets/img/qq888/iconMail.svg">
      kuas1091104337@gmail.com
    </a>
    <a class="q8Contact_wrap__icon" href="javascript:;" target="_blank">
      <img class="q8Contact_wrap__icon_img" src="@/assets/img/qq888/iconFacebook.svg">
    </a>
  </div>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/qq888Variables.scss";
%contactLink{
  color:#fff;
  line-height:35px;
  display:inline-flex;
  align-items:center;
  background-color: rgba(#fff,.1);
  border-radius:5px;
  padding:0 10px;
  transition:background-color .4s;
  &:hover{background-color: rgba(#fff,.2);}
}
%contactLinkIcon{
  width:20px;
  margin-right:6px;
}
.q8Contact{
  text-align:center;
  background-color:$q8DarkRed;
  padding-top:50px;
  &_goTop{
    width:62px;
    height:62px;
    background-color:$q8DarkRed;
    position:absolute;
    top:0;
    left:50%;
    transform:translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg);
    &_bar{
      width:8px;
      height:8px;
      display:block;
      border:1px solid #fff;
      border-bottom-style:none;
      border-right-style:none;
      position:absolute;
      top:13px;
      left:13px;
      + .q8Contact_goTop_bar{
        top:17px;
        left:17px;
      }
    }
  }
  &_wrap{
    padding:30px 0;
    &__title{
      color:$q8TextYellow;
      font-size:18px;
      line-height:1.75;
      margin:0;
    }
    &__list{
      padding-bottom:20px;
      &_text{
        font-size:16px;
        font-weight:200;
        line-height:1.75;
        margin:10px 0;
      }
      &_link{@extend %contactLink;}
      &__icon{@extend %contactLinkIcon;}
    }
    &__link{
      @extend %contactLink;
      margin-top:10px;
      &_icon{@extend %contactLinkIcon;}
    }
    &__icon{
      width:40px;
      margin:35px auto 0;
      &_img{width:100%;}
    }
  }
}
</style>