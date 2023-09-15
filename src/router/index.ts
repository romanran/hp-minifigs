import { createRouter, createWebHistory } from 'vue-router'
import HPLanding from '@/views/HPLandingView.vue'
import { ROUTINGS } from './routings'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTINGS.LANDING,
      component: HPLanding
    },
    {
      path: '/picker',
      name: ROUTINGS.PICKER,
      component: () => import('../views/HPPickerView.vue')
    },
    {
      path: '/form',
      name: ROUTINGS.FORM,
      component: () => import('../views/HPFormView.vue')
    }
  ]
})

export default router
