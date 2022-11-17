import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #FBFBFB;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    color: ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
