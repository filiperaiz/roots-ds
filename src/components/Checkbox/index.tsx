/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { InputHTMLAttributes, useEffect, useState } from 'react'

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

export type CheckboxProps = {
  id: string
  value?: string | ReadonlyArray<string> | number
  isChecked?: boolean
  disabled?: boolean
  error?: boolean
  mt?: SpacingProps
  mb?: SpacingProps
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  id,
  value,
  onChange,
  children = '',
  isChecked = false,
  disabled = false,
  error = false,
  mb = '',
  mt = '',
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  // @ts-ignore
  const handleToggleCheck = (e) => {
    if (disabled) return
    if (e.target.type === 'checkbox') {
      setChecked(!checked)
    }
  }

  useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])

  return (
    <S.Wrapper
      data-id={`chk-wrapper-${id}`}
      disabled={disabled}
      error={error}
      mb={mb}
      mt={mt}
    >
      <S.Input
        onClick={handleToggleCheck}
        id={id}
        type="checkbox"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />

      {!!children && <S.Label htmlFor={id}>{children}</S.Label>}
    </S.Wrapper>
  )
}

export default Checkbox
