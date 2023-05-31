import styled from 'styled-components'

const ContainerAll = styled.section`
  display: flex;
  gap: 2rem;
  transition: 0.4s;
  background-color: var(--white);
  position: relative;
  height: 100vh;
`

const Content = styled.div`
  height: fit-content;
  padding: 1rem;
  margin-top: 6rem;
  width: 85vw;
  margin: 2rem 2rem 0rem 0rem;
`

export { ContainerAll, Content }
