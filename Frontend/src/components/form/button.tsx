import { FC } from 'react'
import { ContainerButton } from './style'
import { IButtonPropsComponent } from '../../utils/interfaces/components/button'

const Button: FC<IButtonPropsComponent> = ({
  background,
  title,
  color,
  width,
  height,
  weight,
  ...rest
}) => {
  return (
    <ContainerButton
      background={background}
      color={color}
      width={width}
      weight={weight}
      height={height}
      {...rest}
    >
      {title}
    </ContainerButton>
  )
}

export { Button }
