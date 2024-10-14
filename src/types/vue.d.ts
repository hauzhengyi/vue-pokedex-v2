declare module '*.vue' {
  import { DefineComponent } from '@/types/vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
