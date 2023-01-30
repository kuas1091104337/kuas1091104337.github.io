<script setup>
</script>

<template>
<p class="DAtxtLoad DAtxtLoad-black">
  Loading<span class="DAtxtLoad_ing-black">.</span>
</p>
</template>

<style lang="scss">
.DAtxtLoad{
  &-black{color:$dGrayColor;}
  &_ing-black{animation:bTxtLoading 1.2s step-start infinite;}
}
</style>