import { ref } from 'vue';
export function ImgLoadCallbackFunc(){
  let i = 0;
  const isImgLoadedCb = ref(false),
        imgLoadCallbackFn = (imgArray, objKey, func = () => console.error('callback function is not defined')) => {
          if(imgArray.constructor !== Array){
            console.error('imgArray is not array')
            return false;
          };
          imgArray.forEach(el => {
            if(!el[objKey]){
              console.error('imgArray[objKey] no data');
              return false;
            } 
            const img = new Image();
            img.src = el[objKey];
            img.onload = () => {
              i++;
              if(imgArray.length === i){
                isImgLoadedCb.value = true;
                func();
              }
            }
          });
        };
  return { 
    isImgLoadedCb:readonly(isImgLoadedCb),
    imgLoadCallbackFn
  }
}
// example
// imgLoadCallbackFn(imgArrObjApi,'srcKey',loadedCallbackFn);
// const loadedCallbackFn = () => {
//   圖片下載完畢要處理多事件用的 callbackFunction
// };