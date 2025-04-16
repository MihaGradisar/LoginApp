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
      <AppDrawer @hide-drawer="drawerToggle"/>
    </div>

    <!-- Toggle button -->
    <div
      @click="drawerToggle"
      :class="['h-[40px]', 'w-[40px]', 'bg-blue-900', 'cursor-pointer', 'sm:hidden', 'rounded-lg', 'flex', 'items-center', 'justify-center', 'hover:bg-blue-800', isOpen ? 'hidden' : '']"
    >
      <span class="material-symbols-outlined text-blue-300 text-[30px] select-none">
        menu <!-- Menu icon -->
      </span>
    </div>

    <!-- Main content -->
    <div class="flex-1">
      Main Content
    </div>
  </div>
</template>
