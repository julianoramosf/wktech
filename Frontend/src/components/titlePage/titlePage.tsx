import { FC, memo } from 'react'
import { PrincipalContainer } from './style'
import { ITitlePropsComponent } from '../../utils/interfaces/components/title'

const TitleComponent: FC<ITitlePropsComponent> = ({ title }) => {
  return <PrincipalContainer>{title}</PrincipalContainer>
}

export const TitlePage = memo(
  TitleComponent,
  (prevProps: { title: string }, nextProps: { title: string }) => {
    return Object.is(prevProps.title, nextProps.title)
  },
)
