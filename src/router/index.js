import { createRouter, createWebHistory } from 'vue-router'
import LayOut from '../views/layout/LayOut.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: "/index",
    component: LayOut,
    // ��·��/Ƕ��·��
    children:[
      {
        path: '/index',
        name: 'index',
        component: import("@/views/pages/rolesList.vue")
      },
      {
        path: '/user',
        name: 'user',
        component: import("@/views/pages/usersList.vue")
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
