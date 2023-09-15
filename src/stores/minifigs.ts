import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { getRandomMinifigs } from '@/services/minifigs/Minifigs'
import type { Minifig } from '@/models/minifig'

export const useMinifigStore = defineStore('minifig', () => {
	const minifigs = ref<Minifig[]>([])
	const pickedFigure = ref<Minifig>()
	async function fetchMinifigs() {
		minifigs.value = await getRandomMinifigs(3)
	}
	function setFigure(figure: Minifig) {
		pickedFigure.value = figure
	}
	return { minifigs, fetchMinifigs, setFigure, pickedFigure }
})
