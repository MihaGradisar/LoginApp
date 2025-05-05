import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from 'axios';

export const useCounterStore = defineStore('userAuthentication', () => {

  const router = useRouter()

  const hostname = 'http://localhost:3000/'
  const registerEndpoint = 'register'
  const loginEndpoint = 'login'

  /* State */

  const isLoggedIn = ref<boolean>(false)
  const loginError = ref('')


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

      axios.post(hostname + loginEndpoint, {
        username: username,
        password: password,
      })
      .then(response => {
        console.log('Register success:', response.data);
      })
      .catch(error => {
        console.error('Register error:', error.response.data);
      });

      // isLoggedIn.value = true

      loginError.value = ''
    }
    else {
      console.log('Invalid email address or password')
      loginError.value = 'error';
    }
    // router.push({ name: 'Dashboard' })
  }


  // TEST CODE for checking the login status
  watch (isLoggedIn,(newValue) => {
    console.log(newValue)
  })


  return {
    // State
    isLoggedIn,
    loginError,

    // Actions
    toLogin,
    toSignUp,
    logout,
    register,
    login,
  }

})
