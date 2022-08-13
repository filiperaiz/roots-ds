import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

type SpacingProps =
  | ''
  | 'min'
  | 'nano'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxl'

export type RadioProps = {
  id: string
  text: string
  value?: string | ReadonlyArray<string> | number
  checked?: boolean
  disabled?: boolean
  error?: boolean
  mt?: SpacingProps
  mb?: SpacingProps
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  id,
  value,
  onChange,
  checked = false,
  onClick,
  text,
  disabled = false,
  error = false,
  mb = '',
  mt = '',
  ...props
}: RadioProps) => (
  <S.Wrapper
    data-id={`rdo-wrapper-${id}`}
    disabled={disabled}
    error={error}
    mb={mb}
    mt={mt}
  >
    <S.Input
      onClick={onClick}
      id={id}
      type="radio"
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
    {!!text && <S.Label htmlFor={id}>{text}</S.Label>}
  </S.Wrapper>
)

export default Radio
