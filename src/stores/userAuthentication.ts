import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from 'axios'

export const useCounterStore = defineStore('userAuthentication', () => {
  const router = useRouter()

  const API_URL = 'http://localhost:3000'
  const hostname = 'http://localhost:3000/'
  const registerEndpoint = 'register'
  const loginEndpoint = 'login'

  /* State */

  const isLoggedIn = ref(false)
  const loginError = ref('')
  const globalUsername = ref('')
  const hasToken = ref(false)

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
    isLoggedIn.value = false
    router.push({ name: 'Login' })
  }

  const register = (username: string, password: string) => {
    router.push({ name: 'Login' })
  }

  const login = (username: string, password: string) => {
    // Checks if the input fields are not empty
    if (username && password !== '') {
      // If the input values are not empty
      console.log(username)
      console.log(password)

      axios
        .post(hostname + loginEndpoint, {
          username: username,
          password: password,
        })
        .then((response) => {
          globalUsername.value = username // Stores the username to global state
          const token = localStorage.setItem('token', response.data.token) // Saves the token to local storage
          console.log('Register success:', response.data.token)
          console.log(globalUsername.value)
        })
        .catch((error) => {
          loginError.value = 'error'
          console.log(error)
        })

      // isLoggedIn.value = true

      loginError.value = ''
    } else {
      console.log('Invalid email address or password')
      loginError.value = 'error'
    }
    // router.push({ name: 'Dashboard' })
  }

  // Test
  const manageLogin = async (username: string, password: string) => {
    try {
      const loginResponse = await axios.post(`${API_URL}/login`, {
        username: username,
        password: password,
      })

      const token = loginResponse.data.token
    } catch {}
  }

  // TEST CODE for checking the login status
  watch(isLoggedIn, (newValue) => {
    console.log(newValue)
  })

  return {
    // State
    isLoggedIn,
    loginError,
    globalUsername,

    // Actions
    toLogin,
    toSignUp,
    logout,
    register,
    login,
  }
})
