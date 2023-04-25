import InputMask from 'react-input-mask'
import { NumberFormatBase } from 'react-number-format'

import styled, { css, DefaultTheme } from 'styled-components'

import { InputProps } from '.'

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.error[400]};
    }

    ${Label},
    ${InputText},
    ${InputCurrency} {
      color: ${theme.colors.error[400]};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      background-color: ${theme.colors.light[100]};
      border-color: ${theme.colors.light[700]};
    }

    ${Label},
    ${InputText},
    ${InputCurrency} {
      color: ${theme.colors.light[700]};
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

    ${!!errorMessage && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

type InputWrapperProps = Pick<InputProps, 'capitalize'>

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, capitalize }) => css`
    background-color: ${theme.colors.white};
    border: ${theme.border.width.md} solid ${theme.colors.light[700]};
    border-radius: ${theme.border.radius.sm};
    display: flex;
    flex-direction: column;
    height: 48px;
    padding: 0 ${theme.spacing.xxxs};
    position: relative;

    &:focus-within {
      border-color: ${theme.colors.primary[400]};
    }

    ${InputText},
    ${InputCurrency} {
      background: transparent;
      border: 0;
      color: ${theme.colors.black};
      font-family: ${theme.font.family.body};
      font-size: ${theme.font.sizes.xs};
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
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    display: block;
    font-family: ${theme.font.family.heading};
    font-size: ${theme.font.sizes.xs};
    font-weight: ${theme.font.weight.bold};
    line-height: ${theme.font.lineHeights.sm};
    margin-bottom: ${theme.spacing.min};
  `}
`

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.error[400]};
    font-size: ${theme.font.sizes.xxs};
    margin-top: ${theme.spacing.min};
  `}
`

export const ShowPassword = styled.div`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.light[700]};
    cursor: pointer;
    display: flex;
    font-size: ${theme.font.sizes.md};
    height: 48px;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    z-index: ${theme.layers.base};
  `}
`
