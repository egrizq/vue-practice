<script setup>
import { ref } from "vue";
const checkedNames = ref([]);
</script>

<template>
  <div class="border-black border p-2 space-y-2 rounded-md">
    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
  </div>
</template>
