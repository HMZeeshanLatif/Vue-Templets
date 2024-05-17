import { ref } from 'vue';

export function useCounter(initialValue = 2) {
  let count = ref(initialValue);

  const increment = () => {
    count.value++;
    console.log(count.value);
  };

  const decrement = () => {
    count.value--;
  };

  return { count, increment, decrement };
}
