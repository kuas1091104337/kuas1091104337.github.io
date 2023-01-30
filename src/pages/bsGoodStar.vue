<script setup>
import { useDotAContextMenu } from '@/composables';
const DArightMenuVal = reactive({W:0,H:0}),
      { isDArightMenuShow, windowPos, DArightMenuHide, DArightMenuShow } = useDotAContextMenu(DArightMenuVal),
      DArightMenuEleFn = (w,h) => {
        DArightMenuVal.W = w.value;
        DArightMenuVal.H = h.value;
      };
</script>

<template>
  <div class="bsGoodStar" @click="DArightMenuHide" @contextmenu.prevent="DArightMenuShow">
    <header class="bsGoodStar_head">
      <img src="@/assets/img/bsGoodStar/goodStarBanner.jpg" class="bsGoodStar_head_img bsGoodStar_head_img-desk">
      <img src="@/assets/img/bsGoodStar/goodStarPhoneBanner.jpg" class="bsGoodStar_head_img bsGoodStar_head_img-phone">
      <div class="bsGoodStar_head_wrap">
        <RouterLink to="/" class="bsGoodStar_head_link">
          <i class="bsGoodStar_head_link_icon"><SvgIcon name="icon-dota" color="#fff"/></i>
          <span class="bsGoodStar_head_link_txt">Dot A</span>
        </RouterLink>
        <h1 class="bsGoodStar_head_txt">跪求好評五星級</h1>
        <h2 class="bsGoodStar_head_txt">五星好評送百鑽</h2>
        <a class="bsGoodStar_head_btn" href="https://kuas1091104337.github.io/brainsport/" target="_blank">
          <img src="../assets/img/bsGoodStar/goodStarPhoneBtn.png" class="bsGoodStar_head_btn_img">
        </a>
      </div>
    </header>
    <div class="bsGoodStar_main">
      <article class="bsGoodStar_main_wrap">
        <h3 class="bsGoodStar_main__title">活動時間：</h3>
        <p class="bsGoodStar_main__txt">2015/08/03(一) ~ 2015/10/04(日) 23:59</p>
        <h3 class="bsGoodStar_main__title">活動方式：</h3>
        <p class="bsGoodStar_main__txt">在Google play 商店頁留下「五顆星星+您的遊戲暱稱」，即可獲得鑽石5000顆，就是讓你有省錢! ( 鑽石將在3個工作天內發送至遊戲內信箱，請玩家留意 )</p>
      </article>
      <ul class="bsGoodStar_main_nav">
        <li class="bsGoodStar_main_nav_item">
          <a class="bsGoodStar_main___link bsGoodStar_main___link-bs7poker" href="https://kuas1091104337.github.io/brainsport/" target="_blank"></a>
        </li>
        <li><a class="bsGoodStar_main___link bsGoodStar_main___link-googlePlay" href="javascript:;"></a></li>
        <li><a class="bsGoodStar_main___link bsGoodStar_main___link-appStore" href="javascript:;"></a></li>
      </ul>
      <Foot/>
    </div>
    <DArightMenu 
      :class="{active:isDArightMenuShow}"
      :style="{top:windowPos.top+'px',left:windowPos.left+'px'}"
      @DArightMenuEle="DArightMenuEleFn"
    />
  </div>
</template>

<style lang="scss">
.bsGoodStar{
  background-color: #030b13;
  display: flex;
  flex-direction:column;
  flex-grow: 1;
  &_head{
    position: relative;
    &_img{
      width: 100%;
      display: block;
      &-desk{height: 0;}
    }
    &_wrap{@extend %wh100pPosaT0L0;}
    &_link{
      color: #fff;
      display: flex;
      align-items:center;
      border-radius: 5px;
      padding: 5px;
      @extend %posaT0L0;
      transition: background-color 0.4s, box-shadow 0.4s;
      &:hover{background-color:rgba(#fff,.3)}
      &_icon{
        width: 24px;
        height: 22.5px;
        margin-right: 5px;
      }
      &_txt{transform: skew(-6deg);}
    }
    &_txt{@extend %textIndentOut;}
    &_btn{
      width:20.1525%;
			display:block;
			position:absolute;
			bottom:11%;
			left:54.5%;
      &_img{width: 100%;}
    }
  }
  &_main{
    background-image:url("@/assets/img/bsGoodStar/goodStarPhoneBg.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    display: flex;
    flex-direction:column;
    flex-grow: 1;
    &_wrap{
      line-height:1.8;
			padding:0 15px;
    }
    &__title{
      color:#fff45c;
			font-size:21px;
			font-weight:normal;
			transform:skew(-6deg);
    }
    &__txt{
      color:#fff;
			font-size:18px;
			text-shadow:0 0 1px rgba(0,0,0,0.35);
    }
    &_nav{@extend %ulReset;}
    &___link{
      &-googlePlay, &-appStore{
        &:before, &:after{@extend %wh100pPosaT0L0}
      }
    }
    > .DAfoot{
      background-color:rgba(#000,.6);
      margin-top: auto;
    }
    .mBox3D_logo{
      color: #030b13;
      &:before{background-color: #030b13;}
    }
  }
}
//	===== 手機版拿橫的時候 ===== 
@media screen and (min-width: 568px) {
  .bsGoodStar_head_link{
    font-size: 18px;
    font-weight: bold;
    top:5px;
    left:5px;
    &_icon{
      width: 30px;
      height: 28px;
      margin-right: 6px;
    }
  }
}
@media screen and (min-width: 768px) {
  .bsGoodStar{
    &_head{
      &_img{
        &-desk{height:auto;}
        &-phone{height:0;}
      }
      &_btn{display: none;}
    }
    &_main{
      background-image:url("@/assets/img/bsGoodStar/goodStarArticleBg.jpg");
      &_nav{
        display: flex;
        flex-wrap:wrap;
        justify-content:center;
        &_item{width: 100%;}
      }
      &___link{
        &-bs7poker, &-googlePlay, &-appStore{position: relative;}
        &-bs7poker{
          width:179px;
          height:87px;
          background-image:url("../assets/img/bsGoodStar/goodStarBtn.png");
          background-position:-734px 0;
			    margin:0 auto;
        }
        &-googlePlay, &-appStore{
          width:179px;
          height:214px;
			    margin:25px;
          &:before, &:after{
            content:"";
            background-image:url("../assets/img/bsGoodStar/goodStarBtn.png");
            transition:opacity .4s;
          }
        }
        &-appStore{
          &:before{
            background-position:-185px 0;
            opacity: 0;
          }
          &:after{background-position:0 0;}
          &:hover{
            &:before{opacity: 1;}
            &:after{opacity: 0;}
          }
        }
        &-googlePlay{
          &:before{
            background-position:-555px 0;
            opacity: 0
          }
          &:after{background-position:-370px 0;}
          &:hover{
            &:before{opacity: 1;}
            &:after{opacity: 0;}
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .bsGoodStar{
    background-image:url("@/assets/img/bsGoodStar/goodStarBg.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    &_head, &_main{
      max-width: 1000px;
      margin:0 auto;
    }
    &_main_wrap{
      padding:0 65px 50px;
    }
  }
}
</style>