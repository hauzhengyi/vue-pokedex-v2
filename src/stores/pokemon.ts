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

  const pokemonDatabase = ref<Ref<ApiState<Pokemon>>[]>([])

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
    pokemonDatabase.value = Array(size).fill(undefined)
  }

  const pokemonDataExists = (id: number): boolean => {
    const index = id - 1
    return index >= 0 && index < pokemonDatabase.value.length
      ? pokemonDatabase.value[index]?.value?.success
      : false
  }

  const fetchPokemonData = async (id: number): Promise<void> => {
    let index: number = id - 1

    if (index < 0 || index >= pokemonDatabase.value.length) {
      console.error(`Index ${index} is out of bounds`)
      return
    }

    pokemonDatabase.value[index] = ref<ApiState<Pokemon>>({
      data: undefined,
      loading: false,
      success: false,
      error: null,
    })

    await fetchAndSetState(pokemonDatabase.value[index], `/pokemon/${id}`)
  }

  // ===================== Pokemon Database ===================== //

  return {
    pokemonIndexList,
    fetchPokemonIndexList,
    pokemonDatabase,
  }
})
