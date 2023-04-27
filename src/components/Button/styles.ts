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
  | 'onlyIcon'
>

const wrapperModifiers = {
  sm: (theme: DefaultTheme, onlyIcon: any) => css`
    font-size: ${theme.font.size.sm};
    height: 32px;
    ${onlyIcon &&
    css`
      width: 32px;
    `}

    svg {
      font-size: ${theme.font.size.xl};
    }
  `,
  md: (theme: DefaultTheme, onlyIcon: any) => css`
    font-size: ${theme.font.size.md};
    height: 44px;

    ${onlyIcon &&
    css`
      width: 44px;
    `}

    svg {
      font-size: ${theme.font.display.xs};
    }
  `,
  lg: (theme: DefaultTheme, onlyIcon: any) => css`
    font-size: ${theme.font.size.lg};
    height: 56px;

    ${onlyIcon &&
    css`
      width: 56px;
    `}

    svg {
      font-size: ${theme.font.display.sm};
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  iconLeft: (theme: DefaultTheme) => css`
    svg {
      + span {
        margin-left: ${theme.spacing.s8};
      }
    }
  `,
  iconRight: (theme: DefaultTheme) => css`
    flex-direction: row-reverse;

    svg {
      + span {
        margin-right: ${theme.spacing.s8};
      }
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    &:disabled {
      background-color: ${theme.colors.neutral[300]};
      border-color: ${theme.colors.neutral[300]};
      color: ${theme.colors.base.white};
      cursor: not-allowed;
    }
  `
}

const variantModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary[400]};
    border-color: ${theme.colors.primary[400]};
    color: ${theme.colors.base.white};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.primary[500]};
      border-color: ${theme.colors.primary[500]};
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
      border-color: ${theme.colors.primary[500]};
      color: ${theme.colors.primary[500]};
    }
  `,
  'primary-link': (theme: DefaultTheme) => css`
    background: ${theme.colors.base.white};
    border: none;
    color: ${theme.colors.primary[400]};

    &:hover,
    &:focus,
    &:active {
      background: ${theme.colors.primary[100]};
      border-color: ${theme.colors.primary[400]};
      color: ${theme.colors.primary[500]};
    }
  `,
  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.danger[400]};
    border-color: ${theme.colors.danger[400]};
    color: ${theme.colors.base.white};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.danger[500]};
      border-color: ${theme.colors.danger[500]};
    }
  `,
  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.warning[400]};
    border-color: ${theme.colors.warning[400]};
    color: ${theme.colors.base.white};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.warning[500]};
      border-color: ${theme.colors.warning[500]};
    }
  `,
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.success[400]};
    border-color: ${theme.colors.success[400]};
    color: ${theme.colors.base.white};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.success[500]};
      border-color: ${theme.colors.success[500]};
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
    radius,
    onlyIcon
  }) => css`
    align-items: center;
    border: ${theme.border.width.md} solid transparent;
    border-radius: ${radius ? theme.border.radius[radius] : 0};
    cursor: pointer;
    display: inline-flex;
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.bold};
    justify-content: center;
    margin-bottom: ${mb ? theme.spacing[mb] : 0};
    margin-top: ${mt ? theme.spacing[mt] : 0};
    padding: ${!onlyIcon ? theme.spacing.s16 : 0};
    text-decoration: none;
    transition: ${theme.transition.fast};

    ${!!variant && variantModifiers[variant](theme)};
    ${!!size && wrapperModifiers[size](theme, onlyIcon)};
    ${iconPosition == 'left' && wrapperModifiers.iconLeft(theme)};
    ${iconPosition == 'right' && wrapperModifiers.iconRight(theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${disabled && wrapperModifiers.disabled(theme)};
  `}
`
