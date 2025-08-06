import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '@/types/index'

async function mockFetch(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const res = await fetch('/src/data/products.json')
  if (!res.ok) throw new Error('Failed to load products')
  return res.json()
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
