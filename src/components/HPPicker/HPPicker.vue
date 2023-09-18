import type { useCounterStore } from '@/stores/minifigs';
<template>
  <div class="mx-auto d-flex align-center flex-column">
    <v-item-group class="mb-4">
      <v-container>
        <v-row>
          <v-col v-for="figure in minifigs" :key="figure.set_num" cols="12" md="4">
            <v-item>
              <HPMinifig
                :key="figure.set_num"
                :figure="figure"
                :picked="figure.set_num === pickedFigure?.set_num"
                @click="setFigure(figure)"
              >
              </HPMinifig>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>

    <v-btn class="bg-primary" size="x-large" :to="{ name: ROUTINGS.FORM }" :disabled="!pickedFigure"
      >Proceed to shipment</v-btn
    >
  </div>
</template>

<script setup lang="ts">
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
