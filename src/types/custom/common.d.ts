type IndexList = {
  count: number
  next: string | null
  previous: string | null
  results: Index[]
}

type Index = {
  name: string
  url: string
}
