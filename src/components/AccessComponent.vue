<script setup>
const myFun=(el)=>{
   console.log(el.textContent)
   el.textContent="Heloo"
}
</script>
<template>
    <h1 :ref="myFun">A quick brown fox jups over the lazy dog </h1>
</template>
 <style scoped>
 </style>