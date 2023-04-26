import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-content: center;
    align-items: center;
    background-color: ${theme.colors.base.white};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0 ${theme.spacing.sm};
    width: 100%;
  `}
`

export const Spinner = styled.div`
  ${({ theme }) => css`
    animation: rotation 1s linear infinite;
    border: ${theme.border.width.lg} solid ${theme.colors.neutral[400]};
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    height: 50px;
    margin-bottom: ${theme.spacing.xxxs};
    position: relative;
    width: 50px;

    &:after {
      background: ${theme.colors.primary[400]};
      border-radius: 50%;
      box-sizing: border-box;
      content: '';
      height: 16px;
      left: 0;
      position: absolute;
      top: 0;
      transform: translate(-50%, 50%);
      width: 16px;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`

export const TextLoader = styled.h2`
  ${({ theme }) => css`
    --text: 'Aguarde';
    color: ${theme.colors.primary[400]};
    font-size: ${theme.font.sizes.md};
    height: 36px;
    margin-bottom: ${theme.spacing.lg};
    text-align: center;
    width: 100%;

    &:before {
      animation: fade 5s linear infinite;
      content: '';
      display: block;
    }

    @keyframes fade {
      0% {
        content: var(--text);
      }
      20% {
        content: var(--text) '.';
      }
      40% {
        content: var(--text) '..';
      }
      60% {
        content: var(--text) '..';
      }
      80% {
        content: var(--text)'...';
      }
      100% {
        content: var(--text)'...';
      }
    }
  `}
`
