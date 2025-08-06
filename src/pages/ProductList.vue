<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useProductsStore } from '@/stores/products'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import ProgressSpinner from 'primevue/progressspinner'

const store = useProductsStore()

onMounted(() => {
  if (store.products.length === 0) {
    store.fetchProducts()
  }
})

const filter = ref('')
const debouncedFilter = ref('')
let debounceTimeout: ReturnType<typeof setTimeout> | null = null

watch(filter, (val) => {
  if (debounceTimeout) clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    debouncedFilter.value = val
  }, 300)
})

const filteredProducts = computed(() => {
  return store.products.filter((product) =>
    product.name.toLowerCase().includes(debouncedFilter.value.toLowerCase()),
  )
})
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Product List</h1>
    <InputText v-model="filter" placeholder="Filter products by name..." class="mb-4 w-full" />
    <div v-if="store.loading" class="flex justify-center py-8">
      <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" />
    </div>
    <div v-else-if="store.error" class="text-center py-8 text-red-500">{{ store.error }}</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <router-link
        v-for="product in filteredProducts"
        :key="product.id"
        :to="`/products/${product.id}`"
        style="text-decoration: none; color: inherit"
      >
        <Card class="transition-transform duration-200 hover:-translate-y-1 cursor-pointer">
          <template #header>
            <img
              :src="product.thumbnailUrl"
              :alt="product.name"
              class="w-24 h-24 object-cover mb-2 rounded mx-auto"
            />
          </template>
          <template #title>
            <div class="font-semibold text-center">{{ product.name }}</div>
          </template>
          <template #content>
            <div class="text-gray-600 text-center">${{ product.price }}</div>
          </template>
        </Card>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
