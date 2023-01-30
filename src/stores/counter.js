import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter',() => {
  const counter = ref(0),
        doubleCount = computed(() => counter.value * 2),
        increment = computed(() => counter.value++);
  return { counter, doubleCount, increment }
});