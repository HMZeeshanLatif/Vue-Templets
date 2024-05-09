<script setup>
import {reactive} from "vue";
 let count=reactive({
  a:50,
  b:20,
  c:0
 })

let fun=()=>{
  count.c= count.a+count.b;
  
}


</script>
<template>
   <h1>{{count.a + count.c}}</h1>
   <button  @click="fun()">click</button>
</template>

<style scoped></style>
