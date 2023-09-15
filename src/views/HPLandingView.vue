<template>
    <div>
        <h1>Lego minifigs mystery box</h1>
        <HPButton :to="ROUTINGS.PICKER">Let's go!</HPButton>
    </div>
</template>

<script setup lang="ts">
import HPButton from '@/components/common/HPButton.vue'
import { ROUTINGS } from '@/router/routings';
</script>

<style scoped></style>
