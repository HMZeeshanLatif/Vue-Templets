<script setup>
import { useCounter } from './SharedFolder/useCounter';

const counter = useCounter();
</script>

<template>
  <h1>Count: {{counter.count}}</h1>
  <button @click="counter.increment">Increment</button>
  <button @click="counter.decrement">Decrement</button>
</template>

<style scoped>
</style>
