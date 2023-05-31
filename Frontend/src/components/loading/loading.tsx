import { FC } from 'react'
import { ILoadingPropsComponent } from '../../utils/interfaces/components/loading'
import { CircularProgress } from '@mui/material'

const Loading: FC<ILoadingPropsComponent> = ({ color, size }) => {
  return <CircularProgress style={{ color: `${color}` }} size={size} />
}

export { Loading }
