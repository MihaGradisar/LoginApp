<template>
  <div class="group flex justify-between w-full select-none cursor-pointer hover:bg-gray-200 rounded-md">
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