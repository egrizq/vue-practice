<script setup>
    import Title from './components/Title.vue'
</script>

<template>
    <main class="container mx-auto py-4">
        <div class="flex justify-center">
            <div class="flex flex-col w-6/12 p-2 space-y-4">
                
                <Title />  
                <RouterView />
                
            </div>
        </div>
    </main>
</template>
    
<style scoped>
</style>

