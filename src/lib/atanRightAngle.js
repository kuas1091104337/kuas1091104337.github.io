// atanRightAngle(e.pageX, e.pageY, gg9.mainOffsetW, gg9.mainOffsetT, gg9.mainOffsetB) => // 45
// gg9GunAngle.value = `rotate3d(0,0,1,${angle}deg)`;
export const atanRightAngle = (EpageX, EpageY, divOffsetWidth, divOffsetTop, divOffsetBottom) => {
  // W/H = 1, Math.round(Math.atan(1)*180/Math.PI) // 45
  // W/H = Math.sqrt(3)/-1, Math.round(Math.atan(Math.sqrt(3)/-1)*180/Math.PI) // -60
  // W/H = 100/0.1, Math.round(Math.atan(1000)*180/Math.PI) // 90
}
// export default 私有變數輸出;