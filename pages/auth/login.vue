<template>
    <section class="h-full gradient-form md:h-screen">
        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div class="xl:w-10/12">
                    <div class="block bg-white shadow-lg rounded-lg">
                        <div class="lg:flex lg:flex-wrap g-0">
                            <div class="lg:w-6/12 px-4 md:px-0">
                                <div class="md:p-12 md:mx-6">
                                    <div class="text-center">
                                        <img class="mx-auto w-48"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="logo" />
                                        <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">Mohin Ecommerce Project</h4>
                                    </div>
                                    <form @submit.prevent="login">
                                        <p class="mb-4">Please login to your account</p>
                                        <div class="mb-4">
                                            <input type="text" v-model="username" required
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                 placeholder="Username" />
                                        </div>
                                        <div class="mb-4">
                                            <input type="password" v-model="password"
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                 placeholder="Password" required/>
                                        </div>
                                        <div class="text-center pt-1 mb-12 pb-1">
                                            <button
                                                class="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                type="submit" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                                Log in
                                            </button>
                                            <!-- <a class="text-gray-500" href="#!">Forgot password?</a> -->
                                        </div>
                                        <div class="flex items-center justify-between pb-6">
                                            <p class="mb-0 mr-2">Don't have an account?</p>
                                            <nuxt-link to="/auth/signup"
                                                class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                data-mdb-ripple="true" data-mdb-ripple-color="light">
                                                Create account  
                                            </nuxt-link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-indigo-100"
                                >
                                <div class="text-gray-700 px-4 py-6 md:p-12 md:mx-6">
                                    <h4 class="text-xl font-semibold mb-6 text-gray-900">We are more than just a company</h4>
                                    <p class="text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>
<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const username = ref('mor_2314')
    const password = ref('83r5^_')
    const router = useRouter()
    
    const login = async () => {
      try {
        const { data } = await axios.post('https://fakestoreapi.com/auth/login', {
          username: username.value,
          password: password.value
        })
        // handle success response, store token in local storage
        localStorage.setItem('token', data.token)
        router.push('/welcome')
      } catch (error) {
        // handle error response, display error message to the user
        console.log(error.response.data.message)
      }
    }
    return {
      username,
      password,
      login
    }
  }
}
</script>