import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = Pick<
  ButtonProps,
  | 'size'
  | 'variant'
  | 'mb'
  | 'mt'
  | 'iconPosition'
  | 'fullWidth'
  | 'radius'
  | 'color'
>

const wrapperModifiers = {
  sm: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxs};
    height: 25px;

    svg {
      font-size: ${theme.font.sizes.sm};
    }
  `,
  md: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xs};
    height: 48px;

    svg {
      font-size: ${theme.font.sizes.lg};
    }
  `,
  lg: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.md};
    height: 60px;

    svg {
      font-size: ${theme.font.sizes.lg};
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  iconLeft: (theme: DefaultTheme) => css`
    svg {
      + span {
        margin-left: ${theme.spacing.nano};
      }
    }
  `,
  iconRight: (theme: DefaultTheme) => css`
    flex-direction: row-reverse;

    svg {
      + span {
        margin-right: ${theme.spacing.nano};
      }
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    &:disabled {
      background-color: ${theme.colors.neutral[600]};
      border-color: ${theme.colors.neutral[600]};
      color: ${theme.colors.base.white};
      cursor: not-allowed;
    }
  `
}

const variantModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary[400]};
    color: ${theme.colors.base.white};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.primary[600]};
    }
  `,
  'primary-outline': (theme: DefaultTheme) => css`
    background: ${theme.colors.base.white};
    border-color: ${theme.colors.primary[400]};
    color: ${theme.colors.primary[400]};

    &:hover,
    &:focus,
    &:active {
      background: ${theme.colors.primary[100]};
      border-color: ${theme.colors.primary[600]};
      color: ${theme.colors.primary[600]};
    }
  `,
  'primary-link': (theme: DefaultTheme) => css`
    background: transparent;
    border: none;
    color: ${theme.colors.primary[400]};

    &:hover,
    &:focus,
    &:active {
      color: ${theme.colors.primary[600]};
    }
  `,
  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.danger[400]};
    color: ${theme.colors.base.white};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.danger[600]};
    }
  `,
  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.warning[400]};
    color: ${theme.colors.base.white};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.warning[600]};
    }
  `,
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.success[400]};
    color: ${theme.colors.base.white};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.success[600]};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size,
    variant,
    mt,
    mb,
    iconPosition,
    fullWidth,
    disabled,
    radius
  }) => css`
    align-items: center;
    border: ${theme.border.width.md} solid transparent;
    border-radius: ${radius ? theme.border.radius[radius] : 0};
    cursor: pointer;
    display: flex;
    font-family: ${theme.font.family.heading};
    font-weight: ${theme.font.weight.bold};
    justify-content: center;
    margin-bottom: ${mb ? theme.spacing[mb] : 0};
    margin-top: ${mt ? theme.spacing[mt] : 0};
    padding-left: ${theme.spacing.sm};
    padding-right: ${theme.spacing.sm};
    text-decoration: none;
    text-transform: uppercase;

    ${!!variant && variantModifiers[variant](theme)};
    ${!!size && wrapperModifiers[size](theme)};
    ${iconPosition == 'left' && wrapperModifiers.iconLeft(theme)};
    ${iconPosition == 'right' && wrapperModifiers.iconRight(theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${disabled && wrapperModifiers.disabled(theme)};
  `}
`
