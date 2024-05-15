<script setup>
import Student from "./Student.vue";
defineProps(["student_father", "student_name", "student_age"]);
</script>

<template>
  <Student
  :student_age="student_age"
    :student_name="student_father"
    :student_father="student_name"

  />
</template>

<style scoped></style>
