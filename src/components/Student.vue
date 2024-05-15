<script setup>
defineProps(["student_father", "student_name", "student_age"]);
</script>

<template>
  <h1>{{student_age}}</h1>
  <h1>{{student_name}}</h1>
  <h1>{{student_father}}</h1>
</template>

<style scoped></style>
