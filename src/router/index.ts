import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bible',
      name: 'bible',
      component: () => import('../views/BibleView.vue')
    }
  ]
})

export default router
