<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 class="text-4xl font-bold mb-4 text-red-600">404 - Page Not Found</h1>
    <p class="mb-6 text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
    <router-link to="/products" class="text-blue-600 underline text-lg"
      >Back to Products</router-link
    >
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
