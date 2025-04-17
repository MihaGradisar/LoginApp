<script setup lang="ts">
import { useCounterStore } from '@/stores/userAuthentication'
import AppDrawer from './components/AppDrawer.vue'

const userAuthentication = useCounterStore()

</script>

<template>
  <AppDrawer v-if="userAuthentication.isLoggedIn && $route.name !== '404'" />
  <RouterView v-else/>
</template>