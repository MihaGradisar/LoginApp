<script setup lang="ts">
import AppDrawerButton from './AppDrawerButton.vue'
import AppLogoutButton from './AppLogoutButton.vue'

import buttons from '../data/drawerButtons.json'

import { defineEmits } from 'vue'

// Emits
defineEmits<{
  (event: 'hideDrawer'): void
}>()

</script>

<template>
  <div class="relative h-screen bg-white rounded-tr-lg rounded-br-lg">
    <!-- Toggle Button -->
    <div 
      @click="$emit('hideDrawer')" 
      class="absolute top-2 right-2 size-[30px] bg-none rounded-full flex items-center justify-center select-none cursor-pointer 
      sm:opacity-0 sm:pointer-events-none
      hover:bg-gray-200">
      <span class="material-symbols-outlined text-indigo-600">
        close <!-- Close icon -->
      </span>
    </div>

    <!-- Drawer content -->
    <div class="flex flex-col h-screen">
      <div class="h-[150px]">

      </div>
      <h1 class="mx-3 font-bold text-gray-700">Menu</h1>

      <!-- Drawer buttons -->
      <div v-for="button in buttons">
        <AppDrawerButton>
        <template #icon>
          <span class="material-symbols-outlined">{{ button.icon }}</span>
        </template>
        <template #name>
          <p>{{ button.name }}</p>
        </template>
        <template #select>
          <span class="material-symbols-outlined">{{ button.select }}</span>
        </template>
      </AppDrawerButton>
      </div>

      <!-- Logout button -->
      <div class="flex justify-start items-end mx-3 mt-auto pb-4">
        <AppLogoutButton class="w-fit">
          <template #name>
            <p>Logout</p>
          </template>
        </AppLogoutButton>
      </div>
    </div>
  </div>
</template>
