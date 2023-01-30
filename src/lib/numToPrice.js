// numPrice(1234567890) => // '1,234,567,890'
export const numPrice = (num) => {
  const newNum = [];
  String(num).split('').reverse().forEach((el,i) => {
      if(i%3 === 0) newNum.push(',');
      newNum.push(el);
  });
  newNum.shift();
  return newNum.reverse().join('');
}
// export default 私有變數輸出;