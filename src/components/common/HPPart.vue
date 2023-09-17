<template>
  <div>
    <img class="hp-minifig__image" :src="props.part.image" />
    <div>
      <span>{{ props.part.name }}</span>
      <span>{{ props.part.num }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MinifigPart } from '@/services/minifigs/helpers'

const props = defineProps<{ part: MinifigPart }>()
</script>

<style scoped></style>
