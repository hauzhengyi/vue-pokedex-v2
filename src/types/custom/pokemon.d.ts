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

type Sprites = {}
