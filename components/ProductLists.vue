<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

                <div class="flex">
                    <!-- <select class="select select-bordered select-sm w-full max-w-[120px] mr-2" v-model="sorted">
                    <option v-for="(srt,idx) in sort" :key="idx" :value="srt.value">{{ srt.label }}</option>
                </select> -->

                    <select class="select select-bordered select-sm w-full max-w-[120px]" v-model="selected">
                        <option v-for="(option, idx) in options" :key="idx" :value="option.value">{{ option.label }}
                        </option>
                    </select>

                </div>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
               

                <div class="group relative border rounded-md" v-if="allProducts" v-for="product in allProducts"
                    :key="product.id">
                    <div
                        class="min-h-80 aspect-w-1 aspect-h-1 p-10 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:aspect-none lg:h-80">
                        
                        <img :src="product.image" alt="T-shirt"
                            class="h-full w-full object-contain object-center lg:h-full lg:w-full" loading="eager">
                        <!-- <skeletonloader /> -->
                    </div>
                    <div class="my-4 px-4 flex justify-between">
                        <div class="">
                            <!-- <p class="text-sm bg-indigo-100 inline-block px-2 py-1 text-indigo-600 rounded-full"> {{ product.category }}</p> -->
                            <h3 class="text-l leading-snug font-bold text-gray-700 text-ellipsis line-clamp-1">
                                <nuxt-link :to="`/products/${product.id}`" :title="product.title">
                                    <!-- <span aria-hidden="true" class="absolute inset-0"></span> -->
                                    {{ product.title }}
                                </nuxt-link>
                            </h3>
                            <p class="my-1 text-sm text-gray-500 leading-relaxed text-ellipsis line-clamp-2"
                                :title="product.description">{{ product.description }}</p>
                            <div class="flex justify-between items-center mt-5">
                                <p class="text-xl font-medium text-gray-900 my-1 ">${{ product.price }}</p>
                                <button @click="addCart(product.id)"
                                    class="text-sm font-medium bg-indigo-100 text-indigo-600 border border-indigo-600 w-32 h-8 rounded">ADD
                                    TO CART</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div v-else>Loading...</div>

                <!-- More products... -->
            </div>
        </div>
    </div>
</template>

<script setup>
// import axios from 'axios';
import { useCartStore } from '@/stores/cart'
import { ref, watchEffect } from 'vue'

const cart = useCartStore()

const toCart = ref(true)

const addCart = cart.addToCartFn
const cartData = cart.addToCart


const options = [
    { value: 8, label: 'Show 8' },
    { value: 12, label: 'Show 12' },
    { value: 16, label: 'Show 16' },
    { value: 20, label: 'Show 20' },
    { value: 24, label: 'Show 24' },
    { value: 28, label: 'Show 28' },
];
const sort = [
    { value: 'asc', label: 'Sort ASC' },
    { value: 'desc', label: 'Sort DESC' },
]
const allProducts = ref([])
const selected = ref(options[0].value)
// const sorted = ref(sort[0].value)

watchEffect(async () => {
    const url = `https://fakestoreapi.com/products?limit=${selected.value}`
    // const url = `http://localhost:3000/api/products`
    allProducts.value = await (await fetch(url)).json()
})
</script>