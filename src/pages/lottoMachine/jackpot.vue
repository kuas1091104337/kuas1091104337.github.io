<script setup>
import { useImgLoadCallbackFunc } from '@/composables';
let timer = null;;
const { isImgLoadedCb, imgLoadCallbackFn } = useImgLoadCallbackFunc(),
      jackpot = reactive({img:[], runLottery:false, lottoNum:[...Array(10)]}),
      jackpotImg = reactive({
        jackpotBg:'https://kuas1091104337.github.io/DotA_img/lottoMachine/jackpotBg.jpg',
        jackpotCoin:'https://kuas1091104337.github.io/DotA_img/lottoMachine/jackpotCoin.png',
        jackpotLogo:'https://kuas1091104337.github.io/DotA_img/lottoMachine/jackpotLogo.png',
        jackpotBox:'https://kuas1091104337.github.io/DotA_img/lottoMachine/jackpotBox.jpg',
        jackpotFrame:'https://kuas1091104337.github.io/DotA_img/lottoMachine/jackpotFrame.png'
      }),
      resetLottery = () => {
        jackpot.runLottery = false;
        timer = setTimeout(() => toRunLottery(),800);
      },
      toRunLottery = () => {
        jackpot.lottoNum = [...Array(10)];
        jackpot.runLottery = true;
        timer = setTimeout(() => {
          jackpot.lottoNum.forEach((val,i) => {
            setTimeout(() => {
              const jackpotNum = Math.round(Math.random() * 9).toString();
              jackpot.lottoNum[i] = jackpotNum;
              if(i === jackpot.lottoNum.length - 1) timer = setTimeout(() => resetLottery(),2500);
            },i*400);
          });
        },5000);
      };
for(let key in jackpotImg){
  jackpot.img.push({src:jackpotImg[key]});
}
imgLoadCallbackFn(jackpot.img,'src',toRunLottery);
onUnmounted(() => clearInterval(timer));
</script>

<template>
<div :class="['lottoMachine_wrap',{start:isImgLoadedCb}]">
  <img class="lottoMachine__screenBg" :src="jackpotImg.jackpotBg" alt="jackpot bg">
  <img class="lottoMachine__screenCoin" :src="jackpotImg.jackpotCoin" alt="jackpot coin">
  <section class="lottoMachine__screenBox">
    <h3 class="lottoMachine__screenBox_logo">
      <i class="lottoMachine__screenBox_logo_icon"><SvgIcon name="icon-dota" color="#fff"/></i>
      <span class="lottoMachine__screenBox_logo_txt">Dot A LOTTERY</span>
    </h3>
    <img class="lottoMachine__screenBox_title lottoMachine__screenBox_title-jackpot" :src="jackpotImg.jackpotLogo" alt="jackpot logo">
    <div class="lottoMachine__screenBoxGold">
      <img class="lottoMachine__screenBoxGold_bg" :src="jackpotImg.jackpotBox" alt="jackpot gold bg">
      <ul :class="['lottoMachine__screenBoxGold_list',{lottoMachine__screenBoxGold_listReady:jackpot.runLottery}]"> 
        <li 
          v-for="(item,idx) in jackpot.lottoNum" :key="idx"
          :class="['lottoMachine__screenBoxGold__item',item ? `lottoMachine__screenBoxGold__item-num${item}` : '']"
        >
          <img class="lottoMachine__screenBoxGold__item_img" :src="jackpotImg.jackpotFrame" alt="jackpot number frame">
        </li>
      </ul>
    </div>
  </section>
</div>
</template>

<style lang="scss">
$screenWidth:960;
$jackpotLogo:calc(586/2);
$jackpotGoldWidth:calc(1126/2);
$jackpotGoldHeight:calc(220/2);
$jackpotBulbUnitWidth:calc(1144/2);
$jackpotBulbHeight:calc(240/2);
$jackpotFrameWidth:calc(108/2);
$jackpotFrameHeight:calc(174/2);
$jackpotNumWidth:calc(100/2);
$jackpotNumUnitHeight:calc(164/2);
@keyframes jackpotBulb {
  0% {background-position:0 0;}
  // 全部3張圖片 3/(3-1)
  100% {background-position:calc(3/2)*100% 0;}
}
@keyframes jackpotNum{
 0%{background-position:0 calc(10/9)*-100%;}
 100%{background-position: 0 0;}
}
.lottoMachine__screenBox{
  &_title-jackpot{width:calc($jackpotLogo/$screenWidth)*100%;}
  &Gold{
    width:calc($jackpotGoldWidth/$screenWidth)*100%;
		position: relative;
    &_bg{
      width: 100%;
			border-radius: size_pxToVw(8,$screenWidth);
			box-shadow: 0 size_pxToVw(3,$screenWidth) size_pxToVw(9,$screenWidth) size_pxToVw(1,$screenWidth) rgba(#000,.8);
    }
    &_list{
      @extend %ulReset;
      @extend %disFlexJustifyAlignCenter;
      @extend %wh100pPosaT0L0;
      &Ready{
        > .lottoMachine__screenBoxGold__item{
          background-color:#633306;
          box-shadow: 0 size_pxToVw(3,$screenWidth) size_pxToVw(5,$screenWidth) size_pxToVw(-1,$screenWidth) #000;
          @for $i from 1 through 10 {
            &:nth-child(#{$i}):before{animation-delay: ($i + 1) * .4s;}
          }
          @for $i from 2 through 10 {
            &:nth-child(#{$i}){transition-delay: ($i - 1) * .4s;} //.5s
            &:nth-child(#{$i}):before{transition-delay: ($i - 1) * .4s;} //.5s
          }
        }
      }
    }
    &:after{
			content:"";
			width:calc($jackpotBulbUnitWidth/$jackpotGoldWidth)*100%; // width: 1146/1126 * 100%;
			height:calc($jackpotBulbHeight/$jackpotGoldHeight)*100%;
      background-image:url("@/assets/img/lottoMachine/jackpotBulb.png");
			background-size:300% 100%;
      pointer-events:none;
			position:absolute;
			top:calc(($jackpotBulbHeight - $jackpotGoldHeight) / $jackpotGoldHeight) * -50%;
			left:calc(($jackpotBulbUnitWidth - $jackpotGoldWidth) / $jackpotGoldWidth) * -50%; // left:(1146 - 1128) / 1126 * -50%;
      .start &{animation: jackpotBulb 1.8s steps(3) infinite;}
		}
    &__item{
      width:calc($jackpotFrameWidth/$jackpotGoldWidth)*100%;
      border-radius: size_pxToVw(5,$screenWidth);
      position: relative;
      transition: box-shadow .4s;
      perspective:size_pxToVw(200,$screenWidth);
    }
  }
}
</style>