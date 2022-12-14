import React, { ReactElement } from 'react'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import { render, RenderOptions } from '@testing-library/react'

// eslint-disable-next-line @typescript-eslint/ban-types
type CustomRenderProps = {} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { customRender as render }
