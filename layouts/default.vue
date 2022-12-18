<template>
    <div class="container mx-auto">
        <AppHeader />
            <slot />

            <pre class="bg-gray-100">{{ route }}</pre>
        <AppFooter />
    </div>
</template>

<script setup>
    const route = useRoute()
</script>
