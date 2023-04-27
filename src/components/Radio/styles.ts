import styled, { css, DefaultTheme } from 'styled-components'

import { RadioProps } from '.'

const wrapperModifiers = {
  danger: (theme: DefaultTheme) => css`
    ${Input} {
      background-color: ${theme.colors.base.white};
      border-color: ${theme.colors.danger[400]};

      &:before {
        opacity: 0;
      }
    }
    ${Label} {
      color: ${theme.colors.danger[400]};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Input} {
      background-color: ${theme.colors.neutral[100]};
      border-color: ${theme.colors.neutral[600]};
      color: ${theme.colors.base.white};
      cursor: not-allowed;

      &:before {
        border-color: ${theme.colors.neutral[600]};
      }
    }
    ${Label} {
      color: ${theme.colors.neutral[600]};
      cursor: not-allowed;
    }
  `
}

export const Input = styled.input`
  ${({ theme }) => css`
    align-items: center;
    appearance: none;
    border: ${theme.border.width.md} solid ${theme.colors.neutral[400]};
    border-radius: ${theme.border.radius.circle};
    cursor: pointer;
    display: flex;
    height: 20px;
    justify-content: center;
    outline: none;
    position: relative;
    width: 20px;

    &:before {
      content: '';
      border-radius: ${theme.border.radius.circle};
      height: 10px;
      opacity: 0;
      position: absolute;
      background: ${theme.colors.primary[400]};
      top: 3px;
      width: 10px;
    }

    &:hover {
      border-color: ${theme.colors.primary[400]};
      transition: ${theme.transition.fast};
    }

    &:checked {
      background: ${theme.colors.base.white};
      border-color: ${theme.colors.primary[400]};

      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.base.black};
    cursor: pointer;
    flex: 1;
    font-size: ${theme.font.size.sm};
    line-height: ${theme.font.lineHeight.md};
    padding-left: ${theme.spacing.s12};
  `}
`
type WrapperProps = Pick<RadioProps, 'disabled' | 'error' | 'mt' | 'mb'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error, mt, mb }) => css`
    align-items: center;
    display: flex;
    margin-bottom: ${mb ? theme.spacing[mb] : 0};
    margin-top: ${mt ? theme.spacing[mt] : 0};

    ${disabled && wrapperModifiers.disabled(theme)}
    ${error && wrapperModifiers.danger(theme)}
  `}
`
