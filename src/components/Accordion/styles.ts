import styled, { css } from 'styled-components'

import { AccordionProps } from '.'

type WrapperProps = Pick<AccordionProps, 'mb' | 'mt' | 'active'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, mb, mt }) => css`
    margin-top: ${mt ? theme.spacing[mt] : 0};

    &:not(:last-child) {
      border-bottom: ${theme.border.width.sm} solid ${theme.colors.neutral[100]};
      margin-bottom: ${mb ? theme.spacing[mb] : 0};
      padding-bottom: ${theme.spacing.s16};
    }
  `}
`

export const Title = styled.h4<WrapperProps>`
  ${({ theme, active }) => css`
    align-items: center;
    color: ${active ? theme.colors.primary[400] : theme.colors.base.black};
    cursor: pointer;
    display: flex;
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.bold};
    justify-content: space-between;
    line-height: ${theme.font.lineHeight.sm};
    padding-bottom: ${active ? theme.spacing.s16 : 0};

    &:hover,
    &:focus {
      color: ${theme.colors.primary[400]};

      &:after {
        border-color: ${theme.colors.primary[400]};
      }
    }

    &:after {
      border: ${theme.border.width.md} solid;
      border-color: ${active
        ? theme.colors.primary[400]
        : theme.colors.base.black};
      border-left: 0;
      border-top: 0;
      content: '';
      height: 6px;
      transform: rotate(${active ? '-135deg' : '45deg'});
      width: 6px;
    }
  `}
`

export const Content = styled.div<WrapperProps>`
  ${({ theme, active }) => css`
    background-color: ${theme.colors.base.white};
    display: ${active ? 'block' : 'none'};
    font-size: ${theme.font.size.xl};
  `}
`
