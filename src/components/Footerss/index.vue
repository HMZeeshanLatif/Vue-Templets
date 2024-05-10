<template></template>

<script>
import { defineComponent } from "vue";
const ComponentOne = defineComponent({
  template: `
  <div>This is Component One</div>
  <div>This is Component One</div>
  <div>This is Component One</div>
  <div>This is Component One</div>
  `,
});

const ComponentTwo = defineComponent({
  template: `<div>This is Component Two</div>`,

});
export { ComponentOne, ComponentTwo };
</script>

<style>
#com {
  color: red;
}
</style>
