<script setup>
const props = defineProps({
        name: {
          type: String,
          required: true,
        },
        className: {
          type: String,
        },
        color: {
          type: String,
          default: "#333",
        },
      }),
      svgName = computed(() => 
        props.name.includes('/') ? `#${props.name}` : `#/${props.name}`
      ),
      svgClass = computed(() =>
        props.className ? "svg-icon " + props.className : "svg-icon"
      );
</script>

<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgName" :fill="props.color" />
  </svg>
 </template>
  
<style lang="scss">
.svg{
  &-icon{
    vertical-align: top;
    width: 100%;
    height: 100%;
    // max-width: 36px;
    // max-height: 36px;
    fill: currentColor;
    overflow: hidden;
  }
  &-3d-shadow{
    filter:drop-shadow(1px 1px 0 rgba(#f0f,.8)) 
           drop-shadow(-1px -1px 0 rgba(#0ff,.8));
  }
  &-DAskills-shadow{
    filter:drop-shadow(-1px -1px 0 $lPcolor)
           drop-shadow(2px 2px 0 $dPcolor);
  }
}
</style>
  
  