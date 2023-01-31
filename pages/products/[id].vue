<template>
<div class="mb-32">
  <div class="bg-white container mx-auto" v-if="product">
  <div class="pt-6">
    <nav aria-label="Breadcrumb">
      <ol role="list" class="mx-auto flex items-center space-x-2">
        <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Men</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Clothing</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li class="text-sm">
          <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{ product.title }}</a>
        </li>
      </ol>
    </nav>

    <!-- Image gallery -->
    <div class="grid grid-cols-2 mt-10">
      <div class="overflow-hidden rounded-lg aspect-w-3 aspect-h-3 mr-10">
        <img :src="product.image" :alt="product.title" class="h-[500px] w-[380px] object-cover object-center" loading="lazy">
      </div>

      <!-- Product info -->
    <div class="">
      <div class="lg:col-span-2">
        <h1 class="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl mb-4" v-if="product.title ">{{ product.title }}</h1>
      </div>

      <!-- Options -->
      <div class="mt-4 lg:row-span-3 lg:mt-0">
      </div>

      <div class="">
        <!-- Description and details -->
        <div>

          <div class="space-y-6">
            <p class="text-base text-gray-900">{{ product.description }}</p>
          </div>
        <p class="text-3xl font-bold mt-10 tracking-tight text-gray-900" v-if="product.price">${{ product.price }}</p>

        </div>

        <button @click="addCart(product.id)" class="text-sm font-medium bg-indigo-600 text-white border border-indigo-600 w-32 h-10 rounded mt-10">ADD TO CART</button>
        <div class="mt-10">
          <h3 class="text-sm font-medium text-gray-900">Catagories</h3>

          <div class="mt-4">
            <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
              <li class="text-gray-400"><span class="text-gray-600">{{ product.category }}</span></li>
            </ul>
          </div>
        </div>

        <h3 class="text-sm font-medium text-gray-900 mt-10 mb-4">Customers Review</h3>

        <div class="flex items-center">
              <svg v-for="i in 5" class="h-5 w-5 flex-shrink-0"  :class="[ product.rating.rate >= i ? 'text-amber-400' : 'text-gray-200']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"> {{ product.rating.count }} reviews</a>
            </div>


      </div>
    </div>
    </div>

    
  </div>
</div>

<div class="container mx-auto" v-else>Loading</div>
</div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useCartStore } from '@/stores/cart'
const route = useRoute()
// const product = ref(null)



const cart = useCartStore()

const toCart = ref(true)

const addCart = cart.addToCartFn
const cartData = cart.addToCart





const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${route.params.id}`
)

definePageMeta({
  pageTransition: {
    name: 'bounce',
    mode: 'out-in' // default
  }
})

</script>
