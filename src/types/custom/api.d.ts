type ApiState<T> = {
  data: T | undefined
  loading: boolean
  success: boolean
  error: string | null
}
