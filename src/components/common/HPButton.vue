<template>
  <component :is="to ? RouterLink : 'button'" :to="to" class="fg-button">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
defineProps<{
  to?: string
}>()
</script>

<style>
.fg-button {
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
