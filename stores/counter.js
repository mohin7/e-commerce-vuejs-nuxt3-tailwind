// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const allProducts = ref([])
    
    watchEffect(async () => {
        const url = `https://fakestoreapi.com/products`
        allProducts.value = await (await fetch(url)).json()
    })
    const addToCart = ref([]);
    function addToCartFn(id){
        allProducts.value.filter(product=>{
            if(product.id == id){
                addToCart.value.push(product)
            }
        })
    }
  
    return { addToCart, addToCartFn }
})