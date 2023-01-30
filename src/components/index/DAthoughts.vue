<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
<div class="DAthoughts_bg"></div>
<section class="DAthoughts_wrap">
  <h3 class="DAthoughts__txt">
    {{t('DAtxt1')}}
    <span class="DAthoughts__txt_mark">{{t('DAtxtPoint1')}}</span>
    {{t('DAtxt2')}}
    <span class="DAthoughts__txt_mark">{{t('DAtxtPoint2')}}</span>
    {{t('DAtxt3')}}
    <span class="DAthoughts__txt_mark">{{t('DAtxtPoint3')}}</span>
    {{t('DAtxt4')}}
  </h3>
</section>
</template>

<style lang="scss">
  .DAthoughts{
    height:calc(100vh - ($DAheadH + $DAborderW));
    position:relative;
    background-image:url("@/assets/img/index/HFbg.jpg");
    // clip:rect(0,100vw,100vh,0); 加 position:absolute;
    // clip-path:polygon(5px 5px, calc(100% - 5px) 5px, calc(100% - 5px) 100%, 5px 100%);
    clip-path:inset(5px 5px 0 5px);
    &-active{
      > .DAthoughts_bg{
        transform:scale3d(1,1,1);
        opacity:1;
      }
      > .DAthoughts_wrap{backdrop-filter:blur(0px);}
    }
    &_bg{
      content:"";
      @extend %wh100pPosfT0L0;
      background-image: radial-gradient(ellipse at center,
                          rgba(#000,0) 65%,
                          rgba(#000,.4) 100%
                        ),
                        url("@/assets/img/index/feelingsPhone.jpg");
      background-position:center;
      background-size:cover;
      opacity:0.6;
      z-index:-1;
      transform:scale3d(.8,.8,1);
      transition: opacity .4s, transform .4s;
    }
    &_wrap{
      height:100%;
      background-color:rgba(#000,.65);
      display:flex;
      align-items:center;
      padding:20px;
      transform:translate3d(0,0,0);
      backdrop-filter:blur(6px);
      transition:backdrop-filter .4s;
    }
    &__txt{
      color:#fff;
      font-size:32px;
      font-weight:normal;
      line-height: 1.75;
      text-shadow:0 0 5px rgba(#000,.1),
                  0 1px 5px rgba(#000,.1),
                  1px 0 5px rgba(#000,.1),
                  0 -1px 5px rgba(#000,.1),
                  -1px 0 5px rgba(#000,.1),
                  1px 1px 5px rgba(#000,.1),
                  -1px 1px 5px rgba(#000,.1),
                  1px -1px 5px rgba(#000,.1),
                  -1px -1px 5px rgba(#000,.1);
      &_mark{color:$BGcolor;}
    }
  }
  // 平板拿直的時候 portrait
  @media screen and (min-width: 600px) and (max-width: 1024px) and (orientation:portrait){
    .DAthoughts{
      height:60vh;
      &__txt{font-size:50px;}
    }
  }
  // 手機、平板拿橫的時候
  @media screen and (max-width: 1024px) and (orientation:landscape){
    .DAthoughts_bg{
      background-image: radial-gradient(ellipse at center,
                          rgba(#000,0) 50%,
                          rgba(#000,.4) 100%
                        ),
                        url("@/assets/img/index/feelingsDesk.jpg");
    }
  }
  @media screen and (min-width: 1024px) {
    .DAthoughts{
      &_bg{
        background-image: radial-gradient(ellipse at center,
                            rgba(#000,0) 50%,
                            rgba(#000,.4) 100%
                          ),
                          url("@/assets/img/index/feelingsDesk.jpg");
      }
      &__txt{
        font-size:50px;
        // font-weight:300;
        max-width:820px;
        margin:0 auto;
      }
    }
	}
</style>