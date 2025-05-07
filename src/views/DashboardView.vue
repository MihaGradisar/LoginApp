<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

const API_URL = 'http://localhost:3000'

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
    <ul v-for="book in data">
      <li key="book.id">{{ book.title }}</li>
    </ul>
  </div>
</template>
