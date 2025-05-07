import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'

import axios from 'axios'

export const useCounterStore = defineStore('userAuthentication', () => {
  const router = useRouter()

  const API_URL = 'http://localhost:3000'
  const registerEndpoint = 'register'
  const loginEndpoint = 'login'

  /* State */

  const isLoggedIn = ref(false)

  const token = ref('')
  const loginError = ref('')
  const globalUsername = ref('')

  /* Actions */
  const toLogin = () => {
    isLoggedIn.value = false
    router.push({ name: 'Login' })
  }

  const toSignUp = () => {
    isLoggedIn.value = false
    router.push({ name: 'SignUp' })
  }

  const logout = () => {
    localStorage.removeItem('token')
    isLoggedIn.value = false
    router.push({ name: 'Login' })
  }

  const signUp = (username: string, password: string) => {
    router.push({ name: 'Login' })
  }

  // TEST CODE for checking the login status
  watch(isLoggedIn, (newValue) => {
    console.log(newValue)
    console.log(token.value)
  })

  return {
    // State
    isLoggedIn,
    loginError,
    globalUsername,
    token,

    // Actions
    toLogin,
    toSignUp,
    logout,
    signUp,
  }
})
