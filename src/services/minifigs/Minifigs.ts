import type { Minifig, MinifigApiResponse } from '@/models/minifig'
import { FetchFactory } from '../middleware/FetchFactory'

const config = {
  baseUrl: ' https://rebrickable.com',
  apiUrl: '/api/v3/lego/minifigs/',
  params: '?key=4943a720673cc07cb4b53beab9fa8f61'
}

const minifigsApi = new FetchFactory(`${config.baseUrl}${config.apiUrl}${config.params}`)

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}
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
