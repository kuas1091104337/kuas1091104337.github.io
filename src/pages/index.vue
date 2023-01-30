<script setup>
import {useGetWindowScrollVal} from '@/composables';
import {debounce} from '@/lib/debounce.js';
const {windowScrollMiddle} = useGetWindowScrollVal(),
      head = ref(null), about = ref(null), skills = ref(null), thoughts = ref(null), works = ref(null),
      BoxSide = reactive(['front','back','up','down','left','right']),
      DAeleOffset = reactive({
        headH:0, aboutT:0,  aboutB:0, skillsT:0,  skillsB:0, thoughtsT:0, thoughtsB:0, worksT:0, worksB:0
      }),
      getDAeleOffset = () => {
        DAeleOffset.headH = head.value.offsetHeight;
				DAeleOffset.aboutT = about.value.offsetTop;
				DAeleOffset.aboutB = about.value.offsetTop + about.value.offsetHeight;
        DAeleOffset.skillsT = skills.value.offsetTop;
				DAeleOffset.skillsB = skills.value.offsetTop + skills.value.offsetHeight;
        DAeleOffset.thoughtsT = thoughts.value.offsetTop;
				DAeleOffset.thoughtsB = thoughts.value.offsetTop + thoughts.value.offsetHeight;
        DAeleOffset.worksT = works.value.offsetTop;
				DAeleOffset.worksB = works.value.offsetTop + works.value.offsetHeight;
			},
      navCurrent = computed(() => {
        if(DAeleOffset.aboutT < windowScrollMiddle.value && DAeleOffset.aboutB >= windowScrollMiddle.value) return 1;
        if(DAeleOffset.skillsT < windowScrollMiddle.value && DAeleOffset.skillsB >= windowScrollMiddle.value) return 2;
        if(DAeleOffset.thoughtsT < windowScrollMiddle.value && DAeleOffset.thoughtsB >= windowScrollMiddle.value) return 3;
        if(DAeleOffset.worksT < windowScrollMiddle.value && DAeleOffset.worksB >= windowScrollMiddle.value) return 4;
      });
onMounted(() => {
  getDAeleOffset();
  window.addEventListener('resize',debounce(getDAeleOffset,400));
});
onUnmounted(() => {
  window.removeEventListener('resize',debounce(getDAeleOffset,400));
});
</script>

<template>
  <div class="DA">
    <header ref="head" class="DAhead">
      <DAhead :navCurrentNum="navCurrent" :DAeleOffsetObj="DAeleOffset" :getDAeleOffsetFn="getDAeleOffset"/>
    </header>
    <div ref="about" :class="['DAbox DAabout',{'DAabout-active':navCurrent === 1}]">
      <DAabout/>
    </div>
    <div ref="skills" class="DAbox DAskills">
      <DAskills/>
    </div>
    <div ref="thoughts" :class="['DAbox DAthoughts',{'DAthoughts-active':navCurrent === 3}]">
      <DAthoughts/>
    </div>
    <div ref="works" class="DAbox DAworks">
      <DAworks :getDAeleOffsetFn="getDAeleOffset"/>
    </div>
    <Foot class="DAfoot-normal">
      <a class="Box3D mBox3D" href="mailto:kuas1091104337@gmail.com?subject=Hi,Amos. 你好，我是…">
        <span class="Box3D_space mBox3D_space">
          <span 
            v-for="item in BoxSide" 
            :key="item" 
            :class="`Box3D__side mBox3D__side mBox3D__${item}`"
          />
        </span> 
        <span class="Box3D_logo mBox3D_logo">A</span>
      </a>
    </Foot>
  </div>
</template>

<style lang="scss">
.DA{
  padding-top:$DAheadH;
  &box{
    border-color: #fff;
    border-style: solid;
    border-width: $DAborderW $DAborderW 0;
    &__title{
      color:#fff;
      text-align:center;
      letter-spacing:4px;
      transform:skew(-5deg);
      &:after{
        content:attr(data-word);
        text-shadow:0 1px 2px rgba(#000,.25);
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
      }
      &_text{
        text-shadow:0 0 10px rgba(#000,.2), 0 0 13px rgba(#000,.2);
        -webkit-text-stroke:7px $BGcolor;
      }
    }
  }
}
// 1.DAabout, 2.DAskills, 3.DAthoughts, 4.DAworks
.DAabout, .DAskills, .DAworks{
  transform:translate3d(0,0,0);
  .DAbox__title{	
    // text-shadow:0 1px 2px rgba(#000,.25),
    //             0 1px 0 $BGcolor,
    //             1px 0 0 $BGcolor,
    //             0 -1px 0 $BGcolor,
    //             -1px 0 0 $BGcolor,
    //             1px 1px 0 $BGcolor, 
    //             -1px 1px 0 $BGcolor,
    //             1px -1px 0 $BGcolor,
    //             -1px -1px 0 $BGcolor,
    //             0 2px 0 $BGcolor, 
    //             2px 0 0 $BGcolor, 
    //             0 -2px 0 $BGcolor, 
    //             -2px 0 0 $BGcolor, 
    //             1px 2px 0 $BGcolor, 
    //             -1px 2px 0 $BGcolor, 
    //             1px -2px 0 $BGcolor, 
    //             -1px -2px 0 $BGcolor, 
    //             2px 1px 0 $BGcolor, 
    //             -2px 1px 0 $BGcolor, 
    //             2px -1px 0 $BGcolor, 
    //             -2px -1px 0 $BGcolor,
    //             2px 2px 0 $BGcolor, 
    //             -2px 2px 0 $BGcolor, 
    //             2px -2px 0 $BGcolor, 
    //             -2px -2px 0 $BGcolor,
    //             2px 2px 8px rgba(#000,.25),
    //             -2px 2px 8px rgba(#000,.25);
  }
}
.DAskills, .DAworks{
  background-image:url("@/assets/img/index/divBg1.jpg");
  .DAbox__title{font-size:50px;}
}
.DAworks{border-bottom:5px solid #fff;}
@media screen and (min-width: 960px) {
  .DAbox_wrap{
    max-width: 1024px;
    margin: auto;
  }
}
@media screen and (min-width: 1024px) {
  .DAskills, .DAworks{
    .DAbox__title{font-size:56px;}
  }
}
</style>