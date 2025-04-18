import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { useCounterStore } from '@/stores/userAuthentication'

const authRequiredRoutes = ['Dashboard', 'Profile', 'Pages', 'Applications','Ecommerce', 'Authentication']

export const userLoggedOut = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const userAuthentication = useCounterStore();
  if (authRequiredRoutes.includes(to.name as string) && !userAuthentication.isLoggedIn) {
    next({ name: 'Login' });
  } else {
    next();
  }
}

export const userLoggedIn = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const userAuthentication = useCounterStore()
  if ((to.name === 'Login' || to.name === 'SignUp') && userAuthentication.isLoggedIn) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
}