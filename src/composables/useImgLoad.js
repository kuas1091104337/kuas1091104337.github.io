import { ref } from 'vue';
export function ImgLoad(){
  let i = 0;
  const isImgLoaded = ref(false),
        imgLoadFn = (imgArray,objKey) => {
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
              if(imgArray.length === i) isImgLoaded.value = true;
            }
          });
        };
  return { 
    isImgLoaded:readonly(isImgLoaded),
    imgLoadFn
  }
}
// example
// imgLoadFn(data.img,'srcKey');
// <loading v-if="!isImgLoaded"/>