<script setup lang="ts">
import AppDrawer from '../components/AppDrawer.vue'

</script>

<template>
<div class="flex transition-all duration-300">
  <AppDrawer/>
  <div class="flex-1 h-screen">
    <header class="flex">
      <div @click="console.log('Hello')" class="sm:hidden">

      </div>
      <h1 class="">This is the dashboard page</h1>
    </header>
  </div>
</div>
</template>
