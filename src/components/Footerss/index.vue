<template>
  <div>
    
  </div>
</template>

<script>
import { defineComponent } from "vue";
const ComponentOne = defineComponent({
  template: `
  <div>This is Component One</div>
  `,
});

const ComponentTwo = defineComponent({
  template: `<div>This is Component Two</div>`,
});
const ComponentThree = defineComponent({
  template: `<div>I am Component Three with prop: {{ myProp }}</div>`,
  props: {
    myProp: {
      type: String, // Define the type of the prop
    },
  },
});
export { ComponentOne, ComponentTwo, ComponentThree };
</script>

<style>
#com {
  color: red;
}
</style>
