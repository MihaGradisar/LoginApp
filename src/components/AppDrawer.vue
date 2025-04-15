<script setup lang="ts">

import { ref } from 'vue';

const isOpen = ref<boolean>(true)

const drawerToggle = () => {
  isOpen.value != isOpen.value
}

</script>

<template>
  <div class="w-0 sm:w-[250px] h-screen rounded-tr-lg rounded-br-lg overflow-hidden transition-all duration-300" :class="[isOpen ? 'bg-amber-100' : 'bg-amber-500']">
    <h1>TEST</h1>
    <h1>TEST</h1>
    <h1>TEST</h1>
  </div>
</template>