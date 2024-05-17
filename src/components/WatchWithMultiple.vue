<script setup>
import {watch,ref} from 'vue'
const counter=ref(0);
const userName=ref("Zeehan");
watch([counter,userName],(oldValue,newValue)=>{
    console.log(oldValue)
    console.log(newValue)
})

</script>
<template>
    <h1>{{counter}}</h1>
    <h1>{{userName}}</h1>
    <button @click="userName='Arman'">Change nA</button>
    <button @click="counter++">Change</button>
</template>
<style scoped></style>