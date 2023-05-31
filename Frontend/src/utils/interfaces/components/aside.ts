import { ReactNode } from 'react'

export interface IAsideLinksPropsComponent {
  id: number
  name: string
  redirect?: string
  icon: ReactNode
  sublinks: any[]
  permission: string[]
}

export interface ISublinkPropsComponent {
  id: number
  name: string
  redirect: string
  ref: string
  permission: string[]
}
