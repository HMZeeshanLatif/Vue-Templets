<script setup>
import { ref, onBeforeMount,onMounted, onUpdated  } from "vue";
onBeforeMount(() => {
  console.log("On before mounted");
});
onMounted(()=>{
console.log("At mounted")  
})
onUpdated(()=>{
    console.log("Some thing is update")
})
const message = ref("This is Message");
const fun=()=>{
    message.value="Message is changed"
}
</script>

<template>
    <h1>{{message}}</h1>
</template>

<style scoped></style>
