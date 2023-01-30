<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const {t} = useI18n(),
      emit = defineEmits(['DArightMenuEle']),
      DAmenu = ref(null),
      DAmenuOffsetWidth = ref(0),
      DAmenuOffsetHeight = ref(0),
      BoxSide = reactive(['front','back','up','down','left','right']),
      DAmenuStop = (e) => e.stopPropagation();
onMounted(() => {
  DAmenuOffsetWidth.value = DAmenu.value.offsetWidth;
  DAmenuOffsetHeight.value = DAmenu.value.offsetHeight;
  emit('DArightMenuEle', DAmenuOffsetWidth, DAmenuOffsetHeight);
});
</script>

<template>
<div class="DArightMenu" ref="DAmenu" @click="DAmenuStop">
  <router-link to="/" class="Box3D sBox3D" title="Dot A Home">
    <span class="Box3D_space sBox3D_space">
      <span v-for="item in BoxSide" :key="item" :class="`Box3D__side sBox3D__side sBox3D__${item}`"></span>
    </span>
    <span class="Box3D_logo sBox3D_logo">A</span>
  </router-link>
  <router-link to="/" class="DArightMenu_btn">
    Dot A 首頁
    <span class="DArightMenu_btn_side">Dot A 首頁</span>
    <span class="DArightMenu_btn_side">Dot A 首頁</span>
  </router-link>
  <span class="DArightMenu_line"></span>
  <span class="DArightMenu_line"></span>
  <span class="DArightMenu_line"></span>
  <span class="DArightMenu_line"></span>
</div>
</template>

<style lang="scss">
.sBox3D{
  margin:15px auto 30px;
  &_space{
    .active &{animation:SsizeBox3dRotate 8s linear infinite;}
  }
  &__side{
    background-color:#fff;
    box-shadow:0 0 0 1px #fff;
  }
  &_logo{
    font-size:$SmallBox3Dsize*0.675;
    line-height:$SmallBox3Dsize*0.97;
    width:$SmallBox3Dsize*0.8;
    height:$SmallBox3Dsize*0.8;
    &:before{
      width:$SmallBox3Dsize*0.15;
      height:$SmallBox3Dsize*0.15;
    }
  }
}
.DArightMenu{
  width: 132px;
  background-color:$GrayColor;
  background-image: url("@/assets/img/index/HFbg.jpg");
  box-shadow:0 2px 6px rgba(0,0,0,.5), 0 0 4px 2px rgba(0,0,0,.6) inset;
  opacity: 0;
  padding:15px;
  position:fixed;
  top: 100px;
  left: 100px;
  z-index:-1;
  transform:rotate3d(0,0,1,8deg) scale3d(.5,.5,1);
  transition:opacity .3s, transform .3s;
  &.active{
    opacity:1;
    z-index:10;
    transform:rotate3d(0,0,1,8deg) scale3d(1,1,1);
  }
  &_btn{
    color:#fff;
		line-height:36px;
    text-align: center;
    width: 102px;
		background-color:rgba(#000,.25);
		box-shadow:0 3px 6px rgba(#000,.5);
		transition:transform .2s;
		transform:perspective(200px) translateZ(-18px);
		transform-style:preserve-3d;
		&:hover{
			transform:perspective(200px) translateZ(-18px) rotateX(-90deg);
			~ .DArightMenu_line{background-color:$Pcolor;}
		}
    &_side{
      @extend %wh100pPosaT0L0;
      &:first-of-type{ 
        text-shadow:0 1px 1px rgba($dBGcolor,.6);
        background-color:$BGcolor;
        transform:rotateX(0deg) translateZ(18px);
      }
      &:last-of-type{
        text-shadow:0 1px 1px rgba($dPcolor,.6);
        background-color:$Pcolor;
        transform:rotateX(90deg) translateZ(18px);
      }
    }
  }
  &_line{
    position:absolute;
		background-color:$BGcolor;
    transform:translate3d(0,0,0);
		transition:background-color .4s, transform .6s;
    &:nth-of-type(1), &:nth-of-type(2){
      width:100%;
      height:2px;
    }
    &:nth-of-type(1){
      top:0;
      left:0;
    }
    &:nth-of-type(2){
      left:0;
      bottom:0;
    }
    &:nth-of-type(3), &:nth-of-type(4){
      width:2px;
      height:100%;
    }
    &:nth-of-type(3){
      top:0;
      left:0;
    }
    &:nth-of-type(4){
      top:0;
      right:0;
    }
  }
  &:hover{
    .DArightMenu_line:nth-of-type(1){transform:translate3d(0,169px,0);}
    .DArightMenu_line:nth-of-type(2){transform:translate(0,-169px);}
    .DArightMenu_line:nth-of-type(3){transform:translate(130px,0);}
    .DArightMenu_line:nth-of-type(4){transform:translate(-130px,0);}
  }
  .sBox3D_logo{ 
    color:$GrayColor;
    &:before{background-color:$GrayColor;}
  }
}
</style>