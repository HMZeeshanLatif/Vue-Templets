<script>
import ResponsiveHeader from "./components/Responsiveheader/ResponsiveHeader.vue";
import {ComponentOne,ComponentTwo,ComponentThree} from './components/Footerss/index.vue'
import  Test from './components/TestCom/test.vue'

export default {
  name: 'App',
  components: {
    ResponsiveHeader,
    Test,
    ComponentOne,
    ComponentTwo,
    ComponentThree,
  }
}
</script>

<template>
  <div>
    <ResponsiveHeader/>
    <Test/>
    <ComponentOne/>
    <ComponentTwo/>
    <ComponentThree my-prop="Hello from parent!"/> <!-- Pass prop to ComponentThree -->
  </div>
</template>

<style scoped></style>
