<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push({ name: 'Dashboard' })
}
</script>

<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <div class="w-[700px] max-sm:hidden">
      <img src="../assets/images/404.png" alt="404">
    </div>
    <div class="flex flex-col justify-center items-start mb-[50px] max-sm:items-center">
      <h1 class="text-[100px] font-extrabold max-sm:text-[50px]">Oops,</h1>
      <h1 class="text-[70px] font-extrabold max-sm:text-[30px]"><span class="text-indigo-500">Nothing</span> here...</h1>
      <div class="w-[250px] sm:hidden">
        <img src="../assets/images/404.png" alt="404">
      </div>
      <p class="text-gray-400 text-left max-sm:text-center max-sm:m-[20px]">
        Uh oh, we can't seem to find the page you're looking for.<br>
        Try going back to previous or Contact us for for more information.
      </p>
      <AppButton @click="goBack" class="mt-[20px]">
        Go Back
      </AppButton>
    </div>
  </div>
</template>