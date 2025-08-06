<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 class="text-4xl font-bold mb-4 text-red-600">404 - Page Not Found</h1>
    <p class="mb-6 text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
    <router-link to="/products">
      <Button label="Back to Products" icon="pi pi-arrow-left" class="p-button-sm" />
    </router-link>
  </div>
</template>

<style scoped></style>
