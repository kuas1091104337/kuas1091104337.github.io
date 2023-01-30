<script setup>
const video = ref(null),
      isPlay = ref(false),
      x = ref(null);
onMounted(() => {
  setTimeout(() => {
    // video.value.oncanplay = isPlay.value = true;
    isPlay.value = video.value.autoplay;
  },400);
})
onUpdated(() => {
  x.value = video.value.readyState; //4 表示有足夠的數據可以開始播放
});
</script>

<template>
<div :class="['lottoMachine_wrap',{start:isPlay}]">
  <div class="pos">{{x}}</div>
  <video ref="video" class="lottoMachine__bgVideo" src="@/assets/img/lottoMachine/video/bg-01.mp4" autoplay loop muted></video>
  <ul class="lottoMachine__underList">
    <li class="lottoMachine__underList_item">
      <div class="lottoMachine__underList__inside">
        <div class="lottoMachine__underList___mask">
          <video class="lottoMachine__underList____video" src="@/assets/img/lottoMachine/video/ball.mp4" autoplay loop></video>
        </div>
      </div>
    </li>
    <li class="lottoMachine__underList_item">
      <div class="lottoMachine__underList__inside">
        <div class="lottoMachine__underList___mask">
          <video class="lottoMachine__underList____video" src="@/assets/img/lottoMachine/video/ball.mp4" autoplay loop></video>
        </div>
      </div>
    </li>
    <li class="lottoMachine__underList_item">
      <div class="lottoMachine__underList__inside">
        <div class="lottoMachine__underList___mask">
          <video class="lottoMachine__underList____video" src="@/assets/img/lottoMachine/video/ball.mp4" autoplay loop></video>
        </div>
      </div>
    </li>
    <li class="lottoMachine__underList_item">
      <div class="lottoMachine__underList__inside">
        <div class="lottoMachine__underList___mask">
          <video class="lottoMachine__underList____video" src="@/assets/img/lottoMachine/video/ball.mp4" autoplay loop></video>
        </div>
      </div>
    </li>
    <li class="lottoMachine__underList_item">
      <div class="lottoMachine__underList__inside">
        <div class="lottoMachine__underList___mask">
          <video class="lottoMachine__underList____video" src="@/assets/img/lottoMachine/video/ball.mp4" autoplay loop></video>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<style lang="scss">
.pos{ color:rgba(#fff,.5); position:absolute; top:0; left:0; z-index:1; }
$screenWidth:960;
@keyframes underListItem {
	0% {
			opacity: 0;
			transform: scale3d(.1,.1,.1) translate3d(0,-800%,0);
			animation-timing-function: cubic-bezier(.55,.055,.675,.19)
	}
	60% {
			opacity: 1;
			transform: scale3d(.475,.475,.475) translate3d(0,48%,0);
			animation-timing-function: cubic-bezier(.175,.885,.32,1)
	}
}
.lottoMachine{
  &__bgVideo{
    width:110%;
		position:absolute;
    top: 50%;
		left:-5%;
    opacity: 0.35;
    transform:translate3d(0, -50%, 0) rotate3d(0, 0, 1, 45deg) scale3d(3, 3, 1);
    transition: opacity 2s, transform 2s;
    .start &{
      opacity: 1;
      transform:translate3d(0,-50%,0) rotate3d(0,0,1,0deg) scale3d(1,1,1);
    }
  }
  &__underList{
    @extend %ulReset;
    background-color: rgba(#000,0.4);
    @extend %disFlexJustifyAlignCenter;
    @extend %wh100pPosaT0L0;
    &_item{
      flex:0 0 12.5%;
      height: 0;
      background-image:linear-gradient(0deg, #eed7a3 0%,#be912f 50%,#8f5f1b 50%,#bc8842 100%);
      border-radius: size_pxToVw(5,$screenWidth);
      box-shadow: 0 size_pxToVw(2,$screenWidth) size_pxToVw(10,$screenWidth) 1px rgba(#000,.65),
                  0 size_pxToVw(1,$screenWidth) 0 #fff inset,
                  0 size_pxToVw(-1,$screenWidth) 0 rgba(#000,.65) inset;
      padding-bottom: 12.5%;
      position: relative;
      + .lottoMachine__underList_item{margin-left: 3.125%;}
      .start &{
        animation: underListItem 1.25s linear both;
        &:nth-child(2){animation-delay:0.1875s;}
        &:nth-child(3){animation-delay:0.375s;}
        &:nth-child(4){animation-delay:0.5625s;}
        &:nth-child(5){animation-delay:0.75s;}
      }
    }
    &__inside{
      width: calc(110/120)*100%;
      height: calc(110/120)*100%;
      background-color: #262626;
      border-radius: size_pxToVw(3,$screenWidth);
      box-shadow: 0 size_pxToVw(1,$screenWidth) 0 rgba(#fff,.65),
                  0 0 size_pxToVw(10,$screenWidth) rgba(#000,.8) inset;
      position:absolute;
      top:calc(10/120)*50%;
      left:calc(10/120)*50%;
    }
    &___mask{
      width:calc(104/110)*100%;
			height:calc(104/110)*100%;
      @extend %disFlexJustifyAlignCenter;
			border-radius: size_pxToVw(2,$screenWidth);
			overflow: hidden;
			position:absolute;
			top:calc(6/110)*50%;
			left:calc(6/110)*50%;
    }
    &____video{
      width: auto;
      height: 120%;
    }
  }
}
</style>