<template>
  <v-card theme="light" variant="elevated">
    <v-card-title>
      <h2 class="text-uppercase text-center text-h3">Summary</h2>
    </v-card-title>
    <v-card-item class="text-center">
      <v-img class="hp-minifig__image" :src="pickedFigure?.set_img_url" height="200" />
      <h3 class="font-weight-bold">{{ pickedFigure.name }}</h3>
    </v-card-item>
    <v-card-item class="my-2">
      <div class="my-6">There are {{ parts?.length }} parts in this minifig:</div>
      <HPPart v-for="part in parts" :part="part"></HPPart>
    </v-card-item>
    <v-btn class="mt-10 bg-primary" size="large" block :disabled="!formValid" :loading="submitting || false" @click="submit"
      >SUBMIT</v-btn
    >
  </v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useMinifigStore } from '@/stores/minifigs'
import { useCheckoutStore } from '@/stores/checkout'
import { notEmpty } from '@/services/helpers/helpers'

import HPPart from './HPPart.vue'

const checkoutStore = useCheckoutStore()
const minifigStore = useMinifigStore()
const { parts, pickedFigure } = storeToRefs(minifigStore)
const { submitting, formValid } = storeToRefs(checkoutStore)
minifigStore.getParts()

function submit() {
  const mappedPartsIds = parts.value?.map((part) => part?.id).filter(notEmpty)
  checkoutStore.submitForm(mappedPartsIds || [])
}
</script>

<style lang="scss"></style>
