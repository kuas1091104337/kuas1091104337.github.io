<script setup>
import {useGetWindowScrollVal, useDotAContextMenu} from '@/composables';
import axios from 'axios';
const DArightMenuVal = reactive({W:0,H:0}),
      {isDArightMenuShow, windowPos, DArightMenuHide, DArightMenuShow} = useDotAContextMenu(DArightMenuVal),
      DArightMenuEleFn = (w,h) => {
        DArightMenuVal.W = w.value;
        DArightMenuVal.H = h.value;
      },
      { windowScrollTop } = useGetWindowScrollVal(),
      rankingData = ref([]), 
      findBugTop = () => window.scrollTo({top:0,behavior:'smooth'});
onMounted(() => {
  // Secret delete link // https://designer.mocky.io/manage/delete/884ca4e6-b7f0-45a8-ac37-e6cb77b5fbf0/kuas1091104337
  axios.get('https://run.mocky.io/v3/884ca4e6-b7f0-45a8-ac37-e6cb77b5fbf0')
  .then((res) => {
    rankingData.value = res.data;
  }).catch((error) => {
    console.log(error.response.data);
  });
});
</script>

<template> 
  <div class="findBug" @click="DArightMenuHide" @contextmenu.prevent="DArightMenuShow">
    <header class="findBug_head">
      <img class="findBug_head_img findBug_head_img-desktop" src="@/assets/img/findBug/findBugBg.jpg" alt="findBug Desktop Bg">
      <img class="findBug_head_img findBug_head_img-pad" src="@/assets/img/findBug/findBugPadBg.jpg" alt="findBug Pad Bg">
      <img class="findBug_head_img findBug_head_img-phoneLandscape" src="@/assets/img/findBug/findBugPhoneLandscapeBg.jpg" alt="findBug Phone Landscape Bg">
      <img class="findBug_head_img findBug_head_img-phonePortrait" src="@/assets/img/findBug/findBugPhonePortraitBg.jpg" alt="findBug Phone Portrait Bg">
      <div class="findBug_head_wrap">
        <RouterLink to="/" class="findBug_head__link">
          <i class="findBug_head__link_icon"><SvgIcon name="icon-dota" color="#1f4cac"/></i>
          <span class="findBug_head__link_txt">Dot A</span>
        </RouterLink>
        <h1 class="findBug_head__txt">神手來找碴</h1>
        <h2 class="findBug_head__txt">找bug贏獎勵</h2>
        <p class="findBug_head__title">活動時間：2015/08/03(一) ~ 2015/08/25(二) 23:59</p>
      </div>
    </header>
    <div class="findBug_main">
      <article class="findBug_main_wrap">
        <h3 class="findBug_main__title">活動方式：</h3>
        <p>活動期間內，回報遊戲中的Bug問題或建議，經官方確認後，將給予以下表格獎勵。(活動獎勵將發放至遊戲中信箱。)</p>
        <table class="rwdTable three">
          <thead class="rwdTable_thead">
            <tr>
              <th class="rwdTable_thead_th"></th>
              <th class="rwdTable_thead_th">重大Bug</th>
              <th class="rwdTable_thead_th">一般Bug</th>
            </tr>
          </thead>
          <tbody class="rwdTable_tbody">
            <tr class="rwdTable_tbody_tr">
              <td class="rwdTable_tbody_td">首位回報者</td>
              <td class="rwdTable_tbody_td" data-th="重大Bug">鑽石500顆</td>
              <td class="rwdTable_tbody_td" data-th="一般Bug">鑽石250顆</td>
            </tr>
            <tr class="rwdTable_tbody_tr">
              <td class="rwdTable_tbody_td">前5名回報者</td>
              <td class="rwdTable_tbody_td" data-th="重大Bug">鑽石100顆</td>
              <td class="rwdTable_tbody_td" data-th="一般Bug">鑽石50顆</td>
            </tr>
          </tbody>
        </table>
        <div class="findBug_main__ranking">
          <img class="findBug_main__ranking_img findBug_main__ranking_img-desktop" src="@/assets/img/findBug/findBugContentTitle.jpg" alt="findBug Content Title">
          <img class="findBug_main__ranking_img findBug_main__ranking_img-phone" src="@/assets/img/findBug/findBugPhoneContentTitle.jpg" alt="findBug Phone Content Title">
          <div class="findBug_main__ranking_wrap">
            <h3 class="findBug_main__ranking__txt">神手積分排名賽</h3>
            <p class="findBug_main__ranking__txt">前20名可獲得額外獎勵，獎勵價值約台幣12,250元</p>
          </div>
        </div>
        <p>活動期間內依照玩家Bug回報所獲得之積分進行排行，前20名可獲得額外獎勵喔!</p>
        <div class="rwdDivTable four">
          <div class="rwdDivTable_thead">
            <div class="rwdDivTable_thead_th">目前名次</div>
            <div class="rwdDivTable_thead_th">暱稱</div>
            <div class="rwdDivTable_thead_th">積分</div>
            <div class="rwdDivTable_thead_th">更新時間</div>
          </div>
          <BTextLoading v-if="!rankingData.length"/>
          <div class="rwdDivTable_tbody" v-if="rankingData.length">
            <div class="rwdDivTable_tbody_td ranking" data-th="目前名次">{{rankingData[0].ranking}}</div>
            <div class="rwdDivTable_tbody_td" data-th="暱稱">
              <b class="rwdDivTable_tbody_td_b">{{rankingData[0].nickname}}</b>
            </div>
            <div class="rwdDivTable_tbody_td" data-th="積分">{{rankingData[0].integral}}</div>
            <div class="rwdDivTable_tbody_td" data-th="更新時間">{{rankingData[0].time}}</div>
          </div>
        </div>			
        <p>排行榜僅顯示回報積分前20名，若回報積分發生相同情況，將依照達成時間先後排序。</p>
        <table class="rwdTable five">
          <thead class="rwdTable_thead">
            <tr>
              <th class="rwdTable_thead_th">名次</th>
              <th class="rwdTable_thead_th">獎勵</th>
              <th class="rwdTable_thead_th">暱稱</th>
              <th class="rwdTable_thead_th">積分</th>
              <th class="rwdTable_thead_th">更新時間</th>
            </tr>
          </thead>
          <tbody class="rwdTable_tbody">
            <BTextLoading v-if="!rankingData.length"/>
            <tr 
              v-for="item in rankingData" 
              :key="item.ranking"
              class="rwdTable_tbody_tr"
            >
              <td class="rwdTable_tbody_td" data-th="名次">{{item.ranking}}</td>
              <td class="rwdTable_tbody_td" data-th="獎勵">{{item.reward}}</td>
              <td class="rwdTable_tbody_td" data-th="暱稱">
                <b class="rwdTable_tbody_td_b">{{item.nickname}}</b>
              </td>
              <td class="rwdTable_tbody_td" data-th="積分">{{item.integral}}</td>
              <td class="rwdTable_tbody_td" data-th="更新時間">{{item.time}}</td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
    <Foot/>
    <span :class="['findBug_top',{show:windowScrollTop > 350}]" @click="findBugTop"></span>
    <DArightMenu 
      :class="{active:isDArightMenuShow}"
      :style="{top:windowPos.top+'px',left:windowPos.left+'px'}"
      @DArightMenuEle="DArightMenuEleFn"
    />
  </div>
</template>

<style lang="scss">
$findBugllGray:#dae3f2;
$findBuglGray:#ededed;
$findBugGray:#d1d1d1;
$findBugllBlue:#b5d1ff;
$findBuglBlue:#acc7f2;
$findBugBlue:#6f86b6;
$findBugdBlue:#1f4cac;
$findBugRed:#ff1818;
// rwdTable、rwdDivTable
.rwdTable, .rwdDivTable{
  width:100%;
  // max-width:1000px;
  background-color:#fff;
  border:2px solid $findBugdBlue;
  margin:0 auto;
  &_thead_th, &_tbody_td{
    line-height:1.6;
    padding:8px;
  }
  &_thead{display: none;}
  &_tbody{
    &_td{
      &:nth-of-type(odd){ background-color: #ebebeb;}
      &:first-of-type{
        color: #fff;
        background-color:$findBugdBlue;
      }
      &:before{
        content: attr(data-th) " :";
        width:40%;
        display: inline-block;
      }
      &_b{
        color:#fff;
        font-weight:normal;
        line-height:1;
        display:inline;
        background-color:$findBugRed;
        border-radius:3px;
        padding:2px 4px;
      }
    }
  }
}
.rwdTable{
  table-layout:fixed;
  border-collapse:collapse;
  &_tbody_td{
    // text-align: left;
    display: block;
    border: none;
  }
  &.three .rwdTable_tbody_td:first-of-type:before{color:$findBugdBlue;}
}
.findBug{
  background-color:#a2cefa;
  &_head{
    position: relative;
    &_img{
      display: block;
      width: 100%;
      &-desktop, &-pad, &-phoneLandscape{height:0;}
    }
    &_wrap{
      display: flex;
      flex-direction:column;
      justify-content:flex-end;
      align-items:center;
      @extend %wh100pPosaT0L0;
    }
    &__link{
      color: $findBugdBlue;
      font-size:18px;
      font-weight:bold;
      display: flex;
      align-items:center;
      border-radius: 5px;
      padding: 5px;
      position: absolute;
			top: 10px;
			left: 10px;
      transition:background-color .4s, box-shadow .4s;
      &:hover{
        background-color:rgba(#fff,.5);
        box-shadow: 0 1px 3px rgba(130,173,217,.5);
      }
      &_icon{
        width:30px;
        height:28px;
        margin-right:6px;
      }
      &_txt{transform:skew(-6deg);}
    }
    &__txt{@extend %textIndentOut;}
    &__title{
      color: #FFF;
			font-size: 14px;
			line-height: calc(18 / 14);
			background-color: #ff1818;
			border-radius: 6px;
			box-shadow: 0 2px 6px rgba(130,173,217,.6);
      padding: 10px;
      margin-bottom: 5px;
    }
  }
  &_main{
    color:#333;
		line-height: 1.6;
		background-color:#FFF;
		padding:1px 15px 46px;
    margin:0 auto;
    &__title{
      color: $findBugRed;
			font-size: 21px;
			margin:12px 0;
      transform:skew(-6deg);
    }
    &__ranking{
      position: relative;
      margin-top: 16px;
      &_img{
        width: 100%;
        display: block;
        &-desktop{height: 0;}
      }
      &_wrap{
        width: 100%;
        @extend %posaT0L0;
      }
      &__txt{@extend %textIndentOut;}
    }
  }
  .DAfoot{background-color:$findBugdBlue;}
  .mBox3D_logo{
    color:$findBugdBlue;
    &:before{background-color:$findBugdBlue;}
  }
  &_top{
    width:44px;
		height:44px;
		cursor:pointer;
    background-image: url("@/assets/img/findBug/footerBg.jpg");
		border-radius:50%;
    opacity: 0;
		box-shadow: 0 2px 4px rgba(#000,.3);
		position:fixed;
		right:15px;
		bottom:15px;
    pointer-events:none;
    transform:scale3d(.5,.5,1);
    transition:opacity .4s, transform .4s cubic-bezier(0.25, -0.25, 0.25, 1.25);
		&:before, &:after{
			@extend %beforeAfterTriangleBaseSet;
			border-width:0 13px 11px 13px;
			display:block;
			margin:auto;
		}
		&:before{
			border-color:#fff transparent #fff transparent;
			margin-top:10px
		}
		&:after{border-color:#fff  #fff transparent #fff;}
    &.show{
      opacity: 1;
      pointer-events:auto;
      transform:scale3d(1,1,1);
    }
  }
}
//	===== 手機版拿橫的時候 ===== 
@media screen and (min-width: 568px) {
  .rwdTable, .rwdDivTable{
    &_thead_th, &_tbody_td{text-align:center;}
    &_tbody_td{
      &:first-of-type{color:#000;}
      &:nth-of-type(odd){background-color:transparent;}
      &:before{display:none;}
    }
  }
  .rwdTable{
    &.three{
      .rwdTable_thead_th{width:33.333333%;}
    }
    // &.four{
    //   .rwdTable_thead_th{width:25%;}
    // }
    &.five{
      .rwdTable_thead_th{
        width:25%;
        &:first-of-type{width:10%;}
        &:nth-of-type(4){width:20%;}
        &:last-of-type{width:20%;}
      }
    }
    &_thead{
      display:table-header-group;
      &_th{
        color:#fff;
        font-weight:normal;
        background-color:$findBugdBlue;
        + .rwdTable_thead_th{border-left:1px solid $findBugBlue;}
      }
    }
    &_tbody{
      &_tr{
        &:nth-child(even){background-color:$findBuglGray;}
        &:nth-child(n+2) > .rwdTable_tbody_td{border-top:1px solid $findBugGray;}
      }
      &_td{
        display:table-cell;
        + .rwdTable_tbody_td{border-left:1px solid $findBugGray;}
      }
    }
  }
  .rwdDivTable{
    display:table;
    // &.three{
    //   .rwdDivTable_thead_th{width:33.333333%;}
    // }
    &.four{
      .rwdDivTable_thead_th{width:25%;}
    }
    // &.five{
    //   .rwdDivTable_thead_th{
    //     width:25%;
    //     &:first-of-type{width:10%;}
    //     &:nth-of-type(4){width:20%;}
    //     &:last-of-type{width:20%;}
    //   }
    // }
    &_thead, &_tbody{display:table-row;}
    &_thead{
      color:#fff;
      background-color:$findBugdBlue;
      &_th + .rwdDivTable_thead_th{border-left:1px solid $findBugBlue;}
    }
    &_tbody{
      // &:nth-child(odd){background-color:$findBuglGray;}
      // &:nth-child(n+3) > .rwdDivTable_tbody_td{border-top:1px solid $findBugGray;}
      &_td + .rwdDivTable_tbody_td{border-left:1px solid $findBugGray;}
    }
    &_thead_th, &_tbody_td{display:table-cell;}
  }
  .findBug_head{
    &__link{
      top: 5px;
      left: 22%;
    }
    &__title{font-size: 16px;}
    &_img-phone{
      &Portrait{height:0;}
      &Landscape{height:auto;}
    }
  }
}
// android手機拿橫(640px)，包含平板「以上」版型區
@media screen and (min-width: 640px) {
  .findBug_main__ranking_img{
    &-desktop{height: auto;}
    &-phone{height: 0;}
  }
}
//	===== 平板「以上」版型區 ===== 
@media screen and (min-width: 768px) {
  // rwdTable
	.rwdTable_tbody{
    &_td:first-of-type{background:$findBugllBlue;}
    &_tr{
      &:nth-child(2n+2) > .rwdTable_tbody_td:first-of-type{background: $findBuglBlue;}
      &:nth-child(n+2) > .rwdTable_tbody_td:first-of-type{border-top: 1px solid $findBugllGray;}
    }
	}
  // rwdDivTable
  .rwdDivTable_tbody{
    &_td:first-of-type{background:$findBugllBlue;}
    // &:nth-child(2n+1) > .rwdDivTable_tbody_td:first-of-type{background: $findBuglBlue;}
    // &:nth-child(n+3) > .rwdDivTable_tbody_td:first-of-type{border-top: 1px solid $findBugllGray;}
  }
  .findBug_head{
    &__link{
      top: 2%;
      left: 24%;
    }
    &_img{
      &-pad{height: auto;}
      &-phoneLandscape{height: 0;}
    }
  }
}
@media screen and (min-width: 1025px) {
  .findBug{
    &_head{
      overflow: hidden;
      &__link{
        font-size: 25px;
        top: 10px;
        left: 155px;
        &_icon{
          width: 42px;
          height: 39px;
          margin-right: 8px;
        }
      }
      &_img{
        &-pad{height: 0;}
        &-desktop{
          width:auto;
          max-width:1920px;
          height: 100%;
          position:absolute;
          top:0;
          left:50%;
          transform:translate3d(-50%,0,0);
        }
      }
      &_wrap{
        height: 545px;
        position: relative;
      }
    }
    &_main{
      max-width: 1200px;
      &_wrap{
        max-width: 1000px;
        padding: 0 15px;
        margin:0 auto;
      }
    }
    .DAfoot{
      max-width: 1200px;
      margin:0 auto;
    }
  }
}
@media screen and (min-width: 1440px) {
  .findBug_head__link{
    background-color:rgba(#fff,.5);
    position:fixed;
    z-index:1;
    &:hover{background-color:rgba(#fff,.8);}
  }
}
</style>