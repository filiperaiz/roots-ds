import styled, { css } from 'styled-components'

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TabLinks = styled.ul`
  display: inline-flex;
  list-style: none;
`

type WrapperProps = {
  active: boolean
}

export const Wrapper = styled.li<WrapperProps>`
  ${({ theme, active }) => css`
    border-bottom: ${theme.border.width.lg} solid
      ${active ? theme.colors.primary[400] : theme.colors.neutral[100]};
    cursor: pointer;
    flex-grow: 1;
    padding: ${theme.spacing.s8};
    text-align: center;

    h5 {
      color: ${theme.colors.base.black};
      font-family: ${theme.font.family};
      font-size: ${theme.font.size.md};
      font-weight: ${theme.font.weight.bold};
      line-height: ${theme.font.lineHeight.sm};
    }

    &:hover {
      background-color: ${theme.colors.neutral[100]};
      transition: ${theme.transition.fast};
    }
  `}
`

export const TabContent = styled.div<WrapperProps>`
  ${({ theme, active }) => css`
    display: ${active ? 'flex' : 'none'};
    padding: ${theme.spacing.s20} 0;
  `}
`
