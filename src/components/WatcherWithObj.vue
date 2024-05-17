
<script setup>
import {reactive, watch} from 'vue'
 const state= reactive({userName:"Zeeshan"})
 watch(()=>state.userName,(oldValue,newValue)=>{ 
    console.log(oldValue)
    console.log(newValue)
 })
</script>

<template>
     <h1>{{state.userName}}</h1>
     <button  @click="state.userName='Arman'">Change</button>

</template>

<style scoped></style>

