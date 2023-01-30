<script setup>
import device from "current-device";
const isMobile = ref(''),
      isDesktop = ref(''),
      isTablet = ref('');
onMounted(() => {
  isMobile.value = device.mobile();
  isDesktop.value = device.desktop();
  isTablet.value = device.tablet();
  console.log(device);
});
</script>

<template>
  <p>手機 mobile : {{isMobile}}</p>
  <p>桌機 desktop : {{isDesktop}}</p>
  <p>平板 tablet : {{isTablet}}</p>
</template>

<style lang="scss">

</style>