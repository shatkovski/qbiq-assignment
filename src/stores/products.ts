import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '@/types/index'
import products from '@/data/products.json'

export async function mockFetch(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return products as Product[]
}

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const productsById = ref<Map<string, Product>>(new Map())
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchProducts() {
    loading.value = true
    error.value = null
    try {
      const data: Product[] = await mockFetch()
      products.value = data
      productsById.value = new Map(data.map((p) => [p.id, p]))
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  function getProductById(id: string) {
    return productsById.value.get(id) || null
  }

  return { products, productsById, loading, error, fetchProducts, getProductById }
})
