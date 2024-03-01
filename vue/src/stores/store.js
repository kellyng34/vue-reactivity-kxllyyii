import { reactive } from 'vue'

export const store = reactive({
  items: [],
  addCart(item){
    this.items.push(item)
  }
})
export const state = reactive({
  count: 0,
})