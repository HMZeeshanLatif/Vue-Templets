<script setup>
import { ref } from "vue";
import School from "./components/School.vue";
const userInfo = ref({
  name: "Farhan",
  father: "Rehan",
  age: "24",
});
</script>

<template>
  <School
    :student_name="'Farhan'"
    :student_father="'Rehan'"
    :student_age="userInfo.age"
  />
</template>

<style scoped></style>
