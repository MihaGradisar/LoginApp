<script setup lang="ts">
import { useCounterStore } from '@/stores/userAuthentication'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMutation } from '@tanstack/vue-query'
import axios from 'axios'

import AppInputField from '@/components/AppInputField.vue'
import AppButton from '@/components/AppButton.vue'

// Pinia store
const userAuthentication = useCounterStore()

interface LoginInfo {
  username: string
  password: string
}

const loginInfo: LoginInfo = {
  username: '',
  password: '',
}

const router = useRouter()

const API_URL = 'http://localhost:3000'
const showError = ref(false)

const manageLogin = async (username: string, password: string) => {
  const loginResponse = await axios.post(`${API_URL}/login`, {
    username: username,
    password: password,
  })
  return loginResponse.data
}

const loginMutation = useMutation({
  mutationFn: ({ username, password }: LoginInfo) =>
    manageLogin(username, password),
  onSuccess: (data) => {
    localStorage.setItem('token', data.token)
    userAuthentication.token = data.token
    console.log(userAuthentication.token)

    userAuthentication.isLoggedIn = true
    router.push({ name: 'Dashboard' })
  },
  onError: (error) => {
    showError.value = true
    console.error(error.message)
  },
})
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
          v-model="loginInfo.username"
          @keydown.enter="loginMutation.mutate(loginInfo)"
          :type="'text'"
          :placeholder="'Type your username'"
        >
          <template #text> Username </template>
          <template #icon>
            <p>person</p>
          </template>
        </AppInputField>

        <AppInputField
          v-model="loginInfo.password"
          @keydown.enter="loginMutation.mutate(loginInfo)"
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
        @click="loginMutation.mutate(loginInfo)"
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
          @click="userAuthentication.toSignUp"
          class="text-center text-gray-900 mb-4 text-[13px] cursor-pointer select-none hover:text-indigo-600"
        >
          SIGN UP
        </p>
      </div>
    </div>
  </div>
</template>
