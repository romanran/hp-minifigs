import type { useCounterStore } from '@/stores/minifigs';
<template>
    <div>
        <HPMinifig v-for="figure in minifigs" :key="figure.id"></HPMinifig>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMinifigStore } from '@/stores/minifigs'
import HPMinifig from './HPMinifig.vue';
const { minifigs, fetchMifinigs } = useMinifigStore()
fetchMifinigs()

</script>

<style scoped></style>
