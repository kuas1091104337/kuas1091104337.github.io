<script setup>
const lottoNum = [...Array(6)];
</script>

<template>
<div class="roulette_main___box__coin">
  <!-- <span class="roulette_main___box__coin_wrap roulette_main___box__coin_1~6"/> -->
  <span
    v-for="(item,idx) in lottoNum" :key="idx"
    :class="['roulette_main___box__coin_wrap roulette_main___box__coin_'+idx]"
  />
</div>
</template>

<style lang="scss">
@keyframes rouletteBoxCoin{
	0%{
		opacity:.5;
		transform:scale3d(.6,.6,1);
	}
	25%{
		opacity:.8;
		transform:scale3d(.8,.8,1);
	}
	50%{
		opacity:1;
		transform:scale3d(1,1,1);
	}
	75%{
		opacity:.6;
    transform:scale3d(1.15,1.15,1);
	}
	100%{
		opacity:.1;
    transform:scale3d(1.3,1.3,1);
	}
}
.roulette_main___box__coin{
  width:calc($rouletteGameMobW/355)*100%;
  pointer-events:none;
  position:absolute;
  top:calc((355 - $rouletteGameMobH)/355)*50%;
  left:calc((355 - $rouletteGameMobW)/355)*50%;
  &_wrap{
    @extend %wh100pPosaT0L0;
    &:before{
      content:"";
      height: 0;
      background-size:cover;
      position: absolute;
    }
  }
}
.roulette-popupOpen .roulette_main___box__coin_wrap{
  animation-play-state:paused
}
</style>