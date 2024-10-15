import type { Ref } from 'vue'
import type { ApiState } from '@/types/api'
import api from '@/services/apiService'

export const fetchData = async (
  refValue: Ref<ApiState<any>>,
  url: string,
  params: Record<string, any> = {},
) => {
  // Set loading state to true
  refValue.value.loading = true

  try {
    // Perform the API call
    const response = await api.getData(url, params)

    // Update ref value with the fetched data
    refValue.value.data = response.data
    refValue.value.success = true
    refValue.value.error = null
  } catch (err) {
    // Handle errors and update the ref value
    refValue.value.success = false
    refValue.value.error =
      err instanceof Error ? err.message : 'An unexpected error occurred'
  } finally {
    // Set loading state to false after completion
    refValue.value.loading = false
  }
}
