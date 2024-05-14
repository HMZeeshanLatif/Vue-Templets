<script setup>
 const propos= defineProps(["firstName","lastName"])

</script>

<template>

<h1>{{ propos.firstName }}</h1>
<h1>{{propos.lastName}}</h1>

</template>

<style scoped>

</style>
