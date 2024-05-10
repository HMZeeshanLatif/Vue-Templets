<script setup>
import { ref } from 'vue';

const header = ref("Shopping List");
let items = ref([
  { id: 1, label: "10 part Hats" },
  { id: 2, label: "2 board games" },
  { id: 3, label: "20 cups" }
]);
 let newItems=ref("");


</script>

<template>
  <div>
    <h1>{{ header }}</h1>
    <p v-for="({ id, label }) in items" :key="id">
      {{ label }}
    </p>
  </div>
<input type="text" id="inp" v-model.number="newItems">
<label for="inp">{{newItems}}</label>

</template>

<style scoped>
/* Scoped styles go here */
</style>
