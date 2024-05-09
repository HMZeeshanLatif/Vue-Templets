<script setup>
const numbers = [1, 2, 3, 4, 5, 6];
const multiple = {
  id: "testId",
  class: "testClass",
  style: "background-color:aqua",
};
</script>
<template>
  <h1 v-bind="multiple" v-for="(item, index) in numbers" :key="index">
    {{ item }}
    {{ index }}
  </h1>
</template>

<style scoped></style>
