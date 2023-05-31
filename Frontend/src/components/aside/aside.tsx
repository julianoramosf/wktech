import { FC } from 'react'
import { Container, PrincipalContainerAside } from '.'
import { Link } from 'react-router-dom'
import { RiDashboardFill } from 'react-icons/ri'

const Aside: FC = () => {
  return (
    <PrincipalContainerAside>
      <Container>
        <ul>
          <li>
            <RiDashboardFill />
            <Link to="/">Categoria</Link>
          </li>

          <li>
            <RiDashboardFill />
            <Link to="/produto">Produto</Link>
          </li>
        </ul>
      </Container>
    </PrincipalContainerAside>
  )
}

export { Aside }
