const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchAPI = (path: string, params: Record<string, any> = {}) => {
  return apiClient.get(path, { params })
}
