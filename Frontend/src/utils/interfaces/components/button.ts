import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonPropsComponent
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string
  title: any | ReactNode
  color: string
  width: string
  height: string
  weight: number
}
