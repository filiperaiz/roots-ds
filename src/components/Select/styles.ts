import styled, { css, DefaultTheme } from 'styled-components'

import { SelectProps } from '.'

const wrapperModifiers = {
  danger: (theme: DefaultTheme) => css`
    ${SelectWrapper} {
      border-color: ${theme.colors.danger[400]};

      &:after {
        border-color: ${theme.colors.danger[400]};
      }
    }

    ${Label},
    ${Select} {
      color: ${theme.colors.danger[400]};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${SelectWrapper} {
      background-color: ${theme.colors.neutral[100]};
      border-color: ${theme.colors.neutral[600]};
    }

    ${Label},
    ${SelectWrapper},
    ${Select} {
      color: ${theme.colors.neutral[600]};
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

    ${!!errorMessage && wrapperModifiers.danger(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

export const SelectWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.white};
    border: ${theme.border.width.md} solid ${theme.colors.neutral[600]};
    border-radius: ${theme.border.radius.sm};
    display: flex;
    flex-direction: column;
    height: 48px;
    position: relative;

    &:focus-within {
      border-color: ${theme.colors.primary[400]};
    }

    &:after {
      border: ${theme.border.width.md} solid ${theme.colors.neutral[600]};
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
    color: ${theme.colors.base.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.md};
    height: 100%;
    outline: none;
    padding: 0 ${theme.spacing.s16};
    width: 100%;
    z-index: 1;
  `}
`

export const Option = styled.option`
  ${({ theme }) => css`
    font-size: ${theme.font.size.md};
  `}
`

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
