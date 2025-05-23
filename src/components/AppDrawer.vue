<script setup lang="ts">
import { useCounterStore } from '@/stores/userAuthentication'
import { useRouter } from 'vue-router'

import AppDrawerButton from './AppDrawerButton.vue'
import AppLogoutButton from './AppLogoutButton.vue'

import buttons from '../assets/layout/drawerButtons.json'
import { ref } from 'vue'

const userAuthentication = useCounterStore()

const isOpen = ref(false)

// Drawer toggle logic
const drawerToggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="w-screen h-screen bg-gray-50">
    <!-- Background color -->
    <div class="relative">
      <!-- Header menu -->
      <div
        class="flex items-center justify-between bg-indigo-500 w-screen max-sm:h-[60px] pl-[10px] pr-[10px]"
      >
        <div
          @click="drawerToggle"
          class="h-[40px] w-[40px] bg-indigo-200 cursor-pointer sm:hidden rounded-lg flex items-center justify-center hover:bg-blue-800'"
        >
          <span
            class="material-symbols-outlined text-gray-700 text-[30px] select-none"
          >
            menu
            <!-- Toggle button -->
          </span>
        </div>
        <div class="size-[40px] sm:hidden">
          <img src="" alt="Logo" />
        </div>
      </div>

      <div class="flex flex-row">
        <!-- Drawer -->
        <div
          :class="[
            'sm:block sm:relative sm:translate-x-0 sm:w-[250px]',
            'transition-transform duration-300 ease-in-out',
            'max-sm:top-0 max-sm:left-0 max-sm:w-[250px] h-screen z-50 fixed',
            isOpen ? 'translate-x-0' : '-translate-x-full',
          ]"
        >
          <!-- Drawer menu -->
          <div
            class="relative h-screen shadow-xl bg-white rounded-tr-lg rounded-br-lg"
          >
            <!-- Toggle Button -->
            <div
              @click="drawerToggle"
              class="absolute top-2 right-2 size-[30px] bg-none rounded-full flex items-center justify-center select-none cursor-pointer sm:opacity-0 sm:pointer-events-none hover:bg-gray-200"
            >
              <span class="material-symbols-outlined text-indigo-600">
                close
                <!-- Close icon -->
              </span>
            </div>

            <!-- Drawer content -->
            <div class="flex flex-col h-screen">
              <div class="h-[160px]">
                <!-- User info -->
                <div class="mt-10">
                  <img
                    class="size-[50px] mx-3 mb-3 rounded-full bg-gray-700"
                    src=""
                    alt="user img"
                  />
                  <h1 class="mx-3 font-bold text-[20px] text-gray-700">User</h1>
                  <p class="mx-3 text-gray-500">name.surname@gmail.com</p>
                </div>
              </div>
              <h1 class="mx-3 font-bold text-gray-700 mt-3">Menu</h1>

              <!-- Drawer buttons -->
              <div v-for="button in buttons">
                <RouterLink
                  :to="button.router"
                  class="flex h-[35px] my-0.5 mx-3 rounded-md"
                  exact-active-class="bg-gray-200"
                >
                  <AppDrawerButton>
                    <template #icon>
                      <span class="material-symbols-outlined">{{
                        button.icon
                      }}</span>
                    </template>
                    <template #name>
                      <p>{{ button.name }}</p>
                    </template>
                    <template #select>
                      <span class="material-symbols-outlined">{{
                        button.select
                      }}</span>
                    </template>
                  </AppDrawerButton>
                </RouterLink>
              </div>

              <!-- Logout button -->
              <div
                @click="userAuthentication.logout"
                class="flex justify-start items-end mx-3 mt-auto pb-4"
              >
                <AppLogoutButton class="w-fit">
                  <template #name>
                    <p>Logout</p>
                  </template>
                </AppLogoutButton>
              </div>
            </div>
          </div>
        </div>

        <!-- Main content -->
        <div class="flex-1">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
