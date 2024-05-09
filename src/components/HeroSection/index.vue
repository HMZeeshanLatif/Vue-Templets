<script setup>
    const numbers=[1,2,3,4,5,6]

</script>
<template>
  <h1 v-for="(item,index) in numbers" :key="index">
    {{item}}
    {{index}}
  </h1>
</template>

<style scoped></style>
