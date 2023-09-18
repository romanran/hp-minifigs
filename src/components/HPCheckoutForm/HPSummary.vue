<template>
  <div>
    <h1>Summary</h1>
    <img class="hp-minifig__image" :src="pickedFigure?.set_img_url" />
    <HPPart v-for="part in parts" :part="part"></HPPart>
  </div>
</template>

<script setup lang="ts">
import { useMinifigStore } from '@/stores/minifigs'
import { storeToRefs } from 'pinia'
import HPPart from './HPPart.vue'

const store = useMinifigStore()
const { parts, pickedFigure } = storeToRefs(store)
store.getParts()
</script>

<style lang="scss"></style>
