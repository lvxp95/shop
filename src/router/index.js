import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
// import Abc from '../views/AbcView.vue'
const routes = [
  {
    path: '/',
    name: 'layout',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/abc',
    name: 'abc',
    component: () => import("@/views/AbcView.vue")
  },
  {
    path: '/index',
    name: 'layout',
    component: () => import("@/views/layout/LayOut.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
