<script setup>
const arry=defineProps({
  ary:Array,
  obj:Object
})

</script>

<template>

<h1 v-for="(items,index) in arry.ary" :key="index">{{items}}</h1>
<h2>{{arry.obj["name"]}}</h2>


</template>

<style scoped>

</style>
