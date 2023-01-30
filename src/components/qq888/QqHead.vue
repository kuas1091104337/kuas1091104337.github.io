<script setup>
import {useI18n} from "vue-i18n";
const {t,locale} = useI18n(),
      props = defineProps({
        navCurrentNum:{type:Number, default:0},
        q8EleOffsetObj:{type:Object, default:() => ({})},
        getQ8EleOffsetFn:{type:Function, default:() => {}}
      }),
      q8MenuIsOpen = ref(false),
      menuToggleFn = () => q8MenuIsOpen.value = !q8MenuIsOpen.value,
      langChangeFn = (newlocale) => {
        if(locale.value === newlocale) return;
        locale.value = newlocale;
        localStorage.setItem('locale',newlocale);
        q8MenuIsOpen.value = false;
        nextTick(() => props.getQ8EleOffsetFn());
      },
      scrollClickFn = (offsetTop,offsetBottom,currentNum) => {
        if(currentNum === props.navCurrentNum) return false;
        q8MenuIsOpen.value = false;
        if(props.q8EleOffsetObj.headW < 1200){
          // scroll to top
          window.scrollTo({top:offsetTop - props.q8EleOffsetObj.headH, behavior:'smooth'});
        }else{
          // scroll to center
          window.scrollTo({top:offsetTop - window.innerHeight/2  - props.q8EleOffsetObj.headH/2 + (offsetBottom - offsetTop)/2, behavior:'smooth'});
        };
      };
</script>

<template>
  <div :class="['q8Head_wrap',{'q8Head_wrap-open':q8MenuIsOpen}]">
    <ul class="q8Head__menu">
      <li class="q8Head__menu_item q8Head__menu_item-home">
        <RouterLink to="/" class="q8Head__menu_item_link">
          <SvgIcon name="icon-dota" color="#434343"/>
        </RouterLink>
        <select 
          v-model.number="props.q8EleOffsetObj.style"
          class="q8Head__menu_item_select"
        >
          <option value="2019">2019版</option>
          <option value="2020">2020版</option>
        </select>
      </li>
      <li class="q8Head__menu_item">
        <span
          :class="['q8Head__menu__link',{'q8Head__menu__link-select':props.navCurrentNum === 1}]"
          @click="scrollClickFn(props.q8EleOffsetObj.homeT,props.q8EleOffsetObj.homeB,1)"
        >{{t('head_01')}}</span>
      </li>
      <li class="q8Head__menu_item">
        <span
          :class="['q8Head__menu__link',{'q8Head__menu__link-select':props.navCurrentNum === 2}]"
          @click="scrollClickFn(props.q8EleOffsetObj.aboutT,props.q8EleOffsetObj.aboutB,2)"
        >{{t('head_02')}}</span>
      </li>
      <li class="q8Head__menu_item">
        <span
          :class="['q8Head__menu__link',{'q8Head__menu__link-select':props.navCurrentNum === 3}]"
          @click="scrollClickFn(props.q8EleOffsetObj.chessT,props.q8EleOffsetObj.chessB,3)"
        >{{t('head_03')}}</span>
      </li>
      <li class="q8Head__menu_item">
        <span
          :class="['q8Head__menu__link',{'q8Head__menu__link-select':props.navCurrentNum === 4}]"
          @click="scrollClickFn(props.q8EleOffsetObj.lotteryT,props.q8EleOffsetObj.lotteryB,4)"
        >{{t('head_04')}}</span>
      </li>
      <li class="q8Head__menu_item">
        <span
          :class="['q8Head__menu__link',{'q8Head__menu__link-select':props.navCurrentNum === 5}]"
          @click="scrollClickFn(props.q8EleOffsetObj.esportsT,props.q8EleOffsetObj.esportsB,5)"
        >{{t('head_05')}}</span>
      </li>
      <li class="q8Head__menu_item">
        <span
          :class="['q8Head__menu__link',{'q8Head__menu__link-select':props.navCurrentNum === 6}]"
          @click="scrollClickFn(props.q8EleOffsetObj.sexyT,props.q8EleOffsetObj.sexyB,6)"
        >{{t('head_06')}}</span>
      </li>
      <li class="q8Head__menu_item">
        <span
          :class="['q8Head__menu__link',{'q8Head__menu__link-select':props.navCurrentNum === 7}]"
          @click="scrollClickFn(props.q8EleOffsetObj.processT,props.q8EleOffsetObj.processB,7)"
        >{{t('head_07')}}</span>
      </li>
      <li class="q8Head__menu_item">
        <span
          :class="['q8Head__menu__link',{'q8Head__menu__link-select':props.navCurrentNum === 8}]"
          @click="scrollClickFn(props.q8EleOffsetObj.contactT,props.q8EleOffsetObj.contactB,8)"
        >{{t('head_08')}}</span>
      </li>
      <li class="q8Head__menu_item q8Head__menu_item-lang">
        <span 
          :class="['q8Head__menu__link q8Head__menu__link-lang',{'q8Head__menu__link-select':locale === 'en-US'}]"
          @click="langChangeFn('en-US')"
        >EN</span>
        <span
          :class="['q8Head__menu__link q8Head__menu__link-lang',{'q8Head__menu__link-select':locale === 'zh-TW'}]"
          @click="langChangeFn('zh-TW')"
        >繁</span>
        <span 
          :class="['q8Head__menu__link q8Head__menu__link-lang',{'q8Head__menu__link-select':locale === 'zh-CN'}]"
          @click="langChangeFn('zh-CN')"
        >简</span>
        <span
          :class="['q8Head__menu__link q8Head__menu__link-lang',{'q8Head__menu__link-select':locale === 'th-TH'}]"
          @click="langChangeFn('th-TH')"
        >TH</span>
        <span
          :class="['q8Head__menu__link q8Head__menu__link-lang',{'q8Head__menu__link-select':locale === 'vi-VN'}]" 
          @click="langChangeFn('vi-VN')"
        >VN</span>
      </li>
    </ul>
    <div class="q8Head__mob" @click="menuToggleFn">
      <span class="q8Head__mob_btn">
        <span class="q8Head__mob__bar"></span>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
@import"@/assets/scss/qq888Variables.scss";
@keyframes headSlide {
  0%{top:-60px;}
  100%{top:0;}
}
.q8Head{
  width: 100%;
  height:$q8HeadMobH + px;
  background-color:#fff;
  background-image:linear-gradient(180deg, rgba(#fff,.1) 15%, rgba(#000,.1) 78%, rgba(#b3b3b3,.1) 100%);
  box-shadow: 0 1px 0 #ffeb9d, 0 2px 0 #bda12e, 0 3px 0 #a67712, 0 4px 0 #f2be4b, 0 10px 20px rgba(#000,.2);
  @extend %posaT0L0;
  z-index:2;
  &_wrap-open{
    > .q8Head__menu{
      transition:transform .4s;
      transform:translate3d(-100%, 0, 0);
    }
    .q8Head__menu{
      &_item-home{
        padding:0 30px;
        margin-bottom:44px;
        position:initial;
      }
      &__link-home{padding:0 30px;}
    }
    .q8Head__mob{
      &_btn{
        border-radius:50%;
        background-color:rgba(#000,.3);
        transform:rotate3d(0,0,1,180deg);
      }
      &__bar{
        width:25px;
        background-color:rgba(#434343,0);
        &:before{transform:translate3d(0,0,0) rotate3d(0,0,1,45deg);}
        &:after{transform:translate3d(0,0,0) rotate3d(0,0,1,-45deg);}
      }
    }
  }
  &__menu{
    @extend %ulReset;
    width: 100%;
    height: 100%;
    background-color:#fff;
    background-image: linear-gradient(135deg,
                        rgba(#000,0) 46%, rgba(#000,.1) 46%, rgba(#000,.1) 54%, rgba(#000,0) 54%
                      ),
                      linear-gradient(180deg,
                        rgba(#fff,.1) 15%, rgba(#000,.1) 78%, rgba(#b3b3b3,.1) 100%
                      );
    background-size: 7px 7px, cover;
    overflow: auto;
    padding:48px 0;
    position: fixed;
    top:0;
    left:100%;
    transition: transform .2s;
    &_item{
      &-home{
        height:32px;
        display:flex;
        align-items:center;
        position:fixed;
        top:7px;
        left:8px;
        transition:padding .4s, margin-bottom .4s;
      }
      &-lang{
        display: flex;
        justify-content:center;
        margin-top:44px;
      }
      &_link{
        width:30px;
        height:28px;
      }
    }
    &__link{
      color: #434343;
      font-size:24px;
      font-weight:300;
      line-height:44px;
      height:44px;
      display:block;
      padding:0 30px;
      transition: color .4s;
      &-lang{
        text-align: center;
        width:52px;
        padding:0;
        + .q8Head__menu__link-lang{
          margin-left: 20px;
          position: relative;
          &:before{
            content:"";
            width:1px;
            height:28px;
            background-color: #434343;
            position: absolute;
            top:10px;
            left: -10px;
          }
        }
      }
    }
  }
  &__mob{
    width:$q8HeadMobH + px;
    height:$q8HeadMobH + px;
    padding:5px;
    position:fixed;
    top:0px;
    right:0px;
    &_btn{
      height: 100%;
      display: block;
      transition: background-color .4s, border-radius .4s, transform .4s;
    }
    &__bar{
      width:22px;
      height:1px;
      background-color:#434343;
      @extend %maPosaT0L0R0B0;
      transition:background-color .4s;
      &:before, &:after {
        content:"";
        background-color:#434343;
        @extend %wh100pPosaT0L0;
        transition:transform .4s;
      }
      &:before{transform:translate3d(0,8px,0);}
      &:after{transform:translate3d(0,-8px,0);}
    }
  }
}
// ===== 桌機版型區 =====
@media screen and (min-width: 1024px){
  .q8Head{
    height:$q8HeadDeskH + px;
    &_wrap-open .q8Head__menu{
      transform:translate3d(0,0,0);
      &_item-home{margin-bottom:0;}
      &__link-home{padding:0;}
    }
    &__menu{
      display:flex;
      background-color:transparent;
      background-image:none;
      overflow:initial;
      padding:5px 0;
      position:initial;
      &_item{
        &-home{
          height:44px;
          position:initial;
          margin:0 auto 0 0;
        }
        &-lang{margin:0 0 0 auto;}
        &_link{
          width:40px;
          height:38px;
          padding:5px;
        }
        &_select{
          font-size:14px;
          padding:0 1px;
          margin-left:0;
        }
      }
      &__link{
        font-size:14px;
        font-weight:normal;
        line-height:44px;
        &-lang{
          width:auto;
          + .q8Head__menu__link-lang{
            margin-left: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1200px){
  .q8Head{ 
    &_wrap{
      max-width:1280px;
      margin:0 auto;
    }
    &__menu__link-lang{width:44px;}
  }
}
@media screen and (min-width: 1280px){
  .q8Head__menu{
    &_item_select, &__link{font-size:16px;}
  }
}
@media screen and (min-width: 2100px){
  .q8Head{
    left: 50%;
    transform:translate3d(-50%,0,0);
  }
}
</style>