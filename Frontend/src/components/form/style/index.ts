import styled from 'styled-components'

interface IInputProps {
  color: string
  iconExist: boolean
}

interface IButtonProps {
  background: string
  color: string
  width: string
  height: string
  weight: number
}

const ContainerInput = styled.div<IInputProps>`
  div {
    display: flex;
    flex-direction: column !important;
    position: ${(props) => (props.iconExist ? 'relative' : 'initial')};

    svg {
      position: ${(props) => (props.iconExist ? 'absolute' : 'initial')};
      top: ${(props) => (props.iconExist ? '1.05rem' : '0rem')};
      left: ${(props) => (props.iconExist ? '.5rem' : '0rem')};
      color: var(--border-default);
      font-size: 18px;
    }
  }

  label {
    font: 400 0.857rem var(--font);
    color: ${(props) => props.color};
    margin-bottom: 6px;
  }

  input {
    display: block;
    width: 100%;
    height: 2.5rem;
    padding: ${(props) =>
      props.iconExist ? '0.438rem 1rem 0.438rem 1.9rem' : '0.438rem 1rem'};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.45;
    outline: none;
    font-family: var(--font);
    color: var(--light-50);
    background-color: var(--white);
    background-clip: padding-box;
    border: 1px solid var(--border-default);
    border-radius: 0.357rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    :focus {
      border: 1px solid var(--primary) !important;
      transition: 2s;

      ::placeholder {
        transform: translate(5px);
        transition: all 0.2s ease;
      }
    }
  }

  input[type='date']::-webkit-calendar-picker-indicator,
  input[type='datetime-local']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(0.8) brightness(60%) sepia(10%) saturate(90%)
      hue-rotate(260deg);
  }

  input::-webkit-input-placeholder {
    font-family: var(--font);
    color: var(--light);
    font-size: 0.9rem;
  }

  input:disabled {
    background: var(--light-disabled);
    cursor: not-allowed;
  }

  .error {
    color: var(--danger);
    font-family: var(--font);
    font-size: 13px;
  }
`

const ContainerButton = styled.button<IButtonProps>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: var(--border-radius-button);
  font-family: var(--font);
  font-weight: ${(props) => props.weight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  transition: all 0.2s ease-in-out 0ms;

  :hover {
    background-color: ${(props) => props.background};
    color: ${(props) => props.color};
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :active {
    transform: scale(0.95);
  }
`


const ContainerSelect = styled.div`
  div {
    display: flex;
    flex-direction: column !important;
  }

  .error {
    color: var(--danger);
    font-family: var(--font);
    font-size: 13px;
  }

  label {
    font: 400 0.857rem var(--font);
    color: ${(props) => props.color};
    margin-bottom: 6px;
  }

  select {
    display: block;
    width: 100%;
    height: 2.5rem;
    padding: 0.438rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.45;
    outline: none;
    font-family: var(--font);
    color: var(--light-50);
    background-color: var(--white);
    background-clip: padding-box;
    border: 1px solid var(--border-default);
    border-radius: 0.357rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    :focus {
      border: 1px solid var(--primary) !important;
      transition: 2s;
    }

    option:nth-child(1) {
      color: var(--light);
      font-family: var(--font);
    }
    :disabled {
      cursor: not-allowed;
    }
  }
`


export { ContainerInput, ContainerButton, ContainerSelect }
