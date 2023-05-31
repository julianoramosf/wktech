import styled from 'styled-components'

const PrincipalContainer = styled.div`
  .container-open-register {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;

    .button-drawer {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      background-color: var(--primary);
      height: 2.5rem;
      width: 7rem;
      padding: 0.5rem;
      margin-top: 0.4rem;
      color: var(--white);
      border-radius: var(--border-radius-button);
      transition: var(--transition-hover-button);

      :hover {
        box-shadow: 0 4px 24px 0 rgba(34, 41, 15, 0.1);
      }
    }
  }

  @media (max-width: 767px) {
    .container-open-register {
      width: 100%;
      flex-direction: column;

      input {
        width: 21rem;
        height: 2.5rem !important;
      }

      .button-drawer {
        width: 21rem;
        height: 2.6rem;
        justify-content: center;

        span {
          font: 500 0.95rem var(--font);
        }
      }
    }
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 86vh;

  div.formdata{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    transition: var(--transition-hover-button);
    :hover {
      box-shadow: var(--button-action);
    }
  }
`

export { PrincipalContainer, Form }
