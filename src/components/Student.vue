<script setup>
 defineProps(["sName","sFather","sAge"])
</script>

<template>
        <h1>Name: {{sName}}</h1> 
        <h1>Father: {{sFather}}</h1> 
        <h1>Age:{{sAge}}</h1>
</template>

<style scoped></style>
