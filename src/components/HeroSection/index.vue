<script setup>
const arry=defineProps({
  ary:Array,
  obj:Object
})

</script>

<template>

<h1 v-for="(items,index) in arry.ary" :key="index">{{items}}</h1>
<h2 v-for="(items,index) in arry.obj" :key="index">{{items}}</h2>


</template>

<style scoped>

</style>
