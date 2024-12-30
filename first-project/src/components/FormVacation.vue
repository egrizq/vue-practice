<script setup>
    import { ref } from 'vue';

    const message = ref("")
    const checkedNames = ref([])
    
    const result = () => {
        if (checkedNames.value.length > 0) {
            let destination = !message.value ? "knownwhere" : message.value
            alert(`${checkedNames.value.join(', ')} is going to ${destination}`)
        } else {
            alert("there's no data!")
        }
    }
</script>

<template>
    <form class="flex flex-col border-black border p-2 space-y-2 rounded-md">
        <p class="font-semibold text-xl">form input:</p>
        
        <div class="flex space-x-4">
            <input v-model="message" placeholder="location" class="border border-black p-1 rounded-md">
        </div>

        <div class="flex flex-col">
            <div class="space-x-2">
                <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
                <label for="jack">jack</label>
            </div>
                                
            <div class="space-x-2">
                <input type="checkbox" id="daniel" value="daniel" v-model="checkedNames">
                <label for="daniel">daniel</label>
            </div>
                            
            <div class="space-x-2">
                <input type="checkbox" id="sven" value="sven" v-model="checkedNames">
                <label for="sven">sven</label>
            </div>
        </div>

        <button @click="result" 
            class="border border-black p-2 rounded-md hover:bg-black hover:text-white text-semibold  ">
            Submit
        </button>
    </form>
</template>