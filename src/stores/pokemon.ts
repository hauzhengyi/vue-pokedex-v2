export const usePokemonStore = defineStore('pokemon', () => {
  // ===================== Pokemon Index List ===================== //
  const pokemonIndexList = ref<ApiState<IndexList>>({
    data: null,
    loading: false,
    success: false,
    error: null,
  })

  const getPokemonIndexList = computed(() => pokemonIndexList.value)

  const fetchPokemonIndexList = async (
    offset?: number,
    limit?: number,
  ): Promise<void> => {
    await fetchAndSetState(pokemonIndexList, '/pokemon', {
      offset: offset,
      limit: limit,
    })
    if (pokemonIndexList.value.success) populatePokemonDatabase()
  }
  // ===================== Pokemon Index List ===================== //

  // ===================== Pokemon Database ===================== //
  const pokemonDatabase = ref<Pokemon[]>([])

  const getPokemonDatabase = computed(() => pokemonDatabase.value)

  const populatePokemonDatabase = (): void => {
    pokemonIndexList.value.data?.results.map(pokemon => {
      let id: number = parseInt(pokemon.url.split('/').slice(-2, -1)[0])
      if (pokemonDataExists(id)) return
      else fetchPokemonData(id)
    })
  }

  const fetchPokemonData = (id: number): void => {
    let index: number = id - 1
  }

  const pokemonDataExists = (id: number): Pokemon => {
    let index: number = id - 1
    return pokemonDatabase.value[index]
  }
  // ===================== Pokemon Database ===================== //

  return {
    getPokemonIndexList,
    fetchPokemonIndexList,
    getPokemonDatabase,
  }
})
