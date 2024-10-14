import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ApiState } from '@/types/api'
import type { ListType } from '@/types/common'
import { fetchData } from '@/composables/useFetchData'

export const usePokemonStore = defineStore('pokemon', () => {
  // ===================== Pokemon List ===================== //
  const pokemonList = ref<ApiState<ListType>>({
    data: null,
    loading: false,
    success: false,
    error: null,
  })

  const getPokemonList = computed(() => pokemonList.value)

  const fetchPokemonList = () => {
    fetchData(pokemonList, '/pokemon')
  }
  // ===================== Pokemon List ===================== //

  // ===================== Pokemon Database ===================== //
  const pokemonDatabase = ref<ApiState<ListType>>({
    data: null,
    loading: false,
    success: false,
    error: null,
  })

  const getPokemonDatabase = computed(() => pokemonDatabase.value)

  const fetchPokemonDatabase = () => {
    fetchData(pokemonDatabase, '/pokemon')
  }
  // ===================== Pokemon Database ===================== //

  return {
    getPokemonList,
    fetchPokemonList,
    getPokemonDatabase,
    fetchPokemonDatabase,
  }
})
