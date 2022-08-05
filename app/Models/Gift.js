import { generateId } from "../Utils/generateId.js"

export class Gift{
  constructor(data){
    this.id = data.id || generateId()
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened

    if(!data.opened){
      this.url = "https://media.istockphoto.com/photos/christmas-paper-background-picture-id182174877?k=20&m=182174877&s=612x612&w=0&h=W_mpyAcZY7RrvTUUOaX3F4JsfHDZLDHx5Tqv9g6MqzI="
    }
  }

  get GiftTemplate(){
    return `
        <div class="col-3 card m-3">
          <img class="" src="${this.url}" alt="">
          <button class="btn" onclick="app.giftsController.openGift('${this.id}')">${this.tag}</button>
        </div>
        `
  }
}