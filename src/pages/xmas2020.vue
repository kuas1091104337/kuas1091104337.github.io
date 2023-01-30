<script setup>
import {useImgLoad, useDotAContextMenu} from '@/composables';
const DArightMenuVal = reactive({W:0,H:0}),
      {isDArightMenuShow, windowPos, DArightMenuHide, DArightMenuShow} = useDotAContextMenu(DArightMenuVal),
      {isImgLoaded, imgLoadFn} = useImgLoad(),
      xmasData = reactive({
        imgArr:[],
        loaded:false,
        ready:false,
        img:{
          whiteBall:'https://kuas1091104337.github.io/DotA_img/xmas2020/whiteBall.png',
          redWhiteCandy:'https://kuas1091104337.github.io/DotA_img/xmas2020/redWhiteCandy.png',
          goldenBall:'https://kuas1091104337.github.io/DotA_img/xmas2020/goldenBall.png',
          pinkCandy:'https://kuas1091104337.github.io/DotA_img/xmas2020/pinkCandy.png',
          candyBar:'https://kuas1091104337.github.io/DotA_img/xmas2020/candyBar.png',
          redSnowBall:'https://kuas1091104337.github.io/DotA_img/xmas2020/redSnowBall.png',
          yellowCandy:'https://kuas1091104337.github.io/DotA_img/xmas2020/yellowCandy.png',
          redWhiteBall:'https://kuas1091104337.github.io/DotA_img/xmas2020/redWhiteBall.png',
          candyCanes:'https://kuas1091104337.github.io/DotA_img/xmas2020/candyCanes.png',
          orangeWhiteCandy:'https://kuas1091104337.github.io/DotA_img/xmas2020/orangeWhiteCandy.png'
        }
      }),
      DArightMenuEleFn = (w,h) => {
        DArightMenuVal.W = w.value;
        DArightMenuVal.H = h.value;
      };
for(let key in xmasData.img){
  xmasData.imgArr.push({src:xmasData.img[key]});
}
watch(isImgLoaded,(newVal) => {
  if(newVal === true){
    xmasData.loaded = true;
    setTimeout(() => {
      xmasData.ready = true;
      xmasData.loaded = false;
    },1500);
  }
});
onMounted(() => {
  imgLoadFn(xmasData.imgArr,'src');
});
</script>

<template>
<div class="Xmax" @click="DArightMenuHide" @contextmenu.prevent="DArightMenuShow">
  <div :class="['Xmax_main',{'Xmax_main-ready':xmasData.ready},{'Xmax_main-loaded':xmasData.loaded}]">
    <div class="Xmax_main_snow">
      <div class="Xmax_main_snow_item Xmax_main_snow_item-1-1">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow1.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-1-2">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow1.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-1-3">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow1.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-2-1">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow2.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-2-2">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow2.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-2-3">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow2.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-2-4">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow2.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-2-5">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow2.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-3-1">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow3.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-3-2">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow3.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-3-3">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow3.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-4-1">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow4.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-4-2">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow4.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-4-3">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow4.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-4-4">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow4.png">
      </div>
      <div class="Xmax_main_snow_item Xmax_main_snow_item-4-5">
        <img class="Xmax_main_snow__img" src="@/assets/img/xmas2020/snow4.png">
      </div>
    </div>
    <div class="Xmax_main_field">
      <img class="Xmax_main_field_train" src="../assets/img/xmas2020/train.png" alt="xmas train">
      <div class="Xmax_main_field_img Xmax_main_field_img-back"></div>
      <div class="Xmax_main_field_img Xmax_main_field_img-front"></div>
    </div>
    <main class="Xmax_main_content">
      <h2 class="Xmax_main_content_logo">
        <RouterLink to="/" class="Xmax_main_content_logo_link">
          <i class="Xmax_main_content_logo__icon"><!-- deae00 006d00 -->
            <SvgIcon name="icon-dota" color="#006d00"/>
          </i>
          <span class="Xmax_main_content_logo__txt">Dot A</span>
        </RouterLink>
      </h2>
      <h1 class="Xmax_main_content_theme" data-word="Xmas 背景特效">
        <span class="Xmax_main_content_theme_span">Xmas 背景特效</span>
      </h1>
      <h3 class="Xmax_main_content_title" data-word="聖誕節活動">
        <span class="Xmax_main_content_title_span">聖誕節活動</span>
      </h3>
      <h3 class="Xmax_main_content_title" data-word="企劃這樣做！">
        <span class="Xmax_main_content_title_span">企劃這樣做！</span>
      </h3>
    </main>
    <ul class="Xmax_main_candy">
      <li class="Xmax_main_candy_item Xmax_main_candy_whiteBall-small">
        <img class="Xmax_main_candy__img" :src="xmasData.img.whiteBall">
      </li>
      <li class="Xmax_main_candy_item Xmax_main_candy_redWhiteCandy">
        <img class="Xmax_main_candy__img" :src="xmasData.img.redWhiteCandy">
      </li>
      <li class="Xmax_main_candy_item Xmax_main_candy_goldenBall-big">
        <img class="Xmax_main_candy__img" :src="xmasData.img.goldenBall">
      </li>
      <li class="Xmax_main_candy_item Xmax_main_candy_pinkCandy">
        <img class="Xmax_main_candy__img" :src="xmasData.img.pinkCandy">
      </li>
      <li class="Xmax_main_candy_item Xmax_main_candy_candyBar">
        <img class="Xmax_main_candy__img" :src="xmasData.img.candyBar">
      </li>
      <li class="Xmax_main_candy_item Xmax_main_candy_redSnowBall-center">
        <img class="Xmax_main_candy__img" :src="xmasData.img.redSnowBall">
      </li>
      <li class="Xmax_main_candy_item Xmax_main_candy_yellowCandy">
        <img class="Xmax_main_candy__img" :src="xmasData.img.yellowCandy">
      </li>
      <li class="Xmax_main_candy_item Xmax_main_candy_redWhiteBall">
        <img class="Xmax_main_candy__img" :src="xmasData.img.redWhiteBall">
      </li>
      <li class="Xmax_main_candy_item Xmax_main_candy_whiteBall-big">
        <img class="Xmax_main_candy__img" :src="xmasData.img.whiteBall">
      </li>
      <li class="Xmax_main_candy_item Xmax_main_candy_candyCanes">
        <img class="Xmax_main_candy__img" :src="xmasData.img.candyCanes">
      </li>
      <li class="Xmax_main_candy_item Xmax_main_candy_orangeWhiteCandy">
        <img class="Xmax_main_candy__img" :src="xmasData.img.orangeWhiteCandy">
      </li>
      <li class="Xmax_main_candy_item Xmax_main_candy_goldenBall-small">
        <img class="Xmax_main_candy__img" :src="xmasData.img.goldenBall">
      </li>
      <li class="Xmax_main_candy_item Xmax_main_candy_redSnowBall-right">
        <img class="Xmax_main_candy__img" :src="xmasData.img.redSnowBall">
      </li>
    </ul>
  </div>
  <div class="Xmax_content">
    <p class="Xmax_content_title"><strong>1.視覺設計合乎目標族群</strong></p>
    <p class="Xmax_content_txt">聖誕節重點配色不外乎「綠色、紅色、金色」三大元素，但針對你想溝通的主要目標族群年齡，需要設計符合他們喜歡的視覺風格才對標，例如要賣給45-60歲女性的日系化妝品品牌，及要賣給18-24歲女性的韓系化妝品品牌，會呈現出配色、圖示、風格就會明顯區分。</p>
    <p class="Xmax_content_title"><strong>2.創造令人想主動分享的話題</strong></p>
    <p class="Xmax_content_txt">想要透過口耳相傳的方式，讓消費者自主性的幫你散播、討論活動內容，最重要的就是「營造話題性」！可以操作的方式除了與知名藝人、網紅KOL聯合宣傳，或是IP授權聯名，還是用最近很夯的心理測驗遊戲來增加吸睛度，都是可以參考的方向。</p>
    <p class="Xmax_content_title"><strong>3.限定限量優惠內容</strong></p>
    <p class="Xmax_content_txt">看準聖誕節活動商機，許多品牌也會在這時候推出限時限量的「聖誕節禮盒」，除了利用期間限定的方式，打造“錯過不再的優惠感”，也會利用符合節慶風格的外盒設計，讓消費者買下後無論是參加交換禮物，或是自己使用心情都很好，也為產品拓衝場景使用度。</p>
  </div>
  <Foot class="DAfoot-normal"/>
  <DArightMenu 
    :class="{active:isDArightMenuShow}"
    :style="{top:windowPos.top+'px',left:windowPos.left+'px'}"
    @DArightMenuEle="DArightMenuEleFn"
  />
</div>
</template>

<style lang="scss">
@keyframes candyDrop{
	0%{transform:translate3d(0,-150%,0) rotate3d(0,0,1,60deg) scale3d(1,1.5,1) }
	60%{transform:translate3d(0,25px,0) rotate3d(0,0,1,-10deg) scale3d(1,.9,1);}
	75%{transform:translate3d(0,-10px,0) rotate3d(0,0,0,0deg) scale3d(1,.95,1);}
	90%{transform:translate3d(0,5px,0) scale3d(1,.985,1);}
	100%{transform:translate3d(0,0,0) scale3d(1,1,1);}
}
@keyframes candyDropSwing{
	20%{transform:rotate3d(0,0,1,15deg);}
	40%{transform:rotate3d(0,0,1,-10deg);}
	60%{transform:rotate3d(0,0,1,5deg);}
	80%{transform:rotate3d(0,0,1,-5deg);}
	100%{transform:rotate3d(0,0,0,0deg);}
}
@keyframes pinkCandySwing{
	20%{transform:translate3d(20%,-15%,0) rotate3d(0,0,1,45deg);}
	40%{transform:translate3d(20%,-15%,0) rotate3d(0,0,1,20deg);}
	60%{transform:translate3d(20%,-15%,0) rotate3d(0,0,1,35deg);}
	80%{transform:translate3d(20%,-15%,0) rotate3d(0,0,1,25deg);}
  100%{transform:translate3d(20%,-15%,0) rotate3d(0,0,0,30deg);}
}
@keyframes candyBarSwing{
	20%{transform:translate3d(-44%,-4%,0) rotate3d(0,0,1,-11deg);}
	40%{transform:translate3d(-44%,-4%,0) rotate3d(0,0,1,-36deg);}
	60%{transform:translate3d(-44%,-4%,0) rotate3d(0,0,1,-21deg);}
	80%{transform:translate3d(-44%,-4%,0) rotate3d(0,0,1,-31deg);}
  100%{transform:translate3d(-44%,-4%,0) rotate3d(0,0,0,-26deg);}
}
@keyframes snowBgMoveRight{
	0%{background-position:100% 100%;}
	100%{background-position:0 0;}
}
@keyframes snowBgMoveLeft{
	0%{background-position:0 100%;}
	100%{background-position:100% 0;}
}
@keyframes fieldMove{
	0%{background-position-x:0;}// 100vw
	100%{background-position-x:200%;}// 0
}
@keyframes readyCandyLineSwing{
	0%, 25%, 50%, 75%, 100%{transform:translate3d(0,0,0) rotate3d(0,0,0,0deg);}
	12.5%{transform:translate3d(0,-4%,0) rotate3d(0,0,1,-6deg);}
	37.5%{transform:translate3d(0,4%,0) rotate3d(0,0,1,6deg);}
	62.5%{transform:translate3d(0,-2%,0) rotate3d(0,0,1,-6deg);}
	87.5%{transform:translate3d(0,2%,0) rotate3d(0,0,1,6deg);}
}
@keyframes readyEveryCandySwing{
	0%, 25%, 50%, 75%, 100%{transform:rotate3d(0,0,0,0deg);}
	12.5%{transform:rotate3d(0,0,1,-10deg);}
	37.5%{transform:rotate3d(0,0,1,6deg);}
	62.5%{transform:rotate3d(0,0,1,-6deg);}
	87.5%{transform:rotate3d(0,0,1,10deg);}
}
@keyframes readyPinkCandySwing {
	0%, 25%, 50%, 75%, 100%{transform:translate3d(20%,-15%,0) rotate3d(0,0,1,30deg);}
	12.5%{transform:translate3d(20%,-15%,0) rotate3d(0,0,1,20deg);}
	37.5%{transform:translate3d(20%,-15%,0) rotate3d(0,0,1,36deg);}
	62.5%{transform:translate3d(20%,-15%,0) rotate3d(0,0,1,24deg);}
	87.5%{transform:translate3d(20%,-15%,0) rotate3d(0,0,1,40deg);}
}
@keyframes readyCandyBarSwing {
	0%, 25%, 50%, 75%, 100%{transform:translate3d(-44%,-4%,0) rotate3d(0,0,1,-26deg);}
	12.5%{transform:translate3d(-44%,-4%,0) rotate3d(0,0,1,-36deg);}
	37.5%{transform:translate3d(-44%,-4%,0) rotate3d(0,0,1,-20deg);}
	62.5%{transform:translate3d(-44%,-4%,0) rotate3d(0,0,1,-32deg);}
	87.5%{transform:translate3d(-44%,-4%,0) rotate3d(0,0,1,-16deg);}
}
@keyframes snowDrop{
	0%{top:-5%;}
	100%{top:105%;}
}
@keyframes snowRotate{
	0%{transform:translate3d(0%,0,0) rotate3d(0,0,1,0deg);}
	33%{transform:translate3d(-50%,0,0) rotate3d(0,0,1,120deg);}
	66%{transform:translate3d(30%,0,0) rotate3d(0,0,1,240deg);}
	100%{transform:translate3d(0%,0,0) rotate3d(0,0,1,360deg);}
}
@keyframes xmasTrainShake{
  0%{transform:rotate3d(0,0,1,-2deg) translate3d(-12px,0,0);}
  20%{transform:rotate3d(0,0,1,2deg) translate3d(-8px,0,0);}
  40%{transform:rotate3d(0,0,1,-2deg) translate3d(-4px,0,0);}
  60%{transform:rotate3d(0,0,1,2deg) translate3d(4px,0,0);}
  80%{transform:rotate3d(0,0,1,-2deg) translate3d(8px,0,0);}
  100%{transform:rotate3d(0,0,1,2deg) translate3d(12px,0,0);}
}
@keyframes xmasTrainMove-mobPortrait{
  0%{left:-50%;}
  66.666666%{left:100%;}
  66.666667%{left:-50%;}
  100%{left:25%;}
}
@keyframes xmasTrainMove-mobLandscape{
  0%{left:-33.3333%;}
  66.666666%{left:100%;}
  66.666667%{left:-33.3333%;}
  100%{left:33.3333%;}
}
@keyframes xmasTrainMove-desktop{
  0%{left:-25%;}
  66.666666%{left:100%;}
  66.666667%{left:-25%;}
  100%{left:37.5%;}
}
$XmaxW:1440;
$XmaxH:1500;
$XmaxCandyH:560;
.Xmax{
  &_main{
    background-image:linear-gradient(180deg, #ab0000 25%, #5d0000 75%);
    overflow:hidden;
    position: relative;
    &-loaded ,&-ready{
      .Xmax_main_snow{
        &:before{animation:snowBgMoveLeft 100s linear infinite;}
        &:after{animation:snowBgMoveRight 60s linear infinite;}
        &__img{
          animation:snowDrop 10s linear infinite,
                    snowRotate .8s linear infinite;
        }
      }
    }
    &-loaded .Xmax_main_candy{
      &_item{
        animation-name:candyDrop;
        animation-timing-function:cubic-bezier(.215,.61,.355,1);
        animation-fill-mode:both;
      }
      &__img{animation:candyDropSwing .4s ease-in-out 2;}
      &_whiteBall-small{
        animation-duration:1.1s;
        > .Xmax_candy__img{animation-delay:.2s;}
      }
      &_redWhiteCandy{
        animation-duration:1.3s;
        > .Xmax_candy__img{animation-delay:.2s;}
      }
      &_goldenBall-big{
        animation-duration:.8s;
        animation-delay:.2s;
        > .Xmax_candy__img{animation-delay:.1s;}
      }
      &_pinkCandy{
        animation-duration:.5s;
        animation-delay:.3s;
        > .Xmax_candy__img{
          animation-name:pinkCandySwing;
          animation-delay:.2s;
        }
      }
      &_candyBar{
        animation-duration:.4s;
        animation-delay:.4s;
        > .Xmax_candy__img{
          animation-name:candyBarSwing;
          animation-delay:.2s;
        }
      }
      &_redSnowBall-center{
        animation-duration:.3s;
        animation-delay:.5s;
        > .Xmax_candy__img{animation-delay:.2s;}
      }
      &_yellowCandy{
        animation-duration:.2s;
        animation-delay:.7s;
        > .Xmax_candy__img{animation-delay:.4s;}
      }
      &_redWhiteBall{
        animation-duration:.5s;
        animation-delay:.3s;
        > .Xmax_candy__img{animation-delay:.2s;}
      }
      &_whiteBall-big{
        animation-duration:.3s;
        animation-delay:.8s;
        > .Xmax_candy__img{animation-delay:.6s;}
      }
      &_candyCanes{
        animation-duration:.7s;
        animation-delay:.2s;
        > .Xmax_candy__img{animation-delay:.1s;}
      }
      &_orangeWhiteCandy{
        animation-duration:1.3s;
        > .Xmax_candy__img{animation-delay:.2s;}
      }
      &_goldenBall-small{
        animation-duration:.4s;
        animation-delay:.5s;
        > .Xmax_candy__img{animation-delay:.7s;}
      }
      &_redSnowBall-right{animation-duration:.9s;}
    }
    &-ready .Xmax{
      &_main_candy{
        &_item{
          transform-origin:50% 0;
          animation-name:readyCandyLineSwing;
          animation-timing-function:linear;
          animation-iteration-count:infinite;
        }
        &__img{
          animation-name:readyEveryCandySwing;
          animation-timing-function:linear;
          animation-iteration-count:infinite;
        }
        &_redWhiteCandy, &_pinkCandy, &_redSnowBall-center, &_redWhiteBall, &_candyCanes, &_goldenBall-small{
          animation-direction:reverse;
          > .Xmax_candy__img{animation-direction:reverse;}
        }
        &_whiteBall-small{
          animation-duration:5.6s;
          > .Xmax_candy__img{animation-duration:5.6s;}
        }
        &_redWhiteCandy{
          animation-duration:4.8s;
          > .Xmax_candy__img{animation-duration:4.8s;}
        }
        &_goldenBall-big{
          animation-duration:6.4s;
          > .Xmax_candy__img{animation-duration:6.4s;}
        }
        &_pinkCandy{
          animation-duration:6.4s;
          > .Xmax_candy__img{
            animation-name:readyPinkCandySwing;
            animation-duration:6.4s;
          }
        }
        &_candyBar{
          animation-duration:7.2s;
          > .Xmax_candy__img{
            animation-name:readyCandyBarSwing;
            animation-duration:7.2s;
          }
        }
        &_redSnowBall-center{
          animation-duration:8s;
          > .Xmax_candy__img{animation-duration:8s;}
        }
        &_yellowCandy{
          animation-duration:7.2s;
          > .Xmax_candy__img{animation-duration:7.2s;}
        }
        &_redWhiteBall{
          animation-duration:6.4s;
          > .Xmax_candy__img{animation-duration:6.4s;}
        }
        &_whiteBall-big{
          animation-duration:8s;
          > .Xmax_candy__img{animation-duration:8s;}
        }
        &_candyCanes{
          animation-duration:5.6s;
          > .Xmax_candy__img{animation-duration:5.6s;}
        }
        &_orangeWhiteCandy{
          animation-duration:4.8s;
          > .Xmax_candy__img{animation-duration:4.8s;}
        }
        &_goldenBall-small{
          animation-duration:7.2s;
          > .Xmax_candy__img{animation-duration:7.2s;}
        }
        &_redSnowBall-right{
          animation-duration:5.6s;
          > .Xmax_candy__img{animation-duration:5.6s;}
        }
      }
      &_main_field{
        &_train{
          animation:xmasTrainShake 3s linear infinite alternate,
                    xmasTrainMove-mobPortrait 12s linear both;
        }
        &_img{
          &-back{animation:fieldMove 200s linear infinite;}
          &-front{animation:fieldMove 80s linear infinite;}
        }
      }
    }
    &_snow{
      width:100%;
      height:0;
      pointer-events:none;
      padding-bottom:calc($XmaxH/$XmaxW)*100%;
      position:relative;
      z-index:1;
      &:before, &:after{
        content:"";
        width:100%;
        height:100%;
        background-image:url("@/assets/img/xmas2020/snowBigBg.png");
        background-size:200% 200%;
        position:absolute;
        top:0;
        left:0;
      }
      &:before{
        opacity:.5;
        transform:scale3d(.96,.96,1);
      }
      &:after{
        opacity:.8;
        transform:scale3d(1.04,1.04,1);
      }
      &_item{
        height:100%;
        position:absolute;
        top:0;
        &-1-1{
          width:calc(70/$XmaxW)*100%;
          left:calc(1300/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(140/$XmaxH)*100%;
            animation-delay:-0.93s,-0.93s;
          }
        }
        &-1-2{
          width:calc(38/$XmaxW)*100%;
          left:calc(1150/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(650/$XmaxH)*100%;
            animation-delay:-4.3s,-4.3s;
          }
        }
        &-1-3{
          width:calc(75/$XmaxW)*100%;
          left:calc(250/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(750/$XmaxH)*100%;
            animation-delay:-5s,-5s;
          }
        }
        &-2-1{
          width:calc(44/$XmaxW)*100%;
          left:calc(580/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(30/$XmaxH)*100%;
            animation-delay:-0.2s,-0.2s;
          }
        }
        &-2-2{
          width:calc(60/$XmaxW)*100%;
          left:calc(270/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(100/$XmaxH)*100%;
            animation-delay:-0.7s,-0.7s;
          }
        }
        &-2-3{
          width:calc(70/$XmaxW)*100%;
          left:calc(1250/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(820/$XmaxH)*100%;
            animation-delay:-5.5s,-5.5s;
          }
        }
        &-2-4{
          width:calc(40/$XmaxW)*100%;
          left:calc(360/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(930/$XmaxH)*100%;
            animation-delay:-6s,-6s;
          }
        }
        &-2-5{
          width:calc(45/$XmaxW)*100%;
          left:calc(1200/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(1200/$XmaxH)*100%;
            animation-delay:-8s,-8s;
          }
        }
        &-3-1{
          width:calc(80/$XmaxW)*100%;
          left:calc(100/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(920/$XmaxH)*100%;
            animation-delay:-6.2s,-6.2s;
          }
        }
        &-3-2{
          width:calc(60/$XmaxW)*100%;
          left:calc(270/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(100/$XmaxH)*100%;
            animation-delay:-0.65s,-0.65s;
          }
        }
        &-3-3{
          width:calc(44/$XmaxW)*100%;
          left:calc(1060/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(780/$XmaxH)*100%;
            animation-delay:-5.2s,-5.2s;
          }
        }
        &-4-1{
          width:calc(74/$XmaxW)*100%;
          left:calc(70/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(360/$XmaxH)*100%;
            animation-delay:-2.4s,-2.4s;
          }
        }
        &-4-2{
          width:calc(26/$XmaxW)*100%;
          left:calc(910/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(60/$XmaxH)*100%;
            animation-delay:-0.4s,-0.4s;
          }
        }
        &-4-3{
          width:calc(74/$XmaxW)*100%;
          left:calc(1025/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(945/$XmaxH)*100%;
            animation-delay:-6.3s,-6.3s;
          }
        }
        &-4-4{
          width:calc(52/$XmaxW)*100%;
          left:calc(240/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(1180/$XmaxH)*100%;
            animation-delay:-7.86s,-7.86s;
          }
        }
        &-4-5{
          width:calc(26/$XmaxW)*100%;
          left:calc(385/$XmaxW)*100%;
          > .Xmax_main_snow__img{
            top:calc(585/$XmaxH)*100%;
            animation-delay:-3.9s,-3.9s;
          }
        }
      }
      &__img{
        width:100%;
        position:absolute;
        left:0;
      }
    }
    &_field{
      margin-top:-8%;
      position:relative;
      &_train{
        width:50%;
        position:absolute;
        top:18%;
        left:-50%;
      }
      &_img{
        width:100%;
        &-back, &-front{
          background-size:200% 100%;
          height:0;
        }
        &-back{
          padding-bottom:calc(450/1440)*100%;
          background-image:url("@/assets/img/xmas2020/fieldBack.png");
        }
        &-front{
          padding-bottom:calc(264/1440)*100%;
          background-image:url("@/assets/img/xmas2020/fieldFront.png");
          margin-top:-10%;
          position:relative;
        }
      }
    }
    &_content{
      color:#fff;
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      padding:15px 15px 75px;
      position:absolute;
      top:0;
      left:0;
      &_logo{
        margin:0;
        position:fixed;
        top:12px;
        left:12px;
        z-index:1;
        &_link{
          color:#006d00;
          display:flex;
          align-items:center;
          background-color:rgba(#fff,.6);
          border-radius:3px;
          box-shadow:0 2px 4px 1px rgba(#000,.35), 1px 1px 1px rgba(#fff,.35) inset, -1px -1px 1px rgba(#000,.35) inset;
          padding:5px;
        }
        &__icon{
          width:27px;
          height:25px;
          margin-right:4px;
        }
        &__txt{
          font-size:18px;
          padding-top:2px;
          transform:skew(-6deg);
        }
      }
      &_theme, &_title{
        font-size:12vw;
        text-align:center;
        margin:0 0 .6em;
        transform:skew(-6deg);
        &:after{
          content:attr(data-word);
          width:100%;
          height:100%;
          position:absolute;
          top:0;
          left:0;
        }
        &_span{
          text-shadow:.64vw .64vw 2vw rgba(#000,.8),
                      0 0 3.2vw rgba(#000,.5);
        }
      }
      &_theme_span{-webkit-text-stroke:1.6vw #006d00;}
      &_title_span{-webkit-text-stroke:1.6vw #deae00;}
    }
    &_candy{
      width:120%;
      height:0;
      list-style-type:none;
      pointer-events:none;
      overflow:hidden;
      padding-bottom:calc($XmaxCandyH/$XmaxW)*120%;
      margin:0;
      position:absolute;
      top:0;
      left:-10%;
      &_item{
        display: flex;
        position:absolute;
        top: 0;
        transform:translate3d(0,-85%,0);
        &:before{
          content:"";
          position:absolute;
          left:50%;
          width: 0;
          height: 100%;
          border-right: 1px solid rgba(102,92,66,0.45);
          border-left: 1px solid rgba(171,147,120,0.6);
          margin-left: -1px;
        }
      }
      &__img{
        width:100%;
        display:block;
        margin-top:auto;
        transform-origin:50% 0%;
      }
      &_whiteBall-small{
        width:calc(50/$XmaxW)*100%;
        height:calc(350/$XmaxCandyH)*100%;
        left:calc(160/$XmaxW)*100%;
        &:before{bottom:18.5%;}
      }
      &_whiteBall-big{
        width:calc(58/$XmaxW)*100%;
        height:calc(100/$XmaxCandyH)*100%;
        left:calc(1020/$XmaxW)*100%;
        &:before{bottom:68%;}
      }
      &_goldenBall-small{
        width:calc(45/$XmaxW)*100%;
        height:calc(190/$XmaxCandyH)*100%;
        left:calc(1200/$XmaxW)*100%;
        &:before{bottom:28%;}
      }
      &_goldenBall-big{
        width:calc(88/$XmaxW)*100%;
        height:calc(300/$XmaxCandyH)*100%;
        left:calc(220/$XmaxW)*100%;
        &:before{bottom:35%;}
      }
      &_redWhiteCandy{
        width:calc(110/$XmaxW)*100%;
        height:calc(540/$XmaxCandyH)*100%;
        left:calc(240/$XmaxW)*100%;
        &:before{bottom:23%;}
      }
      &_pinkCandy{
        width:calc(170/$XmaxW)*100%;
        height:calc(160/$XmaxCandyH)*100%;
        left:calc(320/$XmaxW)*100%;
        &:before{bottom:49%;}
        > .Xmax_candy__img{
          transform:translate3d(20%, -15%, 0) rotate3d(0, 0, 1, 30deg);
          transform-origin:30% 0;
        }
      }
      &_candyBar{
        width:calc(42/$XmaxW)*100%;
        height:calc(160/$XmaxCandyH)*100%;
        left:calc(516/$XmaxW)*100%;
        &:before{bottom:66%;}
        > .Xmax_candy__img{
          transform:translate3d(-44%, -4%, 0) rotate3d(0, 0, 1, -26deg);
          transform-origin:97.5% 2.5%;
        }
      }
      &_redSnowBall-center, &_redSnowBall-right{
        width:calc(58/$XmaxW)*100%;
      }
      &_redSnowBall-center{
        height:calc(130/$XmaxCandyH)*100%;
        left:calc(660/$XmaxW)*100%;
        &:before{bottom:50%;}
      }
      &_redSnowBall-right{
        height:calc(330/$XmaxCandyH)*100%;
        left:calc(1240/$XmaxW)*100%;
        &:before{bottom:22%;}
      }
      &_yellowCandy{
        width:calc(86/$XmaxW)*100%;
        height:calc(130/$XmaxCandyH)*100%;
        left:calc(790/$XmaxW)*100%;
        &:before{bottom:75%;}
      }
      &_redWhiteBall{
        width:calc(82/$XmaxW)*100%;
        height:calc(180/$XmaxCandyH)*100%;
        left:calc(940/$XmaxW)*100%;
        &:before{bottom:45%;}
      }
      &_candyCanes{
        width:calc(68/$XmaxW)*100%;
        height:calc(290/$XmaxCandyH)*100%;
        left:calc(1100/$XmaxW)*100%;
        &:before{bottom:61.5%;}
      }
      &_orangeWhiteCandy{
        width:calc(100/$XmaxW)*100%;
        height:calc(460/$XmaxCandyH)*100%;
        left:calc(1140/$XmaxW)*100%;
        &:before{bottom:24%;}
      }
    }
  }
  &_content{
    padding:15px 20px;
    &_txt{
      font-size:14px;
      line-height:1.6;
    }
  }
}
@media screen and (min-width:640px){
  .Xmax_main{
    &_field_train{
      width:33.3333%;
      top:36%;
      left:-33.3333%;
    }
    &-ready .Xmax_main_field_train{
      animation:xmasTrainShake 3s linear infinite alternate,
                xmasTrainMove-mobLandscape 12s linear both;
    }
  }
}
// ===== 平板橫版型區 =====
@media screen and (min-width:1024px){
  .Xmax{
    &_main{
      &_field_train{
        width:25%;
        top:44%;
        left:-25%;
      }
      &_content_logo{
        top:15px;
        left:15px;
      }
      &-ready .Xmax_main_field_train{
        animation:xmasTrainShake 3s linear infinite alternate,
                  xmasTrainMove-desktop 12s linear both;
      }
    }
    &_content{padding:0 50px 50px;}
  }
}
@media screen and (min-width: 1024px) and (orientation:landscape){
	.Xmax_main{
		&_field{margin-top:-39.5%;}
		&_content{
			height:72%;
      &_theme, &_title{
        font-size:105px;
        &_span{
          text-shadow:6px 6px 17px rgba(#000,.8),
                      0 0 28px rgba(#000,.5);
        }
      }
      &_theme_span{-webkit-text-stroke:14px #006d00;}
      &_title_span{-webkit-text-stroke:14px #deae00;}
			// &_h2{font-size:70px;
			// 	&_span{
			// 		text-shadow:4px 4px 13px rgba(#000,.8), 0 0 21px rgba(#000,.5);
			// 		-webkit-text-stroke:11px #deae00;
			// 	}
			// }
		}
	}
}
@media screen and (min-width: 1200px){
  .Xmax_content{
    &_title, &_txt{
      max-width:1000px;
      margin-left:auto;
      margin-right:auto;
    }
  }
}
@media screen and (min-width: 1280px){
	.Xmax_main{
		&_field{margin-top:-39.5%;}
		&_content{
			height:72%;
			&_theme, &_title{
				font-size:105px;
				&_span{
					text-shadow:6px 6px 17px rgba(#000,.8),
											0 0 28px rgba(#000,.5);
					-webkit-text-stroke:14px #deae00;
				}
			}
      &_theme_span{-webkit-text-stroke:14px #006d00;}
      &_title_span{-webkit-text-stroke:14px #deae00;}
		}
	}
}
</style>