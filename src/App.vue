<script setup>
import { ref, computed } from "vue";

const number = ref(5);
const ComputedNumber = computed(() => {
  return number.value *  number.value
});
</script>

<template>
  <h1>{{ number }}</h1>
  <h1>{{ComputedNumber}}</h1>
</template>

<style scoped></style>
