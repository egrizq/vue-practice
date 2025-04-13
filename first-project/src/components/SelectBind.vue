<script setup>
import Body from "@/reusable/Body.vue";
import Title from "@/reusable/Title.vue";

defineProps(["selected"]);
defineEmits(["update:selected"]);
</script>
<template>
  <Body>
    <Title>Bind Value:</Title>
    <label for="cars">Choose a car:</label>

    <select
      class="border border-black rounded-md"
      :value="selected"
      @change="$emit('update:selected', $event.target.value)"
      name="cars"
      id="cars"
    >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </Body>
</template>
