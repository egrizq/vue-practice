<script setup>
import { reactive } from "vue";
import Body from "../reusable/Body.vue";

const author = reactive({
  name: "rizq",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});
</script>

<template>
  <Body>
    <p class="font-semibold text-xl">v-if & v-for:</p>

    <div v-if="author.name === 'rizq'">
      Books by Rizq:
      <ul class="px-5">
        <li
          v-for="(book, index) in author.books"
          :key="index"
          class="list-disc"
        >
          {{ book }}
        </li>
      </ul>
    </div>
    <p v-else>there's no book in here</p>
  </Body>
</template>
