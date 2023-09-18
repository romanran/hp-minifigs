<template>
  <div class="mx-auto d-flex align-center flex-column">
    <h1 class="title mb-4">Lego minifigs mystery box</h1>
    <v-btn :to="ROUTINGS.PICKER">Let's go!</v-btn>
  </div>
</template>

<script setup lang="ts">
import { ROUTINGS } from '@/router/routings'
</script>

<style scoped></style>
