<script setup>
import { ref, onBeforeMount,onMounted, onUpdated,onUnmounted ,onBeforeUnmount,onBeforeUpdate  } from "vue";
onBeforeMount(() => {
  console.log("On before mounted");
});
onMounted(()=>{
console.log("At mounted")  
})
onBeforeUpdate(()=>{
    console.log("Some thing is about to update")
})
onUpdated(()=>{
    console.log("Some thing is update")
})
onBeforeUnmount(()=>{
    console.log("somthing is about to d delete")
})
onUnmounted (()=>{
    console.log("somthing is delete")
})
const message = ref("This is Message");

const fun=()=>{
    message.value="Message is update"
}


</script>

<template>
    <h1>{{message}}</h1>
    <button @click="fun()">Update</button>
    

<b></b>
</template>

<style scoped></style>
