<script setup lang="ts">
import { useCounterStore } from '@/stores/userAuthentication'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useRegisterMutation } from '../composables/useApi.ts'
import AppInputField from '@/components/AppInputField.vue'
import AppButton from '@/components/AppButton.vue' // Pinia store

const userAuthentication = useCounterStore()

const username = ref('')
const password = ref('')

const router = useRouter()

const showError = ref(false)

const { mutate: useRegister } = useRegisterMutation({
  username: computed(() => username.value),
  password: computed(() => password.value),
})

// Logic for the register
const handleRegister = () => {
  if (!username.value || !password.value) {
    showError.value = true
    return
  }
  showError.value = false

  useRegister(undefined, {
    onSuccess: () => {
      router.push({ name: 'Login' })
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
        <h1 class="font-extrabold m-2 text-[20px] text-gray-700">Sigh Up</h1>
      </div>
      <!-- Input fields -->
      <div>
        <AppInputField
          v-model="username"
          @keydown.enter="handleRegister()"
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
          @keydown.enter="handleRegister()"
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
        @click="handleRegister()"
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
