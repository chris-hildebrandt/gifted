import { giftsService } from "../Services/GiftsService.js"
import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){
  let template = ''
  ProxyState.gifts.forEach(g => template += g.GiftTemplate)
  // @ts-ignore
  document.getElementById("gifts").innerHTML = template
}

export class GiftsController{
  constructor(){
    this.getGifts()
    ProxyState.on("gifts", _draw)
    _draw()
  }
  async getGifts(){
    try {
      await giftsService.getGifts()
    } catch (error) {
      console.error('[getGifts]', error)
      Pop.error
    }
  }

  async openGift(id){
    try {
      await giftsService.openGift(id)
    } catch (error) {
      console.error('[openGift]', error)
      Pop.error(error)
    }
  }

  async createGift(){
    try {
    // @ts-ignore
    window.event.preventDefault()
    // @ts-ignore
    let form = window.event.target 
    let newGift = {
      // @ts-ignore
      tag: form.tag.value,
      // @ts-ignore
      url: form.url.value,
      opened: false,
    }
      // @ts-ignore
      await giftsService.createGift(newGift)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
      console.error('[createGift]', error)
    }
  }

  async search(str){
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      let form = window.event.target
      
      await giftsService.search(str)
    } catch (error) {
      console.error('[search]', error)
      Pop.error(error)
    }
  }
}