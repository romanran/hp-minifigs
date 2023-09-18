import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getMinifigParts, getRandomMinifigs } from '@/services/minifigs/dataFetch'
import type { Minifig } from '@/models/minifig'
import type { MinifigPart } from '@/services/minifigs/helpers'

export const useMinifigStore = defineStore('minifig', () => {
  const pickedFigureCache = localStorage.getItem('pickedFigure') && false

  const minifigs = ref<Minifig[]>([])
  const pickedFigure = ref<Minifig>(pickedFigureCache ? JSON.parse(pickedFigureCache) : null)
  const error = ref<boolean | string>(false)
  const parts = ref<MinifigPart[]>()

  async function fetchMinifigs() {
    try {
      error.value = false
      const minifigsResponse = await getRandomMinifigs(3)
      minifigs.value = minifigsResponse
    } catch (err) {
      console.log(err)
      error.value = 'Error occured'
    }
  }

  function setFigure(figure: Minifig) {
    pickedFigure.value = figure
    localStorage.setItem('pickedFigure', JSON.stringify(figure))
  }

  async function getParts() {
    try {
      if (!(pickedFigure.value instanceof Object)) {
        throw new Error('No picked figure')
      }
      if (!('set_num' in pickedFigure.value)) {
        throw new Error('No picked figure')
      }
      error.value = false
      const partsResponse = await getMinifigParts(pickedFigure.value.set_num)
      parts.value = partsResponse
    } catch (err) {
      console.log(err)
      error.value = 'Error occured'
    }
  }
  return { minifigs, error, fetchMinifigs, setFigure, pickedFigure, parts, getParts }
})
