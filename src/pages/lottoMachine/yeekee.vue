<script setup>
import { useMinNumDigit } from '@/composables';
let timer = null; 
const {numTimes, numTimesAdd} = useMinNumDigit(1,4),
      draw = reactive({ 
        lottoTimes:1, ready:false, summaryNum:[...Array(6)], num:[...Array(3)],
        drawNum:[{color:'blue',num:''},{color:'yellow',num:''},{color:'red',num:''},{color:'yellow',num:''},{color:'blue',num:''}]
      }),
      resetLottery = () => {
        draw.ready = false;
        numTimesAdd();
        timer = setTimeout(() => readyLottery(),1000);
      },
      readyLottery = () => {
        draw.summaryNum = [...Array(6)];
        draw.num = [...Array(3)];
        draw.drawNum.forEach((val,i) => draw.drawNum[i].num = '');
        draw.ready = true;
        timer = setTimeout(() => drawBoxNum6(),5000);
      },
      drawBoxNum6 = () => {
        draw.summaryNum.forEach((val,i) => {
          timer = setTimeout(() => {
            draw.summaryNum[i] = Math.round(Math.random() * 9).toString();
            if(i === draw.summaryNum.length - 1) timer = setTimeout(() => drawBoxBall5(),500);
          },i*500);
        });
      },
      drawBoxBall5 = () => {
        draw.drawNum.forEach((val,i) => {
          timer = setTimeout(() => {
            draw.drawNum[i].num = Math.round(Math.random() * 9).toString();
            if(i === draw.drawNum.length - 1) timer = setTimeout(() => drawFrameNum3(),500);
          },i*500);
        });
      },
      drawFrameNum3 = () => {
        draw.num.forEach((val,i) => {
          timer = setTimeout(() => {
            draw.num[i] = Math.round(Math.random() * 9).toString();
            if(i === draw.num.length - 1) setTimeout(() => resetLottery(),3000);
          },i*500);
        });
      };
onMounted(() => {
  readyLottery();
});
</script>

<template>
<div class="lottoMachine_wrap start">
  <img class="lottoMachine__yeekeeBg" src="@/assets/img/lottoMachine/yeekeeBg2.jpg" alt="yeekee bg">
  <img class="lottoMachine__yeekeeTitle" src="@/assets/img/lottoMachine/yeekeeTitle.png" alt="yeekee title">
  <div :class="['lottoMachine__draw',{lottoMachine__drawReady:draw.ready}]">
    <div class="lottoMachine__yeekee_title">
      <p class="lottoMachine__yeekee__text">{{numTimes}}</p>
    </div>
    <div class="lottoMachine__draw_info">
      <section class="lottoMachine__draw__box">
        <h3 class="lottoMachine__draw__box_title">YEEKEE SUMMARY</h3>
        <div
          v-for="(item, idx) in draw.summaryNum" :key="idx"
          :class="['lottoMachine__draw__box_num',item ? `lottoMachine__draw__box_num-${item}` : '']"
        />
      </section>
      <span class="lottoMachine__draw__bar"></span>
      <section class="lottoMachine__draw__box">
        <h3 class="lottoMachine__draw__box_title">DRAW NUMBER</h3>
        <div 
          v-for="(item, idx) in draw.drawNum" :key="idx"
          :class="['lottoMachine__draw__box_ball lottoMachine__draw__box_ball-'+item.color, item.num ? `lottoMachine__draw__box_ball-num${item.num}` : '']"
        >
          <div class="lottoMachine__draw__box__dot"/>
        </div>
      </section>
    </div>
    <ul class="lottoMachine__draw_lottery">
      <li v-for="(item, idx) in draw.num" :key="idx" class="lottoMachine__draw__frame">
        <span :class="['lottoMachine__draw__frame_num', item ? `lottoMachine__draw__frame_num-${item}` : '']"/>
      </li>
    </ul>
  </div>
</div>
</template>

<style lang="scss">
$screenWidth:960;
$boxNumWH:65;
$boxBallWH:80;
$drawFrameWH:100;
$drawFrameBorderW:8;
@keyframes yeekeeNumScroll{
	0%{background-position: 0 calc(10/9)*-100%;}
	100%{background-position: 0 0;}
}
.lottoMachine__draw{
  @extend %wh100pPosaT0L0;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding: size_pxToVw(30,$screenWidth) size_pxToVw(10,$screenWidth) size_pxToVw(10,$screenWidth);
  &_info{
    display:flex;
		justify-content:space-between;
    align-items:center;
  }
  &__box{
    width: size_pxToVw(440,$screenWidth);
    height: size_pxToVw(100,$screenWidth);
    @extend %disFlexJustifyAlignCenter;
    border-radius: size_pxToVw(100,$screenWidth);
    box-shadow: 0 0 0 1px #fff;
    position: relative;
    &_title{
			font-size: size_pxToVw(22,$screenWidth);
			font-family: Arial, Verdana, sans-serif;
			font-weight: bold;
			line-height: 1;
			white-space:nowrap;
			background-color:#000;
			padding: 0 2px;
      margin:0;
			position:absolute;
			top:0;
			left:50%;
			transform:translate3d(-50%, -65%, 0) skew(-10deg);
    }
    &_num{
      width: size_pxToVw($boxNumWH,$screenWidth);
			height: size_pxToVw($boxNumWH,$screenWidth);
			position: relative;
      perspective:size_pxToVw($boxNumWH*1.5,$screenWidth);
      &:after{
				content: "";
				background-image:url("@/assets/img/lottoMachine/screenInfoNum.png");
				background-size:100% 1000%;
        @extend %wh100pPosaT0L0;
        backface-visibility: hidden;
				transform: rotate3d(-1,0,0,180deg);
				transition: transform .5s;
			}
    }
    &_ball{
      width: size_pxToVw($boxBallWH,$screenWidth);
			height: size_pxToVw($boxBallWH,$screenWidth);
			background-image:url("@/assets/img/lottoMachine/ballColor5.png");
			border-radius: 50%;
			overflow: hidden;
			position: relative;
      &-red{background-position: 75% 0;}
      &-yellow{background-position: 100% 0;}
      &-blue{background-position: 25% 0;}
      + .lottoMachine__draw__box_ball{margin-left: size_pxToVw(5,$screenWidth);}
      &__dot{
        width: 100%;
				height: 100%;
				transform-style:preserve-3d;
				transform:rotate3d(1,0,0,90deg);
				transition: transform .5s cubic-bezier(.25,-.25,.25,1.25);
        &:before{
					content:"";
					font-family: Helvetica, Arial, sans-serif;
					font-size: size_pxToVw(50,$screenWidth);
					font-weight: bold;
					line-height: 1;
					width: 70%;
					height: 70%;
					background-color:#fffde6;
          @extend %disFlexJustifyAlignCenter;
					border-radius:size_pxToVw(30,$screenWidth);
					box-sizing:border-box;
					padding-top: 2%;
					position: absolute;
					top: 15%;
					left: 15%;
					backface-visibility: hidden;
					transform:translateZ(size_pxToVw(calc($boxBallWH/2)-1,$screenWidth));
				}
      }
      &:after{
				content:"";
				border-radius: 50%;
        @extend %wh100pPosaT0L0;
				box-shadow:size_pxToVw(-16,$screenWidth) size_pxToVw(-16,$screenWidth) size_pxToVw(16,$screenWidth) size_pxToVw(-4,$screenWidth) rgba(#000,.15) inset,
									 0 0 size_pxToVw(3,$screenWidth) size_pxToVw(1.5,$screenWidth) rgba(#000,.4) inset;
			}
    }
    &__dot{
      color:#000;
      width: 100%;
      height: 100%;
      transform-style:preserve-3d;
      transform:rotate3d(1,0,0,90deg);
      &:before{
        content:"";
        font-family: Helvetica, Arial, sans-serif;
        font-size: size_pxToVw(50,$screenWidth);
        font-weight: bold;
        line-height: 1;
        width: 70%;
        height: 70%;
        background-color:#fffde6;
        @extend %disFlexJustifyAlignCenter;
        border-radius:size_pxToVw(30,$screenWidth);
        box-sizing:border-box;
        padding-top: 2%;
        position: absolute;
        top: 15%;
        left: 15%;
        backface-visibility: hidden;
      }
    }
  }
  &__bar{
    width:size_pxToVw(20,$screenWidth);
    height:size_pxToVw(8,$screenWidth);
    background-color:#fff;
  }
  &_lottery{
    @extend %ulReset;
    display:flex;
		justify-content:center;
  }
  &__frame{
    width: size_pxToVw($drawFrameWH+$drawFrameBorderW*2,$screenWidth);
    height: size_pxToVw($drawFrameWH+$drawFrameBorderW*2,$screenWidth);
    background-image:linear-gradient(180deg, #ccc1b4 0%, #d4af74 23%, #e8d2b5 55%, #ba8238 75%, #9e5a00 100%);
    border-radius: size_pxToVw(20,$screenWidth);
    box-shadow: size_pxToVw(1,$screenWidth) size_pxToVw(2,$screenWidth) 0 rgba(#fff, .5) inset, 0 size_pxToVw(-1,$screenWidth) 0 size_pxToVw(1,$screenWidth) rgba(#3d2303, .65) inset, 0 size_pxToVw(1,$screenWidth) size_pxToVw(13.5,$screenWidth) size_pxToVw(6.5,$screenWidth) rgba(#000,.25);
    padding: size_pxToVw(8,$screenWidth);
  }
  &Ready{
    .lottoMachine__draw{
      &__box_num, &__frame_num{
        &:after{
          transform: rotate3d(0,0,0,0deg);
          animation: yeekeeNumScroll 1.6s linear infinite both;
        }
      }
      &__box{
        &__dot{
          animation: ballScroll 1s 1.5s cubic-bezier(.25, -.25, .75, 1.25) infinite;
          &:before{animation:ballNum 10s steps(1) infinite;}
        }
      }
    }
  }
}
</style>