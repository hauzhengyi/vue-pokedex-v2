import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { apiState } from '@/types/api'
import type { listType, listItemType } from '@/types/common'
import api from '@/services/api'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemonList = ref<apiState<listType[]>>({
    data: [],
    loading: false,
    error: null,
  })

  const getPokemonList = computed(() => pokemonList.value)

  const fetchPokemonList = async () => {
    pokemonList.value.loading = true

    try {
      const response = await api.getData('/pokemon')
      pokemonList.value.data = response.data
      pokemonList.value.error = null
    } catch (err) {
      pokemonList.value.error =
        err instanceof Error ? err.message : 'An unexpected error occurred'
    } finally {
      pokemonList.value.loading = false
    }
  }

  return {
    getPokemonList,
    fetchPokemonList,
  }
})
