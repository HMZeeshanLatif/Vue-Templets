<script>
import ResponsiveHeader from "./components/Responsiveheader/ResponsiveHeader.vue";
import {ComponentOne,ComponentTwo} from './components/Footerss/index.vue'
import  Test from './components/TestCom/test.vue'

export default {
  name: 'App',
  components: {
    ResponsiveHeader,
    Test,
    ComponentOne,
    ComponentTwo,
  }
}
</script>

<template>
  <div>
   <ResponsiveHeader/>
   <Test/>
   <ComponentOne/>
   <ComponentTwo/>
   
   
   
  </div>
</template>

<style scoped></style>
