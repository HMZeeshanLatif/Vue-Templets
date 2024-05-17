<script setup>
import {ref,onMounted} from 'vue'
const myRef=ref('Zeeshan')
console.log(myRef)
onMounted(()=>{
    console.log(myRef.value)
    myRef.value.focus()
    myRef.value.value='Hello'
})
</script>
<template>
    <input type="text" name="" id="" ref="myRef">
</template>
<style scope>

</style>