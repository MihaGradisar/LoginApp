<script setup lang="ts">
import { useCounterStore } from '@/stores/userAuthentication'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMutation } from '@tanstack/vue-query'
import { API_URL } from '../composables/useApi.ts'
import axios from 'axios'

import AppInputField from '@/components/AppInputField.vue'
import AppButton from '@/components/AppButton.vue'

// Pinia store
const userAuthentication = useCounterStore()

interface RegisterInfo {
  username: string
  password: string
}

const registerInfo: RegisterInfo = {
  username: '',
  password: '',
}

const router = useRouter()

const showError = ref(false)

const manageRegister = async (username: string, password: string) => {
  if (username && password !== '') {
    const registerResponse = await axios.post(`${API_URL}/register`, {
      username: username,
      password: password,
    })
    return registerResponse.data
  } else {
    showError.value = true
  }
}

const registerMutation = useMutation({
  mutationFn: ({ username, password }: RegisterInfo) =>
    manageRegister(username, password),
  onSuccess: (data) => {
    console.log(data.message)
    router.push({ name: 'Login' })
  },
  onError: (error) => {
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
        <h1 class="font-extrabold m-2 text-[20px] text-gray-700">Sigh Up</h1>
      </div>
      <!-- Input fields -->
      <div>
        <AppInputField
          v-model="registerInfo.username"
          @keydown.enter="registerMutation.mutate(registerInfo)"
          :type="'text'"
          :placeholder="'Type your username'"
        >
          <template #text> Username </template>
          <template #icon>
            <p>person</p>
          </template>
        </AppInputField>

        <AppInputField
          v-model="registerInfo.password"
          @keydown.enter="registerMutation.mutate(registerInfo)"
          :type="'password'"
          :placeholder="'Type your password'"
        >
          <template #text> Password </template>
          <template #icon>
            <p>lock</p>
          </template>
        </AppInputField>
        <div class="flex justify-end items-center"></div>
      </div>

      <p v-if="showError" class="text-red-500 text-center">
        Weak username or password
      </p>

      <!-- Sign Up button -->
      <AppButton
        @click="registerMutation.mutate(registerInfo)"
        class="w-[218px] h-[35px] text-[14px] mt-[20px]"
      >
        SIGN UP
      </AppButton>
      <div class="mt-auto w-[100px]">
        <p class="text-center text-gray-600 py-2 text-[12px]">
          Already have an account?
        </p>
        <!-- to Login button -->
        <p
          @click="userAuthentication.toLogin"
          class="text-center text-gray-900 mb-4 text-[13px] cursor-pointer select-none hover:text-indigo-600"
        >
          LOGIN
        </p>
      </div>
    </div>
  </div>
</template>
