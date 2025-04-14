import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { useCounterStore } from '@/stores/userAuthentication'

export const userLoggedOut = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const userAuthentication = useCounterStore()
  if (to.meta.requiresAuth && !userAuthentication.isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

export const userLoggedIn = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const userAuthentication = useCounterStore()
  if ((to.name === 'Login' || to.name === 'signUp') && userAuthentication.isLoggedIn) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
}