<template>
<div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="group relative border rounded-md"  v-for="product in allProducts" :key="product.id">
            <div class="min-h-80 aspect-w-1 aspect-h-1 p-10 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src="https://via.placeholder.com/150" alt="T-shirt" class="h-full w-full object-contain object-center lg:h-full lg:w-full" loading="eager">
            </div>
            <div class="my-4 px-4 flex justify-between">
            <div class="">
                <h3 class="text-l leading-snug font-bold text-gray-700 text-ellipsis line-clamp-2">
                    <nuxt-link :to="`/products/${product.id}`">
                        <!-- <span aria-hidden="true" class="absolute inset-0"></span> -->
                        {{ product.title }}
                    </nuxt-link>
                </h3>
                <p class="my-1 text-sm text-gray-500 leading-relaxed text-ellipsis line-clamp-2">{{ product.description }}</p>  
                <p class="text-sm font-medium text-gray-900 my-1 ">${{ product.price }}</p>

                <button class="text-sm bg-slate-800 text-white px-2 py-1 rounded">ADD TO CART</button>
            </div>
            
            </div>
        </div>
   

        <!-- More products... -->
        </div>
    </div>
</div>

</template>

<script setup>
const { data: allProducts } = await useFetch(
  'https://fakestoreapi.com/products'
)
</script>