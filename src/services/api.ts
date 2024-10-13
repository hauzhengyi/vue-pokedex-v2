import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default {
  getData(path: string) {
    return apiClient.get(path)
  },
}