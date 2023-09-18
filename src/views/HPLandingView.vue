<template>
  <div class="mx-auto d-flex align-center flex-column">
    <h1 class="text-uppercase mb-10 text-h1">Lego minifigs mystery box</h1>
    <v-btn class="bg-primary" size="x-large" :to="{ name: ROUTINGS.PICKER }">Let's go!</v-btn>
  </div>
</template>

<script setup lang="ts">
import { ROUTINGS } from '@/router/routings'
</script>

<style scoped></style>
