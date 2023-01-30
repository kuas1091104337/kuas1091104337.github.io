<script setup>
import axios from 'axios';
import {useImgLoadCallbackFunc} from '@/composables';
import {useI18n} from "vue-i18n";
import router from '@/router';
const {t} = useI18n(),
      {isImgLoadedCb, imgLoadCallbackFn} = useImgLoadCallbackFunc(),
      props = defineProps({
        getDAeleOffsetFn:{type:Function, default:() => {}}
      }),
      works = reactive({data:[], style:'all'}),
      workStyleChange = (val) => works.style = val,
      DAworksLink = (id) => /^http/gi.test(id) ? window.open(id) : router.push({path:id});
onMounted(() => {
  // Secret delete link // https://designer.mocky.io/manage/delete/ee20544c-5db4-46f8-aa46-c1d3fdebf468/kuas1091104337
  axios.get('https://run.mocky.io/v3/ee20544c-5db4-46f8-aa46-c1d3fdebf468')
  .then(res => {
    works.data = res.data;
    console.log(res.data);
    imgLoadCallbackFn(works.data,'src',props.getDAeleOffsetFn);
  }).catch(error => console.log(error.response.data));
});
</script>

<template>
<h2 class="DAbox__title" :data-word="t('DAworkTitle')">
  <span class="DAbox__title_text">{{t('DAworkTitle')}}</span>
</h2>
<ul class="DAworks_nav">
  <li
    :class="['DAworks_nav_item',{'DAworks_nav_item-selected':works.style === 'all'}]"
    @click="workStyleChange('all')"
  >
    {{t('DAworksAll')}}
  </li>
  <li
    :class="['DAworks_nav_item',{'DAworks_nav_item-selected':works.style === 'ofclWeb'}]"
    @click="workStyleChange('ofclWeb')"
  >
    {{t('DAworks1')}}
  </li>
  <li
    :class="['DAworks_nav_item',{'DAworks_nav_item-selected':works.style === 'actWeb'}]"
    @click="workStyleChange('actWeb')"
  >
    {{t('DAworks2')}}
  </li>
  <li
    :class="['DAworks_nav_item',{'DAworks_nav_item-selected':works.style === 'oldWorks'}]"
    @click="workStyleChange('oldWorks')"
  >
    {{t('DAworks3')}}
  </li>
</ul>
<ul class="DAworks_list">
  <Bbox3dLoading v-if="!isImgLoadedCb"/>
  <li 
    v-for="item in works.data" 
    :key="item.title" 
    :class="['DAworks__item',{'DAworks__item-selected':works.style === item.style || works.style === 'all'}]"
  >
    <SlotMousePos v-slot="{className}">
      <img :src="item.src" :alt="item.title">
      <figcaption :class="className">
        <div class="DAworks__item___content">
          <h3>{{item.title}}</h3>
          <p>{{t('DAworkMade')}}</p>
          <p>{{item.made}}</p>
        </div>
        <div class="DAworks__item___btn">
          <a 
            href="javascript:;"
            @click="DAworksLink(item.href)"
            :data-word="$t('DAworkSee')"
          >
            <span>{{t('DAworkSee')}}</span>
            <span>{{t('DAworkSee')}}</span>
          </a>
          <!-- <RouterLink :data-word="$t('DAworkSee')" :to="item.href">
            <span>{{t('DAworkSee')}}</span>
            <span>{{t('DAworkSee')}}</span>
          </RouterLink> -->
        </div>
      </figcaption>
    </SlotMousePos>
  </li>
</ul>
</template>

<style lang="scss">
$worksBtnW:160px;
$worksBtnH:36px;
.DAworks{
  padding: 10px 20px 20px;
  position:relative;
  &_nav, &_list{@extend %ulReset;}
  &_nav{
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    padding-bottom:30px;
    &_item{
      color:$dGrayColor;
      font-size:18px;
      line-height:2.125;
      background-color:#fff;
      border: 2px solid $dGrayColor;
      cursor:pointer;
      padding:0 14px;
      margin: 10px;
      transition:.4s;
      &-selected{
        color:#fff;
        text-shadow:1px 1px 1px rgba($dBGcolor,.6);
        background-color:$BGcolor;
        border-color:#fff;
        box-shadow:0 2px 4px 2px rgba($dBGcolor,.6);
      }
    }
  }
  &__item{
    font-size:16px;
    width:0;
    max-height:0;
    transform:scale3d(0,0,1);
    transition:width .4s, max-height .4s, padding .4s, margin .4s, transform .4s;
    &-selected{
      width: 100%;
      max-height: 435px;
      margin-bottom:20px;
      transform:scale3d(1,1,1);
    }
    > figure{
      max-width:400px;
      background-color:rgba($dGrayColor,.8);
      padding: 0 15px;
      margin:0 auto;
      overflow:hidden;
      position:relative;
    }
    img{
      width:100%;
      display:block;
      padding:100px 0 65px;
    }
    figcaption{
      text-align: center;
      display: flex;
      flex-direction:column;
      justify-content:space-between;
      padding:15px 0;
      @extend %wh100pPosaT0L0;
    }
    &___content{
      text-shadow:0 1px 2px $GrayColor;
      > h3 {
        color:#fff;
        font-weight:normal;
        margin:0;
      }
      p{
        color:$BGcolor;
        margin: 0.5em 0;
      }
    }
    &___btn{
      width:$worksBtnW;
      height:$worksBtnH;
      background-color:rgba(#000,.2);
      box-shadow:0 1px 4px rgba(#000,.6);
      margin:0 auto;
      perspective:$worksBtnW*2;
      &:hover > a{transform: translate3d(0,0,$worksBtnH*-0.5) rotateX(-90deg);}
      > a{
        color:#fff;
        line-height:$worksBtnH;
        display: block;
        width:100%;
        height:100%;
        position: relative;
        transition:transform .2s;
        transform:translate3d(0,0,$worksBtnH*-0.5);
        transform-style:preserve-3d;
      }
      span{
        @extend %wh100pPosaT0L0;
        &:first-of-type{
          text-shadow:0 1px 1px rgba($dBGcolor,.75);
          background-color:$BGcolor;
          transform:rotateX(0deg) translate3d(0,0,$worksBtnH*0.5);
        }
        &:last-of-type{
          text-shadow:0 1px 1px rgba($dPcolor,.75);
          background-color:$Pcolor;
          transform:rotateX(90deg) translate3d(0,0,$worksBtnH*0.5);
        }
      }
    }
  }
}
@media screen and (min-width: 640px) {
  .DAworks{
    &_list:after{
      content:"";
      display:block;
      clear:both;
    }
    &__item{
      float:left;
      &-selected{
        width: 50%;
        padding:0 10px;
      }
    }
  }
}
@media screen and (min-width: 640px) and (max-width: 1279px) {
  .DAworks{
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media screen and (min-width: 1024px) {
  @keyframes enter-top{
    0%{top:-100%; left:0;}
    100%{top:0; left:0;}
  }
  @keyframes enter-bottom{
    0%{top:100%; left:0%;}
    100%{top:0; left:0;}
  }
  @keyframes enter-right{
    0%{top:0%; left:100%;}
    100%{top:0; left:0;}
  }
  @keyframes enter-left{
    0%{top:0%; left:-100%;}
    100%{top:0; left:0;}
  }
  @keyframes leave-top{
    0%{top:0; left:0;}
    100%{top:-100%; left:0;}
  }
  @keyframes leave-bottom{
    0%{top:0; left:0;}
    100%{top:100%; left:0%;}
  } 
  @keyframes leave-right{
    0%{top:0; left:0;}
    100%{top:0%; left:100%;}
  }
  @keyframes leave-left{
    0%{top:0; left:0;}
    100%{top:0%; left:-100%;}
  }
  .DAworks__item{
    &-selected{
      width: 33.3333%;
      max-height: 300px;
    }
    > figure, img{padding:0;}
    figcaption{
      background-color:rgba($dGrayColor,.9);
      justify-content:center;
      left:100%;
      &.mouseleave{
        &_top{animation: leave-top .2s both}
        &_right{animation: leave-right .2s both}
        &_left{animation: leave-left .2s both}
        &_bottom{animation: leave-bottom .2s both}
      }
      &.mouseenter{
        &_top{animation: enter-top .2s both}
        &_right{animation: enter-right .2s both}
        &_left{animation: enter-left .2s both}
        &_bottom{animation: enter-bottom .2s both}
      }
    }
    &___content{
      text-shadow:0 1px 2px rgba(#000,.6);
      margin-bottom: 20px;
      > h3 {margin-bottom: 20px;}
    }
  }
}
@media screen and (min-width: 1280px) {
  .DAworks{
    padding: 15px 20px 40px;
    &__item-selected{
      padding:0 20px;
      margin-bottom:40px;
    }
  }
}
@media screen and (min-width: 1440px) {
  .DAworks__item-selected{margin-bottom:60px;}
}
@media screen and (min-width: 1600px) {
  .DAworks__item-selected{width: 25%;}
}
@media screen and (min-width: 2560px) {
  .DAworks{
    &_list{
      max-width:$deskMaxWidth;
      margin:0 auto;
    }
    &__item-selected{width:16.666666%;}
  }
}
</style>