import InputMask from 'react-input-mask'
import { NumberFormatBase } from 'react-number-format'

import styled, { css, DefaultTheme } from 'styled-components'

import { InputProps } from '.'

const wrapperModifiers = {
  danger: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.danger[400]};
    }

    ${Label},
    ${InputText},
    ${InputCurrency} {
      color: ${theme.colors.danger[400]};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      background-color: ${theme.colors.neutral[100]};
      border-color: ${theme.colors.neutral[600]};
    }

    ${Label},
    ${InputText},
    ${InputCurrency} {
      color: ${theme.colors.neutral[600]};
      cursor: not-allowed;
    }
  `
}

type WrapperProps = Pick<InputProps, 'disabled' | 'errorMessage' | 'mt' | 'mb'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, errorMessage, disabled, mt, mb }) => css`
    margin-top: ${mt ? theme.spacing[mt] : 0};
    position: relative;

    &:not(:last-child) {
      margin-bottom: ${mb ? theme.spacing[mb] : 0};
    }

    ${!!errorMessage && wrapperModifiers.danger(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

type InputWrapperProps = Pick<InputProps, 'capitalize'>

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, capitalize }) => css`
    background-color: ${theme.colors.base.white};
    border: ${theme.border.width.md} solid ${theme.colors.neutral[600]};
    border-radius: ${theme.border.radius.sm};
    display: flex;
    flex-direction: column;
    height: 48px;
    padding: 0 ${theme.spacing.s16};
    position: relative;

    &:focus-within {
      border-color: ${theme.colors.primary[400]};
    }

    ${InputText},
    ${InputCurrency} {
      background: transparent;
      border: 0;
      color: ${theme.colors.base.black};
      font-family: ${theme.font.family};
      font-size: ${theme.font.size.md};
      height: 100%;
      outline: none;
      text-transform: ${capitalize ? 'capitalize' : 'none'};
      width: 100%;
      z-index: 1;
    }
  `}
`

export const InputText = styled(InputMask)``

export const InputCurrency = styled(NumberFormatBase)``

export const Label = styled.label`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.white};
    color: ${theme.colors.base.black};
    display: block;
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.bold};
    line-height: ${theme.font.lineHeight.sm};
    margin-bottom: ${theme.spacing.s4};
  `}
`

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.danger[400]};
    font-size: ${theme.font.size.sm};
    margin-top: ${theme.spacing.s4};
  `}
`

export const ShowPassword = styled.div`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.neutral[600]};
    cursor: pointer;
    display: flex;
    font-size: ${theme.font.display.xs};
    height: 48px;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    z-index: ${theme.layers.base};
  `}
`
