import { useMutation, useQuery } from '@tanstack/vue-query'
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

interface RegisterVariables {
  username: string
  password: string
}

const handleRegister = async (username: string, password: string) => {
  const registerResponse = await axios.post(`${API_URL}/register`, {
    username: username,
    password: password,
  })
  return registerResponse.data
}

export const useRegisterMutation = (username: string, password: string) => {
  return useMutation({
    mutationFn: ({ username, password }: RegisterVariables) =>
      handleRegister(username, password),
    onSuccess: (data) => {},
    onError: (data) => {},
  })
}
