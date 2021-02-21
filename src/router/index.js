import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import About from '../views/About.vue'

const routes = [
  // {
  //   path: '/user/:userId',
  //   name: 'user',
  //   component: User
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
