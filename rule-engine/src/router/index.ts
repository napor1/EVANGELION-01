import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: '/schema'
    },
    {
      path: '/ingest',
      name: 'ingest',
      component: AboutView
    },
    {
      path: '/schema',
      name: 'schema',
      component: () => import('../views/SchemaPage.vue')
    }
  ]
})

export default router
