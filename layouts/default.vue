<template>
 <div>
  <AppHeader />
  <slot />
  <!-- <pre class="bg-gray-100 rounded-sm">{{ route }}</pre> -->
  <div class="bg-gray-800 text-white">
    <AppFooter />
  </div>
 </div>
</template>

<script setup>
// const route = useRoute();
</script>
