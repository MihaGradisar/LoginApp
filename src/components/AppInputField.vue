<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  placeholder: string,
  
}>()

</script>

<template>
  <div>
    <p class="text-[12px]">
      <slot name="text"></slot>
    </p>
    <div class="flex pb-1.5">
      <span class="material-symbols-outlined text-gray-500">
        <slot name="icon"></slot>
      </span>
      <input class="border-none outline-none" type="text" :placeholder="placeholder">
    </div>
    <div class="border-b"></div>
  </div>
</template>