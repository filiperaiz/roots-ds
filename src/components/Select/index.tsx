import React, { SelectHTMLAttributes } from 'react'

import { SpacingProps } from 'types/generics'

import * as S from './styles'

export type SelectProps = {
  className?: string
  label?: string
  defaultOptionText?: string
  id: string
  options: Array<{ label: string; value: string }>
  errorMessage?: string | React.ReactNode | Array<string>
  disabled?: boolean
  value?: string | ReadonlyArray<string>
  mt?: SpacingProps
  mb?: SpacingProps
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({
  className,
  id,
  defaultOptionText = 'Selecione uma opção',
  options,
  errorMessage,
  label,
  disabled,
  value = '',
  onChange,
  mb = 'xxxs',
  mt = '',
  ...props
}: SelectProps) => (
  <S.Wrapper
    data-id={`cbo-wrapper-${id}`}
    errorMessage={errorMessage}
    disabled={disabled}
    mb={mb}
    mt={mt}
  >
    {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
    <S.SelectWrapper>
      <S.Select
        className={className}
        id={id}
        disabled={disabled}
        value={value}
        onChange={onChange}
        {...props}
      >
        <S.Option value="" hidden>
          {defaultOptionText}
        </S.Option>
        {options.map((option) => {
          const [key, optionValue] = Object.entries(option)
          return (
            <S.Option key={optionValue[1]} value={optionValue[1]}>
              {key[1]}
            </S.Option>
          )
        })}
      </S.Select>
    </S.SelectWrapper>

    {!!errorMessage && <S.Error>{errorMessage}</S.Error>}
  </S.Wrapper>
)

export default Select
