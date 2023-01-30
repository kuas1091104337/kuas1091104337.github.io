<script setup>
import { useImgArraysLoad } from '@/composables';
import axios from 'axios';
let imgChangeTime = 250;
const { imgArrsLoad } = useImgArraysLoad(),
      data = reactive({
        plan:[], first:[], second:[], third:[], fourth:[]
      }),
      videoPlay = () => {
        const idx = ref(0),
              isPlay = ref(false),
              timer = ref(null),
              idxChange = (val,leng) => {
                idx.value += val;
                idx.value = (idx.value + leng) % leng;
              };
        return {
          idx: () => idx.value,
          timer: () => timer.value,
          isPlay: () => isPlay.value,
          next: (leng) => idxChange(1,leng),
          prev: (leng) => idxChange(-1,leng),
          change: (leng) => {
            isPlay.value = !isPlay.value;
            if(isPlay.value){
              clearInterval(timer.value);
              timer.value = setInterval(() => idxChange(1,leng),imgChangeTime);
            }
            if(!isPlay.value) clearInterval(timer.value);
          }
        }
      },
      planImg = videoPlay(),
      video1 = videoPlay(),
      video2 = videoPlay(),
      video3 = videoPlay(),
      video4 = videoPlay(),
      planLoad = imgArrsLoad(),
      video1Load = imgArrsLoad(),
      video2Load = imgArrsLoad(),
      video3Load = imgArrsLoad(),
      video4Load = imgArrsLoad();
onMounted(() => {
  // Secret delete link // link https://designer.mocky.io/manage/delete/fe4a945c-5050-4efb-9cfa-2d18836904fd/kuas1091104337
  axios.get('https://run.mocky.io/v3/fe4a945c-5050-4efb-9cfa-2d18836904fd')
  .then((res) => {
    data.plan = res.data.plan.imgArr.map((el,idx) => {
      return {src:el, alt:`${res.data.plan.title} ${idx}`}
    });
    data.first = res.data.first.imgArr.map((el,idx) => {
      return {src:el, alt:`${res.data.first.title} ${idx}`}
    });
    data.second = res.data.second.imgArr.map((el,idx) => {
      return {src:el, alt:`${res.data.second.title} ${idx}`}
    });
    data.third = res.data.third.imgArr.map((el,idx) => {
      return {src:el, alt:`${res.data.third.title} ${idx}`}
    });
    data.fourth = res.data.fourth.imgArr.map((el,idx) => {
      return {src:el, alt:`${res.data.fourth.title} ${idx}`}
    });
    planLoad.imgLoad(data.plan,'src');
    video1Load.imgLoad(data.first,'src');
    video2Load.imgLoad(data.second,'src');
    video3Load.imgLoad(data.third,'src');
    video4Load.imgLoad(data.fourth,'src');
    // console.log(data);
  }).catch((error) => {
    console.log(error.response.data);
  });
});
// onUnmounted(() => {
//   planImg = null; video1 = null; video2 = null; video3 = null; video4 = null;
//   planLoad = null; video1Load = null; video2Load = null; video3Load = null; video4Load = null;
// });
</script>

<template>
<Head/>
<div class="DAwrap DAvideo">
  <main class="DAwrap_box DAvideo_wrap">
    <h2 class="DAvideo_wrap_title">BS 7Poker 宣傳影片企劃</h2>
    <div class="DAvideo__box">
      <div class="DAvideo__box_wrap" v-if="!planLoad.isLoad()">
        <img 
          class="DAvideo__box_wrap_img"
          v-for="(item, idx) in data.plan" 
          :key="item.src"
          :src="item.src" 
          :alt="item.alt"
          v-show="planImg.idx() === idx"
        >
      </div>
      <ul class="DAvideo__box_ctrl">
        <li class="DAvideo__box_ctrl_prev" @click="planImg.prev(data.plan.length)"></li>
        <li class="DAvideo__box_ctrl_num">{{planImg.idx()+1}}</li>
        <li class="DAvideo__box_ctrl_next" @click="planImg.next(data.plan.length)"></li>
      </ul>
      <div class="DAvideo__box_load" v-if="planLoad.isLoad()">
        <Bbox3dLoading class="posCenter"/>
      </div>
    </div>
    <h3 class="DAvideo_wrap_title">BS 7Poker 第一版 宣傳影片</h3>
    <div class="DAvideo__box">
      <div class="DAvideo__box_wrap" v-if="!video1Load.isLoad()">
        <img 
          class="DAvideo__box_wrap_img"
          v-for="(item, idx) in data.first" 
          :key="item.src" 
          :src="item.src" 
          :alt="item.alt"
          v-show="video1.idx() === idx"
        >
      </div>
      <div 
        class="DAvideo__box_play"
        v-if="!video1.timer()"
        @click="video1.change(data.first.length)"
      >
      </div>
      <ul :class="['DAvideo__box_ctrl',{play:video1.isPlay()}]">
        <li class="DAvideo__box_ctrl_prev" @click="video1.prev(data.first.length)"></li>
        <li class="DAvideo__box_ctrl_switch" @click="video1.change(data.first.length)"></li>
        <li class="DAvideo__box_ctrl_next" @click="video1.next(data.first.length)"></li>
      </ul>
      <div class="DAvideo__box_load" v-if="video1Load.isLoad()">
        <Bbox3dLoading class="posCenter"/>
      </div>
    </div>
    <h3 class="DAvideo_wrap_title">BS 7Poker 第二版 宣傳影片</h3>
    <div class="DAvideo__box">
      <div class="DAvideo__box_wrap" v-if="!video2Load.isLoad()">
        <img 
          class="DAvideo__box_wrap_img"
          v-for="(item, idx) in data.second" 
          :key="item.src" 
          :src="item.src" 
          :alt="item.alt"
          v-show="video2.idx() === idx"
        >
      </div>
      <div 
        class="DAvideo__box_play" 
        v-if="!video2.timer()" 
        @click="video2.change(data.second.length)"
      >
      </div>
      <ul :class="['DAvideo__box_ctrl',{play:video2.isPlay()}]">
        <li class="DAvideo__box_ctrl_prev" @click="video2.prev(data.second.length)"></li>
        <li class="DAvideo__box_ctrl_switch" @click="video2.change(data.second.length)"></li>
        <li class="DAvideo__box_ctrl_next" @click="video2.next(data.second.length)"></li>
      </ul>
      <div class="DAvideo__box_load" v-if="video2Load.isLoad()">
        <Bbox3dLoading class="posCenter"/>
      </div>
    </div>
    <h3 class="DAvideo_wrap_title">BS 7Poker 第三版 宣傳影片</h3>
    <div class="DAvideo__box">
      <div class="DAvideo__box_wrap" v-if="!video3Load.isLoad()">
        <img 
          class="DAvideo__box_wrap_img"
          v-for="(item, idx) in data.third" 
          :key="item.src" 
          :src="item.src" 
          :alt="item.alt" 
          v-show="video3.idx() === idx"
        >
      </div>
      <div 
        class="DAvideo__box_play" 
        v-if="!video3.timer()" 
        @click="video3.change(data.third.length)"
      >
      </div>
      <ul :class="['DAvideo__box_ctrl',{play:video3.isPlay()}]">
        <li class="DAvideo__box_ctrl_prev" @click="video3.prev(data.third.length)"></li>
        <li class="DAvideo__box_ctrl_switch" @click="video3.change(data.third.length)"></li>
        <li class="DAvideo__box_ctrl_next" @click="video3.next(data.third.length)"></li>
      </ul>
      <div class="DAvideo__box_load" v-if="video3Load.isLoad()">
        <Bbox3dLoading class="posCenter"/>
      </div>
    </div>
    <h3 class="DAvideo_wrap_title">BS 7Poker 完稿版 宣傳影片</h3>
    <div class="DAvideo__box">
      <div class="DAvideo__box_wrap" v-if="!video4Load.isLoad()">
        <img 
          class="DAvideo__box_wrap_img"
          v-for="(item, idx) in data.fourth" 
          :key="item.src"
          :src="item.src" 
          :alt="item.alt" 
          v-show="video4.idx() === idx"
        >
      </div>
      <div 
        class="DAvideo__box_play" 
        v-if="!video4.timer()" 
        @click="video4.change(data.fourth.length)"
      >
      </div>
      <ul :class="['DAvideo__box_ctrl',{play:video4.isPlay()}]">
        <li class="DAvideo__box_ctrl_prev" @click="video4.prev(data.fourth.length)"></li>
        <li class="DAvideo__box_ctrl_switch" @click="video4.change(data.fourth.length)"></li>
        <li class="DAvideo__box_ctrl_next" @click="video4.next(data.fourth.length)"></li>
      </ul>
      <div class="DAvideo__box_load" v-if="video4Load.isLoad()">
        <Bbox3dLoading class="posCenter"/>
      </div>
    </div>
    <h3 class="DAvideo_wrap_title">BS 7Poker YouTube版</h3>
    <div class="DAvideo_wrap_video">
      <iframe class="DAvideo_wrap_video_iframe" width="560" height="315" src="https://www.youtube.com/embed/8vAXeBS1yLA?hd=1&amp;loop=1&amp;playlist=8vAXeBS1yLA" frameborder="0" allowfullscreen></iframe>
    </div>
  </main>
</div>
<Foot class="DAfoot-normal"/>
</template>

<style lang="scss">
span.load{background-color:yellow;}
@keyframes loading {
  0%{background-position-x: 0%;}
  100%{background-position-x: 200%;}
}
.DAvideo{
  &_wrap{
    &_title{
      color: $BGcolor;
      font-size: 21px;
      text-align: center;
      text-shadow: 1px 1px 0 $dBGcolor;
      margin: 1.2rem 0;
      transform: skew(-6deg);
    }
    &_video{
      max-width: 800px;
      height: 0;
      padding-bottom: calc(315/560)*100%;
      margin: 0 auto 36px;
      position: relative;
      &_iframe{@extend %wh100pPosaT0L0;}
    }
  }
  &__box{
    position:relative;
    padding-bottom: calc(450/800)*100%;
    margin-bottom: 36px;
    &_load{
      @extend %wh100pPosaT0L0;
      background-color:#ededed;
      background-image: linear-gradient(
        110deg, 
        rgba(#fff,0) 17.5%, rgba(#fff,.75) 42.5%, rgba(#fff,0) 0%, 
        rgba(#fff,0) 60%, rgba(#fff,.75) 85%, rgba(#fff,0) 0%
      );
      background-size: 200% 100%;
      animation: 2s loading linear infinite;
    }
    &_wrap{
      @extend %posaT0L0;
      &_img{width: 100%}
    }
    &_play{
      @extend %wh100pPosaT0L0;
      &:before, &:after{@extend %posaT50pL50pTran3d-50p}
      &:before{
        content:"";
        width: 68px;
        height: 48px;
        border-radius: 10px;
        background-color: $youtubeRed;
      }
      &:after{
        @extend %beforeAfterTriangleBaseSet;
        border-width: 10px 0 10px 18px;
        border-color: transparent transparent transparent #fff;
      }
      + .DAvideo__box_ctrl{
        transform: perspective(1000px) rotate3d(1,0,0,90deg);
      }
    }
    &_ctrl{
      @extend %ulReset;
      width: 100%;
      height: 46px;
      display: flex;
      justify-content:center;
      background-image:linear-gradient(180deg, rgba(#000,0) 0%, rgba(#000,.15) 20%, rgba(#000,.55) 100%);
      position:absolute;
      left:0;
      bottom:0;
      transition:transform .6s;
      transform-origin:50% 100%;
      &.play{
        > .DAvideo__box_ctrl{
          &_switch:after{
            border-color: #fff;
            border-width: 12px 3px;
            box-shadow: 14px 0 0 #fff;
            margin-right: 14px;
          }
          &_prev, &_next{
            opacity: .5;
            pointer-events:none;
          }
        }
      }
      &_switch, &_prev, &_next, &_num{
        text-align: center;
        width: 54px;
      }
      &_switch, &_next, &_num{margin-left: 20px;}
      &_prev, &_next{
        padding-top: 15px;
        transition:opacity .4s;
        &:before, &:after{display: inline-block;}
      }
      &_prev:before, &_next:after{
        content:"";
        width: 3px;
        height: 16px;
        background-color:#fff;
      }
      &_prev:after, &_next:before{
        @extend %beforeAfterTriangleBaseSet;
      }
      &_prev:after{
        border-width: 8px 14px 8px 0;
        border-color: transparent #fff transparent transparent;
      }
      &_next:before{
        border-width: 8px 0 8px 14px;
        border-color: transparent transparent transparent #fff;
      }
      &_num{
        color:#fff;
        font-size: 18px;
        font-weight: 300;
        line-height: 46px;
        text-shadow: 0 1px 3px rgba(#000,.75);
      }
      &_switch{
        padding-top: 11px;
        &:after{
          @extend %beforeAfterTriangleBaseSet;
          display: inline-block;
          border-width: 12px 0 12px 20px;
          border-color: transparent transparent transparent rgba(#fff,0.5);
          transition: border-color .4s,border-width .4s,box-shadow .4s,margin-right .4s;
        }
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .DAvideo{
    &_wrap_title{font-size: 18px;}
    &_wrap_video, &__box{margin-bottom: 32px;}
  }
}
@media screen and (max-width: 375px) {
  .DAvideo{
    &_wrap_title{font-size: 24px;}
    &_wrap_video, &__box{margin-bottom: 40px;}
  }
}
@media screen and (min-width: 640px) {
  .DAvideo{
    padding: 50px;
    &_wrap{
      padding: 30px 50px;
      &_title{font-size: 24px;}
    }
  }
}
@media screen and (min-width: 768px) {
  .DAvideo_wrap{
    max-width: 900px;
    margin:0 auto;
    &_title{font-size: 32px;}
  }
}
</style>