/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { InputHTMLAttributes, useEffect, useState } from 'react'

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

export type CheckboxProps = {
  id: string
  value?: string | ReadonlyArray<string> | number
  isChecked?: boolean
  isIndeterminate?: boolean
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
  isIndeterminate = false,
  error = false,
  mt = 's0',
  mb = 's0',
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
      isIndeterminate={isIndeterminate}
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
