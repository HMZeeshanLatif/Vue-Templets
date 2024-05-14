<script setup>
import { ref } from "vue";

  

</script>

<template>
 
 <div class="container">
  <h1 v-for="number in 100" :key="number">{{number}}</h1>
 </div>
</template>

<style scoped></style>
