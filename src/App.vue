<script setup>
import { ref } from "vue";

const formDatas = ref({ userName: "", email: "", password: "" });
</script>

<template>
  <form @submit.prevent="alert('Form submitted')">
    <input
      type="text"
      name=""
      id=""
      placeholder="Enter any text Here"
      v-model="formDatas.userName"
    />
    <input
      type="email"
      name=""
      id=""
      placeholder="Enter any text Here"
      v-model="formDatas.email"
    />
    <input
      type="password"
      name=""
      id=""
      placeholder="Enter any text Here"
      v-model="formDatas.password"
    />
    <button>Submit</button>
  </form>
  <h1>{{ formDatas.userName }}</h1>
  <h1>{{ formDatas.email }}</h1>
  <h1>{{ formDatas.password }}</h1>
</template>

<style scoped></style>
