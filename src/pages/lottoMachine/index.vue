<script setup>
import { useMinNumDigit } from '@/composables';
import dayjs from 'dayjs';
let timer = null, showTimer = null;
const {numTimes, numTimesAdd} = useMinNumDigit(1,4),
      yeekee = reactive({
        runLottery:false, countDownNum:10, nowTime:'00:00:00',
        lottoNum:[
          {style:'small',num:''},{style:'small',num:''},{style:'small',num:''},{style:'small',num:''},
          {style:'pig',num:''},{style:'pig',num:''},{style:'pig',num:''},{style:'pig',num:''},{style:'pig',num:''}
        ]
      }),
      // dayjs(), 等同 dayjs(new Date())
      showTime = () => yeekee.nowTime = dayjs().format('HH:mm:ss'),
      resetLottery = () => {
        yeekee.runLottery = false;
        numTimesAdd();
        yeekee.countDownNum = 10;
        countDown();
      },
      readyLottery = () => {
        yeekee.lottoNum.forEach((val,i) => yeekee.lottoNum[i].num = '');
        yeekee.runLottery = true;
        timer = setTimeout(() => toRunLottery(),4200); // delay + animation 都跑過1次後
      },
      toRunLottery = () => {
        yeekee.lottoNum.forEach((val,i) => {
          timer = setTimeout(() => {
            yeekee.lottoNum[i].num = Math.round(Math.random() * 9).toString();
            if(i === yeekee.lottoNum.length - 1){
              timer = setTimeout(() => resetLottery(),3000); // 顯示3秒開獎號碼後reset
            }
          },i*500);
        });
      },
      countDown = () => {
        clearInterval(timer);
        timer = setInterval(() => {
          yeekee.countDownNum--;
          if(!yeekee.countDownNum){
            clearInterval(timer);
            readyLottery();
          }
        },1000);
      };
onMounted(() => {
  showTimer = setInterval(showTime,1000);
  countDown();
});
onUnmounted(() => {
  clearInterval(timer);
  clearInterval(showTimer);
});
</script>

<template>
<div class="lottoMachine_wrap start">
  <img class="lottoMachine__yeekeeBg" src="@/assets/img/lottoMachine/yeekeeBg1.jpg" alt="yeekee bg">
  <div :class="['lottoMachine__yeekee',{lottoMachine__yeekeeReady:yeekee.runLottery}]">
    <div class="lottoMachine__yeekee_title">
      <p class="lottoMachine__yeekee__text">{{numTimes}}</p>
    </div>
    <section class="lottoMachine__yeekee_left">
      <h3 class="lottoMachine__yeekee__logo">
        <i class="lottoMachine__yeekee__logo_icon"><SvgIcon name="icon-dota" color="#fff"/></i>
        <span class="lottoMachine__yeekee__logo_txt">Dot A LOTTERY</span>
      </h3>
      <p class="lottoMachine__yeekee__time">
        <span class="lottoMachine__yeekee__time_txt">GMT+8</span>
        <span>{{yeekee.nowTime}}</span> 
      </p>
      <h4 class="lottoMachine__yeekee__tel">
        <span class="lottoMachine__yeekee__tel_txt">886</span>
        <span>912345678</span>
      </h4>
      <div class="lottoMachine__yeekee__countdown">
        <span class="lottoMachine__yeekee__countdown_txt">{{yeekee.countDownNum}}</span>
      </div>
    </section>
    <section class="lottoMachine__yeekee_right">
      <h3 class="lottoMachine__yeekee__title">YEEKEE SUMMARY</h3>
      <div class="lottoMachine__yeekee__frame">
        <ul class="lottoMachine__yeekee__frame_wrap">
          <li
            v-for="(item, idx) in yeekee.lottoNum" :key="idx"
            :class="['lottoMachine__yeekee__frame__num lottoMachine__yeekee__frame__num-'+item.style, item.num ? `num${item.num}` : '']"
          />
        </ul>
      </div>
    </section>
  </div>
</div>
</template>

<style lang="scss">
$screenWidth:960;
@keyframes yeekeeNumGo{
	0%{background-position: 0 calc(10/9)*-100%;}
	100%{background-position: 0 0;}
}
.lottoMachine__yeekee{
  line-height:1;
  display:flex;
  padding:size_pxToVw(45,$screenWidth) size_pxToVw(25,$screenWidth) size_pxToVw(40,$screenWidth);
  @extend %wh100pPosaT0L0;
  &_left{
		flex:0 0 35%;
		position: relative;
    perspective:35vw;
  }
  &__logo{
    display: flex;
    &_icon{
      width:size_pxToVw(33.6,$screenWidth);
      height:size_pxToVw(33.6*.95,$screenWidth);
      margin-right:size_pxToVw(6,$screenWidth);
    }
    &_txt{
      font-size: size_pxToVw(33.6,$screenWidth);
      font-weight: normal;
      line-height: 1.1;
      text-shadow:0 .25vw .5vw #000;
      letter-spacing: -0.35vw;
      word-spacing:.55vw;
      padding-top: 1%;
      transform: skew(-10deg);
    }
  }
  &__time, &__tel, &__countdown{
    color:rgba(#fff,.85);
		font-family:Futura, sans-serif;
  }
  &__time{
    font-size: size_pxToVw(30,$screenWidth);
    font-weight: lighter;
    font-style: italic;
    -webkit-text-stroke: size_pxToVw(1,$screenWidth) #000;
    margin: 0.64em 0;
    &_txt{padding-right: size_pxToVw(18,$screenWidth);}
  }
  &__tel{
    font-size: size_pxToVw(36,$screenWidth);
    font-weight: normal;
    display: flex;
    align-items:center;
    margin:0;
    &:before{
      content:"+";
      padding-right: size_pxToVw(5,$screenWidth);
    }
    &_txt{padding-right: size_pxToVw(10,$screenWidth);}
    > span{font-style: italic;}
  }
  &__countdown{
    @extend %wh100pPosaT0L0;
    display:flex;
    background-color:rgba(#000,.75);
    transform-style:preserve-3d;
    transform-origin:50% 100%;
    transition: opacity .2s, transform .2s;
    &_txt{
      font-size: size_pxToVw(150,$screenWidth);
			font-style: italic;
			line-height: 1;
			text-shadow:size_pxToVw(-3,$screenWidth) size_pxToVw(-3,$screenWidth) 0 rgba(0,232,231,1),
									size_pxToVw(-6,$screenWidth) size_pxToVw(-6,$screenWidth) size_pxToVw(3,$screenWidth) rgba(0,232,231,.6),
									size_pxToVw(3,$screenWidth) size_pxToVw(3,$screenWidth) 0 rgba(250,126,39,1),
									size_pxToVw(6,$screenWidth) size_pxToVw(6,$screenWidth) size_pxToVw(3,$screenWidth) rgba(250,126,39,.6),
                  0 0 size_pxToVw(12,$screenWidth) #000,
                  0 0 size_pxToVw(18,$screenWidth) #000,
								  0 0 size_pxToVw(24,$screenWidth) #000;
			padding-right: 2%;
			margin:auto;
      animation:countdownText .5s cubic-bezier(.215,.61,.355,1);
			&:after{
				content:"s";
				margin-left: 2%;
			}
    }
  }
  &_right{flex:0 0 65%;}
  &__title{
    text-align:right;
    font-family:Impact, Helvetica, sans-serif;
    font-weight: bold;
    font-size: size_pxToVw(38,$screenWidth);
    font-style: italic;
    letter-spacing: 4px;
    text-shadow:-2px -2px 0 #fe0000, 0 -1px 2px #fe0000, -1px 0 2px #fe0000,
                -1px -2px 0 #b50000, 0 -2px 0 #b50000, 1px -2px 0 #b50000,
                -2px -1px 0 #b50000, -2px 0 0 #b50000, -2px 1px 0 #b50000, -2px 2px 0 #b50000,
                2px -2px 0 #b50000, 2px -1px 0 #b50000, 2px 0 0 #b50000, 2px 1px 0 #b50000,
                2px 2px 0 #b50000, 1px 2px 0 #b50000, 0 2px 0 #b50000, -1px 2px 0 #b50000,
                2px 5px 1px rgba(#000,.6), 1px 5px 1px rgba(#000,.6);
    padding: 0 size_pxToVw(10,$screenWidth) size_pxToVw(10,$screenWidth) 0;
    margin:0;
  }
  &__frame{
    height: size_pxToVw(138,$screenWidth);
    background-image:linear-gradient(180deg, #ccc1b4 0%, #d4af74 23%, #e8d2b5 55%, #ba8238 75%, #9e5a00 100%);
    border-radius: size_pxToVw(20,$screenWidth);
    box-shadow: size_pxToVw(1,$screenWidth) size_pxToVw(2,$screenWidth) 0 rgba(#fff,.5) inset, 0 size_pxToVw(-1,$screenWidth) 0 size_pxToVw(1,$screenWidth) rgba(#3d2303, .65) inset, 0 size_pxToVw(1,$screenWidth) size_pxToVw(13.5,$screenWidth) size_pxToVw(6.5,$screenWidth) rgba(#000,.25);
    padding: size_pxToVw(8,$screenWidth);
    &_wrap{
      @extend %ulReset;
      width: 100%;
      height: 100%;
      display:flex;
      background: #323132 url("@/assets/img/lottoMachine/screenLotteryNumCbg.png") repeat 0 0/2% 100%;
      border-radius: size_pxToVw(12,$screenWidth);
      overflow: hidden;
      box-shadow: size_pxToVw(1,$screenWidth) size_pxToVw(2,$screenWidth) 0 rgba(#fff,.5), 0 size_pxToVw(-1,$screenWidth) 0 size_pxToVw(1,$screenWidth) rgba(#3d2303, .65), 0 size_pxToVw(1,$screenWidth) size_pxToVw(13.5,$screenWidth) size_pxToVw(6.5,$screenWidth) rgba(#000,.25) inset;
    }
    &__num{
      position: relative;
			&:after{
				content:"";
				width: 100%;
				display: block;
				background-size:100% 1000%;
        backface-visibility: hidden;
        transform: rotate3d(-1,0,0,180deg);
				transition: transform .3s;
			}
      &-pig{
        flex: 0 1 size_pxToVw(86,$screenWidth);
        height: 100%;
        background-image: url("@/assets/img/lottoMachine/screenLotteryNumLbg.png"), url("@/assets/img/lottoMachine/screenLotteryNumRbg.png");
        background-repeat: no-repeat, no-repeat;
        perspective:size_pxToVw(120*1.5,$screenWidth);
        &:after{
          height: 100%;
          background-image:url("@/assets/img/lottoMachine/screenRightSideNum.png");
        }
      }
      // &.num1 ~ 9{background-position: 0 (1 ~ 9/9)*100%;} 
      @for $i from 0 through 9{
        &.num#{$i}:after{background-position: 0 calc($i/9)*100%}
      }
    }
  }
  &Ready{
    .lottoMachine__yeekee__countdown{
      opacity:0;
      transform:rotate3d(1,0,0,105deg);
      transition: opacity .8s, transform .4s;
      &_txt{animation-name: none}
    }
  }
}
</style>