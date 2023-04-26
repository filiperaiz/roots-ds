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
    padding: ${theme.spacing.nano};
    text-align: center;

    h5 {
      color: ${theme.colors.base.black};
      font-family: ${theme.font.family.heading};
      font-size: ${theme.font.sizes.xs};
      font-weight: ${theme.font.weight.bold};
      line-height: ${theme.font.lineHeights.sm};
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
    padding: ${theme.spacing.xxs} 0;
  `}
`
