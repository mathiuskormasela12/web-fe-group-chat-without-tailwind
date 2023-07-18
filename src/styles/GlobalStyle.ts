// ========== Global Style
// import all packages
import { createGlobalStyle } from 'styled-components'

// import fonts
import InterRegular from '../assets/fonts/Inter-Regular.ttf'
import InterBold from '../assets/fonts/Inter-Bold.ttf'

// import themes
import { Fonts } from '../themes'

const GlobalStyle = createGlobalStyle`

  @font-face {
    src: url(${InterRegular}) format('truetype');
    font-family: inter-regular;
  }

  @font-face {
    src: url(${InterBold}) format('truetype');
    font-family: inter-bold;
  }

  html {
    font-size: 16px;
    font-family: ${Fonts.base};
    background-color: white;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.6rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 2.2rem;
  }

  h5 {
    font-size: 2rem;
  }

  h6 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
  }

`

export default GlobalStyle
