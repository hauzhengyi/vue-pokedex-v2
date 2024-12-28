export const usePokemonStore = defineStore('pokemon', () => {
  // ===================== Pokemon Index List ===================== //

  /*
  An index list only shows you a list of Pokemon names and their id,
  along with the link to get each Pokemon's full detail.
  */

  const pokemonIndexList = ref<ApiState<IndexList>>({
    data: undefined,
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

  /*
  Each Pokemon's detail is stored in here, to minimize repeated API calls,
  check if the Pokemon's detail already exists before fetching.
  */

  const pokemonDatabase = ref<ApiState<Pokemon>[]>([])

  const getPokemonDatabase = computed(() => pokemonDatabase.value)

  const populatePokemonDatabase = (): void => {
    if (pokemonDatabase.value.length <= 0)
      initDatabaseSize(pokemonIndexList.value.data?.count)

    pokemonIndexList.value.data?.results.map(pokemon => {
      let id: number = parseInt(pokemon.url.split('/').slice(-2, -1)[0])
      if (pokemonDataExists(id)) return
      else fetchPokemonData(id)
    })
  }

  const initDatabaseSize = (size: number | undefined): void => {
    if (size == undefined) return
    pokemonDatabase.value = Array(size).fill({
      data: null,
      loading: false,
      success: false,
      error: null,
    })
  }

  const pokemonDataExists = (id: number): boolean => {
    let index: number = id - 1
    return pokemonDatabase.value[index]?.success
  }

  const fetchPokemonData = async (id: number): Promise<void> => {
    const pokemon = ref<ApiState<Pokemon>>({
      data: undefined,
      loading: false,
      success: false,
      error: null,
    })
    await fetchAndSetState(pokemon, `/pokemon/${id}`)

    let index: number = id - 1
    pokemonDatabase.value[index] = pokemon.value
  }

  // ===================== Pokemon Database ===================== //

  return {
    getPokemonIndexList,
    fetchPokemonIndexList,
    getPokemonDatabase,
  }
})
