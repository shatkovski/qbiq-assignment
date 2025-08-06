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
      meta: { title: 'List' },
    },
    {
      path: '/products/:id',
      name: 'ProductDetails',
      component: () => import('@/pages/ProductDetails.vue'),
      props: true,
      meta: { title: 'Product' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/NotFound.vue'),
      meta: { title: 'Not Found' },
    },
  ],
})

router.beforeEach((to) => {
  const base = 'Qbiq assignment'
  const title = (to.meta.title as string) || ''
  if (title) {
    document.title = `${base} | ${title}`
  } else {
    document.title = base
  }
})

export default router
