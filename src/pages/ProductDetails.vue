<template>
  <div class="container mx-auto p-4">
    <router-link to="/products" class="mb-4 text-blue-600 underline inline-block"
      >Back to Products</router-link
    >
    <div class="flex flex-col md:flex-row gap-6">
      <div class="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center">
        <div class="w-48 h-48 bg-gray-200 flex items-center justify-center">
          <!-- Large thumbnail placeholder -->
          <span class="text-gray-400">Image</span>
        </div>
      </div>
      <div class="flex-1">
        <h2 class="text-2xl font-bold mb-2">Product Name</h2>
        <div class="text-lg text-gray-700 mb-2">$Price</div>
        <div class="mb-2">Short description goes here.</div>
        <div class="mb-2">Long description goes here.</div>
        <div class="mb-2"><span class="font-semibold">Category:</span> Category Name</div>
        <div class="mt-6">
          <h3 class="text-xl font-semibold mb-2">Reviews</h3>
          <ul>
            <li class="mb-2" v-for="review in reviews" :key="review.id">
              <div class="font-semibold">{{ review.author }}</div>
              <div class="text-sm text-gray-600">Rating: {{ review.rating }}</div>
              <div>{{ review.comment }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Review {
  id: number
  author: string
  rating: number
  comment: string
}

// Placeholder mock reviews
const reviews = ref<Review[]>([
  {
    id: 1,
    author: 'Jane Doe',
    rating: 5,
    comment: 'Excellent product!',
  },
  // Add more mock reviews as needed
])
</script>

<style scoped></style>
