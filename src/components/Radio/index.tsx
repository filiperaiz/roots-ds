import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

type SpacingProps =
  | 's0'
  | 's2'
  | 's8'
  | 's12'
  | 's16'
  | 's20'
  | 's32'
  | 's40'
  | 's48'
  | 's64'
  | 's80'
  | 's96'
  | 's128'
  | 's160'
  | 's192'
  | 's224'
  | 's256'

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
  mt = 's0',
  mb = 's0',
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
