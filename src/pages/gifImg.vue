<script setup>
import { useImgLoad } from '@/composables';
import axios from 'axios';
const gifImgData = ref([]),
      { isImgLoaded, imgLoadFn } = useImgLoad(),
      gifImgIdx = ref(''),
      gifImgFn = (idx, e) => {
        gifImgIdx.value = idx;
        if(e.currentTarget.classList.contains('show')) gifImgIdx.value = '';
      },
      imgFn = (e) => {
        if(e.target.parentNode.classList.contains('show')) e.stopPropagation();
      };
onMounted(() => {
  // Secret delete link https://designer.mocky.io/manage/delete/32e0f766-ef6d-4b09-9ad0-772d8b98f632/kuas1091104337
  axios.get('https://run.mocky.io/v3/32e0f766-ef6d-4b09-9ad0-772d8b98f632')
  .then((res) => {
    gifImgData.value = res.data;
    imgLoadFn(gifImgData.value,'src');
  }).catch((error) => {
    console.log(error.message, error.response.data);
  });
});
</script>

<template>
  <Head/>
  <div class="DAwrap DAgifImg">
    <div 
      v-for="(item, idx) in gifImgData" 
      :key="item.src"
      :class="['DAgifImg_box',{show:gifImgIdx === idx}]"
      @click="gifImgFn(idx, $event)"
    >
      <img
        class="DAgifImg_box_img"
        :width="item.width" 
        :height="item.height"
        :src="item.src"
        @click="imgFn($event)"
      >
      <span class="DAgifImg_box_close"></span>
    </div>
    <Bbox3dLoading v-if="!isImgLoaded"/>
  </div>
  <Foot class="DAfoot-normal"/>
</template>

<style lang="scss">
.DAgifImg{
  &_box{
    display: flex;
    align-items:center;
    &.show{
      height: 100%;
      background-image: linear-gradient(45deg, rgba(#000,.5) 25%, transparent 0, transparent 75%, rgba(#000,.5) 0),
                        linear-gradient(45deg,rgba(#000,.5) 25%, transparent 0, transparent 75%, rgba(#000,.5) 0);
      background-size:10px 10px;
      background-position:0 0, 5px 5px;
      @extend %posfT0L0;
      z-index:2;
      > .gifImg_box{
        &_img{margin:auto;}
        &_close{
          width: 36px;
          height: 36px;
          background-color:#fff;
          border-radius: 50%;
          position:absolute;
          top:4px;
          right:4px;
          &:before, &:after{
            content:"";
            width: 26px;
            height: 2px;
            background-color:$BGcolor;
            border-radius: 2px;
            @extend %maPosaT0L0R0B0;
          }
          &:before{transform:rotate3d(0,0,1,45deg);}
          &:after{transform:rotate3d(0,0,1,-45deg);}
        }
      }
    }
    &_img{
      max-width: 100%;
      height: auto;
      margin: 15% auto;
    }
  }
  > .DAgifImg_box.show{
    width: 100%;
    max-width: 100%;
    background-color:rgba(#000,.95);
  }
}
@media screen and (min-width: 640px) {
  .DAgifImg{
    display: flex;
    flex-wrap:wrap;
    &_box{
      width: 50%;
      padding:0 15px;
      &:last-of-type{width: 100%;}
    }
  }
}
@media screen and (min-width: 1366px) {
  .DAgifImg_box{
    width: 33.333%;
    transition:background-color .4s;
    &_img{transition:box-shadow .4s;}
    &:hover{
      background-color:rgba(#000,.5);
      > .DAgifImg_box_img{box-shadow:0 3px 21px 3px rgba(#000,.5);}
    }
    &:last-of-type > .DAgifImg_box_img{margin: 195px auto;}
  }
}
@media screen and (min-width: 1920px) {
  .DAgifImg_box{
    width: 25%;
    &:last-of-type{
      width: 50%;
      > .DAgifImg_box_img{margin: 15% auto;}
    }
  }
}
@media screen and (min-width: 2560px) {
  .DAgifImg{
    justify-content:center;
    margin:0 auto;
    &_box{
      width: 20%;
      max-width: 504px;
      &:last-of-type{
        width: 100%;
        max-width: 100%;
        > .DAgifImg_box_img{margin: 195px auto;}
      }
    }
  }
}
</style>