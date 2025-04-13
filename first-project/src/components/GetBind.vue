<script setup>
import Body from "@/reusable/Body.vue";
import Title from "@/reusable/Title.vue";

const props = defineProps(["selectedValue"]);
</script>
<template>
  <Body>
    <Title>Selected Value from Select Tag:</Title>

    <p>{{ props.selectedValue }}</p>
  </Body>
</template>
