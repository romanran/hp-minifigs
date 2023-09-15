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
	</div>
</template>

<script setup lang="ts">
import { useMinifigStore } from '@/stores/minifigs'
import HPMinifig from './HPMinifig.vue'

const { minifigs, fetchMinifigs, setFigure, pickedFigure } = useMinifigStore()
fetchMinifigs()
</script>

<style scoped></style>
