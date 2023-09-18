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
      const url = params ? this.url + '?' + new URLSearchParams(params).toString() : this.url
      const response = await fetch(url)
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
