<script setup>
import {ref} from 'vue'
const content = ref(true);
</script>

<template>
    <p v-show="content">Show</p>
    <button @click="content= !content">Toogle</button>
</template>

<style scoped></style>
