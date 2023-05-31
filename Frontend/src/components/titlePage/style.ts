import styled from 'styled-components'

const PrincipalContainer = styled.h3`
  color: var(--dark);
  padding-right: 1rem;
  font: 500 1.5rem var(--font);
  position: absolute;
  top: 3.5rem;
  left: 20rem;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`

export { PrincipalContainer }
