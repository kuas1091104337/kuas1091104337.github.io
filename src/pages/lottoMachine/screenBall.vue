<script setup>
import { useImgLoadCallbackFunc, useMinNumDigit } from '@/composables';
let timer = null;
const {numTimes, numTimesAdd} = useMinNumDigit(1,3),
      lottoTime = 3500,
      { isImgLoadedCb, imgLoadCallbackFn } = useImgLoadCallbackFunc(),
      ball = reactive({
        img:[], runLottery:false, lottoTimes:1,
        lottoNum:[{color:'blue',num:''},{color:'yellow',num:''},{color:'red',num:''},{color:'yellow',num:''},{color:'blue',num:''},{color:'sixth',num:''}],
      }),
      sreenBallImg = reactive({
        jackpotBg:'https://kuas1091104337.github.io/DotA_img/lottoMachine/jackpotBg.jpg',
        jackpotCoin:'https://kuas1091104337.github.io/DotA_img/lottoMachine/jackpotCoin.png',
        jackpotRound:'https://kuas1091104337.github.io/DotA_img/lottoMachine/jackpotRound.png',
        jackpotBallFrame:'https://kuas1091104337.github.io/DotA_img/lottoMachine/jackpotBallFrame.png',
        jackpotBallLight:'https://kuas1091104337.github.io/DotA_img/lottoMachine/jackpotBallLight.png',
        jackpotBallFrameSixth:'https://kuas1091104337.github.io/DotA_img/lottoMachine/jackpotBallFrameSixth.png',
        jackpotBallLightSixth:'https://kuas1091104337.github.io/DotA_img/lottoMachine/jackpotBallLightSixth.png'
      }),
      resetLottery = () => {
        numTimesAdd();
        ball.runLottery = false;
        ball.lottoNum.forEach((val,i) => ball.lottoNum[i].num = '');
        toRunLottery();
      },
      toRunLottery = () => {
        timer = setTimeout(() => {
          ball.lottoNum.forEach((val,i) => {
            setTimeout(() => {
              const ballNum = Math.round(Math.random() * 9).toString();
              if ((i + 1) % ball.lottoNum.length) {
                ball.lottoNum[i].num = ballNum;
              } else {
                switch(ballNum) {
                  case 9 :
                    ball.lottoNum[i].num = 100;
                    break;
                  case 8 :
                    ball.lottoNum[i].num = 50;
                    break;
                  case 7 :
                    ball.lottoNum[i].num = 30;
                    break;
                  case 6 :
                  case 5 :
                  case 4 :
                    ball.lottoNum[i].num = 10;
                    break;
                  default :
                    ball.lottoNum[i].num = 5;
                }
              }
              if(i === ball.lottoNum.length - 1){
                ball.runLottery = true;
                timer = setTimeout(() => resetLottery(),lottoTime);
              }
            },i*500);
          });
        },lottoTime);
      };
for(let key in sreenBallImg){
  ball.img.push({src:sreenBallImg[key]});
}
imgLoadCallbackFn(ball.img,'src',toRunLottery);
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
<div :class="['lottoMachine_wrap',{start:isImgLoadedCb}]">
  <img class="lottoMachine__screenBg" :src="sreenBallImg.jackpotBg" alt="jackpot bg">
  <img class="lottoMachine__screenCoin" :src="sreenBallImg.jackpotCoin" alt="jackpot coin">
  <section class="lottoMachine__screenBox">
    <h3 class="lottoMachine__screenBox_logo">
      <i class="lottoMachine__screenBox_logo_icon"><SvgIcon name="icon-dota" color="#fff"/></i>
      <span class="lottoMachine__screenBox_logo_txt">Dot A LOTTERY</span>
    </h3>
    <div class="lottoMachine__screenBox_title lottoMachine__screenBox_title-round">
      <img class="lottoMachine__screenBox__img" :src="sreenBallImg.jackpotRound" alt="jackpot round">
      <p class="lottoMachine__screenBox__num">
        {{numTimes}}
        <span class="lottoMachine__screenBox___text">{{numTimes}}</span>
      </p>
    </div>
    <ul :class="['lottoMachine__screenBox_ballList',{lottoMachine__screenBox_ballListReult:ball.runLottery}]"> 
      <li
        v-for="(item, idx) in ball.lottoNum" :key="idx"
        class="lottoMachine___ballList_item"
      >
        <img :src="sreenBallImg.jackpotBallFrame" class="lottoMachine___ballList__bg" alt="jackpot ball frame">
        <img :src="sreenBallImg.jackpotBallLight" class="lottoMachine___ballList__light" alt="jackpot ball light">
        <div :class="['lottoMachine___ballList__ball lottoMachine___ballList__ball-'+item.color, item.num ? `num${item.num}` : '']">
          <span class="lottoMachine___ballList__ball_num"></span>
        </div>
      </li>
    </ul>
  </section>
</div>
</template>

<style lang="scss">
$screenWidth:960;
$ballDotW:10452;
$ballDotH:268;
@keyframes lottoBallDot{
  0% {background-position: 0 0;}
  // 全部39張圖片 39/(39-1)
  100% {background-position: calc(39/38)*100% 0;}
}
@keyframes lottoBallLight {
  0%, 25% {opacity: 0;}
  75%, 100% {opacity: 1;}
}
@keyframes ballLastColor{
	20%, 50%, 80%{background-position: 50% 0;}//greenBall
	0%, 10%, 30%, 40%, 60%, 70%, 90%, 100%{background-position: 0 0;}//blackBall
}
@keyframes ballNumLast{
	0%, 100%{content:'10';}
	10%{content:'5';}
	20%{content:'50';}
	30%{content:'10';}
	40%{content:'5';}
	50%{content:'30';}
	60%{content:'5';}
	70%{content:'10';}
	80%{content:'100';}
	90%{content:'5';}
}
@keyframes lottoBallShiny {
  0% {opacity: 0;}
  50% {opacity: 1;}
}
// .lottoMachine___ballList__ball.num4 > .lottoMachine___ballList__ball_num:before
.lottoMachine{
  &__screenBox{
    &_title-round{@extend %disFlexJustifyAlignCenter;}
    &__img{width:24vw;}
    &__num{
      color:#caa145;
			font-size:size_pxToVw(60,$screenWidth);
			font-weight: bold;
			margin: 0 3.5% 0 5%;
			position: relative;
			top: 1.5%;
			transform:skew(-6deg);
    }
    &___text{
      text-shadow:none;
      background-image:linear-gradient(180deg, #fff 2.5%, #dfb24d 97.5%);
      @extend %wh100pPosaT0L0;
      z-index:1;
    }
    &_ballList{
      @extend %ulReset;
      display: flex;
      opacity: 0;
      transform:scale3d(.5,.5,1);
      transition:opacity .8s .8s,transform .8s .8s cubic-bezier(.5,-.5,.5,1.5);
      .start &{
        opacity: 1;
			  transform:scale3d(1, 1, 1);
      }
      &.lottoMachine__screenBox_ballListReult{
        .lottoMachine___ballList__light, .lottoMachine___ballList__dot{
          animation: lottoBallShiny 1s steps(1) infinite;
        }
        .lottoMachine___ballList__dot{background-position: 100% 0;}
      }
    }
  }
  &___ballList{
    &_item{
      width: size_pxToVw(134,$screenWidth);
      position: relative;
      &:after{
        content:"";
        background-image:url("@/assets/img/lottoMachine/jackpotBallDot.png");
        @extend %wh100pPosaT0L0;
        .start &{animation:lottoBallDot 6s steps(39) infinite alternate;}
      }
    }
    &__bg, &__light{width: 100%;}
    &__light{
      opacity:0;
      @extend %posaT0L0;
      .start &{animation: lottoBallLight 6s infinite alternate;}
    }
    &__ball{
      color: #333;
      width: 55.2%;
      height: 55.2%;
      background-color:#000;
      background-image:url("@/assets/img/lottoMachine/ballColor5.png");
      background-size:calc(1330/250)*100% 100%;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 size_pxToVw(5,$screenWidth) size_pxToVw(8,$screenWidth) size_pxToVw(1,$screenWidth) rgba(#000,.6),
                  0 size_pxToVw(2.5,$screenWidth) size_pxToVw(4,$screenWidth) size_pxToVw(1,$screenWidth) rgba(#000,.3),
                  0 0 size_pxToVw(3,$screenWidth) size_pxToVw(1,$screenWidth) rgba(#000,.5) inset;
      position:absolute;
      top:22.4%;
      left:22.4%;
      z-index:1;
      perspective:size_pxToVw(74*2,$screenWidth);
      &-red{background-position: 75% 0;}
      &-yellow{background-position: 100% 0;}
      &-blue{background-position: 25% 0;}
      &-sixth{
        > .lottoMachine___ballList__ball_num{
          &:before, &:after{
            font-size: size_pxToVw(20,$screenWidth);
            width: 56%;
            left: 22%;
            .start &{
              animation-name:ballNumLast;
              animation-direction:alternate;
            }
          }
        }
      }
      &_num{
        width: 100%;
        height: 100%;
        display: block;
        transform-style:preserve-3d;
        .start &{animation: ballScroll 1s -0.25s cubic-bezier(.25, -.25, .75, 1.25) infinite;}
        &:before, &:after{
          content:"";
          font-size: size_pxToVw(24,$screenWidth);
          line-height: 1;
          width: 40%;
          height: 40%;
          @extend %disFlexJustifyAlignCenter;
          background-color:#fffde6;
          border-radius:size_pxToVw(22,$screenWidth);
          box-sizing:border-box;
          padding-top: 8%;
          position: absolute;
          top:30%;
          left:30%;
          backface-visibility:hidden;
        }
      }
    }
  }
}
</style>