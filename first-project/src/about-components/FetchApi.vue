<script setup>
    import { ref } from 'vue';

    const data = ref([])

    const fetchData = async() => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            const responseData = await response.json()
            data.value = await responseData
        } catch (error) {
            console.log(error)
        }
    }

    fetchData()
</script>

<template>
    <div class="flex flex-col border-black border p-2 space-y-2 rounded-md">
        <p class="font-semibold text-xl">fetch api:</p>
        
        <p>data api: {{ data }}</p>
        <ul>    
            <li v-for="x in data">{{ x }}</li>
        </ul>
    </div>
</template>