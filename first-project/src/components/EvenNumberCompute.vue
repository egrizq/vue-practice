<script setup>
import { ref, computed } from "vue";

const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const checkEvenNumber = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0);
});
</script>

<template>
  <div class="flex flex-col border-black border p-2 space-y-2 rounded-md">
    <p class="font-semibold text-xl">computed:</p>

    <span>even number: {{ checkEvenNumber }}</span>
  </div>
</template>
