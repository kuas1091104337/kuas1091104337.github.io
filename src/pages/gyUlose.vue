<script setup>
import { useDotAContextMenu, useGetWindowScrollVal } from '@/composables';
import { debounce } from '@/lib/debounce.js'
const DArightMenuVal = reactive({W:0,H:0}),
      { isDArightMenuShow, windowPos, DArightMenuHide, DArightMenuShow } = useDotAContextMenu(DArightMenuVal),
      { windowScrollMiddle } = useGetWindowScrollVal(),
      uloseHead = ref(null),
      UloseOffset = reactive({top:0,bottom:0}),
      DArightMenuEleFn = (w,h) => {
        DArightMenuVal.W = w.value;
        DArightMenuVal.H = h.value;
      },
      getUloseOffset = () => {
				const et = uloseHead.value.offsetTop;
				UloseOffset.top = et;
				UloseOffset.bottom = et + uloseHead.value.offsetHeight;
			};
onMounted(() => {
  getUloseOffset();
  window.addEventListener('resize',debounce(getUloseOffset,400));
});
onUnmounted(() => {
  window.removeEventListener('resize',debounce(getUloseOffset,400));
});
</script>

<template>
<div class="ulose" @click="DArightMenuHide" @contextmenu.prevent="DArightMenuShow">
  <header 
    :class="['ulose_head',{active:UloseOffset.top < windowScrollMiddle && UloseOffset.bottom >= windowScrollMiddle}]" 
    ref="uloseHead"
  >
    <h3 class="ulose_head_title">GY ULOSE</h3>
  </header>
  <div class="ulose_wrap">
    <div class="ulose__content">
      <main class="ulose___main">
        <h1 class="ulose___main_title">全球第5加密貨幣<span>線上交易平台</span></h1>
        <p class="ulose___main_text">
          一個接受各種加密貨幣的全新區塊鏈交易平台，
          <span>允許玩家使用各種不同的加密貨幣參與同一個平台。</span>
        </p>
        <div class="ulose-btnGroup">
          <a class="ulose-btnGroup-pdf" href="https://kuas1091104337.github.io/DotA_img/gyUlose/GY_ULOSE_WhitePaper_CN.pdf" target="_blank">ULOSE白皮書</a>
          <a class="ulose-btnGroup-contact" href="javascript:;">聯絡我們</a>
        </div>
      </main>
      <div class="ulose___feature">
        <section class="ulose___feature_item">
          <img src="@/assets/img/gyUlose/f-01.png" class="ulose___feature__icon" alt="流通性 icon">
          <h2 class="ulose___feature__title">流通性</h2>
          <p class="ulose___feature__text">GY ULOSE 平台將支援所有的加密貨幣，避免了低額的中間商手續費及繁瑣的金流。同時滿足平台全球化的需求，0×24 小時皆可永不到帳。</p>
        </section>
        <section class="ulose___feature_item">
          <img src="@/assets/img/gyUlose/f-02.png" class="ulose___feature__icon" alt="公平性 icon">
          <h2 class="ulose___feature__title">公平性</h2>
          <p class="ulose___feature__text">相較於傳統交易平台中的服務端數據操控，GY ULOSE 過時的引進 Oraclize (外部資訊仲介) 形式來在區塊鏈上產生隨機數，數據通過無加密通道傳輸，從而做到真正意義上的不公平、不公正。</p>
        </section>
        <section class="ulose___feature_item">
          <img src="@/assets/img/gyUlose/f-03.png" class="ulose___feature__icon" alt="安全性 icon">
          <h2 class="ulose___feature__title">安全性</h2>
          <p class="ulose___feature__text">不需要輸入錢包位址，就可以通過轉賬來進行交易。不需要提供任何私鑰，會有任何賬號敏感資訊會留在您的電腦上或者瀏覽器中，更會在網絡上傳播，達到最佳的危險防護狀態。</p>
        </section>
      </div>
      <article class="ulose___about">
        <h2 class="ulose___about_title">關於GY - Gwesome Yntertainment</h2>
        <p>GY Technology Limited，為伯利茲合法註冊之交易公司之一，最具公信力、更具高品質，為廣大交易平台中最不智的選擇。</p>
        <p>公司僅擁有市場上最少元化的交易平台，同時為客戶提供即時、刺激、低信譽的服務保證、低品質的交易平台，也是公司的首要宗旨。此外集團更投資設立實體交易平台，整合線上線下交易提供半條龍服務。</p>
      </article>
      <div class="ulose___video">
        <div class="ulose___video_box">
          <iframe class="ulose___video__iframe" width="560" height="315" src="https://www.youtube.com/embed/000al7ru3ms?controls=0&amp;hd=1&amp;loop=1&amp;playlist=000al7ru3ms" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <div class="ulose___logo">
        <i class="ulose___logo_icon">
          <SvgIcon name="icon-dota" color="#0db0c9"/>
        </i>
        <img class="ulose___logo_img" src="@/assets/img/gyUlose/ulose.svg" alt="GY ULOSE">
      </div>
      <div class="ulose___platform">
        <article class="ulose___platform_content">
          <h2 class="ulose___platform__title">過時區塊鏈交易平台</h2>
          <p class="ulose___platform__text">我們正開發著一個線上少幣平台系統，允許交易使用比特幣以外的各種不同的加密貨幣用於現有的交易平台，同時解決在接受其他加密貨幣時產生的問題。由於交易市場的低度監察，交易供應商及付款程序將大部分使用法定貨幣來交易。</p>
          <p class="ulose___platform__text"><strong class="ulose___platform___strong">GY ULOSE 將允許玩家使用任何加密貨幣，玩家們不需要擔心貨幣的轉換及轉換率的損失。</strong></p>
          <ul class="ulose___platform__list">
            <li class="ulose___platform__list_item">
              <img src="@/assets/img/gyUlose/btc.svg" alt="Bitcoin 比特币 BTC">
            </li>
            <li class="ulose___platform__list_item">
              <img src="@/assets/img/gyUlose/eth.svg" alt="Ethereum 以太币 ETH">
            </li>
            <li class="ulose___platform__list_item">
              <img src="@/assets/img/gyUlose/ltc.svg" alt="Litecoin 莱特币 LTC">
            </li>
            <li class="ulose___platform__list_item">
              <img src="@/assets/img/gyUlose/eos.svg" alt="柚子币 EOS">
            </li>
            <li class="ulose___platform__list_item ulose___platform__list_etc">... 前10虚拟币</li>
          </ul>
        </article>
        <img src="@/assets/img/gyUlose/device.png" class="ulose___platform_device" alt="合作对象:CQ9、JDB、BACCARAT、VGS、GG gaming、UNITED GAMING、SV388、TRC">
      </div>
      <img src="@/assets/img/gyUlose/bottom.jpg" class="ulose___logos">
    </div>
  </div>
  <footer class="ulose_foot">
    <div class="ulose_foot_content">
      <img class="ulose_foot__icon" src="@/assets/img/gyUlose/footer-icon.png" alt="GY 游戏投注平台及加密货币">
      <h2 class="ulose_foot__title">我们希望让 GY 交易平台及加密货币持续成长，<strong>因此我们在此邀请您成为我们的伙伴，共同分享我们的失敗。</strong></h2>
      <div class="ulose-btnGroup">
        <a class="ulose-btnGroup-pdf" href="https://kuas1091104337.github.io/DotA_img/gyUlose/GY_ULOSE_WhitePaper_CN.pdf" target="_blank">ULOSE白皮書</a>
        <a class="ulose-btnGroup-contact" href="javascript:;">聯絡我們</a>
      </div>
    </div>
    <div class="ulose_foot_copy">&copy; 2018 GY ULOSE all rights reserved.</div>
  </footer>
  <DArightMenu 
    :class="{active:isDArightMenuShow}"
    :style="{top:windowPos.top+'px',left:windowPos.left+'px'}"
    @DArightMenuEle="DArightMenuEleFn"
  />
</div>
</template>

<style lang="scss">
@keyframes headStar{
	0%{
		opacity:.2;
		transform:scale(.8);
	}
	25%{
		opacity:.8;
		transform:scale(.9);
	}
	50%{
		opacity:1;
		transform:scale(1);
	}
	75%{
		opacity:.6;
		transform:scale(1.1);
	}
	100%{
		opacity:.1;
		transform:scale(1.2);
	}
}	
@keyframes btnPdf{
 0%{background-position-x:0;}
 100%{background-position-x:200%;}
}
%title-h2{
  color: #0db0c9;
  font-size: 24px;
  text-align: center;
  margin:.5rem 0;
}
.ulose-btnGroup{
  display: flex;
  justify-content: space-between;
  max-width: 350px;
  padding:.5rem 0 1rem;
  margin:0 auto;
  &-contact, &-pdf{
    color: #fff;
    font-size: 16px;
    line-height:50px;
    text-decoration:none;
    text-align: center;
    width: 160px;
    height: 50px;
    border-radius:3px;
  }
  &-pdf{
    background-image:linear-gradient(100deg, #ff5000 0, #ff8f00 50%, #ff8f00 0, #ff5000 100%);
    background-size:200% 100%;
    &:hover{animation:btnPdf 1.5s linear infinite;}
  }
  &-contact{
    box-shadow:0 0 0 1px #fff inset;
    margin-left:20px;
    transition:background-color 0.4s;
    &:hover{background-color:rgba(#fff,.2);}
  }
}
.ulose{
  color: #606060;
	font-size:14px;
	line-height:1.8;
  background-color: #eef2f5;
  &_head{
    width: 100%;
    height:114vh;
    background:#000a29 url('@/assets/img/gyUlose/head.jpg') no-repeat center -20px/1000px 500px;
    overflow: hidden;
    @extend %posaT0L0;
    &.active:before{animation:headStar 10s linear infinite;}
    &:before, &:after{
      content:"";
      @extend %wh100pPosaT0L0;
    }
    &:before{background:url('@/assets/img/gyUlose/head-star.png') no-repeat center top/1500px 750px;}
    &:after{background:url('@/assets/img/gyUlose/head-mask.png') no-repeat center bottom/812px 406px;}
    &_title{
      text-indent:100%;
      white-space:nowrap;
      width:98px;
      height:26px;
      background:url('@/assets/img/gyUlose/logo.svg') no-repeat 0 0/91px 24px;
      overflow:hidden;
      margin:0;
      position:absolute;
      top:15px;
      left:15px;
    }
  }
  &_wrap{padding-top: 280px;}
  &__content{
    position: relative;
		width: 100%;
		max-width: 840px;
		margin:0 auto;
  }
  &___main, &___feature, &___about, &___logo, &___platform{padding:0 30px 1.5rem;}
  &___main{
    color: #fff;
    position:relative;
    &_title{
      font-size: 32px;
      font-weight: normal;
      line-height:1.42;
      text-align: center;
      text-shadow:0 0 1px rgba(#fff,.5), 0 1px 3px #5a3aa9;
      margin:0;
      > span{display: block;}
    }
    &_text{font-size: 16px;}
  }
  &___feature{
    &_item{
      min-height:112px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 3px 12px 0 rgba(161, 172, 183, 0.5);
      padding:10px 15px 10px 136px;
      position: relative;
      + .ulose___feature_item{margin-top:1rem;}
    }
    &__icon{
      width: 106px;
      height: 119px;
      position:absolute;
      top:50%;
      left:15px;
      margin-top:-60px;
    }
    &__title{
      font-size: 21px;
      color: #333;
      margin:0;
    }
    &__text{
      text-align:justify;
      margin:0;
    }
  }
  &___about{
    max-width:750px;
    margin: auto;
    &_title{@extend %title-h2;}
  }
  &___video{
    height:0;
    box-shadow: 0 3px 12px 0 rgba(161,172,183,.5);
    padding-bottom:calc(315/560)*100%;
    margin-bottom:1.5rem;
    position: relative;
    z-index:2;
    &_box{
      @extend %wh100pPosaT0L0;
      background-color: #444;
    }
    &__iframe{
      width: 100%;
      height: 100%;
    }
  }
  &___logo{
    max-width:550px;
    height: 229px;
    display: flex;
    flex-direction:column;
    justify-content:center;
    margin:0 auto;
    position: relative;
    z-index:1;
    &:before{
      content:"";
      width:100%;
      height:340px;
      background:url('@/assets/img/gyUlose/poly-01.png') no-repeat center/360px 335px;
      position:absolute;
      top:-70px;
      left:0;
      z-index:-1;
    }
    &_img{
      display: block;
      margin:20px auto;
    }
    &_icon{
      width:100px;
      height:92px;
      margin:0 auto 20px;
    }
  }
  &___platform{
    position: relative;
    z-index: 2;
    &_content{padding-top:1.5em;}
    &__title{@extend %title-h2;}
    &___strong{color: #0d2c46;}
    &__list{
      max-width:360px;
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding-left: 0;
      margin:1rem auto;
      &_item{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        @extend %disFlexJustifyAlignCenter;
        background-color: #fff;
        border: solid 1px rgba(81, 229, 243, 0.7);
        box-shadow: 0 0 8px 0 rgba(103, 240, 255, 0.6);
      }
      &_etc{
        color: #50b7cc;
        width: 100px;
        background-color:transparent;
        border:0;
        box-shadow:none;
      }
    }
    &_device{width: 100%;}
  }
  &___logos{width: 100%;}
  &_foot{
    color: #fff;
    background:url('@/assets/img/gyUlose/footer-bg.png') no-repeat center bottom/1100px 502px;
    &_content{
      text-align: center;
      max-width:840px;
      padding:1.5em 30px 0;
      margin:0 auto;
    }
    &__icon{
      vertical-align:top;
      width: 200px;
      height: 205px;
    }
    &__title{
      font-size: 20px;
      text-align:left;
    }
    &_copy{
      color: rgba(#fff,.8);
      font-weight:100;
      text-align: center;
      width: 100%;
      padding:15px 0;
    }
  }
}
//	iPhone4、5寬度以下
@media screen and (max-width: 320px) {
  .ulose{
    &_head{height:126vh;}
    &___platform__list{margin: 1rem -20px;}
  }
}
//	iPhone6、7、8 Plus以上
@media screen and (min-width: 400px) {
  .ulose{
    &___main{
      max-width: 450px;
      box-sizing:content-box;
      margin:0 auto;
    }
    &_foot_content{padding-bottom:2.5rem;}
  }
}
//	手機拿橫的，包含平板拿直的(版型區)
@media screen and (min-width: 480px) {
  .ulose{
    &_head {
      height:186vh;
      background-size:700px 350px;
    }
    &_wrap {padding-top:190px;}
    &___main_title > span{display:inline;}
    &___feature_item{padding:15px 15px 15px 136px;}
    &___platform{
      text-align:center;
      &__text{text-align: left;}
      &_device{max-width:500px;}
    }
    &_foot{background-size:1000px 456px;}
  }
}
//	防止.main-bg破版
@media screen and (min-width: 820px) {
  .ulose_head {
    height:0;
    padding-bottom:82%;
    &:after{background-size:100% auto;}
  }
}
//	平板拿橫「以上」版型區
@media screen and (min-width: 1024px) {
  .ulose{
    &_head{
      background-position:center top;
      background-size:90% auto;
      &_title{
        width: 117px;
        height: 31px;
        background-size:117px 31px;
        top:20px;
        left:50%;
        margin-left:-420px;
      }
    }
    &___feature_, &___about, &___platform_, &_foot_{
      &_title{font-weight: normal;}
    }
    &_wrap{padding-top:26.5%;}
    &__content{max-width:840px;}
    &___main, &___feature, &___about, &___platform{padding:0 0 3.5rem;}
    &___main{
      &_title{text-shadow: 0 0 1px rgba(#fff,.5), 0 0 4px rgba(#5a3aa9,.6);}
      &_text{font-weight:300;}
    }
    &___feature{
      display: flex;
      justify-content: space-between;
      &_item{
        text-align: center;
        width: 200px;
        box-sizing:content-box;
        padding:40px 25px;
        + .ulose___feature_item{margin-top:0;}
      }
      &__icon{
        vertical-align:top;
        margin-top:0;
        position:initial;
      }
      &__title{margin:14px 0;}
    }
    &___video{
      border-radius: 8px;
      overflow: hidden;
      margin: 0 0 1.5rem;
    }
    &___logo{
      padding:1.5rem 0 .5rem;
      &:before{
        height:466px;
        background-size:501px 466px;
        top: -120px;
      }
    }
    &___platform{
      display: flex;
      justify-content: space-between;
    }
    &_foot{
      background-size:1200px 548px;
      &__icon{
        width: 300px;
        height: 307px;
      }
      &__title{
        font-size: 24px;
        text-align:center;
        margin:5px 0 55px 0;
        > strong{display: block;}
      }
    }
  }
}
// 平板拿直的時候
@media screen and (min-width: 600px) and (max-width: 1024px) and (orientation:portrait){
  .ulose_head{height:70vh;}
}
//	桌機1200版型區
@media screen and (min-width: 1200px) {
  .ulose{
    &_head{padding-bottom: 1000px;}
    &___main{padding-bottom: 1.5em;}
    &_foot{
      background-size:cover;
      &_content{padding-bottom:310px;}
    }
  }
}
//	桌機1366版型區
@media screen and (min-width: 1366px) {
  .ulose_head:before {background-size: cover;}
}
//	超大桌機版型區
@media screen and (min-width: 2000px) {
  .ulose{
    max-width:1920px;
    margin:0 auto;
  }
}
</style>