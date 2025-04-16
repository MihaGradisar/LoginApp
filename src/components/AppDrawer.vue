<script setup lang="ts">
import { defineEmits } from 'vue';

// Emits
const emit = defineEmits<{
	(event: 'hideDrawer'): void
}>()

</script>


<template>
  <div class="relative h-screen bg-blue-400 rounded-tr-lg rounded-br-lg">
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
    <h1>Drawer</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt itaque iure nam odio quam quasi quas tempora laudantium tenetur?</p>
  </div>
</template>