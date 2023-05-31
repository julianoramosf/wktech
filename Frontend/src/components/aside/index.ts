import styled from 'styled-components'

interface IControlAsideProps {
  open?: boolean
}

const PrincipalContainerAside = styled.aside<IControlAsideProps>`
  width: 285px;
  height: 100vh;
  background: var(--dark-gradient);
  color: var(--white);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0 0 15px 0 rgb(34 41 47 / 35%);
  position: relative;
  transition: 0.4s;
  z-index: 3;
`

const Container = styled.div<IControlAsideProps>`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 1rem;

    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      a {
        display: flex;
        align-items: center;
        width: 100%;
        color: var(--white);
        text-decoration: none;
        cursor: pointer;
        position: relative;
        transition: 0.2s;
        font: 400 15.5px var(--font);

        :hover {
          color: var(--primary);
        }
      }
    }
  }
`

export { PrincipalContainerAside, Container }
