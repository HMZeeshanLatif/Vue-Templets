<script setup>
import { ref, watch } from "vue";
const message = ref("This is message :");
const inputText = ref("This is message :");
watch(inputText,(newValue,oldValue)=>{
    message.value=`i am Typing ${newValue}`
})
</script>
<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="inputText" />
  </div>
</template>
<style scoped></style>
 