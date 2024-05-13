<script>
import { ref } from 'vue'

export default {
  setup() {
    const checkVIf = ref(5)
    const aray=ref(["Hello","World"])

    return {
      checkVIf,
      aray 
    }
  }
}
</script>

<template>
  <p v-if="checkVIf === 5">checkVIf</p>
  <p v-else>{{aray[0]}}</p>
</template>

<style>
/* Your component styles here */
</style>
