// 字串駝峰命名的轉換
// strFTtoUp('get-elements-by-class-name') => // 'getElementsByClassName'
export const strFTtoUp = (txt) => {
  let arr = txt.split('-');
  for (var i = 1, max = arr.length; i < max; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
  }
  return arr.join('');
}
// export default 私有變數輸出;