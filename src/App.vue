<script setup>
import { ref, provide } from "vue";
import School from "./components/School.vue";
provide("sName", "Zeeshan");
provide("sAge" , "50");
provide("sFather", "M Latif");
provide("sClass", "Kg-1");
provide("sSection","C");
</script>

<template>
  <School />
</template>

<style scoped></style>

