import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchData } from '@/composables/useFetchData'
import type { ApiState } from '@/types/api'
import type { ListType } from '@/types/common'
import type { Pokemon } from '@/types/pokemon'

export const usePokemonStore = defineStore('pokemon', () => {
  // ===================== Pokemon List ===================== //
  const pokemonList = ref<ApiState<ListType>>({
    data: null,
    loading: false,
    success: false,
    error: null,
  })

  const getPokemonList = computed(() => pokemonList.value)

  const fetchPokemonList = async (offset?: number, limit?: number) => {
    await fetchData(pokemonList, '/pokemon', { offset: offset, limit: limit })
    if (pokemonList.value.success) populatePokemonDatabase()
  }
  // ===================== Pokemon List ===================== //

  // ===================== Pokemon Database ===================== //
  const pokemonDatabase = ref<Pokemon[]>([])

  const getPokemonDatabase = computed(() => pokemonDatabase.value)

  const populatePokemonDatabase = () => {
    pokemonList.value.data?.results.map(pokemon => {
      let id: number = parseInt(pokemon.url.split('/').slice(-2, -1)[0])
      if (pokemonDataExists(id)) return
      else fetchPokemonData(id)
    })
  }

  const fetchPokemonData = (id: number) => {
    let index: number = id - 1
  }

  const pokemonDataExists = (id: number) => {
    let index: number = id - 1
    return pokemonDatabase.value[index]
  }
  // ===================== Pokemon Database ===================== //

  return {
    getPokemonList,
    fetchPokemonList,
    getPokemonDatabase,
  }
})
