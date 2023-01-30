<script setup>
import errorImg from "@/assets/img/error.png";
const props = defineProps({
        imgWidth:{type:Number, default:0},
        imgHeight:{type:Number, default:0},
        imgTop:{type:Number, default:0},
        imgLeft:{type:Number, default:0},
        imgSrc:{type:String, default:'test'}
      }),
      load = ref(true),
      error = ref(false),
      imgSrc = ref('');
onMounted(() => {
  const img = new Image();
  img.src = props.imgSrc;
  img.onload = () => {
    load.value = false;
    imgSrc.value = props.imgSrc;
  };
  img.onerror = () => {
    error.value = true;
    load.value = false;
    imgSrc.value = errorImg;
  };
});
</script>

<template>
  <div
    :class="['WFloadBox',{load,error}]"
    :style="{
      width:props.imgWidth+'px', 
      height:props.imgHeight+'px', 
      top:props.imgTop+'px',
      left:props.imgLeft+'px'
    }"
  >
    <img class="WFloadBox_img" :src="imgSrc">
  </div>
</template>

<style lang="scss">
@keyframes imgLoad{
  0%{background-position-x:0;}
  100%{background-position-x:120px;}
}
.WFloadBox{
  // background-image:linear-gradient(
  //   135deg,
  //   $BGcolor 1.25%, $Pcolor 21.25%, $Pcolor 25%, $Pcolor 0, $Pcolor 26.25%, $BGcolor 48.75%,
  //   $BGcolor 51.25%, $Pcolor 73.75%, $Pcolor 75%, $Pcolor 0, $Pcolor 76.25%, $BGcolor 98.75%
  // );
  background-image:linear-gradient(
    135deg,
    $BGcolor 2.5%, $Pcolor 47.5%, $Pcolor 50%, 
    $BGcolor 0, $BGcolor 52.5%, $Pcolor 97.5%
  );
  background-size: 120px 120px;
  position: absolute;
  transition:width .4s .2s,height .4s .2s,top .4s .2s,left .4s .2s;
  &.load{animation: imgLoad 1s linear infinite;}
  &.error{
    background-color:#e0e0e0;
    background-image:none;
  }
  &_img{
    @extend %wh100pPosaT0L0;
    .load &{opacity: 0;}
    .error &{
      width: auto;
      height: auto;
      right: 0;
      bottom: 0;
      margin:auto;
    }
  }
}
</style>