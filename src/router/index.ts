import { createRouter, createWebHistory } from 'vue-router'
import HPLanding from '@/views/HPLanding.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: HPLanding
    },
    {
      path: '/picker',
      name: 'picker',
      component: () => import('../views/HPPicker.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/HPForm.vue')
    }
  ]
})

export default router
