<script setup lang="ts">
import { defineEmits } from 'vue';

import AppDrawerButton from './AppDrawerButton.vue';

// Emits
const emit = defineEmits<{
	(event: 'hideDrawer'): void
}>()

</script>


<template>
  <div class="relative h-screen bg-white rounded-tr-lg rounded-br-lg">
    <!-- Toggle Button -->
    <div 
      @click="$emit('hideDrawer')" 
      class="absolute top-2 right-2 size-[30px] bg-blue-100 rounded-full flex items-center justify-center select-none cursor-pointer 
      sm:opacity-0 sm:pointer-events-none
      hover:bg-blue-200">
      <span class="material-symbols-outlined text-blue-300">
        close <!-- Close icon -->
      </span>
    </div>
    <!-- Drawer content -->
    <div>
      <h1>Drawer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt itaque iure nam odio quam quasi quas tempora laudantium tenetur?</p>

      <!-- Drawer buttons -->
      <AppDrawerButton>
        <template #icon>
          <span class="material-symbols-outlined">folder_open</span>
        </template>
        <template #name>
          <p>Dashboard</p>
        </template>
      </AppDrawerButton>

      <AppDrawerButton>
        <template #icon>
          <span class="material-symbols-outlined">person</span>
        </template>
        <template #name>
          <p>Profile</p>
        </template>
      </AppDrawerButton>

      <AppDrawerButton>
        <template #icon>
          <span class="material-symbols-outlined">import_contacts</span>
        </template>
        <template #name>
          <p>Pages</p>
        </template>
      </AppDrawerButton>

      <AppDrawerButton>
        <template #icon>
          <span class="material-symbols-outlined">apps</span>
        </template>
        <template #name>
          <p>Applications</p>
        </template>
      </AppDrawerButton>

      <AppDrawerButton>
        <template #icon>
          <span class="material-symbols-outlined">shopping_cart</span>
        </template>
        <template #name>
          <p>E-Commerce</p>
        </template>
      </AppDrawerButton>
        
      <AppDrawerButton>
        <template #icon>
          <span class="material-symbols-outlined">admin_panel_settings</span>
        </template>
        <template #name>
          <p>Authentication</p>
        </template>
      </AppDrawerButton>

    </div>
  </div>
</template>