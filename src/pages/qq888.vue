<script setup>
import {useI18n} from "vue-i18n";
import {useDotAContextMenu, useGetWindowScrollVal} from '@/composables';
import {debounce} from '@/lib/debounce.js';
const {locale} = useI18n(),
      DArightMenuVal = reactive({W:0,H:0}),
      {isDArightMenuShow, windowPos, DArightMenuHide, DArightMenuShow} = useDotAContextMenu(DArightMenuVal),
      {windowScrollTop, windowScrollMiddle} = useGetWindowScrollVal(),
      q8Head = ref(null), q8Home = ref(null), q8About = ref(null), q8Chess = ref(null), q8Lottery = ref(null), 
      q8Esports = ref(null), q8Sexy = ref(null), q8Process = ref(null), q8Contact = ref(null),
      q8EleOffset = reactive({
        headW:0, headH:0, style:2019,
        homeT:0, homeB:0, aboutT:0, aboutB:0, chessT:0, chessB:0, lotteryT:0, lotteryB:0, 
        esportsT:0, esportsB:0, sexyT:0, sexyB:0, processT:0, processB:0, contactT:0, contactB:0
      }),
      DArightMenuEleFn = (w,h) => {
        DArightMenuVal.W = w.value;
        DArightMenuVal.H = h.value;
      },
      getQ8EleOffset = () => {
        q8EleOffset.headW = q8Head.value.offsetWidth;
        q8EleOffset.headH = q8Head.value.offsetHeight;
				q8EleOffset.homeT = q8Home.value.offsetTop;
				q8EleOffset.homeB = q8Home.value.offsetTop + q8Home.value.offsetHeight;
        q8EleOffset.aboutT = q8About.value.offsetTop;
				q8EleOffset.aboutB = q8About.value.offsetTop + q8About.value.offsetHeight;
        q8EleOffset.chessT = q8Chess.value.offsetTop;
				q8EleOffset.chessB = q8Chess.value.offsetTop + q8Chess.value.offsetHeight;
        q8EleOffset.lotteryT = q8Lottery.value.offsetTop;
				q8EleOffset.lotteryB = q8Lottery.value.offsetTop + q8Lottery.value.offsetHeight;
        q8EleOffset.esportsT = q8Esports.value.offsetTop;
				q8EleOffset.esportsB = q8Esports.value.offsetTop + q8Esports.value.offsetHeight;
        q8EleOffset.sexyT = q8Sexy.value.offsetTop;
				q8EleOffset.sexyB = q8Sexy.value.offsetTop + q8Sexy.value.offsetHeight;
        q8EleOffset.processT = q8Process.value.offsetTop;
				q8EleOffset.processB = q8Process.value.offsetTop + q8Process.value.offsetHeight;
        q8EleOffset.contactT = q8Contact.value.offsetTop;
				q8EleOffset.contactB = q8Contact.value.offsetTop + q8Contact.value.offsetHeight;
			},
      navCurrent = computed(() => {
        if(q8EleOffset.homeT < windowScrollMiddle.value && q8EleOffset.homeB >= windowScrollMiddle.value) return 1;
        if(q8EleOffset.aboutT < windowScrollMiddle.value && q8EleOffset.aboutB >= windowScrollMiddle.value) return 2;
        if(q8EleOffset.chessT < windowScrollMiddle.value && q8EleOffset.chessB >= windowScrollMiddle.value) return 3;
        if(q8EleOffset.lotteryT < windowScrollMiddle.value && q8EleOffset.lotteryB >= windowScrollMiddle.value) return 4;
        if(q8EleOffset.esportsT < windowScrollMiddle.value && q8EleOffset.esportsB >= windowScrollMiddle.value) return 5;
        if(q8EleOffset.sexyT < windowScrollMiddle.value && q8EleOffset.sexyB >= windowScrollMiddle.value) return 6;
        if(q8EleOffset.processT < windowScrollMiddle.value && q8EleOffset.processB >= windowScrollMiddle.value) return 7;
        if(q8EleOffset.contactT < windowScrollMiddle.value && q8EleOffset.contactB >= windowScrollMiddle.value) return 8;
      });
watchEffect(() => document.body.className = locale.value)
onMounted(() => {
  document.body.className = locale.value;
  getQ8EleOffset();
  window.addEventListener('resize',debounce(getQ8EleOffset,400));
});
onUnmounted(() => {
  window.removeEventListener('resize',debounce(getQ8EleOffset,400));
  document.body.removeAttribute('class');
  locale.value = 'zh-TW';
  localStorage.setItem('locale','zh-TW');
});
</script>

<template>
  <div class="qq888" @click="DArightMenuHide" @contextmenu.prevent="DArightMenuShow">
    <header 
      :class="['q8Head',{'q8Head-fixed':windowScrollTop > 100}]"
      ref="q8Head"
    >
      <QqHead :navCurrentNum="navCurrent" :q8EleOffsetObj="q8EleOffset" :getQ8EleOffsetFn="getQ8EleOffset"/>
    </header>
    <div 
      :class="['q8Home',{'q8Home-active':navCurrent === 1}]"
      ref="q8Home"
    >
      <QqHome :q8WidthNum="q8EleOffset.headW" :q8StyleTxt="q8EleOffset.style"/>
    </div>
    <div 
      :class="['q8About q8Unit',{'q8About-active':navCurrent === 2}]"
      ref="q8About"
    >
      <QqAbout/>
    </div>
    <div
      :class="['q8Chess q8Unit',{'q8Chess-active':navCurrent === 3}]"
      ref="q8Chess"
    >
      <QqChess/>
    </div>
    <div 
      :class="['q8Lottery q8Unit',{'q8Lottery-active':navCurrent === 4}]"
      ref="q8Lottery"
    >
      <QqLottery/>
    </div>
    <div 
      :class="['q8Esports q8Unit',{'q8Esports-active':navCurrent === 5}]"
      ref="q8Esports"
    >
      <QqEsports/>
    </div>
    <div 
      :class="['q8Sexy q8Unit',{'q8Sexy-active':navCurrent === 6}]"
      ref="q8Sexy"
    >
      <QqSexy/>
    </div>
    <div 
      :class="['q8Process',{'q8Process-active':navCurrent === 7}]"
      ref="q8Process"
    >
      <QqProcess/>
    </div>
    <div class="q8Contact" ref="q8Contact">
      <QqContact/>
    </div>
    <Foot class="q8Foot"/>
  </div>
  <DArightMenu 
    :class="{active:isDArightMenuShow}"
    :style="{top:windowPos.top+'px',left:windowPos.left+'px'}"
    @DArightMenuEle="DArightMenuEleFn"
  />
</template>

<style lang="scss">
@import"@/assets/scss/qq888Variables.scss";
@keyframes q8UnitBgAT{
  0%{
		opacity:.2;
		transform:scale3d(.6,.6,1);
  }
  60%{opacity:1;}
  100%{
		opacity:.1;
		z-index:1;
		transform:scale3d(2,2,1);
  }
}
@keyframes rightSmallMove{
  0%, 100%{transform: translate3d(0,0,0);}
  35%{transform:translate3d(0,8px,0);}
  65%{transform:translate3d(-8px,0,0);}
}
@keyframes rightPigMove {
  0%, 100%{transform:translate3d(0,4px,0);}
  35%{transform:translate3d(-4px,12px,0);}
  65%{transform:translate3d(-12px,-4px,0);}
}
@keyframes leftSmallMove{
  0%, 100%{transform:translate3d(0,0,0);}
  35%{transform:translate3d(0,-8px,0);}
  65%{transform:translate3d(8px,0,0);}
}
.qq888{height:100%;}
.q8Unit{
  min-width:280px;
  overflow:hidden;
	padding:60px 20px;
  position: relative;
  &_moveBg{
    width:100%;
    pointer-events:none;
    position:absolute;
    left:0;
  }
  &__imgBox{
    width:100%;
    height:0;
    margin:0;
    position:relative;
    &_img{
      pointer-events:none;
	    position:absolute;
    }
    &_divBg{
      height: 0;
      background-size: cover;
    }
  }
  &__contentBox{
    padding-top:45px;
    &_title1, &_title2{font-weight:normal;}
    &_title1{
      font-size:30px;
      line-height:40px;
      margin:0 0 12px 0;
    }
    &_title2, &_text{line-height:24px;}
    &_title2{
      font-size:18px;
      margin:0 0 26px 0;
    }
    &_text{
      font-size:14px;
      margin:0 0 26px 0;
    }
    &_wrap{
      display:flex;
      justify-content:center;
      margin-top:20px;
    }
    &__btn{
      color:$q8TextRed;
      font-size:16px;
      line-height:45px;
      text-align:center;
      border-radius:4px;
      background-image:linear-gradient(
        180deg, #fdfdfd 0%, #cfcece 50%
      );
      background-size:100% 200%;
      box-shadow:0 1px 0 #fff inset,
                 0 -1px 0 rgba(#000,.3) inset,
                 0 17px 12px -12px rgba(#000,.7);
      padding:0 28px;
      transition:background-position .4s, box-shadow .4s;
      &:hover {
        background-position:0 100%;
        box-shadow:0 1px 0 rgba(#000,.15) inset,
                   0 -1px 0 rgba(#fff,.4) inset,
                   0 0 0 1px rgba(#000,.4),
                   0 1px 3px 1px rgba(#000,.6);
      }
    }
    &_list{padding-left:18px;}
    &__item{
      font-size:16px;
      line-height:30px;
      &_text{margin-left:12px;}
    }
  }
}
.q8Home, .q8About, .q8Chess, .q8Lottery, .q8Esports{
  .q8Unit_moveBg{animation:q8UnitBgAT 18s -4.5s linear infinite both paused;}
  &-active .q8Unit_moveBg{animation-play-state:running;}
}
.q8About, .q8Lottery, .q8Sexy, .q8Process, .q8Contact{color:#fff;}
.q8About, .q8Lottery{
  background-color:$q8BgRed;
  &__contentBox > .q8Unit__contentBox_text{
    color:$q8TextYellow;
    text-shadow:0 1px 1px rgba(#000,.75), 0 1px 6px rgba(#000,.75);
  }
}
.q8Chess, .q8Esports{
  color:$q8TextRed;
  background-image:linear-gradient(180deg,#fdfdfd 0%,#cfcece 100%);
  &__contentBox > .q8Unit__contentBox_text{
    color:$q8TextGray;
    text-shadow:0 1px 1px rgba(#fff,.5), 0 0 2px rgba(#fff,.5);
  }
}
.q8Process, .q8Contact{position:relative;}
.q8Foot{
  background-color:$q8DarkRed;
  position:relative;
  .mBox3D_logo{
    color:$q8DarkRed;
    &:before{background-color:$q8DarkRed;}
  }
}
@media screen and (min-width:640px){
  .q8Unit{
    padding:40px 20px;
    &_moveBg{
      margin:auto 0;
      top:0;
      bottom:0;
    }
    &__imgBox{flex:0 0 45%;}
    &__contentBox{
      flex:0 0 55%;
      position:relative;
      z-index:1;
    }
  }
  .q8About, .q8Chess, .q8Lottery, .q8Esports, .q8Sexy{
    > .q8Unit_wrap{
      display:flex;
      align-items:center;
    }
  }
  .q8About, .q8Lottery, .q8Sexy{
    .q8Unit__contentBox{padding:0 5px 0 25px;}
  }
  .q8Chess, .q8Esports{
    .q8Unit{
      &__contentBox{padding:0 25px 0 5px;}
    }
  }
}
@media screen and (min-width:768px){
  .q8Unit{
    padding:70px 20px;
    &__contentBox{
      &_title1, &_title2{font-weight:500;}
    }
  }
  .q8About, .q8Lottery{background-size:150% auto;}
}
// ===== 桌機版型區 =====
@media screen and (min-width:1200px){
  .q8Unit_wrap{
    max-width:1200px;
    margin:0 auto;
  }
  .q8About, .q8Lottery{background-size:120% auto;}
  .q8About, .q8Chess, .q8Lottery, .q8Esports, .q8Sexy{
    .q8Unit__contentBox{
      padding-left:30px;
      padding-right:30px;
    }
  }
  .q8Chess, .q8Esports, .q8Sexy{
    padding:50px 0 0;
    .q8Unit__contentBox{padding-bottom:50px;}
  }
  .q8Lottery, .q8Process{padding:70px 0;}
  .q8About{padding:50px 0;}
  .q8Chess, .q8Sexy{
    .q8Unit__imgBox{align-self:flex-end;}
  }
}
@media screen and (min-width:1280px){
  .q8Unit{
    &__imgBox_divBg{
      height:200%;
      background-repeat:no-repeat;
      background-attachment:fixed;
      padding-bottom:0;
    }
    &__contentBox{
      &_title1{font-size:32px;}
      &_title2{font-size:20px;}
    }
  }
}
@media screen and (min-width:1440px){
  .q8Chess, .q8Esports, .q8Sexy{
    padding:60px 0 0;
    .q8Unit__contentBox{padding-bottom:60px;}
  }
  .q8Lottery, .q8Process{padding:80px 0;}
  .q8About{padding:60px 0;}
}
</style>