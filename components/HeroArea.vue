<template>
    <div class="hero-area bg-indigo-100">
        <div class="flex flex-col justify-center items-center container mx-auto h-80">
            <h1 class="text-5xl font-bold">We Delivered within 24 Hours in Dhaka City.</h1>
            <p class="mt-4 mb-6 text-gray-800">Get your Gadgets, Jewlery and Cloth delivered at your doorsteps all day
                everyday</p>
            <div class="input-form relative h-10 w-1/4">
                <input type="search" placeholder="Search your prodcuts from here" class="pr-10 px-4 h-full w-full" v-model="search" @click="showSearchList = !showSearchList">
                <button class="absolute right-0 text-white bg-indigo-600 px-6 h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>

                <ul class="p-2 shadow bg-base-100 w-full relative z-50 max-h-80 overflow-y-auto" :class="[showSearchList ? 'block' : 'hidden']">
                    <li v-if="filterItems.length>0" v-for="(product,idx) in filterItems" :key="idx" class="px-2 py-2"><nuxt-link :to="`/products/${product.id}`">{{ product.title }} <span class="badge">{{ product.category }}</span></nuxt-link> </li>
                    <li v-else class="px-2 py-2">Sorry, No Product Available!</li>

                </ul>
            </div>
            <div class="mt-4 flex gap-2">
                <nuxt-link :to="'/category/'+cat" class="badge cursor-pointer"
                    :class="{ 'badge-primary': idx === 0, 'badge-secondary': idx === 1, 'badge-accen': idx === 2, 'badge-ghost': idx === 3 }"
                    v-for="(cat,idx) in category" :key="idx">{{ cat }}</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: category } = await useFetch('https://fakestoreapi.com/products/categories')
const { data: products } = await useFetch('https://fakestoreapi.com/products')

const showSearchList = ref(false)

const search = ref('')
const filterItems = computed(()=>{
    return products.value.filter(product=>{
        return product.title.toLowerCase().includes(search.value.toLocaleLowerCase())
    })
})
</script>