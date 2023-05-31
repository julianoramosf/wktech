import { ReactNode } from 'react'

export interface IDrawerPropsComponent {
  children: ReactNode
  iconOrTextOpenDrawer: ReactNode
  width: string
  height: string
  background: string
  color: string
  title: string
}
