<script setup>
import axios from 'axios';
import { useDotAContextMenu, useGetWindowScrollVal } from '@/composables';
import { debounce } from '@/lib/debounce.js'
let timer;
const newsSlideTime = 3500,
      DArightMenuVal = reactive({W:0,H:0}),
      { isDArightMenuShow, windowPos, DArightMenuHide, DArightMenuShow } = useDotAContextMenu(DArightMenuVal),
      { windowScrollMiddle } = useGetWindowScrollVal(),
      lgNewsData = ref([]),
      lgMain = ref(null),
      lgMenu = ref(null),
      lgNewsWrap = ref(null),
      lgMainOffset = reactive({top:0,bottom:0}),
      lgMenuOffset = reactive({top:0,bottom:0}),
      lgNews = reactive({idx:0,height:0,isSlide:true}),
      DArightMenuEleFn = (w,h) => {
        DArightMenuVal.W = w.value;
        DArightMenuVal.H = h.value;
      },
      getLgDomOffset = () => {
				const mainTop = lgMain.value.offsetTop,
              menuTop = lgMenu.value.offsetTop;
        lgMainOffset.top = mainTop;
        lgMainOffset.bottom = mainTop + lgMain.value.offsetHeight;
        lgMenuOffset.top = menuTop;
        lgMenuOffset.bottom = menuTop + lgMenu.value.offsetHeight;
        lgNews.height = lgNewsWrap.value.offsetHeight;
			},
      newsSlide = () => {
        if(lgNews.idx < lgNewsData.value.length){
          lgNewsWrap.value.scrollTo({top:lgNews.height*lgNews.idx,behavior:'smooth'});
        }else{
          lgNews.idx = 0;
          lgNewsWrap.value.scrollTo({top:0});
          lgNews.idx++;
          lgNewsWrap.value.scrollTo({top:lgNews.height*lgNews.idx,behavior:'smooth'});
        }
        // console.log(lgNews.idx);
        lgNews.idx++;
      },
      newsSlideStop = () => {
        lgNews.isSlide = false; // console.log(lgNews.idx);
        clearInterval(timer);
      },
      newsSlidePlay = (e) => {
        lgNews.isSlide = true;
        lgNews.idx = Math.round(e.target.scrollTop / lgNews.height);
        lgNewsWrap.value.scrollTo({top:lgNews.height*lgNews.idx});
        clearInterval(timer);
        timer = setInterval(newsSlide,newsSlideTime);
      };
onMounted(() => {
  // Secret delete link // https://designer.mocky.io/manage/delete/ecfde131-172a-429b-be16-b7fd1b1de89d/bnnklrt7AJixA9OGgMguXrQK0MY2IoYvotgn
  axios.get('https://run.mocky.io/v3/ecfde131-172a-429b-be16-b7fd1b1de89d')
  .then((res) => {
    lgNewsData.value = res.data;
    lgNewsData.value.push(res.data[0]);
  }).catch((error) => {console.log(error.response.data)});
  getLgDomOffset();
  timer = setInterval(newsSlide,newsSlideTime);
  window.addEventListener('resize',debounce(getLgDomOffset,400));
});
onUnmounted(() => {
  clearInterval(timer);
  window.removeEventListener('resize',debounce(getLgDomOffset,400));
});
</script>

<template>
  <div class="lg" @click="DArightMenuHide" @contextmenu.prevent="DArightMenuShow">
    <SlotHead>Dot A 娛樂</SlotHead>
    <div
      :class="['lgMain',{active:lgMainOffset.top < windowScrollMiddle && lgMainOffset.bottom >= windowScrollMiddle}]" 
      ref="lgMain"
    >
      <main class="lgMain_goddess">
        <h2 class="lgMain_goddess_title">直播大媽親聲打氣，各種遊戲很不順利</h2>
        <p class="lgMain_goddess_txt"><a class="lgMain_goddess__link" href="javascript:;">馬上游戲</a></p>
        <img class="lgMain_goddess_img" src="@/assets/img/lg/lg_goddess.png" alt="直播大媽親聲打氣，各種遊戲很不順利">
      </main>
      <aside class="lgMain_bar">
        <div class="lgMain__news">
          <div 
            class="lgMain__news_wrap" 
            ref="lgNewsWrap"
            @mouseenter="newsSlideStop"
            @mouseleave="newsSlidePlay($event)"
          >
            <ul :class="['lgMain__news__list',{stop:!lgNews.isSlide}]">
              <li
                class="lgMain__news__list_item" 
                v-for="item in lgNewsData" 
                :key="item.news"
              >
                <p class="lgMain__news__list__txt">{{item.news}}</p>
              </li>
            </ul>
          </div>
          <div class="lgMain__news_title"></div>
        </div>
        <h4 class="lgMain__promotions">
          <a href="javascript:;" class="lgMain__promotions_link">優惠活動 PROMOTION</a>
        </h4>
      </aside>
    </div>
    <div
      :class="['lgMenu',{active:lgMenuOffset.top < windowScrollMiddle && lgMenuOffset.bottom >= windowScrollMiddle}]"
      ref="lgMenu"
    >
      <article class="lgMenu_wrap">
        <img class="lgMenu__img" src="@/assets/img/lg/lg_menu.jpg" alt="大媽直播 與你共遊 多種遊戲直播大媽線上與你共遊">
        <h3 class="lgMenu__title">大媽直播 與你共遊</h3>
        <p class="lgMenu__txt"><em>多種遊戲直播大媽線上與你共遊</em></p>
        <ul class="lgMenu__list">
          <li class="lgMenu__list_item">
            <a href="javascript:;" class="lgMenu__list__link">
              <img class="lgMenu__list__link_img" src="@/assets/img/lg/lg_texasPoker.png" alt="texas poker">
            </a>
          </li>
          <li class="lgMenu__list_item">
            <a href="javascript:;" class="lgMenu__list__link">
              <img class="lgMenu__list__link_img" src="@/assets/img/lg/lg_cow.png" alt="niu niu">
            </a>
          </li>
          <li class="lgMenu__list_item">
            <a href="javascript:;" class="lgMenu__list__link">
              <img class="lgMenu__list__link_img" src="@/assets/img/lg/lg_dragonTiger.png" alt="dragon tiger">
            </a>
          </li>
          <li class="lgMenu__list_item">
            <a href="javascript:;" class="lgMenu__list__link">
              <img class="lgMenu__list__link_img" src="../assets/img/lg/lg_baccarat.png" alt="baccarat">
            </a>
          </li>
          <li class="lgMenu__list_item">
            <a href="javascript:;" class="lgMenu__list__link">
              <img class="lgMenu__list__link_img" src="../assets/img/lg/lg_fortunePull.png" alt="fortune pull">
            </a>
          </li>
          <li class="lgMenu__list_item">
            <a href="javascript:;" class="lgMenu__list__link">
              <img class="lgMenu__list__link_img" src="../assets/img/lg/lg_fruitTurntable.png" alt="fruit turntable">
            </a>
          </li>
        </ul>
      </article>
    </div>
    <div class="lgBanner">
      <article class="lgBanner_wrap">
        <img class="lgBanner__img" src="@/assets/img/lg/lg_banner.png" alt="完美配合各種裝置，盡情享受遊戲快感">
        <h3 class="lgBanner__title">完美配合各種裝置，盡情享受遊戲快感</h3>
        <p class="lgBanner__txt">
          <a class="lgBanner__txt_link" href="javascript:;">立即體驗</a>
        </p>
      </article>
    </div>
    <SlotFooter>Copyright © Dot A 娛樂 Reserved</SlotFooter>
    <DArightMenu 
      :class="{active:isDArightMenuShow}"
      :style="{top:windowPos.top+'px',left:windowPos.left+'px'}"
      @DArightMenuEle="DArightMenuEleFn"
    />
  </div>
</template>

<style lang="scss" src="@/assets/scss/brand.scss"></style>
<style lang="scss">
$lg_web_bg:#25014b;
$lg_btn_color:#ffa200;
$lg_black_bg:rgba(#000,.6);
$lg_banner_bg:#ee618c;
$lg_banner_shadow:#c43560;
$lg_foot_href:#ffdfad;
$lg_foot_bg:#13031e;
%ball-animate-img{
	content:"";
	max-width:1550px;
	pointer-events:none;
  @extend %wh100pPosaT0L0;
	transform-style:preserve-3d;
}
%lg-text-indent-out{
  @extend %textIndentOut;
  top: 50%;
  left: 50%;
}
@keyframes lgMenuBallBefore{
  0% {transform:rotate3d(0, .5, 1, 20deg) translate3d(100px, 220px, 120px);}
  12.5% {transform:rotate3d(1, 0, 1, 13deg) translate3d(65px, 160px, 55px);}
  25% {transform:rotate3d(1, 1, 1, 6deg) translate3d(30px, 100px, -10px);}
  37.5% {transform:rotate3d(0, 0, 1, -1deg) translate3d(-5px, 45px, -80px);}
  50% {transform:rotate3d(0, 1, 1, -8deg) translate3d(-40px, -10px, -150px);}
  62.5% {transform:rotate3d(1, 0, 1, -12deg) translate3d(-50px, 25px, -80px);}
  75% {transform:rotate3d(0, .5, 1, -16deg) translate3d(-60px, 60px, -10px);}
  87.5% {transform:rotate3d(.5, .5, 1, -20deg) translate3d(-70px, 95px, 55px);}
  100% {transform:rotate3d(-0.5, 0, 1, -24deg) translate3d(-80px, 130px, 120px);}
}
@keyframes lgMenuBallAfter{
  0% {transform:rotate3d(0, 1, 1, -20deg) translate3d(-50px, 120px, 350px);}
  12.5% {transform:rotate3d(1, 0, 1, -15deg) translate3d(-35px, 90px, 225px);}
  25% {transform:rotate3d(1, 1, 1, -9deg) translate3d(-20px, 60px, 100px);}
  37.5% {transform:rotate3d(0, 1, 1, -4deg) translate3d(-5px, 30px, -25px);}
  50% {transform:rotate3d(0, 0, 1, 1deg) translate3d(10px, 0px, -150px);}
  62.5% {transform:rotate3d(1, 0, 1, 6deg) translate3d(25px, 45px, -25px);}
  75% {transform:rotate3d(0, 1, 1, 11deg) translate3d(40px, 90px, 100px);}
  87.5% {transform:rotate3d(1, 1, 1, 15deg) translate3d(55px, 135px, 225px);}
  100% {transform:rotate3d(1, 0, 1, 20deg) translate3d(70px, 180px, 350px);}
}
.lg{
  font-size: 14px;
  background-color:$lg_web_bg;
  min-width: 1024px;
  .brand{
    &Head{
      &__logo__txt{font-size: 24px;}
      &__box{
        &__input:focus{
          // focus時input佔位符顯示時
          &:placeholder-shown{color:$lg_btn_color;}
        }
        &_btn{
          &-login{background-color:$lg_btn_color;}
          &-signup{background-color:#dc3467;}
        }
      }
    }
    &Foot{
      background-color:$lg_foot_bg;
      &__item_link{
        color:$lg_foot_href;
        &:hover{
          color:$lg_foot_bg;
          background-color:$lg_foot_href;
        }
      }
      &_copy{color:#afafaf}
    }
  }
  &Main, &Menu{
    overflow: hidden;
    padding-bottom:20px;
    position: relative;
    perspective:1800px;
    &:before, &:after{
      @extend %ball-animate-img;
      z-index:1;
    }
    &.active{
      &:before, &:after{animation-play-state:running;}
    }
  }
  &Main{
    background:url("@/assets/img/lg/lg_bg.jpg") no-repeat center/cover;
    &:before{
      background:url("@/assets/img/lg/lg_mainBallBefore.png") no-repeat center/contain;     
      animation:lgMainBall 36s linear infinite alternate-reverse both paused;
    }
    &:after{
      background:url("@/assets/img/lg/lg_mainBallAfter.png") no-repeat center/contain;     
      animation:lgMainBall 36s linear infinite alternate both paused;
    }
    &_goddess{
      width:110vh;//120vh // 設1920*1080 瀏覽器全螢幕高940px為100vh，main高1100px為117vh，但1366最佳高度為120vh
      min-width:600px;//638px //1366*768 瀏覽器全螢幕高625px，但1280*700 全螢幕高為577px
      max-width:1100px;
      height:110vh;
      min-height:600px;
      max-height:1100px;
      margin:0 auto;
      position: relative;
      &_title, &_txt{position:absolute;}
      &_title{@extend %lg-text-indent-out}
      &_txt{
        width:20.49121vh;
        min-width:110px;
        max-width:188px;
        height:7.7387vh;
        min-height:41px;
        max-height:71px;
        margin: 0;
        top:calc(844 / 1100) * 100%;
        left:50%;
        transition:transform .4s cubic-bezier(.5,-.5,.5,1.5);
        transform:translateX(-50%) scale3d(.95,.95,1);
        &:after{
          content:"";
          width:34.574468%;
          height:91.549296%;
          background-image:url("@/assets/img/btnLight.png");
          opacity:0;
          background-size:cover;
          position:absolute;
          top:-22%;
          left:-3%;
          animation:brandBtnStar 4s linear infinite both;
        }
        &:hover{transform:translateX(-50%) scale3d(1,1,1);}
      }
      &__link{
        @extend %textIndentOut;
        width: 100%;
        height: 100%;
        background:url("@/assets/img/lg/lg_playBtn.png") no-repeat center/cover;
        border-radius:40px;
        overflow: hidden;
        position: relative;
        &:after{
          content:"";
          width:70%;
          height:96%;
          background-image:linear-gradient(90deg, rgba(255,214,26,0) 0%, rgba(255,214,26,0.35) 30%, rgba(255,214,26,.7) 45%, rgba(255,214,26,.7) 55%, rgba(255,214,26,0.35) 70%, rgba(255,214,26,0) 100%);
          position:absolute;
          top:0;
          left:-85%;
          transform:skew(-32deg);
          animation:brandBtnFlash 4s linear infinite both;
        }
      }
      &_img{width:100%;}
    }
    &_bar{
      width:100%;
      max-width:1100px;
      display: flex;
      justify-content:space-between;
      margin:0 auto;
      position:absolute;
      left:0;
      right:0;
      bottom:20px;
      z-index:2;
    }
    &__news{
      width:73.636364%;
      height: 0;
      background-color:$lg_black_bg;
      border-radius:10px;
      box-shadow: 0 1px 3px 1px rgba(#000,.6),
                  0 -1px 1px rgba(#000,.75) inset;
      overflow: hidden;
      padding-bottom: 10%;
      position: relative;
      &_wrap{
        width: 70%;
        height: 100%;
        overflow: auto;
        position:absolute;
        top:0;
        right:0;
      }
      &__list{
        @extend %ulReset;
        height: 100%;
        position: relative;
        &.stop > .lgMain__news__list_item:last-of-type{display: none;}
        &_item{
          height: 100%;
          padding:3.5%
        }
        &__txt{
          color:#fff;
          line-height: 1.7;
          @include multi_line_overflow_dot(3);
          overflow: hidden;
          height: 100%;
          margin:0;
        }
      }
      &_title{
        width: 30.8642%;
        height: 100%;
        background-image:url("../assets/img/lg/lg_news.png");
        background-size:cover;
        @extend %posaT0L0;
      }
    }
    &__promotions{
      width: 24.545455%;
      padding-bottom: 10%;
      margin:0;
      position: relative;
      &_link{
        @extend %textIndentOut;
        background-image:url("@/assets/img/lg/lg_promotions.jpg");
        background-size:cover;
        border-radius:10px;
        box-shadow: 0 1px 3px 1px rgba(#000,.6),
                    0 -1px 1px rgba(#000,.75) inset,
                    0 1px 0 rgba(#fff,0.75) inset;
        overflow: hidden;
        @extend %wh100pPosaT0L0;
        &:after{
          content:"";
          width:70%;
          height:100%;
          background-image:linear-gradient(90deg, rgba(255,214,26,0) 0%, rgba(255,214,26,0.4) 30%, rgba(255,214,26,.8) 45%, rgba(255,214,26,.8) 55%, rgba(255,214,26,0.4) 70%, rgba(255,214,26,0) 100%);
          position:absolute;
          top:0;
          left:-86%;
          transform:skew(-32deg);
          transition:left .6s;
        }
        &:hover:after{left:108%;}
      }
    }
  }
  &Menu{
    &:before{
      background:url("@/assets/img/lg/lg_menuBallBefore.png") no-repeat center/contain;
      animation:lgMenuBallBefore 30s -15s linear infinite alternate both paused;
    }
    &:after{
      background:url("@/assets/img/lg/lg_menuBallAfter.png") no-repeat center/contain;
      animation:lgMenuBallAfter 30s -15s linear infinite alternate both paused;
    }
    &_wrap{
      max-width:1100px;
      height: 0;
      padding-bottom:44.727273%;
      margin:0 auto;
      position: relative;
    }
    &__img{
      width: 100%;
      @extend %posaT0L0;
      border-radius:0.909091% 0.909091% 0.909091% 0.909091% / 2.0325203252% 2.0325203252% 2.0325203252% 2.0325203252%;
      box-shadow: 0 2px 8px 2px rgba(#000,.4),
                  0 0 2px 1px rgba(#000,.6),
                  0 1px 1px rgba(#fff,.4) inset;
    }
    &__title, &__txt, &__list{position: absolute;}
    &__title, &__txt{@extend %lg-text-indent-out}
    &__list{
      @extend %ulReset;
      width: 39.0909091%;
      height: 52.8455285%;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      right: 6.363636%;
      bottom: 4.909091%;
      &:hover{
        .lgMenu__list__link:after{background-color:rgba(#000,.4)}
      }
      &_item{
        width:27.9069768%;
        + .lgMenu__list_item{margin-left:4.6511628%;}
        &:nth-of-type(4){margin-left:6.9767442%;}
        > .lgMenu__list__link:hover:after{background-color:rgba(#000,0);}
      }
      &__link{
        opacity:.85;
        box-shadow: 0 1px 3px 1px rgba(#000,.6);
        border-radius:50%;
        overflow: hidden;
        position: relative;
        transition:opacity .4s, transform .4s;
        &:after{
          content: "";
          @extend %wh100pPosaT0L0;
          transition:background-color .4s;
        }
        &:hover{
          opacity:1;
          transform:scale(1.079) rotate(-10deg);
          &:after{background-color:rgba(#000,0);}
        }
        &_img{
          width: 100%;
          display: block;
        }
      }
    }
  }
  &Banner{
    background-image:linear-gradient(180deg, $lg_web_bg 0%, $lg_web_bg 8.440367%, $lg_banner_bg 0%, $lg_banner_bg 100%);
    &_wrap{
      max-width:1350px;
      margin:0 auto;
      position: relative;
    }
    &__img{
      width: 100%;
      display: block;
    }
    &__title, &__txt{position:absolute;}
    &__title{@extend %lg-text-indent-out}
    &__txt{
      width: 150px;
      height: 50px;
      background-color:#fff;
      border-radius:30px;
      overflow: hidden;
      box-shadow: 1px 1px 2px 1px rgba(196,53,96,.8),
                  1px 1px 20px rgba(196,53,96,.4),
                  0 10px 60px $lg_banner_shadow,
                  0 0 0 $lg_banner_shadow inset;
      left:23.703703704%;
      bottom:15.853656%;
      transition:background-color .2s, box-shadow .2s;
      &:after{
        content:"";
        width: 0;
        height: 100%;
        background-color:$lg_btn_color;
        position:absolute;
        top:0;
        right:-10%;
        transform:skew(40deg);
        transition:width .4s;
      }
      &_link{
        color:$lg_banner_bg;
        font-size:20px;
        font-weight:bold;
        text-align: center;
        line-height:52px;
        position: relative;
        z-index:1;
        transition:color .4s;
      }
      &:hover{
        box-shadow: 0 10px 20px -5px rgba(196,53,96,0.8),
                    0 20px 40px -10px rgba(196,53,96,0.9),
                    0 30px 60px -15px  $lg_banner_shadow,
                    0 0 2px 1px $lg_banner_bg inset;
        transition:box-shadow .6s;
        &:after{
          width:120%;
          left: -10%;
        }
        > .lgBanner__txt_link{color:#fff;}
      }
    }
  }
}
@media screen and (min-width: 1100px){
  .lgMenu_wrap{padding-bottom: 492px;}
}
@media screen and (min-width: 1366px){
  .lg{
    &Main, &Menu{
      &:before, &:after{background-size:cover}
    }
  }
}
</style>