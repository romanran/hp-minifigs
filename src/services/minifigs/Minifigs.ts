import type { Minifig } from '@/models/minifig'
import { FetchFactory } from '../middleware/FetchFactory'

const config = {
  url: '/api/v3/lego/minifigs/'
}

const minifigsApi = new FetchFactory(config.url)

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export async function getRandomMinifigs(numberOfFigures: number): Promise<Minifig[]> {
  const figures: Minifig[] = (await minifigsApi.get()) as Minifig[]
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
