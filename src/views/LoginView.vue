<script setup lang="ts">
import { useCounterStore } from '@/stores/userAuthentication'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useLoginMutation } from '../composables/useApi.ts'
import AppInputField from '@/components/AppInputField.vue'
import AppButton from '@/components/AppButton.vue'

// Pinia store
const userAuthentication = useCounterStore()

const username = ref('')
const password = ref('')

const router = useRouter()

const showError = ref(false)

// Use the exported useLoginMutation function
const { mutate: useLogin } = useLoginMutation({
  username: computed(() => username.value),
  password: computed(() => password.value),
})

// Logic for handling login
const handleLogin = () => {
  if (!username.value || !password.value) {
    showError.value = true
    return
  }
  showError.value = false

  useLogin(undefined, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.data.token)
      userAuthentication.isLoggedIn = true
      router.push({ name: 'Dashboard' })
    },
    onError: () => {
      showError.value = true
    },
  })
}
</script>

<template>
  <div class="flex justify-center items-center w-screen h-screen bg-gray-50">
    <div
      class="flex flex-col justify-start items-center w-[300px] h-[500px] bg-white rounded-md shadow-xl max-sm:h-[320px]"
    >
      <div class="flex flex-col justify-center items-center">
        <!-- Title -->
        <h1 class="font-extrabold m-2 text-[20px] text-gray-700">Login</h1>
      </div>
      <!-- Input fields -->
      <div>
        <AppInputField
          v-model="username"
          @keydown.enter="handleLogin()"
          :type="'text'"
          :placeholder="'Type your username'"
        >
          <template #text> Username </template>
          <template #icon>
            <p>person</p>
          </template>
        </AppInputField>

        <AppInputField
          v-model="password"
          @keydown.enter="handleLogin()"
          :type="'password'"
          :placeholder="'Type your password'"
        >
          <template #text> Password </template>
          <template #icon>
            <p>lock</p>
          </template>
        </AppInputField>
        <p v-if="showError" class="text-red-500 text-center">
          Invalid username or password
        </p>
        <div class="flex justify-end items-center">
          <span
            class="text-right text-gray-600 pt-1.5 text-[13px] cursor-pointer select-none hover:text-indigo-600"
            >Forgot password?</span
          >
        </div>
      </div>

      <!-- Login button -->
      <AppButton
        @click="handleLogin()"
        class="w-[218px] h-[35px] text-[14px] mt-[20px]"
      >
        LOGIN
      </AppButton>
      <div class="mt-auto">
        <p class="text-center text-gray-600 py-2 text-[12px]">
          Or sign up using
        </p>
        <!-- Sign Up button -->
        <p
          @click="userAuthentication.toRegister"
          class="text-center text-gray-900 mb-4 text-[13px] cursor-pointer select-none hover:text-indigo-600"
        >
          SIGN UP
        </p>
      </div>
    </div>
  </div>
</template>
