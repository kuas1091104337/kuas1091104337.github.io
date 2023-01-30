<script setup>
import {useImgLoad} from '@/composables';
import {debounce} from '@/lib/debounce.js'
import {useI18n} from "vue-i18n";
const leverage = 5,
      {isImgLoaded, imgLoadFn} = useImgLoad(),
      {t} = useI18n(),
      props = defineProps({
        q8WidthNum:{type:Number, default:0},
        q8StyleTxt:{type:Number, default:0}
      }),
      q8HomeImgWrap = ref(null),
      q8HomeVal = reactive({img:[],style:'2019', mainIsEnter:false, homeImgWrapW:0, homeImgWrapH:0, percentX:0, percentY:0}),
      q8HomeImg = reactive({
        homeBg:'https://kuas1091104337.github.io/DotA_img/qq888/homeBg.jpg',
        homeStage:'https://kuas1091104337.github.io/DotA_img/qq888/homeStage.png',
        homeInsideCloth:'https://kuas1091104337.github.io/DotA_img/qq888/homeInsideCloth.png',
        homeOutsideCloth:'https://kuas1091104337.github.io/DotA_img/qq888/homeOutsideCloth.png',
        homeRightGirl:'https://kuas1091104337.github.io/DotA_img/qq888/homeRightGirl.png',
        homeLeftGirl:'https://kuas1091104337.github.io/DotA_img/qq888/homeLeftGirl.png',
        homeTitle:'https://kuas1091104337.github.io/DotA_img/qq888/homeTitle.png',
        home2019:'https://kuas1091104337.github.io/DotA_img/qq888/home2019.png',
        homeDeco1:'https://kuas1091104337.github.io/DotA_img/qq888/homeDeco1.png',
        homeDeco2:'https://kuas1091104337.github.io/DotA_img/qq888/homeDeco2.png',
        homeDeco3:'https://kuas1091104337.github.io/DotA_img/qq888/homeDeco3.png',
        homeMoveBg:'https://kuas1091104337.github.io/DotA_img/qq888/homeMoveBg.png'
      }),
      getQ8HomeOffset = () => {
        q8HomeVal.homeImgWrapW = q8HomeImgWrap.value.offsetWidth;
        q8HomeVal.homeImgWrapH = q8HomeImgWrap.value.offsetHeight;
      },
      q8HomeMoveFn = (e) => {
        if(props.q8WidthNum < 1200) return; 
        q8HomeVal.percentX = e.offsetX / (q8HomeVal.homeImgWrapW / 2) - 1,
        q8HomeVal.percentY = e.offsetY / (q8HomeVal.homeImgWrapH / 2) - 1;;
      },
      q8HomeInFn = () => {
        if(props.q8WidthNum < 1200) return;
        q8HomeVal.mainIsEnter = true;
      },
      q8HomeOutFn = () => {
        q8HomeVal.percentX = 0;
        q8HomeVal.percentY = 0;
        q8HomeVal.mainIsEnter = false;
      };
for(let key in q8HomeImg){
  q8HomeVal.img.push({src:q8HomeImg[key]});
}
onMounted(() => {
  imgLoadFn(q8HomeVal.img,'src');
  getQ8HomeOffset();
  window.addEventListener('resize',debounce(getQ8HomeOffset,400));
});
onUnmounted(() => {
  window.removeEventListener('resize',debounce(getQ8HomeOffset,400));
});
</script>

<template>
<div class="q8Home_wrap">
  <div
    :class="['q8Home__box',{'q8Home__box-imgLoad':!isImgLoaded}]"
    :style="{backgroundImage:'url('+q8HomeImg.homeBg+')'}"
  >
    <div class="q8Home__box_stage" :style="{backgroundImage:'url('+q8HomeImg.homeStage+')'}"></div>
    <main 
      :class="['q8Home__box_imgWrap',{'q8Home__box_imgWrap-enter':q8HomeVal.mainIsEnter}]" 
      ref="q8HomeImgWrap" 
      @mousemove="q8HomeMoveFn" 
      @mouseenter="q8HomeInFn" 
      @mouseleave="q8HomeOutFn"
    >
      <img class="q8Home__box__moveBg q8Unit_moveBg" :src="q8HomeImg.homeMoveBg" alt="q8Home move bg">
      <h3 
        :class="['q8Unit__imgBox_img q8Home__box__year q8Home__box__year-'+props.q8StyleTxt]" 
        :style="{transform:'translate3d('+(q8HomeVal.percentX * leverage * 5)+'px,'+(q8HomeVal.percentY * leverage * -5)+'px,0)'}"
      >
        <span 
          class="q8Home__box__year_bg-2019"
          :style="{backgroundImage:'url('+q8HomeImg.home2019+')'}"
          v-if="props.q8StyleTxt === 2019"
        >2019</span>
        <span
          class="q8Home__box__year_bg-2020"
          v-if="props.q8StyleTxt === 2020"
        >
          <img class="q8Home__box__year__deco q8Home__box__year__deco-1" :src="q8HomeImg.homeDeco1" alt="q8Home deco 1">
          <img class="q8Home__box__year__deco q8Home__box__year__deco-2" :src="q8HomeImg.homeDeco2" alt="q8Home deco 2">
          <img class="q8Home__box__year__deco q8Home__box__year__deco-3" :src="q8HomeImg.homeDeco3" alt="q8Home deco 3">
          <em 
            class="q8Home__box__year__text q8Home__box__year__text-silver q8Home__box__year__text-top"
            :data-word="$t('home_01')"
          >
            {{t('home_01')}}
          </em>
          <em 
            class="q8Home__box__year__text q8Home__box__year__text-silver q8Home__box__year__text-bottom"
            :data-word="$t('home_02')"
          >
            {{t('home_02')}}
          </em>
        </span>
      </h3>
      <h2 
        :class="['q8Unit__imgBox_img q8Home__box__title q8Home__box__title-'+props.q8StyleTxt]" 
        :style="{transform:'translate3d('+(q8HomeVal.percentX * leverage * -4)+'px,'+(q8HomeVal.percentY * leverage * 4)+'px,0)'}"
      >
        <span 
          class="q8Home__box__title_bg-2019"
          :style="{backgroundImage:'url('+q8HomeImg.homeTitle+')'}"
          v-if="props.q8StyleTxt === 2019"
        >重磅出击 全方位线上娱乐</span>
        <span
          class="q8Home__box__title_bg-2020"
          v-if="props.q8StyleTxt === 2020"
        >
          <em 
            class="q8Home__box__title__text q8Home__box__title__text-silver"
            :data-word="$t('home_03')"
          >
            {{t('home_03')}}
          </em>
          <em class="q8Home__box__title__text q8Home__box__title__text-golden">
            <span class="q8Home__box__title__text_golden-before">{{t('home_04')}}</span>
            <span class="q8Home__box__title__text_golden-after">{{t('home_04')}}</span>
          </em>
        </span>
      </h2>
      <img 
        class="q8Unit__imgBox_img q8Home__box__girlLeft" 
        :src="q8HomeImg.homeLeftGirl" 
        alt="q8Home girl left"
        :style="{transform:'translate3d('+(q8HomeVal.percentX * leverage * 3)+'px,'+(q8HomeVal.percentY * leverage * 6)+'px,0)'}"
      >
      <img 
        class="q8Unit__imgBox_img q8Home__box__girlRight" 
        :src="q8HomeImg.homeRightGirl" 
        alt="q8Home girl right"
        :style="{transform:'translate3d('+(q8HomeVal.percentX * leverage * 6)+'px,'+(q8HomeVal.percentY * leverage * 3)+'px,0)'}"
      >
    </main>
    <div class="q8Home__box_intsideCloth" :style="{backgroundImage:'url('+q8HomeImg.homeInsideCloth+')'}"/>
    <div class="q8Home__box_outsideCloth">
      <span 
        class="q8Home__box_outsideCloth_img q8Home__box_outsideCloth_img-before"
        :style="{backgroundImage:'url('+q8HomeImg.homeOutsideCloth+')'}"
      />
      <span
        class="q8Home__box_outsideCloth_img q8Home__box_outsideCloth_img-after"
        :style="{backgroundImage:'url('+q8HomeImg.homeOutsideCloth+')'}"
      />
    </div>
  </div>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/qq888Variables.scss";
@keyframes homeStage{
  0% {
    opacity:0;
    transform:translate3d(0,-50%,0)
  }
  100% {
    opacity:1;
    transform:translate3d(0,0,0)
  }
}
@keyframes homeBoxImgWrap{
  0%{
    opacity:0;
    transform:scale3d(.3,.3,1);
  }
  33.33%{transform:scale3d(1.1,1.1,1);}
  66.66%{
    z-index:0;
    transform:scale3d(.9,.9,1);
  }
  100%{
    opacity:1;
    // z-index:1;
    transform:scale3d(1,1,1);
  }
}
$q8HomeW-mob:375;
$q8HomeW-desk:1200;
$q8HomeH-desk:942;
%goldenTitleFlash{
  content:"";
  background-image:radial-gradient(#fff159 0%, rgba(#fff159, 0) 69%);
  position:absolute;
  z-index:1;
  animation:goldenTitleFlash .75s infinite alternate;
}
.q8Home{
  min-width:280px;
  height:100%;
  max-height:736px;
  &-active .q8Home__box{
    &_intsideCloth, &_outsideCloth{z-index:0;}
    &_intsideCloth{transform:translate3d(0,-100%,0);}
  }
  &_wrap{
    min-width:280px;
    max-height:736px;
    overflow:hidden;
    padding-top:$q8HeadMobH + px;
    @extend %wh100pPosfT0L0;
  }
  &__box{
    height:100%;
    position:relative;
    background-size:cover;
    background-position:center;
    &-imgLoad{
      > .q8Home__box{
        &_intsideCloth{transform:translate3d(0,-13%,0);}
        &_stage, &_imgWrap{animation-play-state:paused;}
      }
      .q8Home__box{
        &__moveBg, &__title, &__year, &__girlLeft, &__girlRight{
          animation-play-state:paused;
        }
      }
    }
    &_stage, &_imgWrap, &_intsideCloth, &_outsideCloth{
      width: 100%;
      position: absolute;
      left: 0;
    }
    &_stage{
      height: 100%;
      background-repeat:no-repeat;
      background-position:bottom center;
      background-size:auto 100%;
      top: 0;
    }
    &_imgWrap{
      padding-bottom:calc(354/$q8HomeW-mob)*100%;
      bottom:22%;
    }
    &__year, &__title{
      &-2019{height:0;}
      &_bg-2019{
        @extend %textIndentOut;
        color:transparent;
        background-size:cover;
        @extend %wh100pPosaT0L0;
      }
      &__text{
        display:block;
        position:relative;
        &-silver{
          color:#3b0404;
          text-shadow:1px 2px 0#3b0404, 0 0 5px rgba(#000,.5), 0 0 18px rgba(#000,.2);
          &:after{
            content:attr(data-word);
            text-shadow:none;
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
            width:100%;
            background-image:linear-gradient(180deg, #fff 18%, #d9d9d9 76%, #f4f4f4 100%);
            position:absolute;
            top:0;
            left:0;
          }
        }
      }
    }
    &__moveBg{bottom:50%;}
    &__year{
      width:calc(348/$q8HomeW-mob)*100%;
      margin:0;
      left:calc(-21/$q8HomeW-mob)*100%;
      top:0;
      &-2019{padding-bottom:calc(190/348)*calc(348/$q8HomeW-mob)*100%;}
      &_bg-2020{
        display:block;
        padding:5.5% 7.5% 13% 16.5%;
      }
      &__deco{
        position:absolute;
        z-index:-1;
      }
    }
    &__title{
      width:calc(320/$q8HomeW-mob)*100%;
      margin:0 auto;
      left:0;
      right:0;
      top:calc(160/354)*100%;
      &-2019{padding-bottom:calc(121/320)*calc(320/$q8HomeW-mob)*100%;}
      &__text{
        &-golden{
          vertical-align:top;
          display:inline-block;
          position:relative;
          &:before, &:after{@extend %goldenTitleFlash;}
          &:before{
            width:18px;
            height:18px;
            top:50%;
            right:3%;
            transform:translate3d(48%,-16.667%,0);
            animation-delay:-0.25s;
          }
          &:after{
            width: 26px;
            height: 26px;
            top:38%;
            left:8%;
            transform:translate3d(0,-50%,0);
          }
        }
        &_golden-after{
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          width:100%;
          position:absolute;
          top:0;
          left:0;
        }
        &_golden{
          &-before, &-after{padding-right:0.2em;}
          &-before{
            color:#dca558;
            text-shadow:-1px -1px 0 rgba(#fff,.2),1px 2px 0#2c0303, 0 0 5px rgba(#000,.5), 0 0 18px rgba(#000,.2);
            display:block;
            position:relative;
            &:before{
              content:"";
              width:100%;
              height:0;
              background-image:url("@/assets/img/qq888/homeTitleShadow.png");
              background-size:cover;
              padding-bottom:calc(56/713)*100%;
              margin-bottom:-1.35vw;
              position:absolute;
              left:0;
              bottom:0;
              z-index:-1;
              transform:scale3d(1.25,1.25,1);
            }
          }
          &-after{
            background-image:linear-gradient(180deg, #ffe57a 18%, #dda558 76%, #ffca6c 100%);
            &:before, &:after{
              @extend %goldenTitleFlash;
              width:14px;
              height:14px;
            }
            &:before{
              top:50%;
              right:56%;
              animation-delay:-0.75s;
            }
            &:after{
              bottom:39%;
              left:58%;
              margin-bottom:0.23em;
              animation-delay:-0.5s;
            }
          }
        }
      }
    }
    &__girlLeft{
      width:100%;
      opacity:0;
      z-index:-1;
    }
    &_intsideCloth, &_outsideCloth{z-index:1;}
    &_intsideCloth{
      height:89%;
      background-position:center bottom;
      background-size:cover;
      top:12%;
      transform:translate3d(0,-13%,0);
      transition:transform .4s ease-out;
    }
    &_outsideCloth{
      height:100%;
      box-shadow:0 -100px 0 #310302;
      top:-5.8vw;
      &_img{
        width:100%;
        height:100%;
        background-position-y:top;
        background-repeat:no-repeat;
        background-size:170% auto;
        position:absolute;
        top:0;
      }
    }
  }
}
@media screen and (max-width:280px){
  .q8Home__box_imgWrap{bottom:34%;}
}
@media screen and (min-width:640px){
  .q8Home{
    &__box{
      &_imgWrap{
        max-width:100%;
        height:100%;
        padding-bottom:0;
        margin:auto;
        right:0;
        bottom:0;
      }
      &_intsideCloth{
        top:16%;
        transform:translate3d(0,-17%,0);
      }
      &_outsideCloth{
        top:-3.5vw;
        &_img{
          &-before{opacity:0;}
          &-after{background-size:100% auto;}
        }
      }
    }
    &-active .q8Home__box{
      &_imgWrap{z-index:1;}
      &__girlLeft{animation:leftPigMove 12s infinite alternate;}
    }
  }
}
@media screen and (min-width: 568px) and (max-width: 767px) and (orientation:portrait){
  .q8Home{
    max-height:100%;
    &_wrap{max-height:100%;}
    &-active .q8Home__box_imgWrap{z-index:1;}
  }
}
// ===== 平板拿直的時候 portrait =====
@media screen and (min-width: 768px) and (max-width: 1024px) and (orientation:portrait){
  .q8Home__box{
    &_imgWrap{
      height:0;
      max-width:98%;
      padding-bottom:calc($q8HomeH-desk/$q8HomeW-desk)*98%;
      top:0;
    }
    &__year__text, &__title__text{
      &-silver{text-shadow:2px 2px 0#3b0404, 0 0 10px rgba(#000,.5), 0 0 36px rgba(#000,.2);}
    }
    &__title__text{
      &_golden-before{
        text-shadow:-1px -1px 0 rgba(#fff,.2), 2px 2px 0#2c0303, 0 0 10px rgba(#000,.5), 0 0 36px rgba(#000,.2);
      }
    }
  }
}
// ===== 桌機版型區 =====
@media screen and (min-width: 1024px) {
  .q8Home{
    max-height:100%;
    &_wrap{
      max-height:100%;
      padding-top:$q8HeadDeskH + px;
    }
    &__box{
      &__year__text, &__title__text{
        &-silver{text-shadow:3px 3px 0#3b0404, 0 0 10px rgba(#000,.5), 0 0 36px rgba(#000,.2);}
      }
      &__title__text{
        &_golden-before{
          text-shadow:-1px -1px 0 rgba(#fff,.2), 3px 3px 0#2c0303, 0 0 10px rgba(#000,.5), 0 0 36px rgba(#000,.2);
        }
      }
    }
  }
}
@media screen and (min-width:1200px){
  .q8Home{
    &__box{
      &__year, &__title, &__girlLeft, &__girlRight{transition:transform .4s;}
      &_imgWrap-enter > .q8Home__box{
        &__year, &__title, &__girlLeft, &__girlRight{transition:transform 0s;}
      }
      &_outsideCloth{top:-4vw;}
    }
  }
}
@media screen and (min-width:1440px){
  .q8Home__box__title__text{
    &-golden{
      &:before{
        width:34px;
        height:34px;
      }
      &:after{
        width:48px;
        height:48px;
      }
    }
    &_golden-after{
      &:before, &:after{
        width:26px;
        height:26px;
      }
    }
  }
}
@media screen and (min-width: 2100px){
  .q8Home_wrap{
    max-width:2100px;
    left:50%;
    transform:translate3d(-50%,0,0);
  }
}
</style>