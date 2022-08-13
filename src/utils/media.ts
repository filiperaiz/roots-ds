/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { css } from 'styled-components'

export const defaultBreakpoints = {
  xxlarge: '1400px',
  xlarge: '1200px',
  large: '992px',
  medium: '768px',
  small: '576px'
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
