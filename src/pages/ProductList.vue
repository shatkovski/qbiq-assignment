<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import type { Product } from '@/types/product'

const products = ref<Product[]>([])
const loading = ref(true)
const error = ref<string | null>(null)
const filter = ref('')

onMounted(async () => {
  try {
    const res = await fetch('/src/data/products.json')
    if (!res.ok) throw new Error('Failed to load products')
    products.value = await res.json()
  } catch (e: unknown) {
    error.value = e instanceof Error ? e.message : 'Unknown error'
  } finally {
    loading.value = false
  }
})

const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.name.toLowerCase().includes(filter.value.toLowerCase()),
  )
})
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Product List</h1>
    <input
      v-model="filter"
      type="text"
      placeholder="Filter products by name..."
      class="border rounded px-3 py-2 mb-4 w-full"
    />
    <div v-if="loading" class="text-center py-8 text-gray-500">Loading products...</div>
    <div v-else-if="error" class="text-center py-8 text-red-500">{{ error }}</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <router-link
        v-for="product in filteredProducts"
        :key="product.id"
        :to="`/products/${product.id}`"
        class="border rounded p-4 flex flex-col items-center transition hover:shadow-lg hover:bg-gray-50"
        style="text-decoration: none; color: inherit"
      >
        <img
          :src="product.thumbnailUrl"
          :alt="product.name"
          class="w-24 h-24 object-cover mb-2 rounded"
        />
        <div class="font-semibold">{{ product.name }}</div>
        <div class="text-gray-600">${{ product.price }}</div>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
