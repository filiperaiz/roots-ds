import styled, { css, DefaultTheme } from 'styled-components'

import { SelectProps } from '.'

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${SelectWrapper} {
      border-color: ${theme.colors.error[400]};

      &:after {
        border-color: ${theme.colors.error[400]};
      }
    }

    ${Label},
    ${Select} {
      color: ${theme.colors.error[400]};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${SelectWrapper} {
      background-color: ${theme.colors.light[100]};
      border-color: ${theme.colors.light[700]};
    }

    ${Label},
    ${SelectWrapper},
    ${Select} {
      color: ${theme.colors.light[700]};
      cursor: not-allowed;
    }
  `
}

type WrapperProps = Pick<SelectProps, 'disabled' | 'errorMessage' | 'mt' | 'mb'>

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

export const SelectWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: ${theme.border.width.md} solid ${theme.colors.light[700]};
    border-radius: ${theme.border.radius.sm};
    display: flex;
    flex-direction: column;
    height: 48px;
    position: relative;

    &:focus-within {
      border-color: ${theme.colors.primary[400]};
    }

    &:after {
      border: ${theme.border.width.md} solid ${theme.colors.light[700]};
      border-left: 0;
      border-top: 0;
      content: '';
      height: 8px;
      position: absolute;
      right: 18px;
      top: 37%;
      transform: translateY(-50%);
      transform: rotate(45deg);
      transition: ${theme.transition.fast};
      width: 8px;
    }
  `}
`

export const Select = styled.select`
  ${({ theme }) => css`
    appearance: none;
    background: transparent;
    border: 0;
    color: ${theme.colors.black};
    font-family: ${theme.font.family.body};
    font-size: ${theme.font.sizes.xs};
    height: 100%;
    outline: none;
    padding: 0 ${theme.spacing.xxxs};
    width: 100%;
    z-index: 1;
  `}
`

export const Option = styled.option`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xs};
  `}
`

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
