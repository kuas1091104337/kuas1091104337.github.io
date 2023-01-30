<script setup>
const route = useRoute();
console.log(route);
console.log(route.params);
console.log(route.params.all);
</script>

<template>
<h1>404 Page</h1>
<p>Not {{route.params.all.join('/')}} page.</p>
</template>

<style lang="scss">

</style>