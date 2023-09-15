export type Minifig = {
  last_modified_dt: string
  name: string
  num_parts: number
  set_img_url: string
  set_num: string
  set_url: string
}

export type MinifigApiResponse = {
  count: number
  next: string
  previous: string
  results: Minifig[]
}