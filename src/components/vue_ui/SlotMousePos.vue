<script setup>
const className = ref(''),
      slotBox = ref(null),
      getMoveDirection = (e) => {
        const obj = {},
              T = Math.abs(0 - e.offsetY),
              B = Math.abs(e.target.offsetHeight - e.offsetY),
              L = Math.abs(0 - e.offsetX),
              R = Math.abs(e.target.offsetWidth - e.offsetX);
        obj[T] = 'top', obj[B] = 'bottom', obj[L] = 'left', obj[R] = 'right';
        className.value = e.type + '_' + obj[Math.min(T,B,L,R)];
        // console.log(e.type, className.value);
      };
  onMounted(() => {
    slotBox.value.addEventListener('mouseenter', getMoveDirection);
    slotBox.value.addEventListener('mouseleave', getMoveDirection);
  });
  // onUnmounted(() => {
  //   slotBox.value.removeEventListener('mouseenter', getMoveDirection);
  //   slotBox.value.removeEventListener('mouseleave', getMoveDirection);
  // });
</script>

<template>
  <figure ref="slotBox">
    <slot :className="className"/>
  </figure>
</template>

<style lang="scss">
// .slotBox{ }
</style>