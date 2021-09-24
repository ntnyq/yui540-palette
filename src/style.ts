import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { bgColor, selectionColor } from '@/constants/theme'
import bgImage from '@/assets/bg.png'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;

    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  body {
    background-color: ${bgColor};
    background-image: url(${bgImage});
    background-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
  }

  ::selection {
    background-color: ${selectionColor};
    color: #fff;
  }
`
