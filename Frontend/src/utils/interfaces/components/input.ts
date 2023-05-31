import { ReactNode } from 'react'
import { InputGroupProps } from 'react-bootstrap'

export interface IInputPropsComponent extends InputGroupProps {
  label: string
  htmlFor: string
  type: string
  isError?: any
  value?: string
  name?: string
  colorLabel: string
  disabled?: boolean
  mask?: string
  step?: string
  icon?: ReactNode
  iconExist?: boolean
}
