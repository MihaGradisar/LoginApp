import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('userAuthentication', () => {

  /* State */

  const isLoggedIn = ref<boolean>(true)

  // TEST CODE for checking the login status
  watch (isLoggedIn,(newValue) => {
    console.log(newValue)
  })

  return {
    // State
    isLoggedIn 
  }

})
