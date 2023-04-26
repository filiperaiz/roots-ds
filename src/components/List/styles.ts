import styled, { css, DefaultTheme } from 'styled-components'

import { ListProps } from '.'

const wrapperModifiers = {
  circle: (theme: DefaultTheme) => css`
    li::before {
      border-radius: 50%;
      color: ${theme.colors.primary[400]};
      content: '●';
      font-size: ${theme.font.size.xl};
      margin-right: 10px;
    }
  `
}

type WrapperProps = Pick<ListProps, 'circle' | 'mb' | 'mt'>

export const Wrapper = styled.ul<WrapperProps>`
  ${({ theme, circle, mb, mt }) => css`
    margin-bottom: ${mb ? theme.spacing[mb] : 0};
    margin-top: ${mt ? theme.spacing[mt] : 0};

    ${circle && wrapperModifiers.circle(theme)};

    li {
      align-content: center;
      align-items: center;
      display: flex;
      justify-content: flex-start;
      padding-bottom: ${theme.spacing.s16};

      &:last-child {
        padding-bottom: 0;
      }
    }
  `}
`
