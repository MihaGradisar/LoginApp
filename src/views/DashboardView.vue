<script setup lang="ts">
import { useCounterStore } from '@/stores/userAuthentication'

const userAuthentication = useCounterStore()
</script>

<template>
  <div class="dashboard">
    <h1>This is dashbard page {{ userAuthentication.isLoggedIn }}</h1>
  </div>
</template>
