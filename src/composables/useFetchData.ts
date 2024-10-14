import type { Ref } from 'vue'
import type { ApiState } from '@/types/api'
import api from '@/services/apiService'

/**
 * A reusable composable function to fetch data from an API and update the reactive state.
 * @param refValue - A Ref that holds the apiState object.
 * @param url - The endpoint URL for the API call.
 */

export const fetchData = async (refValue: Ref<ApiState<any>>, url: string) => {
  // Set loading state to true
  refValue.value.loading = true

  try {
    // Perform the API call
    const response = await api.getData(url)

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
