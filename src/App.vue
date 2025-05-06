<script setup lang="ts">
import { useCounterStore } from '@/stores/userAuthentication'
import { onMounted } from 'vue'
import AppDrawer from './components/AppDrawer.vue'

const userAuthentication = useCounterStore()

onMounted(() => {
  const token = localStorage.getItem('token')

  if (token) {
    userAuthentication.isLoggedIn = true
    console.log('token true')
  } else {
    userAuthentication.isLoggedIn = false
    console.log('token false')
  }
})
</script>

<template>
  <AppDrawer v-if="userAuthentication.isLoggedIn && $route.name !== '404'" />
  <RouterView v-else />
</template>
