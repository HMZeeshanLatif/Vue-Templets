<script setup>
import { ref } from "vue";

const formDatas = ref({ userName: "" });
</script>

<template>
  <input type="text" name="" id="" placeholder="Enter any text Here" v-model="formDatas.userName">
  <h1>{{formDatas.userName}}</h1>
</template>

<style scoped></style>
