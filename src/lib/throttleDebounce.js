// 節流防抖函數：需要頻繁觸發的函數，出於優化性能在規定時間內，讓第1次(和每0.2s生效)和最後1次(0.4秒後)生效，中間不生效
// throttleDebounce(functionName)
// document.body.addEventListener('scroll',throttleDebounce(windowScrollFn));
export const throttleDebounce = (fn) => {
  let lastTime = 0, timer = null;
  return () => {
    const nowTime = Date.now();
    if(nowTime - lastTime > 200){
      fn();
      // fn().call(this); // 修正this指向問題
      lastTime = nowTime;
    }
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn();
      // fn().call(this); // 修正this指向問題
    },400)
  }
}
// export default 私有變數輸出;