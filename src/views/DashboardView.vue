<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { API_URL } from '@/composables/useApi'
import axios from 'axios'

const fetchBooks = async () => {
  const token = localStorage.getItem('token')
  const fetchBooksResponse = await axios.get(`${API_URL}/books`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  console.log('refetchInterval')
  return fetchBooksResponse.data
}

const { data, isLoading, error } = useQuery({
  queryKey: ['books'],
  queryFn: fetchBooks,
  refetchInterval: 5000,
  enabled: !!localStorage.getItem('token'),
})
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
