import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('userAuthentication', () => {

  /* State */

  const isLoggedIn = ref<boolean>(false)

  return {
    // State
    isLoggedIn 
  }
  
})
