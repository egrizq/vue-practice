<script setup>
    import { ref, watch } from 'vue';
    import { supabase } from '../lib/supabaseClient'

    const bookmarks = ref("")

    const insertBookmarks = async () => {
        try {
            if (bookmarks.value.length === 0) {
                throw new Error('Data cannot be empty!');
            }

            const { data, error } = await supabase
                .from('bookmarks')
                .insert({
                    link: bookmarks.value
                })
                .select()

            if (error) throw error
            
            if (data && data.length > 0) {
                const response = data[0]; // Access the first object in the data array
                alert("id: " + response.id);
                bookmarks.value = ""
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };  
</script>

<template>
    <form @submit.prevent="insertBookmarks"  class="flex flex-col border-black border p-2 space-y-2 rounded-md">
        <p class="font-semibold text-xl">Input Bookmarks:</p>

        <div class="flex flex-col">
            <div class="space-x-2">
                <input v-model="bookmarks" placeholder="Embed Code" class="border border-black p-1 rounded-md">

                <button type="submit"
                    class="border border-black py-1 px-3 rounded-md hover:bg-black hover:text-white text-semibold">
                    Submit
                </button>
            </div>
        </div>

    </form>
</template>
