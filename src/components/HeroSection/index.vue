<script setup></script>
<template>
  <h1>
    <span v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="index">
      {{ item }}
    </span>
  </h1>
</template>

<style scoped></style>
