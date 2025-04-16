<script setup lang="ts">

</script>

<template>
  <div class="group flex justify-between items-center h-[35px] my-1 mx-3 select-none cursor-pointer rounded-md hover:bg-gray-200">
    <!-- Icon and Name Section (flex-row) -->
    <div class="flex flex-row items-center">
      <div class="text-gray-700 pt-1 px-2 group-hover:text-indigo-600">
        <slot name="icon"></slot>
      </div>
      <div class="text-gray-700 group-hover:text-indigo-600">
        <slot name="name"></slot>
      </div>
    </div>
    
    <div class="pt-1 hidden group-hover:block text-gray-400">
      <slot name="select"></slot>
    </div>
  </div>
</template>

