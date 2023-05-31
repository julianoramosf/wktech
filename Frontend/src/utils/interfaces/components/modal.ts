import { ReactNode } from 'react'

export interface IModalPropsComponent {
  children: ReactNode
  isOpen: boolean
  onRequestClose: () => void
  title: string
}

export interface IContentConfirmActionModalComponent {
  description: string
  small: string
  onClickAction: () => void
  onClickCloseModal: () => void
  isLoading: boolean
}
