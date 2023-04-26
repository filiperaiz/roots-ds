import styled, { css } from 'styled-components'

import { TextProps } from '.'

type WrapperProps = Omit<TextProps, 'children'>

export const Wrapper = styled.p<WrapperProps>`
  ${({ theme, color, align, size, mt, mb, bold }) => css`
    color: ${color ? color : theme.colors.base.black};
    font-family: ${theme.font.family};
    font-size: ${size ? theme.font.size[size] : theme.font.size.md};
    font-weight: ${bold ? theme.font.weight.bold : theme.font.weight.regular};
    line-height: ${theme.font.lineHeight.md};
    margin-bottom: ${mb ? theme.spacing[mb] : 0};
    margin-top: ${mt ? theme.spacing[mt] : 0};
    text-align: ${align};
  `}
`
