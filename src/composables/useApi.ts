import { useMutation, useQuery } from '@tanstack/vue-query'
import { type Ref } from 'vue'
import axios from 'axios'

export const API_URL = 'http://localhost:3000'

export const BOOKS_KEYS = ['book']

const handleFetchBooks = async () => {
  const token = localStorage.getItem('token')
  const fetchBooksResponse = await axios.get(`${API_URL}/books`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  console.log('refetchInterval')
  return fetchBooksResponse.data
}

export const useBookQuery = () => {
  return useQuery({
    queryKey: BOOKS_KEYS,
    queryFn: handleFetchBooks,
    refetchInterval: 5000,
    enabled: !!localStorage.getItem('token'),
  })
}

export const useRegisterMutation = ({
  username,
  password,
}: {
  username: Ref<string>
  password: Ref<string>
}) => {
  return useMutation({
    mutationFn: () =>
      axios.post(`${API_URL}/register`, {
        username: username.value,
        password: password.value,
      }),
    onSuccess: (data) => {
      console.log(data.status)
    },
    onError: (error) => {
      console.error('Error:', error)
    },
  })
}
