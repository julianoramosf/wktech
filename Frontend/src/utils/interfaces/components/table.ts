import { ReactNode } from 'react'

export interface IDataTablePropsComponent {
  columns: any[]
  data: any[]
  id?: string
  messageEmpty: ReactNode
  expandableComponent?: (data: any) => any
  expand?: boolean
  viewAll?: boolean
}

export interface IColumnsView {
  name: string
  selector: (e: any) => any
  cell: any
  id?: string
  sortable?: boolean
}
