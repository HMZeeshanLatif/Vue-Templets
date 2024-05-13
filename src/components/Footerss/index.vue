<template>
 
</template>

<script>



import { defineComponent,ref } from "vue";
export default {
  setup() {
    const checkVIf = ref(6) // Define checkVIf as a ref

    return {
      checkVIf 
    }
  }
}
const ComponentOne = defineComponent({
  template: `
  <div>This is Component One</div>
  `,
});

const ComponentTwo = defineComponent({
  template: `<div>This is Component Two</div>`,
});
const ComponentThree = defineComponent({
  template: `<div>I am Component Three with prop: {{ yProp }}</div>`,
  props: {
    yProp: {
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
