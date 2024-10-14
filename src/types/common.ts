export type ListType = {
  count: number
  next: string | null
  previous: string | null
  results: ListItemType[]
}

export type ListItemType = {
  name: string
  url: string
}
