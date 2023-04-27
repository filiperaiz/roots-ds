import styled, { css, DefaultTheme } from 'styled-components'

import { CheckboxProps } from '.'

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
  `,
  isIndeterminate: () => css`
    ${Input} {
      &:before {
        height: 0px;
        top: 8px;
        transform: rotate(0);
        width: 8px;
      }
    }
  `
}

export const Input = styled.input`
  ${({ theme }) => css`
    align-items: center;
    appearance: none;
    border: ${theme.border.width.sm} solid ${theme.colors.neutral[300]};
    border-radius: ${theme.border.radius.xs};
    cursor: pointer;
    display: flex;
    height: 20px;
    justify-content: center;
    outline: none;
    position: relative;
    width: 20px;

    &:before {
      border: 2px solid ${theme.colors.base.white};
      border-left: 0;
      border-top: 0;
      content: '';
      height: 9px;
      opacity: 0;
      position: absolute;
      top: 2px;
      transform: rotate(45deg);
      transition: ${theme.transition.fast};
      width: 4px;
    }

    &:hover {
      border-color: ${theme.colors.primary[400]};
      transition: ${theme.transition.fast};
    }

    &:checked {
      background: ${theme.colors.primary[400]};
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
type WrapperProps = Pick<
  CheckboxProps,
  'disabled' | 'error' | 'mt' | 'mb' | 'isIndeterminate'
>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error, mt, mb, isIndeterminate }) => css`
    align-items: flex-start;
    display: flex;
    margin-bottom: ${mb ? theme.spacing[mb] : 0};
    margin-top: ${mt ? theme.spacing[mt] : 0};

    ${disabled && wrapperModifiers.disabled(theme)}
    ${isIndeterminate && wrapperModifiers.isIndeterminate()}
    ${error && wrapperModifiers.danger(theme)}
  `}
`
