import styled, { css, DefaultTheme } from 'styled-components'

import { HeadingProps } from '.'

const wrapperModifiers = {
  h1: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxl};
  `,
  h2: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xl};
  `,
  h3: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.lg};
  `,
  h4: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.md};
  `,
  h5: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.sm};
  `,
  h6: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xs};
  `
}

type WrapperProps = Omit<HeadingProps, 'children'>

export const Wrapper = styled.h1<WrapperProps>`
  ${({ theme, tag, color, align, mt, mb }) => css`
    color: ${color ? color : theme.colors.base.black};
    font-family: ${theme.font.family.heading};
    font-weight: ${theme.font.weight.bold};
    line-height: ${theme.font.lineHeights.md};
    margin-bottom: ${mb ? theme.spacing[mb] : 0};
    margin-top: ${mt ? theme.spacing[mt] : 0};
    text-align: ${align};

    ${!!tag && wrapperModifiers[tag](theme)}
  `}
`
