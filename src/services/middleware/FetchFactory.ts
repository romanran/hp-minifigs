interface Params {
  [key: string]: string
}

export class FetchFactory {
  url: string
  constructor(url: string) {
    this.url = url
  }
  async get(params?: Params): Promise<unknown> {
    try {
      const response = await fetch(this.url, params)
      return response.json()
    } catch (err) {
      console.log(err)
    }
  }
  post(params?: Params) {}
  setUrl(url: string) {
    this.url = url
  }
}
