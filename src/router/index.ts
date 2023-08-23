import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page',
      component: () => import('../views/page/Page.vue')
    },
    {
      path: '/case',
      name: 'case',
      component: () => import('../views/case/Case.vue')
    },
    {
      path: '/',
      name: 'about',
      component: () => import('../views/about/About.vue')
    },
    {
      path: '/',
      name: 'contact',
      component: () => import('../views/contact/Contact.vue')
    }
  ]
})

export default router
