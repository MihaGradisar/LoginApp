<script setup lang="ts">
const input = defineModel<string>()
defineProps<{ placeholder: string, type: string }>()
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
      <input
        v-model="input"
        :placeholder="placeholder"
        :type="type"
        class="focus:outline-none"
      />
    </div>
    <div class="border-b"></div>
  </div>
</template>