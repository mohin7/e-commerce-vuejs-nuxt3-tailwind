<template>
<div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="group relative border rounded-md"  v-for="i in 8" :key="i">
            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="T-shirt" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
            </div>
            <div class="my-4 px-4 flex justify-between">
            <div class="">
                <h3 class="text-lg font-bold text-gray-700">
                    <a href="#">
                        <!-- <span aria-hidden="true" class="absolute inset-0"></span> -->
                        Basic Tee {{ i }}
                    </a>
                </h3>
                <p class="my-1 text-sm text-gray-500">Black</p>
                <button class="text-sm bg-slate-800 text-white px-2 py-1 rounded">ADD TO CART</button>
            </div>
            <p class="text-sm font-medium text-gray-900">$35</p>
            
            </div>
            

        </div>

        <!-- More products... -->
        </div>
    </div>
</div>

</template>