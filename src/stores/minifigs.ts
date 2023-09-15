import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { getRandomMinifigs } from '@/services/minifigs/Minifigs'
import type { Minifig } from '@/models/minifig'

export const useMinifigStore = defineStore('minifig', () => {
  const minifigs: Ref<Minifig[]> = ref([])
  async function fetchMifinigs() {
    minifigs.value = await getRandomMinifigs(3)
  }

  return { minifigs, fetchMifinigs }
})
