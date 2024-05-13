<script setup>
    import { computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'

    const router = useRouter()
    const route = useRoute()
    
    const search = computed({
        get() {
            return route.query.search ?? ''
        },
        set(search) {
            router.replace({ query: { search } })
        }
    })


    const props = defineProps(["foo"])
</script>

<template>
    <div class="flex flex-col border-black border p-2 space-y-2 rounded-md">
        <p class="font-semibold text-xl">Route params:</p>
        <h2>params: {{ $route.fullPath }}</h2>
        <label>
            Search: <input v-model.trim="search" maxlength="20" class="border border-black p-1 rounded-md">
        </label>
    </div>
</template>