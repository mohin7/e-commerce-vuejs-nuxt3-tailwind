<template>

    <div class="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div class="flex flex-col justify-start items-start w-full space-y-9">
            <div class="flex justify-start flex-col items-start space-y-2">

                <p class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-black">Checkout</p>

            </div>

            <div
                class="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                <div
                    class="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">


                <div class="mx-auto w-96 right-0 top-10 flex flex-col gap-2 border bg-white p-4">
                  <div v-if="cartData.length > 0" class="flex items-center justify-between" v-for="(cart,idx) in cartData" :key="idx">
                    <div class="flex-shrink-0">
                      <img class="h-16 w-16" :src="cart.image" alt="Product Image" />
                    </div>
                    <div class="ml-6">
                      <h6 class="font-medium text-gray-900">{{ cart.title }}</h6>
                      <p class="text-gray-600">${{ cart.price }}</p>
                    </div>
                    <div class="ml-6">
                      <button class="rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600" @click="removeCart(cart.idx)">Remove</button>
                    </div>
                  </div>
                  <div v-else>
                    <p>No product in your cart</p>
                  </div>
                 
                </div>
              
                   
                </div>

                <div class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
                    <button
                        class="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                        <div>
                            <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                                    fill="currentColor" />
                                <path
                                    d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
                                    fill="currentColor" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-base leading-4">Pay</p>
                        </div>
                    </button>

                    <div class="flex flex-row justify-center items-center mt-6">
                        <hr class="border w-full" />
                        <p class="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">or pay with
                            card</p>
                        <hr class="border w-full" />
                    </div>

                    <div class="mt-8">
                        <input
                            class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                            type="email" name="" id="" placeholder="Email" />
                    </div>

                    <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Card details</label>
                    <div class="mt-2 flex-col">
                        <div>
                            <input
                                class="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                type="email" name="" id="" placeholder="0000 1234 6549 15151" />
                        </div>
                        <div class="flex-row flex">
                            <input
                                class="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                type="email" name="" id="" placeholder="MM/YY" />
                            <input
                                class="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                type="email" name="" id="" placeholder="CVC" />
                        </div>
                    </div>

                    <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Name on card</label>
                    <div class="mt-2 flex-col">
                        <div>
                            <input
                                class="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                type="email" name="" id="" placeholder="Name on card" />
                        </div>
                    </div>

                    <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Country or region</label>
                    <div class="mt-2 flex-col">
                        <div class="relative ">
                            <button
                                class="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                                type="email" name="" id="">United States</button>

                            <img class="cursor-pointer absolute top-4 right-4 dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-1-svg1.svg" alt="Dropdown">
                            <img class="cursor-pointer hidden transform rotate-180 absolute top-4 right-4 hidden transform rotate-180 dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-1-svg1.svg" alt="Dropdown">
                            <img class="cursor-pointer absolute top-4 right-4 hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-1-svg1dark.svg"
                                alt="Dropdown">
                            <img class="cursor-pointer hidden transform rotate-180 absolute top-4 right-4 hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-1-svg1dark.svg"
                                alt="Dropdown">
                            <div id="dropdown"
                                class=" hidden  z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600">
                                <div onclick="changeText('China')"
                                    class="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2">China</div>
                                <div onclick="changeText('Russia')"
                                    class="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2">Russia</div>
                                <div onclick="changeText('UK')"
                                    class="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2">UK</div>
                            </div>
                        </div>
                        <input
                            class="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                            type="text" name="" id="" placeholder="ZIP" />
                    </div>

                    <button
                        class="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                        <div>
                            <p class="text-base leading-4">Pay $ {{ totalPrice().toFixed(2) }}</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    


</template>


<script setup>
import { useCartStore } from '~~/stores/cart'
const cart = useCartStore()

const cartData = cart.addToCart
const removeCart = cart.removeCartFn
const totalPrice = cart.calculatePrice

</script> 