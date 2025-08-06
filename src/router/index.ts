import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/products',
    },
    {
      path: '/products',
      name: 'ProductList',
      component: () => import('@/pages/ProductList.vue'),
    },
    {
      path: '/products/:id',
      name: 'ProductDetails',
      component: () => import('@/pages/ProductDetails.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: { template: '<div class="p-8 text-center">Page Not Found</div>' },
    },
  ],
})

export default router
