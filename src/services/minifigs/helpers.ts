export function mapPart(data: unknown) {
  if (typeof data !== 'object' || data === null) {
    return null
  }
  if (!('id' in data) || typeof data.id !== 'number') {
    return null
  }

  let part
  if ('part' in data && typeof data.part === 'object' && data.part !== null) {
    part = data.part
  } else {
    return null
  }
  const mappedPart: { id: string; image?: string; num?: string; url?: string; name?: string } = { id: `${data.id}` }
  if ('part_img_url' in part && typeof part.part_img_url === 'string') {
    mappedPart.image = part.part_img_url
  }
  if ('part_num' in part && typeof part.part_num === 'string') {
    mappedPart.num = part.part_num
  }
  if ('part_url' in part && typeof part.part_url === 'string') {
    mappedPart.url = part.part_url
  }
  if ('name' in part && typeof part.name === 'string') {
    mappedPart.name = part.name
  }
  return mappedPart
}

export type MinifigPart = ReturnType<typeof mapPart>
