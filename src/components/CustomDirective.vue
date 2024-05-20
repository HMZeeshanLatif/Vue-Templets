<script setup>
 const vFormateDiv={
    mounted:(el,binding)=>{
        console.log(el)
        console.log(binding)
        el.style.color='green',
        el.style.fontSize="100px"
    }
 }
</script>
<template>
    <div v-Formate-Div="5">I am a component</div>
</template>
<style scoped>

</style>