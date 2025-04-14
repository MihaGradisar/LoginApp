import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'
import { userLoggedIn, userLoggedOut } from './middleware/authMiddleware'


import { useCounterStore } from '@/stores/userAuthentication'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signUp',
      component: SignUpView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userAuthentication = useCounterStore()
  if (userAuthentication.isLoggedIn) {
    userLoggedIn(to, from, next)
  }
  else {
    userLoggedOut(to, from, next)
  }
})

export default router
