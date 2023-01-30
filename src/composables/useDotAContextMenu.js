import { onMounted, onUnmounted, reactive, readonly, ref } from "vue"
export function DotAContextMenu(DArightMenu){
  const isDArightMenuShow = ref(false),
        windowPos = reactive({ top:0, left:0 }),
        windowVal = reactive({ width:0, height:0 }),
        DArightMenuHide = () => isDArightMenuShow.value = false,
        DArightMenuShow = () => isDArightMenuShow.value = true,
        DAcontextMenuFn = (e) => {
          windowPos.top = e.clientY;
          if(windowPos.top + DArightMenu.H > windowVal.height){ windowPos.top -= DArightMenu.H; }
          windowPos.left = e.clientX;
          if(windowPos.left + DArightMenu.W > windowVal.width){ windowPos.left -= DArightMenu.W; }
        },
        DAwindowResizeFn = () => {
          windowVal.width = window.innerWidth;
          windowVal.height = window.innerHeight;
        };
  onMounted(() => {
    DAwindowResizeFn();
    window.addEventListener('contextmenu',DAcontextMenuFn);
    window.addEventListener('resize',DAwindowResizeFn);
  });
  onUnmounted(() => {
    window.removeEventListener('contextmenu',DAcontextMenuFn);
    window.removeEventListener('resize',DAwindowResizeFn);
  });
  return { 
    isDArightMenuShow:readonly(isDArightMenuShow),
    windowPos:readonly(windowPos),
    DArightMenuHide,
    DArightMenuShow
  }
}
// example
// import { useDotAContextMenu } from '@/composables';
// const DArightMenuVal = reactive({W:0,H:0}),
//       { isDArightMenuShow, windowPos, DArightMenuHide, DArightMenuShow } = useDotAContextMenu(DArightMenuVal),
// <div class="wrap" @click="DArightMenuHide" @contextmenu.prevent="DArightMenuShow">
//   <DArightMenu 
//     :class="{active:isDArightMenuShow}"
//     :style="{top:windowPos.top+'px',left:windowPos.left+'px'}"
//     @DArightMenuEle="DArightMenuEleFn"
//   />
// </div>