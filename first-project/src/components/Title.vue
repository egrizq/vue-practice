<script setup>
    const title = "Vue Practice"
</script>

<template>
    <div class="flex flex-col justify-center">
        <p class="hello-style text-4xl font-bold">{{ title }}</p>

        <div class="flex flex-row space-x-3">
            <RouterLink to="/" class="hover:text-blue-600 underline">Go to Essential</RouterLink>
            <p>/</p>
            <RouterLink to="/about" class="hover:text-blue-600 underline">Go to Components-in-depth</RouterLink>
            <p>/</p>
            <RouterLink to="/database" class="hover:text-blue-600 underline">Database</RouterLink>
        </div>
    </div>
</template>