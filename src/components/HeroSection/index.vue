<script setup>
import {ref} from 'vue';

let testRef=ref(
  {
    firstNamme:"Zeeshan",
    mailing:{
      recipents:["Talha"],
      Adress:"Karachi sindh Pakistan"
    },
    otherInfo:["26","Job","Early"]
  }
)
let fun=()=>{
  testRef.value.otherInfo.push("Busines")
  testRef.value.otherInfo.push("Start")
  testRef.value.recipent2="Arman"
  testRef.value.mailing.recipents.push("Zeeshan")
}

</script>
<template>
   <h1>{{testRef.mailing.recipents[10]}}</h1>
   <button @click="fun()">Click</button>
   <button v-on:click="fun()">Click</button>
</template>

<style scoped></style>
