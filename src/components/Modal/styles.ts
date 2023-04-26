import { MdClose } from 'react-icons/md'

import styled, { css } from 'styled-components'
import media from 'utils/media'

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.white};
    border-radius: ${theme.border.radius.sm};
    display: flex;
    flex-direction: column;
    height: auto;
    left: 50%;
    max-height: calc(100vh - 80px);
    max-width: 720px;
    min-height: 176px;
    overflow: hidden;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: ${theme.layers.modal};

    ${media.lessThan('small')`
        border-radius: 0;
        bottom: 0;
        left: 0;
        max-width: 100%;
        top: initial;
        transform: translate(0);
    `}
  `}
`

export const CloseButton = styled(MdClose)`
  ${({ theme }) => css`
    color: ${theme.colors.base.black};
    cursor: pointer;
    font-size: ${theme.font.sizes.md};
    position: absolute;
    right: ;
    right: ${theme.spacing.xxs};
    top: ${theme.spacing.xxs};
    z-index: ${theme.layers.base};
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.base.black};
    font-family: ${theme.font.family.heading};
    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.weight.bold};
    line-height: ${theme.font.lineHeights.sm};
    padding: ${theme.spacing.xxs};
    width: 100%;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: ${theme.spacing.xxs};
    position: relative;
  `}
`
