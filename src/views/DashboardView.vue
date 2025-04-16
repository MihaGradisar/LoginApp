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
  <div class="w-screen h-screen bg-blue-100"> <!-- Background color -->
    <div class="relative">
      <!-- Menu -->
      <div class="flex items-center justify-between bg-orange-200 w-screen max-sm:h-[60px] pl-[10px] pr-[10px]">
        <div
          @click="drawerToggle"
          :class="['h-[40px]', 'w-[40px]', 'bg-blue-900', 'cursor-pointer', 'sm:hidden', 'rounded-lg', 'flex', 'items-center', 'justify-center', 'hover:bg-blue-800']"
        >
          <span class="material-symbols-outlined text-blue-300 text-[30px] select-none">
            menu <!-- Toggle button -->
          </span>
        </div>
        <div class="size-[40px] sm:hidden">
          <img src="../assets/images/logo.svg" alt="">
        </div>
      </div>

      <div class="flex flex-row">
        <!-- Drawer -->
        <div
          :class="[
            'sm:block sm:relative sm:translate-x-0 sm:w-[250px]',
            'transition-transform duration-300 ease-in-out',
            'max-sm:top-0 max-sm:left-0 max-sm:w-[250px] h-screen z-50 fixed',
            isOpen ? 'translate-x-0' : '-translate-x-full',
          ]"
        >
          <AppDrawer @hide-drawer="drawerToggle"/>
        </div>

        <!-- Main content -->
        <div class="flex-1">
          <div class="p-2">
            <h1>Title</h1>
            <div>
              Content
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
