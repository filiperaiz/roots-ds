import styled, { css, DefaultTheme } from 'styled-components'

import { RadioProps } from '.'

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${Input} {
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.error[400]};

      &:before {
        opacity: 0;
      }
    }
    ${Label} {
      color: ${theme.colors.error[400]};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Input} {
      background-color: ${theme.colors.light[100]};
      border-color: ${theme.colors.light[700]};
      color: ${theme.colors.white};
      cursor: not-allowed;

      &:before {
        border-color: ${theme.colors.light[700]};
      }
    }
    ${Label} {
      color: ${theme.colors.light[700]};
      cursor: not-allowed;
    }
  `
}

export const Input = styled.input`
  ${({ theme }) => css`
    align-items: center;
    appearance: none;
    border: ${theme.border.width.md} solid ${theme.colors.primary[400]};
    border-radius: ${theme.border.radius.circle};
    cursor: pointer;
    display: flex;
    height: 24px;
    justify-content: center;
    outline: none;
    position: relative;
    width: 24px;

    &:before {
      border: 3px solid ${theme.colors.white};
      border-left: 0;
      border-top: 0;
      content: '';
      height: 8px;
      opacity: 0;
      position: absolute;
      top: 3px;
      transform: rotate(45deg);
      transition: ${theme.transition.fast};
      width: 5px;
    }

    &:hover {
      border-color: ${theme.colors.primary[700]};
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
    color: ${theme.colors.black};
    cursor: pointer;
    flex: 1;
    font-size: ${theme.font.sizes.xs};
    line-height: ${theme.font.lineHeights.md};
    padding-left: ${theme.spacing.xxxs};
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
    ${error && wrapperModifiers.error(theme)}
  `}
`
