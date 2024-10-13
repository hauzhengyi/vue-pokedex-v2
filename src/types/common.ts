export type listType = {
  count: number
  next: string | null
  previous: string | null
  results: listItemType[]
}

export type listItemType = {
  name: string
  url: string
}
