<template>
  <div class="container mx-auto p-4">
    <router-link to="/products" class="mb-4 inline-block">
      <Button label="Back to Products" icon="pi pi-arrow-left" class="p-button-sm" />
    </router-link>
    <div v-if="store.loading" class="flex justify-center py-8">
      <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" />
    </div>
    <div v-else-if="store.error" class="text-center py-8 text-red-500">{{ store.error }}</div>
    <div v-else-if="product" class="flex flex-col md:flex-row gap-6">
      <div class="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center">
        <img
          :src="product.thumbnailUrl"
          :alt="product.name"
          class="w-48 h-48 object-cover rounded"
        />
      </div>
      <div class="flex-1">
        <h2 class="text-2xl font-bold mb-2">{{ product.name }}</h2>
        <div class="text-lg text-gray-700 mb-2">${{ product.price }}</div>
        <div class="mb-2">{{ product.shortDescription }}</div>
        <div class="mb-2">{{ product.longDescription }}</div>
        <div class="mb-2">
          <span class="font-semibold">Category:</span>
          <Tag :value="product.category" severity="info" class="ml-2" />
        </div>
        <div class="mt-6">
          <h3 class="text-xl font-semibold mb-2">Reviews</h3>
          <ul class="space-y-4">
            <li v-for="(review, idx) in product.reviews" :key="idx">
              <Card>
                <template #title>
                  <div class="font-semibold">{{ review.username }}</div>
                </template>
                <template #content>
                  <div>{{ review.comment }}</div>
                </template>
              </Card>
            </li>
            <li v-if="!product.reviews || product.reviews.length === 0" class="text-gray-500">
              No reviews yet.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import type { Product } from '@/types/index'
import Tag from 'primevue/tag'
import ProgressSpinner from 'primevue/progressspinner'
import Card from 'primevue/card'
import Button from 'primevue/button'

const route = useRoute()
const router = useRouter()
const store = useProductsStore()
const product = ref<Product | null>(null)

onMounted(async () => {
  if (store.products.length === 0) {
    await store.fetchProducts()
  }
  product.value = store.getProductById(route.params.id as string)
  if (!product.value) {
    router.replace({ name: 'NotFound' })
  }
})
</script>

<style scoped></style>
