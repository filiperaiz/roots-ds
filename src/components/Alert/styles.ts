import styled, { css, DefaultTheme } from 'styled-components'

import { AlertProps } from '.'

export type WrapperProps = Pick<AlertProps, 'variant' | 'mb' | 'mt'>

const wrapperModifiers = {
  info: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary[400]};
  `,
  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.warning[400]};
  `,
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.success[400]};
  `,
  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.danger[400]};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, variant, mb, mt }) => css`
    align-content: flex-start;
    align-items: flex-start;
    border-radius: ${theme.border.radius.sm};
    display: flex;

    margin-bottom: ${mb ? theme.spacing[mb] : 0};
    margin-top: ${mt ? theme.spacing[mt] : 0};
    padding: ${theme.spacing.xxxs};
    position: relative;
    text-align: left;

    ${!!variant && wrapperModifiers[variant](theme)};

    .icon {
      color: ${theme.colors.base.white};
      font-size: ${theme.font.sizes.md};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      &.info {
        left: ${theme.spacing.xxxs};
      }

      &.close {
        cursor: pointer;
        right: ${theme.spacing.xxxs};
      }
    }
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.base.white};
    font-family: ${theme.font.family.body};
    font-size: ${theme.font.sizes.xs};
    font-weight: ${theme.font.weight.bold};
    padding: 0 ${theme.spacing.xs};
  `}
`
