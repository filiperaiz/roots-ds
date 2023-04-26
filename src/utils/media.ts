/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { css } from 'styled-components'

export const defaultBreakpoints = {
  xxlarge: '1584px',
  xlarge: '1312px',
  large: '1056px',
  medium: '672px',
  small: '320px'
}

export function generateMedia(breakpoints = defaultBreakpoints) {
  const lessThan =
    (breakpoint) =>
    (...args) =>
      css`
        @media (max-width: ${breakpoints[breakpoint]}) {
          ${css(...args)}
        }
      `

  const greaterThan =
    (breakpoint) =>
    (...args) =>
      css`
        @media (min-width: ${breakpoints[breakpoint]}) {
          ${css(...args)}
        }
      `

  return Object.assign({
    lessThan,
    greaterThan
  })
}

export default generateMedia()
