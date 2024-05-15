<script setup>
import { ref } from "vue";
import FallbackComponent from "./components/FallbackComponents.vue";
import HeroSection from "./components/HeroSection/index.vue";
import slotComponentVue from "./components/slotComponent.vue";
</script>

<template>

  <FallbackComponent>
    <h1>If you remove me alternate text in FallbackComponents file under slot will appear </h1>
  </FallbackComponent>
</template>

<style scoped></style>
