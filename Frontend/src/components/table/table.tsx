import { FC } from 'react'
import { PrincipalContainer, Title } from './style'
import DataTable from 'react-data-table-component'
import { IDataTablePropsComponent } from '../../utils/interfaces/components/table'

const Table: FC<IDataTablePropsComponent> = ({
  columns,
  data,
  id,
  messageEmpty,
  expandableComponent,
  expand = false,
  viewAll = false,
}) => {
  return (
    <PrincipalContainer>
      <DataTable
        columns={columns}
        data={data}
        responsive
        className="table"
        pagination
        defaultSortFieldId={id}
        noDataComponent={
          <div className="title-null">
            <Title>{messageEmpty}</Title>
          </div>
        }
        expandableRowsComponent={expandableComponent}
        expandableRows={expand}
        expandableRowExpanded={() => viewAll}
      />
    </PrincipalContainer>
  )
}

export { Table }
