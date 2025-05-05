<script setup lang="ts">
import { useCounterStore } from '@/stores/userAuthentication'
import { useRouter } from 'vue-router'

import AppInputField from '@/components/AppInputField.vue'
import AppButton from '@/components/AppButton.vue'

// Pinia store
const userAuthentication = useCounterStore()

interface LoginInfo {
  username: string,
  password: string,
}

const loginInfo: LoginInfo = {
  username: '',
  password: '',
}

</script>

<template>
  <div class="flex justify-center items-center w-screen h-screen bg-gray-50">
    <div class="flex flex-col justify-start items-center w-[300px] h-[500px] bg-white rounded-md shadow-xl max-sm:h-[320px]">
      <div class="flex flex-col justify-center items-center">
        <!-- Title -->
        <h1 class="font-extrabold m-2 text-[20px] text-gray-700">Login</h1>
      </div>
      <!-- Input fields -->
      <div>
        <AppInputField v-model="loginInfo.username" @keydown.enter="userAuthentication.login(loginInfo.username, loginInfo.password)" :type="'text'" :placeholder="'Type your username'">
          <template #text>
            Username
          </template>
          <template #icon>
            <p>person</p>
          </template>
        </AppInputField>

        <AppInputField v-model="loginInfo.password" @keydown.enter="userAuthentication.login(loginInfo.username, loginInfo.password)" :type="'password'" :placeholder="'Type your password'">
          <template #text>
            Password
          </template>
          <template #icon>
            <p>lock</p>
          </template>
        </AppInputField>
        <p v-if="userAuthentication.loginError" class="text-red-500 text-center">
          Invalid username or password
        </p>
        <div class="flex justify-end items-center">
          <span class="text-right text-gray-600 pt-1.5 text-[13px] cursor-pointer select-none hover:text-indigo-600">Forgot password?</span>
        </div>
      </div>

      <!-- Login button -->
      <AppButton @click="userAuthentication.login(loginInfo.username, loginInfo.password)" class="w-[218px] h-[35px] text-[14px] mt-[20px]">
        LOGIN
      </AppButton>
        <div class="mt-auto">
          <p class="text-center text-gray-600 py-2 text-[12px]">Or sign up using</p>
        <!-- Sign Up button -->
          <p @click="userAuthentication.toSignUp" class="text-center text-gray-900 mb-4 text-[13px] cursor-pointer select-none hover:text-indigo-600">SIGN UP</p>
        </div>
    </div>
  </div>
</template>