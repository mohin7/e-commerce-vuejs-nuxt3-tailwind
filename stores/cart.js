// stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
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
    
    // remove cart item
    function removeCartFn(id){
        addToCart.value.splice(id, 1); 
    }

    // total price calculator 
    const calculatePrice = function(){
        var price = 0;
        addToCart.value.filter(product => {
            price = price + product.price;
        })
        return price;
    }
  
    return { addToCart, addToCartFn, removeCartFn, calculatePrice }
})