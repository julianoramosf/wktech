import styled from 'styled-components'

const PrincipalContainer = styled.div`
  .box-principal {
    width: 300px;
  }

  .header-drawer {
    display: flex;
    padding: 1rem;
    align-items: center;
    width: 300px;
    justify-content: space-between;
    height: 4.5rem;
    background-color: var(--white);
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

    span {
      font: 600 19px var(--font);
      color: var(--dark);
    }

    button {
      svg {
        font-size: 22px;
        color: var(--light);
      }
    }
  }

  .content {
    padding: 1rem;
  }

  @media (max-width: 767px) {
    .box-principal {
      width: 100vw;
    }

    .header-drawer {
      width: 100vw;
    }
  }
`

export { PrincipalContainer }
