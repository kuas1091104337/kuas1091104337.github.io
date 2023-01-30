<script setup>
import { useGetWindowScrollVal } from '@/composables';
const { windowScrollBottom } = useGetWindowScrollVal(),
      foot = ref(null),
      footOffsetTop = ref(0),
      BoxSide = reactive(['front','back','up','down','left','right']);
onUpdated(() => footOffsetTop.value = foot.value.offsetTop);
</script>

<template>
  <footer ref="foot" :class="['DAfoot',{active:footOffsetTop < windowScrollBottom}]">
    <slot>
      <router-link to="/" class="Box3D mBox3D" title="Dot A Home">
        <span class="Box3D_space mBox3D_space">
          <span v-for="item in BoxSide" :key="item" :class="`Box3D__side mBox3D__side mBox3D__${item}`"></span>
        </span>
        <span class="Box3D_logo mBox3D_logo">A</span>
      </router-link>
    </slot>
    <a class="DAfoot_link" title="與陳宥宏聯絡" href="mailto:kuas1091104337@gmail.com?subject=Hi,Amos. 你好，我是…">Email：kuas1091104337@gmail.com</a>
    <p class="DAfoot_txt">© 2023 CHEN YU HONG</p>
  </footer>
</template>

<style lang="scss">
  .DAfoot{
    color:#fff;
    font-weight:300;
    display:flex;
    flex-direction:column;
    align-items:center;
    .dotABoxSpace{margin:50px auto;}
    &_link, &_txt{margin-bottom: 20px;}
    &_link{
      color:#fff;
      font-size:14px;
      padding: 3px 6px;
      border-radius: 3px;
      transition:color .4s, background-color .4s;
      &:hover{background-color: rgba(#fff,.25);}
    }
    &_txt{
      font-size:12px;
      margin-top: 0;
    }
  }
  .mBox3D{
    &_space{
      .active &{animation:MsizeBox3dRotate 8s linear infinite;}
    }
    &__side{
			background-color:#fff;
			box-shadow:0 0 0 1px #fff;
    }
    &_logo{
      font-size:$MiddleBox3Dsize*0.675;
      line-height:$MiddleBox3Dsize*0.97;
      width:$MiddleBox3Dsize*0.8;
      height:$MiddleBox3Dsize*0.8;
		  &:before{
        width:$MiddleBox3Dsize*0.15;
        height:$MiddleBox3Dsize*0.15;
      }
    }
	}
</style>