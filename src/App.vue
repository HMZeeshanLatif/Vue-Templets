<script setup>
import {ref} from 'vue';
const count=ref(0)
const incr=()=>{
  count.value++;
}
const dec=()=>{
  count.value--;
}

</script>

<template>
   <h1>{{count}}</h1>
   <button @click="incr()">Incriment</button>
   <button @click="dec()">Incriment</button>
</template>

<style scoped></style>
