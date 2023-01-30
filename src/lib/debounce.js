// 防抖函數：需要頻繁觸發的函數，在規定時間內，只讓最後1次(0.4秒後)生效，前面不生效
// debounce(functionName,delayTime)
// $btn.onclick = debounce(addFn(),400)
// window.addEventListener('resize',debounce(windowResizeFn,400));
export const debounce = (fn,delay) => {
  let timer = null;
  return () => {
    if(timer) clearTimeout(timer); // 清除上次延時
    timer = setTimeout(() => { // 重新設置延時
      // fn().apply(this); // 修正this指向問題
      fn();
    },delay)
  }
}
// export default 私有變數輸出;
