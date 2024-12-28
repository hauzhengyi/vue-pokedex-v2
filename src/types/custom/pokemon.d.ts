type Pokemon = {
  id: number
  name: string
  order: number
  height: number
  weight: number
  base_experience: number
  types: PokemonType[]
  stats: PokemonStat[]
  abilities: PokemonAbility[]
  forms: IndexList[]
  species: IndexList
  sprites: Sprites
}

type PokemonType = {
  slot: number
  type: IndexList
}

type PokemonStat = {
  base_stat: number
  effort: number
  stat: IndexList
}

type PokemonAbility = {
  slot: number
  is_hidden: boolean
  ability: IndexList
}

type Sprites = {
  front_default: string
  other: {
    dream_world: {
      front_default: string
    }
    home: {
      front_default: string
    }
    'official-artwork': {
      front_default: string
    }
    showdown: {
      front_default: string
    }
  }
}
