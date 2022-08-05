import { ProxyState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { sandboxApi } from "./AxiosService.js"

class GiftsService{
search(str) {
  throw new Error("Method not implemented.")
}

async createGift(newGift) {
  let res = await sandboxApi.post('/gifts', newGift)
  // console.log(res.data);
  let gift = new Gift(res.data)
  ProxyState.gifts = [...ProxyState.gifts, gift]
}

async openGift(id) {
  let gift = ProxyState.gifts.find(g => g.id == id)
  if(!gift){
    throw new Error('bad gift id')
  }
  gift.opened = !gift.opened
  let giftIndex = ProxyState.gifts.indexOf(gift)
  let res = await sandboxApi.put(`/gifts/${id}`, gift)
  let updatedGift = new Gift(res.data)
  ProxyState.gifts.splice(giftIndex, 1, updatedGift)
  ProxyState.gifts = ProxyState.gifts
}

async getGifts(){
  const res = await sandboxApi.get('/gifts')
  // console.log('get gifts', res.data);
  ProxyState.gifts = res.data.map(g => new Gift(g))
}
}
export const giftsService = new GiftsService()