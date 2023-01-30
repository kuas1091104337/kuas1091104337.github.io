// 亂數排序 Fisher-Yates 演算法
// arrayRandomShuffle([1,2,3]) => // [2,1,3]
export const arrayRandomShuffle = (arr) => {
  // 原陣列排序不會被打亂 (但不是深層複制)
  const newArr = arr.slice();
  for(let i = newArr.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [newArr[i],newArr[j]] = [newArr[j],newArr[i]];
  }
  return newArr;
}
// export default 私有變數輸出;
