<script setup>
import {ref} from 'vue'
import LifeCycleHook from "./components/LifeCycleHook.vue";
const hideElem = ref(false);
</script>

<template>
  <LifeCycleHook v-if="hideElem === false" />
  <button @click="hideElem= !hideElem">Show/Hide</button>
</template>

<style scoped></style>
