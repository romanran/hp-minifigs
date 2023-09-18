<template>
  <v-card :class="[picked ? 'hp-minifig--picked' : '', 'hp-minifig']" theme="light">
    <v-img :src="figure.set_img_url" height="200px"></v-img>
    <v-card-item>
      <v-card-title class="hp-minifig__name">{{ figure.name }}</v-card-title>
    </v-card-item>
    <v-card-actions class="d-flex justify-center">
      <v-btn class="hp-minifig__cta" :href="figure.set_url" target="_blank" @click.stop>Show details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { Minifig } from '@/models/minifig'
const { figure, picked } = defineProps<{
  figure: Minifig
  picked: boolean
}>()
</script>

<style>
.hp-minifig--picked {
  box-shadow: 0 0px 50px orange;
}
</style>
