import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import ProfileView from '@/views/ProfileView.vue'
import PagesView from '@/views/PagesView.vue'
import ApplicationsView from '@/views/ApplicationsView.vue'
import EcommerceView from '@/views/EcommerceView.vue'
import AuthenticationView from '@/views/AuthenticationView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'

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
      path: '/profile',
      name: 'Profile',
      component: ProfileView,
      meta: { requiresAuth: true },
    },
    {
      path: '/pages',
      name: 'Pages',
      component: PagesView,
      meta: { requiresAuth: true },
    },
    {
      path: '/applications',
      name: 'Applications',
      component: ApplicationsView,
    },
    {
      path: '/ecommerce',
      name: 'Ecommerce',
      component: EcommerceView,
    },
    {
      path: '/authentication',
      name: 'Authentication',
      component: AuthenticationView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: PageNotFoundView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userAuthentication = useCounterStore()
  if (userAuthentication.isLoggedIn) {
    userLoggedIn(to, from, next)
  } else {
    userLoggedOut(to, from, next)
  }
})

export default router
