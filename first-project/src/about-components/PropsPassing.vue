<script setup>
    const props = defineProps(['name', 'goals', 'title'])
</script>

<template>
    <div class="flex flex-col border-black border p-2 space-y-2 rounded-md">
        <p class="text-2xl">{{ props.title }}</p>

        <p>{{ props.name }} have target to {{ props.goals }}</p>
    </div>
</template>