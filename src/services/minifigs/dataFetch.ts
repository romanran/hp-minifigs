import type { Minifig, MinifigApiResponse } from '@/models/minifig'
import { FetchFactory } from '../middleware/FetchFactory'
import { config } from './config'
import { randomNumber } from '../helpers/helpers'
import { mapPart } from './helpers'

const minifigsApi = new FetchFactory(`${config.baseUrl}${config.minifigsPath}`)
const minifigPartsApi = new FetchFactory('')

const cacheKey = 'HPMinifigs'

function validateApiResponse(response: unknown): response is { results: unknown[] } {
  console.log(response)

  if (!(response instanceof Object)) {
    throw new Error('Bad api response - no response')
  }
  if ('err' in response && typeof response.err === 'string') {
    throw new Error(response.err)
  }
  if (!('results' in response)) {
    throw new Error('Bad api response - no results')
  }
  if (!Array.isArray(response.results)) {
    throw new Error('Bad api response - empty results')
  }
  return true
}

async function fetchMinifigs() {
  const cachedFigs = localStorage.getItem(cacheKey)
  let minifigs: Minifig[]
  if (cachedFigs) {
    minifigs = JSON.parse(cachedFigs).results
  } else {
    let response = await minifigsApi.get(config.params)
    if (!validateApiResponse(response)) return
    localStorage.setItem(cacheKey, JSON.stringify(response))
    minifigs = response.results as Minifig[]
  }
  return minifigs
}

function getRandomFigure(figures: Minifig[]) {
  const randomIndex = randomNumber(0, figures.length)
  return figures.splice(randomIndex, 1)[0]
}

export async function getRandomMinifigs(numberOfFigures: number): Promise<Minifig[] | never> {
  const figures = await fetchMinifigs()
  const pickedFigures: Minifig[] = []
  if (!figures) return []
  for (let i = 0; i < numberOfFigures; i++) {
    pickedFigures.push(getRandomFigure(figures))
  }
  return pickedFigures
}

export async function getMinifigParts(set_num: string) {
  minifigPartsApi.setUrl(`${config.baseUrl}${config.getPartsApiUrl(set_num)}`)
  const response = await minifigPartsApi.get({ key: config.params.key })
  if (!validateApiResponse(response)) return
  const mappedParts = response.results.map(mapPart)
  console.log({ mappedParts })

  return mappedParts
}
