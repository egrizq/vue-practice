<script setup>
    import { ref } from 'vue'

    const counter = ref(0)
    const incrementCounter = () => {
        counter.value++
    }
</script>

<template>
    <div class="flex flex-col border-black border p-2 space-y-2 rounded-md">
        <p class="font-semibold text-xl">ref:</p>

        <div class="flex flex-row spa space-x-2">
            <button @click="incrementCounter" 
                class="p-2 border border-black rounded-md hover:bg-black hover:text-white">
                    Click me!
            </button>
            <div class="p-2">
                <span>Counting: {{ counter }}</span>
            </div>
        </div>
    </div>
</template>