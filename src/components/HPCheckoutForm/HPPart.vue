<template>
  <div class="d-flex flex-no-wrap justify-space-between">
    <div class="d-flex align-center">
      <v-img class="mr-5" :src="props.part?.image" width="70" />
      <div class="d-flex flex-column">
        <div class="text-primary">{{ props.part?.name }}</div>
        <div class="text-secondary">{{ props.part?.num }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MinifigPart } from '@/services/minifigs/helpers'

const props = defineProps<{ part: MinifigPart }>()
</script>

<style lang="scss"></style>
