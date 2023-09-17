<template>
  <div :class="[picked ? 'hp-minifig--picked' : '', 'hp-minifig']">
    <img class="hp-minifig__image" :src="figure.set_img_url" />
    <span class="hp-minifig__name">{{ figure.name }}</span>
    <a class="hp-minifig__cta" :href="figure.set_url" @click.stop>Show details</a>
  </div>
</template>

<script setup lang="ts">
import type { Minifig } from '@/models/minifig'
import { defineProps } from 'vue'
const { figure, picked } = defineProps<{
  figure: Minifig
  picked: boolean
}>()
</script>

<style>
.hp-minifig--picked {
  box-shadow: 0 0px 50px orange;
}
.hp-minifig__image {
  max-width: 100%;
}
</style>
