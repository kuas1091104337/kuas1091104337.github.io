<script setup>
import {useI18n} from "vue-i18n";
const {t,locale} = useI18n(),
      props = defineProps({
        navCurrentNum:{type:Number, default:0},
        DAeleOffsetObj:{type:Object, default:() => ({})},
        getDAeleOffsetFn:{type:Function, default:() => {}}
      }),
      DAhead = reactive({langOpen:false, menuOpen:false}),
      headBgFn = () => {
        DAhead.menuOpen = false;
        DAhead.langOpen = false;
      },
      headBtnFn = () => DAhead.menuOpen = !DAhead.menuOpen,
      langMenuFn = () => DAhead.langOpen = !DAhead.langOpen,
      scrollClickHandle = (offsetTop,currentNum) => {
        if(currentNum === props.navCurrentNum) return;
        DAhead.menuOpen = false;
        // scroll to top
        window.scrollTo({top:offsetTop - props.DAeleOffsetObj.headH, behavior:'smooth'});
      },
      langChangeFn = (newlocale) => {
        if(locale.value === newlocale) return;
        locale.value = newlocale;
        localStorage.setItem('locale',newlocale);
        // document.body.className = newlocale;
        DAhead.menuOpen = false;
        // DAhead.langOpen = false;
        nextTick(() => props.getDAeleOffsetFn());
      };
</script>

<template>
<div :class="['DAhead_wrap',{'DAhead_wrap-open':DAhead.menuOpen}]">
  <div class="DAhead__bg" @click="headBgFn"></div>
  <h1 class="DAhead__title">
    <i class="DAhead__title_icon">
      <SvgIcon name="icon-dota" color="#fff"/>
    </i>
    <span class="DAhead__title_txt">{{t('DAheadTitle2')}}</span>
  </h1>
  <div class="DAhead__mBtn" @click="headBtnFn">
    <div class="DAhead__mBtn_wrap">
      <span class="DAhead__mBtn__bar"/>
    </div>
  </div>
  <ul class="DAhead__menu">
    <li class="DAhead__menu_item">
      <span 
        :class="['DAhead__menu__link',{'DAhead__menu__link-active':props.navCurrentNum === 1}]" 
        :data-word="t('DAabout')"
        @click="scrollClickHandle(props.DAeleOffsetObj.aboutT,1)"
      >
        {{t('DAabout')}}
        <!-- <span class="DAhead__menu__link_frontSide">{{t('DAabout')}}</span>
        <span class="DAhead__menu__link_backSide">{{t('DAabout')}}</span> -->
      </span>
    </li>
    <li class="DAhead__menu_item">
      <span 
        :class="['DAhead__menu__link',{'DAhead__menu__link-active':props.navCurrentNum === 2 || props.navCurrentNum === 3}]"
        :data-word="t('DAskill')"
        @click="scrollClickHandle(props.DAeleOffsetObj.skillsT,2)"
      >
        {{t('DAskill')}}
        <!-- <span class="DAhead__menu__link_frontSide">{{t('DAskill')}}</span>
        <span class="DAhead__menu__link_backSide">{{t('DAskill')}}</span> -->
      </span>
    </li>
    <li class="DAhead__menu_item">
      <span
        :class="['DAhead__menu__link',{'DAhead__menu__link-active':props.navCurrentNum === 4}]" 
        :data-word="t('DAwork')"
        @click="scrollClickHandle(props.DAeleOffsetObj.worksT,4)"
      >
        {{t('DAwork')}}
        <!-- <span class="DAhead__menu__link_frontSide">{{t('DAwork')}}</span>
        <span class="DAhead__menu__link_backSide">{{t('DAwork')}}</span> -->
      </span>
    </li>
    <li class="DAhead__menu_lang">
      <span
        :class="['DAhead__menu__lang',{'DAhead__menu__lang-open':DAhead.langOpen}]" 
        @click="langMenuFn"
      >
        <i class="DAhead__menu___icon">
          <SvgIcon name="icon-globe" color="#fff"/>
        </i>
        {{t('DAlanguage')}}
      </span>
      <ul class="DAhead__menu__menu">
        <li>
          <span
            @click="langChangeFn('en-US')" 
            :class="['DAhead__menu____link',{'DAhead__menu____link-active':locale === 'en-US'}]"
          >English</span>
        </li>
        <li>
          <span 
            @click="langChangeFn('zh-TW')" 
            :class="['DAhead__menu____link',{'DAhead__menu____link-active':locale === 'zh-TW'}]"
          >繁體中文</span>
        </li>
        <li>
          <span 
            @click="langChangeFn('zh-CN')" 
            :class="['DAhead__menu____link',{'DAhead__menu____link-active':locale === 'zh-CN'}]"
          >简体中文</span>
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<style lang="scss">
  %menuBar{
    display:block;
    background-color:$BGcolor;
    border-radius:2px;
    @extend %posaT0L0;
  }
  .DAhead{
    color:#fff;
    line-height:$DAheadH;
    width:max(100%,$mobileMinWidth);
    height:$DAheadH;
    background-image:url("@/assets/img/index/HFbg.jpg");
    box-shadow:0 0 5px rgba(#000,.2);
    @extend %posfT0L0;
    z-index: 2;
    &_wrap{
      height:100%;
      display: flex;
      justify-content:space-between;
      position: relative;
      &-open{
        .DAhead__mBtn__bar{
          width:26px;
          background-color: transparent;
          transform:rotate(-180deg);
          &:before{transform:translate3d(0,0,0) rotate(-45deg)}
          &:after{transform:translate3d(0,0,0) rotate(45deg)}
        }
        > .DAhead{
          &__bg{
            opacity: 1;
            backdrop-filter:blur(3px);
            transform:translate3d(0,0,0);
            transition:opacity .4s, backdrop-filter .4s;
          }
          &__menu{transform:translate3d(0,0,0)}
        }
      }
    }
    &__bg{
      width: 100%;
      height: 100%;
      background-color:rgba(128,128,128,.75);
      opacity: 0;
      margin-top:$DAheadH;
      position: fixed;
      top:0;
      left:0;
      transform:translate3d(100%,0,0);
    }
    &__title{
      font-size: 16px;
      font-size: 20px;
      font-weight:normal;
      font-weight: 100;
      text-shadow:0 1px 1px rgba(#000,.6);
      display: flex;
      align-items:center;
      margin:0 0 0 8px;
      &_icon{
        width:30px;
        height:28px;
        margin-right:6px;
      }
      &_txt{transform:skew(-6deg);}
    }
    &__mBtn{
      width:$DAheadH;
			height:100%;
      &_wrap{
        width:36px;
				height:36px;
				background-color:rgba(#fff,.2);
				border-radius:50%;
				margin: 4px;
        position: relative;
      }
      &__bar{
        @extend %menuBar;
        width:22px;
        height:2px;
        margin: auto;
        right: 0;
        bottom: 0;
        transition:width .4s, background-color .4s, transform .4s;
        &:before, &:after{
          @extend %menuBar;
          content:"";
          width: 100%;
          height: 100%;
          transition: transform .4s;
        }
        &:before{transform:translate3d(0,-7px,0);}
        &:after{transform:translate3d(0,7px,0);}
      }
    }
    &__menu{
      @extend %ulReset;
      width:65%;
      max-width: 320px;
			height:100%;
      background-image: url("@/assets/img/index/HFbg.jpg");
			position:fixed;
			top:$DAheadH;
			right: 0;
      transform:translate3d(100%,0,0);
      transition:transform .4s;
      &__link, &____link{
        color:#fff;
				text-shadow:0 1px 1px rgba(#000,.3);
        display: block;
        cursor: pointer;
        transition: color .4s, text-shadow .4s, background-color .4s;
        &-active{@extend %linkActive;}
      }
      &__link{
        padding:0 15px;
        box-shadow:0 -1px 0 0 rgba(#000,.2) inset;
        position: relative;
        &:before, &:after{@extend %wh100pPosaT0L0;}
      }
      &__lang{
        display: flex;
        align-items:center;
        padding:0 15px;
        position:relative;
        &:after{
          @extend %beforeAfterTriangleBaseSet;
          border-width:6px 6px 6px 0;
	        border-color:transparent #fff transparent transparent;
          position:absolute;
          right:20px;
          top:16px;
          transition:border-color .4s, transform .4s;
        }
        &-open{
          @extend %linkActive;
          &:after{
            border-right-color:$BGcolor;
            transform:rotate(-90deg);
          }
          .svg-icon > *{fill:$BGcolor;}
          + .DAhead__menu__menu{height:$DAheadH*3}
        }
      }
      &___icon{
        width: 22px;
        height: 22px;
        margin-right:10px;
        > .svg-icon > *{transition:fill .4s}
      }
      &__menu{
        @extend %ulReset;
        height: 0;
        overflow: hidden;
        transition:height .4s;
      }
      &____link{
        box-shadow:0 1px 0 0 rgba(#000,.2) inset;
        padding:0 47px;
      }
    }
  }
  %linkActive{
    color:$BGcolor;
    text-shadow:none;
    background-color:rgba(#fff,.1);
  }
  // ===== 桌機版型區 =====
  @media screen and (min-width: 1024px) {
    .DAhead{
      &_wrap{
        max-width:$deskMinWidth;
        margin:0 auto;
      }
      &__bg, &__mBtn{display:none;}
      &__menu{
        width: auto;
        max-width: initial;
        display: flex;
        position: initial;
        transform:translate3d(0,0,0);
        &_item:hover > .DAhead__menu__link{@extend %menuLinkActive;}
        &__link{
          height: 100%;
          transform-style:preserve-3d;
          transform:perspective(250px) translate3d(0,0,-22px);
          transition:transform .3s;
          &:before, &:after{
            content:attr(data-word);
            text-align:center;
          }
          &:before{
            background-image: url("@/assets/img/index/HFbg.jpg");
            transform:rotateX(0deg) translate3d(0,0,22px);
          }
          &:after{
            text-shadow:0 1px 1px rgba($dBGcolor,.6);
            background-color:$BGcolor;
            visibility: visible;
            transform:rotateX(90deg) translate3d(0,0,22px);
          }
          &-active{@extend %menuLinkActive;}
        }
        &_lang:hover{
          > .DAhead__menu{
            &__lang{
              color:#fff;
              text-shadow:0 1px 1px rgba($dBGcolor,.6);
              background-color:$BGcolor;
              &:after{transform:rotate(-90deg)}
            }
            &__menu{height:$DAheadH*3}
          }
        }
        &__lang{
          padding-right: 38px;
          &-open{
            color:#fff;
            text-shadow:0 1px 1px rgba(#000,.2);
            background-color:rgba(#fff,0);
            &:after{
              border-right-color: #fff;
              transform: rotate(0deg);
            }
            .svg-icon > *{fill: #fff;}
            + .DAhead__menu__menu{height: 0;}
          }
        }
        &__menu{background-image: url("@/assets/img/index/HFbg.jpg");}
        &____link{
          text-align: center;
          padding:0 30px;
          &-active, &:hover{
            color:#fff;
            text-shadow:0 1px 1px rgba($dBGcolor,.6);
            background-color:$BGcolor;
          }
        }
      }
    }
    %menuLinkActive{
      color:#fff;
      transform:perspective(250px) translate3d(0,0,-22px) rotateX(-90deg);
    }
  }
</style>