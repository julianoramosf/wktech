import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Form } from 'react-bootstrap'
import { ContainerInput } from './style'
import { IInputPropsComponent } from '../../utils/interfaces/components/input'

const InputBse: ForwardRefRenderFunction<
  HTMLInputElement,
  IInputPropsComponent
> = (
  {
    label,
    htmlFor,
    type,
    isError = null,
    value,
    name,
    colorLabel,
    disabled,
    mask,
    step,
    iconExist = false,
    icon,
    ...rest
  },
  ref,
) => {
  return (
    <ContainerInput color={colorLabel} iconExist={iconExist}>
      <Form.Group>
        {icon}
        <Form.Label htmlFor={htmlFor}>{label}</Form.Label>
        <Form.Control
          {...rest}
          disabled={disabled}
          type={type}
          ref={ref}
          id={htmlFor}
          value={value}
          name={name}
          mask={mask}
          step={step}
        />
      </Form.Group>

      {!!isError && <span className="error">{isError.message}</span>}
    </ContainerInput>
  )
}

export const Input = forwardRef(InputBse)
