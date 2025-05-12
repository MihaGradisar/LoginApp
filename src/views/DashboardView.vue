<script setup lang="ts">
import { useBookQuery } from '@/composables/useApi'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const { data, isLoading, error } = useBookQuery() // fetches the books
console.log(data.value)

// Toasts
</script>
<template>
  <DataTable :value="data" tableStyle="min-width: 1rem">
    <Column field="author" header="Author"></Column>
    <Column field="title" header="Book"></Column>
  </DataTable>
</template>
