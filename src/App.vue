<script setup>
const isPass=false;
const isNotPass=true; 
const isFailed=false; 


</script>

<template>
  <p v-if="isPass">Get Degree</p>
  <p v-else-if="isNotPass">Try again</p>
  <p v-else>You Are fail</p>
  
</template>

<style scoped></style>
