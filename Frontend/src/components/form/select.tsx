import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Form } from 'react-bootstrap'
import { ContainerSelect } from './style'
import { ISelectProps } from '../../utils/interfaces/components/select'

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, ISelectProps> = (
  {
    label,
    htmlFor,
    isError = false,
    value,
    name,
    messageError,
    colorLabel,
    ...rest
  },
  ref,
) => {
  return (
    <ContainerSelect color={colorLabel}>
      <Form.Group>
        <label htmlFor={htmlFor}>{label}</label>
        <Form.Select
          {...rest}
          ref={ref}
          id={htmlFor}
          value={value}
          name={name}
        />
      </Form.Group>

      {isError && <span className="error">{messageError}</span>}
    </ContainerSelect>
  )
}

export const Select = forwardRef(SelectBase)
