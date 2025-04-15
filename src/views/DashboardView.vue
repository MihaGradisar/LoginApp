<script setup lang="ts">
import AppDrawer from '@/components/AppDrawer.vue';

import { ref } from 'vue';

const isOpen = ref<boolean>(false)

const drawerToggle = () => {
  isOpen.value != isOpen.value
}

</script>

<template>
  <div class="flex">
    <div class="">
      <AppDrawer/>
    </div>
    <div class="flex">
      TEST
    </div>
  </div>
</template>
