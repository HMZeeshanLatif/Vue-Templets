<script setup>
import {ref} from 'vue'
const arr=ref(["Hello","World","In","Vue"])

</script>

<template>
   <ul>
   <li v-for="(sentence,index) in arr" :key="index">{{sentence}}</li>
   </ul>  
</template>

<style scoped></style>
