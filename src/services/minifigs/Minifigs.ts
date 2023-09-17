import type { Minifig, MinifigApiResponse } from '@/models/minifig'
import { FetchFactory } from '../middleware/FetchFactory'
import { config } from './config'
import { randomNumber } from '../helpers/helpers'

const minifigsApi = new FetchFactory(`${config.baseUrl}${config.minifigsPath}${config.params}`)
const minifigPartsApi = new FetchFactory('')

const cacheKey = 'HPMinifigs'

async function fetchMinifigs() {
  const cachedFigs = localStorage.getItem(cacheKey)
  let minifigs: Minifig[]
  if (cachedFigs) {
    minifigs = JSON.parse(cachedFigs).results
  } else {
    const response = (await minifigsApi.get()) as MinifigApiResponse
    localStorage.setItem(cacheKey, JSON.stringify(response))
    minifigs = response.results
  }
  return minifigs
}

export async function getRandomMinifigs(numberOfFigures: number): Promise<Minifig[]> {
  const figures: Minifig[] = await fetchMinifigs()
  const pickedFigures: Minifig[] = []

  function getRandomFigure() {
    const randomIndex = randomNumber(0, figures.length)
    return figures.splice(randomIndex, 1)[0]
  }

  for (let i = 0; i < numberOfFigures; i++) {
    pickedFigures.push(getRandomFigure())
  }
  return pickedFigures
}

export async function getMinifigParts(set_num: number) {
  minifigPartsApi.setUrl(`${config.baseUrl}${config.getPartsApiUrl(set_num)}${config.params}`)
  const response = await minifigPartsApi.get()
}
