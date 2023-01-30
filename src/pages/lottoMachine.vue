<script setup>
</script>

<template>
<Head/>
<article class="lottoMachine">
  <h2 class="lottoMachine_title">Lotto Machine</h2>
  <RouterView/>
  <nav class="lottoMachine_nav">
    <RouterLink class="lottoMachine_nav_item" to="/lottoMachine/">lotto style 1</RouterLink>
    <RouterLink class="lottoMachine_nav_item" to="/lottoMachine/yeekee">lotto style 2</RouterLink>
    <RouterLink class="lottoMachine_nav_item" to="/lottoMachine/screenBall">lotto style 3</RouterLink>
    <RouterLink class="lottoMachine_nav_item" to="/lottoMachine/jackpot">lotto style 4</RouterLink>
    <RouterLink class="lottoMachine_nav_item" to="/lottoMachine/underScreen">lotto style 5</RouterLink>
  </nav>
</article>
<Foot class="DAfoot-normal"/>
</template>

<style lang="scss">
$screenWidth:960;
$screenHeight:270;
$jackpotCoinWidth:900;
$jackpotCoinHeight:152;
@font-face {
	font-family:'avenir';
	src:url('@/assets/font/Avenir.otf');
	font-weight:normal;
	font-style:normal;
}
@keyframes lottoMachineWrap{
	0%{background-position: 0 0}
	100%{background-position: 100% 100%}
}
@keyframes lottoBgScale{
	0%, 100%{opacity: .2;}
	0%{transform:scale3d(.98, .98, 1);}
	25%, 75%{opacity: 1;}
	100%{transform:scale3d(1.55, 1.55, 1);}
}
@keyframes jackpotCoin {
  0% {transform: perspective(size_pxToVw(1440,$screenWidth)) translate3d(-0.5%,0,0) rotate3d(1,1,.5,5deg);}
  33.33% {transform: perspective(size_pxToVw(1440,$screenWidth)) translate3d(.75%,0,0) rotate3d(1,1,.5,-7.5deg);}
  66.66% {transform: perspective(size_pxToVw(1440,$screenWidth)) translate3d(-1.125%,0,0) rotate3d(1,1,.5,11.25deg);}
  100% {transform: perspective(size_pxToVw(1440,$screenWidth)) translate3d(1.6875%,0,0) rotate3d(1,1,.5,-16.875deg);}
}
@keyframes ballNumResult{
	0%{transform:rotate3d(1,0,0,90deg);}
  100%{transform:rotate3d(0,0,0,0deg);}
}
.lottoMachine{
  color:#fff;
  font-family:'avenir','Microsoft YaHei','Microsoft JhengHei','PingFangTC',Helvetica;
  background-color: #000;
  flex-grow: 1;
  border: 5px solid $GrayColor;
  margin-top: 44px;
  &_title{
    color:rgba(#fff,.85);
    font-size:size_pxToVw(120,$screenWidth);
    text-shadow:size_pxToVw(-3,$screenWidth) size_pxToVw(-3,$screenWidth) 0 rgba(0,232,231,.8),
									size_pxToVw(-6,$screenWidth) size_pxToVw(-6,$screenWidth) size_pxToVw(3,$screenWidth) rgba(0,232,231,.6),
									size_pxToVw(3,$screenWidth) size_pxToVw(3,$screenWidth) 0 rgba(250,126,39,.8),
									size_pxToVw(6,$screenWidth) size_pxToVw(6,$screenWidth) size_pxToVw(3,$screenWidth) rgba(250,126,39,.6);
    text-align: center;
    width: 90%;
    margin:2em auto;
    transform: skew(-8deg);
  }
  &_wrap{
    width: 100%;
    max-width: 1920px;
    height: 0;
    background-image:linear-gradient(135deg, #1a1a1a 25%,
                                              transparent 0, transparent 50%,
                                              #1a1a1a 0, #1a1a1a 75%,
                                              transparent 0
                                    );
    background-size:calc($screenHeight/$screenWidth)*3% 3%;
    overflow:hidden;
    padding-bottom:calc($screenHeight/$screenWidth)*100%;
    margin:20% auto;
    position: relative;
    animation: lottoMachineWrap 40s linear infinite;
    &.start{animation:none;}
  }
  &__screen, &__yeekee{
    &Bg{
      width: 100%;
      animation:lottoBgScale 12s linear infinite both;
    }
  }
  &__screen{
    &Bg{
			top:0;
			left:0;
    }
    &Coin{
			width:calc($jackpotCoinWidth/$screenWidth)*100%;
			top:calc(70/$screenHeight)*50%;
			left:calc(($screenWidth - $jackpotCoinWidth)/$screenWidth)*50%;
      animation:jackpotCoin 5s linear infinite alternate both;
		}
    &Box{
      background-color:rgba(#000,.4);
      flex-direction:column;
      @extend %disFlexJustifyAlignCenter;
      @extend %wh100pPosaT0L0;
      &_logo, &_title{
        opacity:0;
        transform:translate3d(0,-300%,0) scale3d(.5,.5,1);
        transition:opacity .8s,transform .8s cubic-bezier(.25,-.25,.75,1.25);
      }
      &_logo{
        display: flex;
        margin:0;
        transition-delay: .4s;
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
    }
  }
  &__yeekee{
    &Bg{@extend %posaT0L0}
    &_title{
      width:size_pxToVw(136,$screenWidth);
      height:size_pxToVw(35,$screenWidth);
      width:size_pxToVw(330,1920);
      height:size_pxToVw(100,1920);
      display:flex;
      background-image:url("@/assets/img/lottoMachine/yeekeeTitle.png");
      background-size:cover;
      position:absolute;
      top:0;
      left:50%;
      transform:translate3d(-50%, 0, 0);
      &:after{
        content:"";
        width:84%;
        height:70%;
        position:absolute;
        top:0;
        left:8%;
        box-shadow: 0 size_pxToVw(14,$screenWidth) size_pxToVw(14,$screenWidth) size_pxToVw(-14,$screenWidth) rgba(#000,.5) inset;
      }
    }
    &__text{
      color:#dadada;
      font-size:size_pxToVw(30,$screenWidth);
      font-weight: bold;
      line-height: 1.3;
      margin:0 auto auto;
      position: relative;
      text-shadow:size_pxToVw(-1,$screenWidth) size_pxToVw(-1,$screenWidth) 0 #fff,
                  size_pxToVw(1,$screenWidth) size_pxToVw(1,$screenWidth) 0 #737373;
    }
  }
  &_nav{
    display: flex;
    flex-wrap:wrap;
    padding:30px 10px;
    &_item{
      color:#fff;
      font-size: 14px;
      text-shadow: 0 0 2px rgba(#000,.35);
      line-height: 1;
      text-align:center;
      text-decoration:none;
      width: calc(50% - 20px);
      border-radius: 4px;
      padding: 10px;
      background-color:orange;
      margin: 10px;
      transition:background-color .4s;
      &.router-link-exact-active{background-color:orangered;}
    }
  }
}
@media screen and (min-width: 640px) {
  .lottoMachine{
    &_nav_item{width: calc(25% - 20px);}
    &_title{
      font-size:size_pxToVw(90,$screenWidth);
      text-shadow:size_pxToVw(-2,$screenWidth) size_pxToVw(-2,$screenWidth) 0 rgba(0,232,231,1),
                  size_pxToVw(-4,$screenWidth) size_pxToVw(-4,$screenWidth) size_pxToVw(2,$screenWidth) rgba(0,232,231,.6),
                  size_pxToVw(2,$screenWidth) size_pxToVw(2,$screenWidth) 0 rgba(250,126,39,1),
                  size_pxToVw(4,$screenWidth) size_pxToVw(4,$screenWidth) size_pxToVw(2,$screenWidth) rgba(250,126,39,.6),
                  0 0 size_pxToVw(8,$screenWidth) #000,
                  0 0 size_pxToVw(12,$screenWidth) #000,
                  0 0 size_pxToVw(16,$screenWidth) #000;
      margin: .5em auto;
    }
    &_wrap{margin:5% auto;}
  }
}
@media screen and (min-width: 667px) {
  .lottoMachine_nav_item{width: calc(20% - 20px);}
}
// === 平板拿直的時候 portrait ===
@media screen and (min-width: 600px) and (max-width: 1024px)  and (orientation:portrait){
  .lottoMachine{
    &_title{margin:2em auto;}
    &_wrap{margin:20% auto;}
    &_nav{padding: 35px;}
  }
}
</style>