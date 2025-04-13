<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";
import Body from "@/reusable/Body.vue";

const employee = ref([]);

async function getEmployee() {
  const { data } = await supabase
    .from("employee")
    .select("index, Department")
    .eq("index", 1);
  employee.value = data;
}

onMounted(() => {
  getEmployee();
});
</script>

<template>
  <Body>
    <p class="text-2xl">Database with Supabase</p>

    <p>return arr of object: {{ employee }}</p>

    <ul>
      Result:
      <li v-for="data in employee" :key="data.index">
        {{ data.Department }}
      </li>
    </ul>
  </Body>
</template>
