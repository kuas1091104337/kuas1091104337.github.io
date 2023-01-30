import { ref } from "vue";
export function ImgArraysLoad(){
  const imgArrsLoad = () => {
          let i = 0;
          const isLoad = ref(true),
                imgLoad = (imgArr,objKey) => {
                  if(imgArr.constructor !== Array){
                    console.error('imgArray is not array')
                    return false;
                  };
                  imgArr.forEach(el => {
                    if(!el[objKey]){
                      console.error('imgArray[objKey] no data');
                      return false;
                    }
                    const img = new Image();
                    img.src = el[objKey];
                    img.onload = () => {
                      i++;
                      if(imgArr.length === i) isLoad.value = false;
                    }
                  });
                };
          return {
            isLoad: () => isLoad.value,
            imgLoad: (imgArr,objKey) => imgLoad(imgArr,objKey)
          }
        };
  return { imgArrsLoad }
}
// example
// const imgArray1Load = imgArrsLoad(),
//       imgArray2Load = imgArrsLoad();

// imgArray1Load.imgLoad(data.imgArray1,'src');
// v-if="imgArray1Load.isLoad()" // true loaded to false

// imgArray2Load.imgLoad(data.imgArray2,'src');
// v-if="!imgArray2Load.isLoad()" // false loaded to true