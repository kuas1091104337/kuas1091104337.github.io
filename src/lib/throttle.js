// 函數節流：需要頻繁觸發的函數，出於優化性能，只讓函數觸發的第1次(和delayTime後)生效，後面不生效
// throttle(functionName,delayTime)
// document.body.addEventListener('scroll',throttle(windowScrollFn,200)); //每0.2秒生效
export const throttle = (fn,delay) => {
  let lastTime = 0;
  return () => {
    const nowTime = Date.now();
    if(nowTime - lastTime > delay){
      // fn().call(this); // 修正this指向問題
      fn();
      lastTime = nowTime;
    }
  }
}
// export default 私有變數輸出;