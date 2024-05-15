<script setup>
    import Student from './Student.vue';
    defineProps(["sName","sFather","sAge","sClass","sSection"])
</script>

<template>
         <h1>Name: {{sName}}</h1> 
        <h1>Father: {{sFather}}</h1> 
        <h1>Age:{{sAge}}</h1>
        <h1>Class:{{sClass}}</h1>
        <h1>Section:{{sSection}}</h1>
</template>

<style scoped></style>
