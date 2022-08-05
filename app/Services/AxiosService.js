// @ts-ignore
export const giphyApi = new axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  timeout: 4000,
})

// @ts-ignore
export const sandboxApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  Timeout: 4000,
})

// let params = {
//   api_key: 'W1Xbq6MS1vmybe8cYXikavns16IDAuFI',
//   rating: 'pg',
//   q: ''
// }