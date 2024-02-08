import { createRouter, createWebHashHistory } from 'vue-router'
import MoviesView from '../views/MoviesView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'movies',
      component: MoviesView
    },
    {
      path: '/ajout',
      name: 'ajout',
      component: () => import('../views/AjoutMovie.vue')
    }
  ]
})

export default router
