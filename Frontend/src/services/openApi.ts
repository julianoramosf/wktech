import axios from 'axios'

export const openApi = axios.create({
  baseURL: import.meta.env.VITE_API,
})
