<script setup>
 const propos= defineProps({
  firstName:String,
  lastName:Number
 })

</script>

<template>

<h1>{{ propos.firstName }}</h1>
<h1>{{propos.lastName}}</h1>

</template>

<style scoped>

</style>
