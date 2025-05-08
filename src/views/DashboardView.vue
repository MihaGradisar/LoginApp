<script setup lang="ts">
import { useBookQuery } from '@/composables/useApi'

const { data, isLoading, error } = useBookQuery() // fetches the books
</script>
<template>
  <div>
    <h1>This is Dashboard page</h1>
    <p v-if="isLoading">Loading...</p>
    <p v-if="error">Oops!</p>
    <div v-for="book in data">
      <ul :key="book.id">
        <li>{{ book.title }}</li>
        <li>{{ book.author }}</li>
      </ul>
    </div>
  </div>
</template>
