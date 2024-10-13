export type apiState<T> = {
  data: T
  loading: boolean
  error: string | null
}
