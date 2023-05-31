import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { FC } from 'react'
import { PrincipalContainer } from './style'
import { RiCloseFill } from 'react-icons/ri'
import { useControlDrawer } from '../../context/controlDrawer'
import { Button } from '../form/button'
import { IDrawerPropsComponent } from '../../utils/interfaces/components/drawer'

const DrawerComponent: FC<IDrawerPropsComponent> = ({
  children,
  iconOrTextOpenDrawer,
  width,
  height,
  color,
  background,
  title,
}) => {
  const { controlDrawer, setControlDrawer } = useControlDrawer()
  const [state, setState] = React.useState({
    right: false,
  })

  const handleClose = () => {
    setState({
      ...state,
      right: false,
    })
  }

  const handleOpen = () => {
    setControlDrawer(true)
    setState({
      ...state,
      right: true,
    })
  }

  React.useEffect(() => {
    if (!controlDrawer) {
      handleClose()
    }
  }, [controlDrawer])

  const content = () => (
    <PrincipalContainer>
      <Box className="box-principal" role="presentation">
        <div className="header-drawer">
          <span>{title}</span>
          <Button
            background={'transparent'}
            title={<RiCloseFill />}
            color={''}
            width={'auto'}
            height={'auto'}
            weight={0}
            onClick={handleClose}
          />
        </div>
        <div className="content">{children}</div>
      </Box>
    </PrincipalContainer>
  )

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            background={background}
            title={iconOrTextOpenDrawer}
            color={color}
            width={width}
            height={height}
            onClick={handleOpen}
            weight={600}
          />
          <Drawer anchor={anchor} open={state[anchor]} onClose={handleClose}>
            {content()}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

export { DrawerComponent }
