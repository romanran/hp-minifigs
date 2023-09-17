import type { useCounterStore } from '@/stores/minifigs';
<template>
  <div>
    <HPMinifig
      v-for="figure in minifigs"
      :key="figure.set_num"
      :figure="figure"
      :picked="figure.set_num === pickedFigure?.set_num"
      @click="setFigure(figure)"
    >
    </HPMinifig>
    <HPButton :to="ROUTINGS.FORM" v-if="pickedFigure">Proceed to shipment</HPButton>
  </div>
</template>

<script setup lang="ts">
import HPButton from '../common/HPButton.vue'
import HPMinifig from './HPMinifig.vue'
import { useMinifigStore } from '@/stores/minifigs'
import { storeToRefs } from 'pinia'
import type { Minifig } from '@/models/minifig'
import { ROUTINGS } from '@/router/routings'

const store = useMinifigStore()
const { minifigs, pickedFigure } = storeToRefs(store)
store.fetchMinifigs()

function setFigure(figure: Minifig) {
  store.setFigure(figure)
}
</script>

<style scoped></style>
