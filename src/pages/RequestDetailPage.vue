<template>
<div>
    Это заявка с номером: {{requestId}}
</div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const requestId = computed(() => route.params.id);
</script>

<style scoped>

</style>