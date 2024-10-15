import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default {
  getData(path: string, params: Record<string, any> = {}) {
    return apiClient.get(path, { params })
  },

  getExternalData(fullUrl: string, params: Record<string, any> = {}) {
    return axios.get(fullUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    })
  },
}
