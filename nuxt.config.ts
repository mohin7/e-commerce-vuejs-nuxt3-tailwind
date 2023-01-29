// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
          apiBase: '/api'
        }
    },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt',],
    app: {
      pageTransition: {
        name: 'fade',
        mode: 'out-in' // default
      },
      layoutTransition: {
        name: 'slide',
        mode: 'out-in' // default
      }
    },
    
    
})