import React from "react";

import { ThemeProvider } from 'styled-components'

import themeDefault  from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  ),
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}




