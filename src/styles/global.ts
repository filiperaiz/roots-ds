import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`  
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    height: 100%;
    -ms-overflow-style: scrollbar;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.md};
    height: 100%;
  }
`
