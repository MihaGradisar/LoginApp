<script setup lang="ts">
import { ref } from 'vue';
import AppDrawer from '@/components/AppDrawer.vue';

const isOpen = ref(false);

// Drawer toggle logic
const drawerToggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="flex relative">
    <!-- Drawer -->
    <div
      :class="[
        // Always visible on sm and up
        'sm:block sm:relative sm:translate-x-0 sm:w-[250px]',
        // Drawer on small/mobile screens
        'transition-transform duration-300 ease-in-out',
        'absolute max-sm:top-0 max-sm:left-0 max-sm:w-[250px] h-screen z-50',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <AppDrawer />
    </div>

    <!-- Toggle button -->
    <button
      @click="drawerToggle"
      :class="['h-[30px]', 'w-[30px]', 'bg-blue-900', 'sm:hidden', 'z-50', isOpen ? 'hidden' : '']"
    >
    </button>

    <!-- Main content -->
    <div class="flex-1">
      Main Content
    </div>
  </div>
</template>
