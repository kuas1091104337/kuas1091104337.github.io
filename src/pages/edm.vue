<script setup>
import { useImgLoad } from '@/composables';
import axios from 'axios';
const { isImgLoaded, imgLoadFn } = useImgLoad(),
      edmIdx = ref(0),
      isEdmMenuShow = ref(true),
      edmData = reactive({tagImg:[], edmImg:[]}),
      menuShowFn = () => isEdmMenuShow.value = !isEdmMenuShow.value,
      edmIdxChangeFn = (idx) => {
        edmIdx.value = idx;
        isEdmMenuShow.value = false;
      };
onMounted(() => {
  // Secret delete link // https://designer.mocky.io/manage/delete/5e47b9cc-e4c8-4449-8c9b-1076dafbc5a5/kuas1091104337
  axios.get('https://run.mocky.io/v3/5e47b9cc-e4c8-4449-8c9b-1076dafbc5a5')
  .then((res) => {
    edmData.tagImg = res.data.tagImg;
    edmData.edmImg = res.data.edmImg;
    imgLoadFn(edmData.tagImg,'src');
  }).catch((error) => {
    console.log(error.response.data);
  });
  if(isImgLoaded) setTimeout(() => isEdmMenuShow.value = false, 1000);
});
</script>

<template>
<Head/>
<div class="DAwrap DAedm">
  <aside :class="['DAedm_menu',{show:isEdmMenuShow}]">
    <ul class="DAedm_menu_box">
      <li 
        v-for="(item, idx) in edmData.tagImg" 
        :key="item.src"
        :class="['DAedm_menu__item',{active:edmIdx === idx}]" 
        @click="edmIdxChangeFn(idx)"
      >
        <img class="DAedm_menu___img" :src="item.src" :alt="item.alt">
        <p class="DAedm_menu___txt">{{item.alt}}</p>
      </li>
      <BTextLoading v-if="!isImgLoaded"/>
    </ul>
  </aside>
  <div class="DAwrap_box DAedm_wrap">
    <Bbox3dLoading v-if="!edmData.edmImg.length"/>
    <img 
      class="DAedm_wrap_img" 
      v-for="(item, idx) in edmData.edmImg" 
      :key="item.src"
      :src="item.src" 
      :alt="item.alt" 
      v-show="edmIdx === idx"
    >
  </div>
  <div 
    :class="['DAedm_btn',{show:isEdmMenuShow}]"
    @click="menuShowFn"
  >
    <span class="DAedm_btn_bar"></span>
  </div>
</div>
<Foot class="DAfoot-normal"/>
</template>

<style lang="scss">
.DAedm{
  &_menu{
    @extend %wh100pPosfT0L0;
    background-image:url("@/assets/img/index/divBg2.jpg");
		overflow:auto;
		padding-bottom:$DAheadH;
		margin-top:$DAheadH;
		z-index:1;
		transition:transform .4s;
    transform:translate3d(0,-100%,0);
    &.show{transform:translate3d(0,0,0);}
    &_box{
      @extend %ulReset;
      display:flex;
      flex-wrap:wrap;
      padding:10px;
    }
    &__item{
      color:$GrayColor;
			text-align: center;
      width: calc(50% - 20px);
			cursor:pointer;
			background-color:rgba(0,0,0,.2);
			border-radius:$DAborderW;
			padding:$DAborderW;
      margin: 10px;
    }
    &___img{
      width:100%;
      border-radius:3px;
    }
    &___txt{
      @extend %textIndentDot;
      margin:.6em 0;
    }
  }
  &_wrap{
    text-align:center;
    &_img{max-width: 100%}
  }
  &_btn{
    width:44px;
		height:44px;
		cursor:pointer;
		background-color:$Pcolor;
		border-radius:50%;
		box-shadow:0 1px 0 $lPcolor inset, 0 1px 3px rgba(#000,.6);
		padding:5px;
		position:fixed;
		right:10px;
		bottom:10px;
		z-index:1;
		transition:box-shadow .4s, transform .4s;
    &_bar, &_bar:before, &_bar:after{
      background-color:#fff;
      border-radius:2px;
    }
    &_bar{
      width:26px;
      height:2px;
      @extend %maPosaT0L0R0B0;
      transition:width .4s, background-color .4s;
      &:before{transform: translate3d(0, -8px, 0);}
      &:after{transform: translate3d(0, 8px, 0);}
      &:before, &:after{
        content:"";
        @extend %wh100pPosaT0L0;
        transition:transform .4s;
      }
    }
    &.show{
      box-shadow:0 -1px 0 $lPcolor inset, 0 -1px 3px rgba(#000,.6);
      transform:rotate(180deg);
      > .DAedm_btn_bar{
        width:30px;
        background-color: transparent;
        &:before{transform:translate3d(0,0,0) rotate(-45deg);}
        &:after{transform:translate3d(0,0,0) rotate(45deg);}
      }
    }
  }
}
@media screen and (min-width: 568px) {
  .DAedm_menu__item{width: calc(33.3333% - 20px);}
}
@media screen and (min-width: 768px) {
  .DAedm_menu__item{width: calc(25% - 20px);}
}
// ===== 平板拿直的時候 portrait =====
@media screen and (min-width: 768px) and (max-width: 1024px) and (orientation:portrait) {
  .DAedm_menu{
    height: auto;
    border-radius:0 0 $DAborderW $DAborderW;
    box-shadow:0 2px 4px rgba(#000,.6);
    padding-bottom: 0;
  }
}
@media screen and (min-width: 1024px) {
  .DAedm{
    padding: 30px;
    &_menu{
      height: auto;
      border-radius:0 0 $DAborderW $DAborderW;
      padding-bottom: 0;
      &.show{box-shadow:0 2px 4px rgba(#000,.6);}
      &__item{width: calc(20% - 20px);}
    }
    &_wrap{
      max-width: 1060px;
      padding: 30px;
      margin:0 auto;
    }
  }
}
@media screen and (min-width: 1200px) {
  .DAedm_menu_box{
    max-width: 1200px;
    margin:0 auto;
  }
}
</style>