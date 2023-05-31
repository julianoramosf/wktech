import { FormSelectProps } from 'react-bootstrap'

export interface ISelectProps extends FormSelectProps {
  label: string
  htmlFor: string
  isError?: boolean
  value?: string
  name?: string
  messageError?: string
  colorLabel: string
}
