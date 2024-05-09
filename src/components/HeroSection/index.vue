<script setup>
import {ref } from "vue";
const count=ref("Hello")
const numbers = [-3, -2, -1, 2, 3, 4, 5, 6];
const multiple = {
  id: "testId",
  class: "testClass",
  style: "background-color:aqua",
};
const increment = () => {
  count.value="World";
};
let test = "Properties";
const reversedTest = test.split("").reverse().join("");
let funTest = (first, second) => {
  return first + "" + second;
};
</script>
<template>
   <p>{{ count }}</p>
    <button @click="increment">increment</button>
  <h1 :id="funTest('hello', 2)">
    {{ test.split("").reverse().join() }}
    {{ test == reversedTest ? "ok" : "none" }}
  </h1>
  <h1 v-bind="multiple" v-for="(item, index) in numbers" :key="index">
    {{ item >= +3 ? item : "" }}
    {{ index }}
  </h1>
</template>

<style scoped></style>
