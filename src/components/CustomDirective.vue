<script setup>
 const vFormateDiv={
    mounted:(el,binding)=>{
        el.style.fontSize=`${binding.value}px`
    }
 }
</script>
<template>
    <div v-Formate-Div="150">I am a component</div>
</template>
<style scoped>

</style>