import type { ListItemType } from '@/types/common'

export type Pokemon = {
  id: number
  name: string
  order: number
  height: number
  weight: number
  base_experience: number
  types: PokemonType[]
  stats: PokemonStat[]
  abilities: PokemonAbility[]
  forms: ListItemType[]
  species: ListItemType
  sprites: Sprites
}

type PokemonType = {
  slot: number
  type: ListItemType
}

type PokemonStat = {
  base_stat: number
  effort: number
  stat: ListItemType
}

type PokemonAbility = {
  slot: number
  is_hidden: boolean
  ability: ListItemType
}

type Sprites = {}
