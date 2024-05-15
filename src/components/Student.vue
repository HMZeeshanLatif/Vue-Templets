<script setup>
const sName=inject('sName')
const sFather=inject('sFather')
const sAge=inject('sAge')
</script>

<template>
        <h1>Name: {{sName}}</h1> 
        <h1>Father: {{sFather}}</h1> 
        <h1>Age:{{sAge}}</h1>
</template>

<style scoped></style>
