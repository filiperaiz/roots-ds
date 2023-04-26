/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { InputHTMLAttributes, useEffect, useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

import formatCurrency from 'utils/formatCurrency'
import MasksInput from 'utils/masks'

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

type MaskProps = {
  mask: string
  maskPlaceholder: string
}

export type InputProps = {
  label?: string
  type?: string
  name?: string
  placeholder?: string
  disabled?: boolean
  value?: string
  id?: string
  errorMessage?: string | React.ReactNode | Array<string>
  currency?: boolean
  capitalize?: boolean
  mask?:
    | 'text'
    | 'cel'
    | 'tel'
    | 'cep'
    | 'cpf'
    | 'rg'
    | 'rne'
    | 'data'
    | 'currency'
    | 'cnh'
    | MaskProps
  mt?: SpacingProps
  mb?: SpacingProps
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({
  label = '',
  type = 'text',
  name = '',
  placeholder = ' ',
  disabled = false,
  value = '',
  id = '',
  onChange,
  onBlur = (event) => event,
  errorMessage = '',
  mask,
  currency = false,
  capitalize = false,
  mt = 's0',
  mb = 's16',
  ...props
}: InputProps) => {
  const [maskFormat, setMask] = useState('')
  const [maskPlaceholder, setMaskPlaceholder] = useState('')
  const [typeInput, setType] = useState(type)
  const [isFocused, setIsFocused] = useState(false)

  const handleChangeInputPassword = () => {
    if (typeInput === 'text') setType('password')

    if (typeInput === 'password') setType('text')
  }

  useEffect(() => {
    if (String(mask) in MasksInput) {
      // @ts-ignore
      setMask(MasksInput[mask].mask)
      // @ts-ignore
      setMaskPlaceholder(MasksInput[mask].maskPlaceholder)
    } else {
      if (typeof mask === 'string') {
        setMask(mask)
      }

      if (typeof mask === 'object') {
        setMask(mask.mask)
        setMaskPlaceholder(mask.maskPlaceholder)
      }
    }
  }, [mask])

  // @ts-ignore
  const beforeMaskedStateChange = (maskedState) => {
    if (maskedState.nextState.value === maskPlaceholder)
      maskedState.nextState.value = ''

    return maskedState.nextState
  }

  return (
    <S.Wrapper
      data-id={`ipt-wrapper-${id}`}
      errorMessage={errorMessage}
      disabled={disabled}
      mb={mb}
      mt={mt}
    >
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}

      <S.InputWrapper capitalize={capitalize}>
        {currency ? (
          <S.InputCurrency
            onChange={onChange}
            onBlur={(e) => {
              // @ts-ignore
              onBlur(e)
              setIsFocused(false)
            }}
            onFocus={() => setIsFocused(true)}
            aria-label={name}
            name={name}
            id={id}
            value={value}
            placeholder={isFocused ? 'R$ 0,00' : placeholder}
            disabled={disabled}
            // @ts-ignore
            format={formatCurrency}
            {...props}
          />
        ) : (
          <S.InputText
            type={type === 'password' ? typeInput : type}
            name={name}
            id={id}
            placeholder={isFocused ? maskPlaceholder : placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onBlur={(e) => {
              // @ts-ignore
              onBlur(e)
              setIsFocused(false)
            }}
            onFocus={() => setIsFocused(true)}
            autoComplete={value ? 'no' : ''}
            mask={maskFormat}
            maskPlaceholder={maskPlaceholder}
            aria-label={name}
            beforeMaskedStateChange={beforeMaskedStateChange}
            {...props}
          />
        )}

        {type === 'password' && (
          <S.ShowPassword onClick={handleChangeInputPassword}>
            {typeInput === 'password' ? <MdVisibilityOff /> : <MdVisibility />}
          </S.ShowPassword>
        )}
      </S.InputWrapper>

      {!!errorMessage && <S.Error>{errorMessage}</S.Error>}
    </S.Wrapper>
  )
}

export default Input
