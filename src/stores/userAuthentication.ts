import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useCounterStore = defineStore('userAuthentication', () => {

  const router = useRouter()

  /* State */

  const isLoggedIn = ref<boolean>(false)

  interface LoginInfo {
    username: string,
    password: string
  }

  const loginInfo = reactive<LoginInfo>({
    username: '',
    password: ''
  })

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

  const login = () => {
    isLoggedIn.value = true
    router.push({ name: 'Dashboard' })
  }


  // TEST CODE for checking the login status
  watch (isLoggedIn,(newValue) => {
    console.log(newValue)
  })

  watch (loginInfo,(newValue) => {
    console.log(newValue)
  })

  return {
    // State
    isLoggedIn,
    loginInfo,

    // Actions
    toLogin,
    toSignUp,
    logout,
    login,
  }

})
