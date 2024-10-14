export type ApiState<T> = {
  data: T | null
  loading: boolean
  success: boolean
  error: string | null
}
