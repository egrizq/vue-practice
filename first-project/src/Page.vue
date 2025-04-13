<script setup>
import ButtonCounter from "./components/ButtonCounter.vue";
import AuthorLoopConditions from "./components/AuthorLoopConditions.vue";
import EvenNumberCompute from "./components/EvenNumberCompute.vue";
import FormVacationVue from "./components/FormVacation.vue";
import SelectBind from "./components/SelectBind.vue";
import GetBind from "./components/GetBind.vue";
import { ref, computed } from "vue";

const selected = ref("volvo");
const handleSelect = computed(() => selected.value);
</script>

<template>
  <ButtonCounter />
  <AuthorLoopConditions />
  <EvenNumberCompute />
  <FormVacationVue />
  <SelectBind v-model:selected="selected" />
  <GetBind :selected-value="handleSelect" />
</template>
