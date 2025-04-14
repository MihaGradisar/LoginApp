<script setup lang="ts">
import { useCounterStore } from '@/stores/userAuthentication'

const userAuthentication = useCounterStore()
</script>

<template>
  <!--<header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
  </header>-->
  <RouterView />
</template>