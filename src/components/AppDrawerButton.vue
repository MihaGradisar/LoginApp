<template>
  <div class="group flex justify-start items-center h-[35px] my-2 mx-3 select-none cursor-pointer rounded-md hover:bg-gray-200">
    <div class="text-gray-700 group-hover:text-indigo-600">
      <slot name="icon"></slot>
    </div>
    <div class="text-gray-700 group-hover:text-indigo-600">
      <slot name="name"></slot>
    </div>
  </div>
</template>