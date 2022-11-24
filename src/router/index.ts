import { createRouter, createWebHistory } from 'vue-router'

import assemblyRouter from './assembly-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [assemblyRouter],
})

export default router
