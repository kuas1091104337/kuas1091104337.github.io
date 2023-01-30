<script setup>
import {useDotAContextMenu, useGetWindowScrollVal} from '@/composables';
import {debounce} from '@/lib/debounce.js'
import {atanRightAngle} from '@/lib/atanRightAngle.js'
const DArightMenuVal = reactive({W:0,H:0}),
      {isDArightMenuShow, windowPos, DArightMenuHide, DArightMenuShow} = useDotAContextMenu(DArightMenuVal),
      {windowScrollMiddle} = useGetWindowScrollVal(),
      gg9Main = ref(null), gg9Game = ref(null), gg9GunAngle = ref('rotate3d(0,0,1,0deg)'),
      gg9 = reactive({
        controlArea:[...Array(25)], mainIsOut:true, mainOffsetW:0, mainOffsetT:0, mainOffsetB:0, gameOffsetT:0, gameOffsetB:0
      }),
      DArightMenuEleFn = (w,h) => {
        DArightMenuVal.W = w.value;
        DArightMenuVal.H = h.value;
      },
      getGg9DomOffset = () => {
        gg9.mainOffsetW = gg9Main.value.offsetWidth;
        gg9.mainOffsetT = gg9Main.value.offsetTop;
        gg9.mainOffsetB = gg9Main.value.offsetTop + gg9Main.value.offsetHeight;
        gg9.gameOffsetT = gg9Game.value.offsetTop;
        gg9.gameOffsetB = gg9Game.value.offsetTop + gg9Game.value.offsetHeight;
      },
      waterGunIn = () => gg9.mainIsOut = false,
      waterGunOut = () => {
        gg9GunAngle.value = `rotate3d(0,0,1,0deg)`;
        gg9.mainIsOut = true;
      },
      waterGunAngle = (e) => {
        const angle = atanRightAngle(e.pageX, e.pageY, gg9.mainOffsetW, gg9.mainOffsetT, gg9.mainOffsetB);
        gg9GunAngle.value = `rotate3d(0,0,1,${angle}deg)`;
      };
onMounted(() => {
  getGg9DomOffset();
  window.addEventListener('resize',debounce(getGg9DomOffset,400));
});
onUnmounted(() => {
  window.removeEventListener('resize',debounce(getGg9DomOffset,400));
});
</script>

<template>
<div class="gg9" @click="DArightMenuHide" @contextmenu.prevent="DArightMenuShow">
  <SlotHead>Dot A 捕魚</SlotHead>
  <main
    :class="['gg9_main',{stop:gg9.mainOffsetB <= windowScrollMiddle}]"
    ref="gg9Main"
  >
    <h2 class="gg9_main_title">GG9 Underworld</h2>
    <h3 class="gg9_main_txt">Fish GG9 Underworld</h3>
    <p class="gg9_main_btn"><a href="javascript:;" class="gg9_main_btn_link">play</a></p>
    <span
      v-for="(item,idx) in gg9.controlArea" :key="idx"
      :class="['gg9_main_controlArea gg9_main_controlArea-'+(idx+1)]"
    />
    <img class="gg9_main_logo" src="@/assets/img/gg9/fishGameLogo.png" alt="gg9 logo">
    <div class="gg9_main_gun">
      <img class="gg9_main_gun_base" src="../assets/img/gg9/waterGunBase.png" alt="water gun base">
      <img :class="['gg9_main_gun_barrel',{'gg9_main_gun_barrel-out':gg9.mainIsOut}]" src="../assets/img/gg9/waterGun.png" alt="water gun">
    </div>
    <div class="gg9_main_box" @mousemove="waterGunAngle" @mouseenter="waterGunIn" @mouseleave="waterGunOut">
      <span class="gg9_main__wrap gg9_main__wrap-1">
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-2"/>
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-1"/>
      </span>
      <span class="gg9_main__wrap gg9_main__wrap-2">
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-3"/>
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-4"/>
      </span>
      <span class="gg9_main__wrap gg9_main__wrap-3">
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-6"/>
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-5"/>
      </span>
      <span class="gg9_main__wrap gg9_main__wrap-4">
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-7"/>
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-8"/>
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-9"/>
      </span>
      <span class="gg9_main__wrap gg9_main__wrap-5">
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-11"/>
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-10"/>
      </span>
      <span class="gg9_main__fish gg9_main__fish-12"/>
      <span class="gg9_main__fish gg9_main__fish-13"/>
      <span class="gg9_main__fish gg9_main__fish-14"/>
      <span class="gg9_main__fish gg9_main__fish-15"/>
      <span class="gg9_main__fish gg9_main__fish-16"/>
    </div>
  </main>
  <div 
    :class="['gg9_game',{active:gg9.gameOffsetT < windowScrollMiddle && gg9.gameOffsetB >= windowScrollMiddle}]"
    ref="gg9Game"
  >
    <div class="gg9_game_wrap">
      <span class="gg9_game__fish gg9_game__fish-1"/>
      <span class="gg9_game__fish gg9_game__fish-2"/>
      <div class="gg9_game__box">
        <article class="gg9_game__box_wrap">
          <h3 class="gg9_game__box__title">Fish Game Introduction</h3>
          <p class="gg9_game__box__txt">The fish game based on Unity, so it will have high quality and lively performance, fish game supports 4 players play the game at the same time, player can use "Cannon" to hit the fish then earn high reward, player will have a great entertainment and visual enjoyments at the same time.</p>
          <div class="gg9_game__box__fish">
            <img class="gg9_game__box__fish_img" src="../assets/img/gg9/fishGameFish2.png">
          </div>
        </article>
      </div>
    </div>
  </div>
  <SlotFooter>Copyright © Dot A & GG9 Reserved</SlotFooter>
  <DArightMenu 
    :class="{active:isDArightMenuShow}"
    :style="{top:windowPos.top+'px',left:windowPos.left+'px'}"
    @DArightMenuEle="DArightMenuEleFn"
  />
</div>
</template>

<style lang="scss" src="@/assets/scss/brand.scss"></style>
<style lang="scss">
@import"@/assets/scss/gg9Variables.scss";
</style>