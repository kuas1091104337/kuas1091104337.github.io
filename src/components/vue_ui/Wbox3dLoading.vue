<script setup>
const BoxSide = reactive(['front','back','up','down','left','right']);
</script>
 
<template>
  <div class="Box3D mBox3D LoadBox3D DAwhite">
    <div class="Box3D_space mBox3D_space LoadBox3D_space">
      <div v-for="item in BoxSide" :key="item" :class="`Box3D__side LoadBox3D__side mBox3D__${item}`"></div>
    </div>
    <div class="LoadBox3D_load">
      loading<span class="LoadBox3D_load_ing">.</span>
    </div>
  </div>
</template>

<style lang="scss">
.DAwhite{
  .LoadBox3D{
    &__side{
      background-color:#fff;
      box-shadow:0 0 0 1px #fff;;
    }
    &_load{
      color:$GrayColor;
      &_ing{animation:bTxtLoading 1.2s step-start infinite;}
    }
  }
}
</style>