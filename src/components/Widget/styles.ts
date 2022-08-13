import styled, { css } from 'styled-components'

import { WidgetProps } from '.'

type WrapperProps = Pick<WidgetProps, 'mb' | 'mt'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, mb, mt }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.sm};
    box-shadow: ${theme.shadow.sm};
    margin-bottom: ${mb ? theme.spacing[mb] : 0};
    margin-top: ${mt ? theme.spacing[mt] : 0};
    padding: ${theme.spacing.md};
    position: relative;
    width: 100%;
  `}
`
