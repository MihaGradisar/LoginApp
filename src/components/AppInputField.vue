<script setup lang="ts">
defineProps<{ placeholder: string; type: string; modelValue: string }>()
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
        :placeholder="placeholder"
        :type="type"
        class="focus:outline-none"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <div class="border-b"></div>
  </div>
</template>
