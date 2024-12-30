<script setup>
    import Params from './about-components/Params.vue'
    import FetchApi from './about-components/FetchApi.vue'
    import PropsPassing from './about-components/PropsPassing.vue'
    import Option from './about-components/Option.vue'
</script>

<template>
    <Params />
    <FetchApi />
    <PropsPassing title="Props in Vue" name="Rizq Ramadhan"  goals="master vue.js" />
    <Option />
</template>