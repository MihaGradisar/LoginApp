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

  const toRegister = () => {
    isLoggedIn.value = false
    router.push({ name: 'Register' })
  }

  const logout = () => {
    localStorage.removeItem('token')
    isLoggedIn.value = false
    router.push({ name: 'Login' })
  }

  const fetchBooks = async () => {
    const fetchBooksResponse = await axios.get(`${API_URL}/books`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return fetchBooksResponse.data
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['books'],
  })

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
    toRegister,
    logout,
  }
})
