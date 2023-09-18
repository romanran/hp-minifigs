export const config = {
  baseUrl: ' https://rebrickable.com',
  minifigsPath: '/api/v3/lego/minifigs/',
  params: { key: '4943a720673cc07cb4b53beab9fa8f61', in_theme_id: '246', page_size: '1000' },
  getPartsApiUrl(set_num: string) {
    return `/api/v3/lego/minifigs/${set_num}/parts/`
  }
}
