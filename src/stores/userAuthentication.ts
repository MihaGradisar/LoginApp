import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { QueryClient } from '@tanstack/vue-query'

const queryClient = new QueryClient()

export const useCounterStore = defineStore('userAuthentication', () => {
  const router = useRouter()

  /* State */
  const isLoggedIn = ref(false)

  const loginError = ref('')

  /* Actions */
  const toLogin = () => {
    isLoggedIn.value = false
    router.push({ name: 'Login' })
  }

  const toRegister = () => {
    isLoggedIn.value = false
    router.push({ name: 'Register' })
  }

  const logout = () => {
    localStorage.removeItem('token')
    isLoggedIn.value = false
    queryClient.removeQueries({ queryKey: ['books'] })
    router.push({ name: 'Login' })
  }

  // TEST CODE for checking the login status
  watch(isLoggedIn, (newValue) => {
    console.log(`login status: ${newValue}`)
  })

  return {
    // State
    isLoggedIn,
    loginError,

    // Actions
    toLogin,
    toRegister,
    logout,
  }
})
