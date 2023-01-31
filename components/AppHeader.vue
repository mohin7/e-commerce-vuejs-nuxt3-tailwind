<template>
<div class="bg-white sticky top-0 z-50">
  <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->
  <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->

    
  </div>

  <header class="relative bg-white">
    <p class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p>

    <nav aria-label="Top" class="border-b border-gray-200">
      <div class="mx-auto container">
        <div class="flex h-16 items-center">
          <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
        
          <!-- Logo -->
          <div class="ml-4 flex lg:ml-0">
            <nuxt-link to="/">
              <span class="sr-only">Company</span>
              <div class="flex items-center"><img class="h-8 w-auto mr-2" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
             <h1 class="font-bold"> BestBuy <span class="text-primary">Online</span></h1></div>
            </nuxt-link>
          </div>

          <!-- Flyout menus -->
          <div class="hidden lg:ml-8 lg:block lg:self-stretch">
            <div class="flex h-full space-x-8">
              <div class="flex">
                <div class="relative flex">
                  <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                  <nuxt-link to="/category/women's%20clothing" type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out" aria-expanded="false">Women</nuxt-link>
                </div>

                <!--
                  'Women' flyout menu, show/hide based on flyout menu state.

                  Entering: "transition ease-out duration-200"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "transition ease-in duration-150"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                <div class="absolute inset-x-0 top-full text-sm text-gray-500 opacity-0 invisible">
                  <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                  <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                  <div class="relative bg-white">
                    <div class="mx-auto max-w-7xl px-8">
                      <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                        <div class="col-start-2 grid grid-cols-2 gap-x-8">
                          <div class="group relative text-base sm:text-sm">
                            <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="object-cover object-center">
                            </div>
                            <a href="#" class="mt-6 block font-medium text-gray-900">
                              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                          </div>

                          <div class="group relative text-base sm:text-sm">
                            <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="object-cover object-center">
                            </div>
                            <a href="#" class="mt-6 block font-medium text-gray-900">
                              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                              Basic Tees
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                          </div>
                        </div>
                        <div class="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                          <div>
                            <p id="Clothing-heading" class="font-medium text-gray-900">Clothing</p>
                            <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Tops</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Dresses</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Pants</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Denim</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sweaters</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">T-Shirts</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Jackets</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Activewear</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Browse All</a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p id="Accessories-heading" class="font-medium text-gray-900">Accessories</p>
                            <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Watches</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Wallets</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Bags</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sunglasses</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Hats</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Belts</a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p id="Brands-heading" class="font-medium text-gray-900">Brands</p>
                            <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Full Nelson</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">My Way</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Re-Arranged</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Counterfeit</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Significant Other</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex">
                <div class="relative flex">
                  <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                  <nuxt-link to="/category/men's%20clothing" type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out" aria-expanded="false">Men</nuxt-link>
                </div>

                <!--
                  'Men' flyout menu, show/hide based on flyout menu state.

                  Entering: "transition ease-out duration-200"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "transition ease-in duration-150"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                <div class="absolute inset-x-0 top-full text-sm text-gray-500 opacity-0 invisible">
                  <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                  <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                  <div class="relative bg-white">
                    <div class="mx-auto max-w-7xl px-8">
                      <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                        <div class="col-start-2 grid grid-cols-2 gap-x-8">
                          <div class="group relative text-base sm:text-sm">
                            <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="object-cover object-center">
                            </div>
                            <a href="#" class="mt-6 block font-medium text-gray-900">
                              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                          </div>

                          <div class="group relative text-base sm:text-sm">
                            <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." class="object-cover object-center">
                            </div>
                            <a href="#" class="mt-6 block font-medium text-gray-900">
                              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                              Artwork Tees
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                          </div>
                        </div>
                        <div class="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                          <div>
                            <p id="Clothing-heading" class="font-medium text-gray-900">Clothing</p>
                            <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Tops</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Pants</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sweaters</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">T-Shirts</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Jackets</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Activewear</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Browse All</a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p id="Accessories-heading" class="font-medium text-gray-900">Accessories</p>
                            <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Watches</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Wallets</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Bags</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sunglasses</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Hats</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Belts</a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p id="Brands-heading" class="font-medium text-gray-900">Brands</p>
                            <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Re-Arranged</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Counterfeit</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Full Nelson</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">My Way</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <nuxt-link to="/category/jewelery" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Jewlery</nuxt-link>

              <nuxt-link href="/category/electronics" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Electronics</nuxt-link>
            </div>
          </div>

          <div class="ml-auto flex items-center">
            <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <nuxt-link to="/auth/login" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</nuxt-link>
              <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
              <nuxt-link to="/auth/signup" class="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</nuxt-link>
            </div>


            <!-- Cart -->
            <div class="ml-4 flow-root lg:ml-6">
              <a href="#" class="group -m-2 flex items-center p-2">
                <!-- Heroicon name: outline/shopping-bag -->
                <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span class="relative ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 group">{{ cartData.length }}
                  <!-- cart item start -->
                <div class="absolute group-hover:opacity-100 opacity-0 mx-auto w-96 right-0 top-10 flex flex-col gap-2 border bg-white p-4">
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
                  <hr>
                  
                  <div class="price" v-if="cartData.length > 0">Total Price : $ {{ totalPrice() }}</div>
                  <nuxt-link v-if="cartData.length > 0" to="/checkout" class="bg-primary text-white px-4 py-2 rounded-sm text-center w-full">CHECKOUT</nuxt-link>
                </div>
              
                <!-- cart item end -->
                </span>
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

</template>

<script setup>
import { useCartStore } from '~~/stores/cart'
const cart = useCartStore()

const cartData = cart.addToCart
const removeCart = cart.removeCartFn
const totalPrice = cart.calculatePrice

</script>

