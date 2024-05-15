<script setup>
import { inject } from "vue";
import Student from "./Student.vue";
const sName=inject('sName')
const sFather=inject('sFather')
const sAge=inject('sAge')
const sClass=inject('sClass')
const sSection=inject('sSection')
</script>

<template>
  <h1>Name: {{ sName }}</h1>
  <h1>Father: {{ sFather }}</h1>
  <h1>Age:{{ sAge }}</h1>
  <h1>Class:{{ sClass }}</h1>
  <h1>Section:{{ sSection }}</h1>
</template>

<style scoped></style>
