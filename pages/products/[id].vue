<template>
    <p>Product page</p>
    <pre> {{ product }}</pre>

</template>

<script setup>
import { ref, watchEffect } from 'vue'
const route = useRoute()
const product = ref(null)


watchEffect(async () => {
  const url = `https://fakestoreapi.com/products/${route.params.id}`
  product.value = await (await fetch(url)).json()
})


</script>
