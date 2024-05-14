<script setup>

methods: {
  sendDataToParent() {
    // Emitting an event named 'Datatopaernt' with the data
    this.$emit("Datatopaernt", names);
  }
}

</script>

<template>
  <form
    @submit.prevent="$emit('userInfo', userName, ElementInternals, password)"
  >
    <input type="text" v-model="userName" />
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button type="submit">Submit</button>
  </form>

  <div v-bind="names">Hello I m child</div>
  <button @click="sendDataToParent">Data</button>
</template>

<style scoped></style>
