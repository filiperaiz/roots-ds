import styled, { css } from 'styled-components'

import { TextProps } from '.'

type WrapperProps = Omit<TextProps, 'children'>

export const Wrapper = styled.p<WrapperProps>`
  ${({ theme, color, align, size, mt, mb, bold }) => css`
    color: ${color ? color : theme.colors.black};
    font-family: ${theme.font.family.body};
    font-size: ${size ? theme.font.sizes[size] : theme.font.sizes.xs};
    font-weight: ${bold ? theme.font.weight.bold : theme.font.weight.normal};
    line-height: ${theme.font.lineHeights.md};
    margin-bottom: ${mb ? theme.spacing[mb] : 0};
    margin-top: ${mt ? theme.spacing[mt] : 0};
    text-align: ${align};
  `}
`
