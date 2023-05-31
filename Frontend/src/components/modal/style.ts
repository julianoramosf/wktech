import styled from 'styled-components'

const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-150);

  span {
    font: 600 18px var(--font);
    color: var(--gray-400);
  }
`

const ContentModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.9rem;
  margin-top: 1rem;

  span {
    font: 500 1rem var(--font);
    color: var(--dark);
  }

  small {
    font: 400 0.8rem var(--font);
    color: var(--dark);

    b {
      color: var(--dark);
    }
  }

  div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;

    button {
      :hover {
        box-shadow: var(--button-action);
      }
    }
  }
`

export { HeaderTitle, ContentModalContainer }
