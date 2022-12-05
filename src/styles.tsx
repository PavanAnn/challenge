import { createGlobalStyle } from 'styled-components'

export const GlobalStyle =  createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
} 

*:focus {
  outline: 0;
}

html {
  box-sizing: border-box;
}

body {
  font-weight: 300;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  letter-spacing: .1px;
  text-rendering: optimizeLegibility;
}
@media (max-width: 991px){
  body, html {
      overflow-x: hidden;
  }
}

button {
  cursor: pointer;
  border: none;
}

a {
  text-decoration: none;
}


.row {
  > div{
      padding-right:10px;
      padding-left:10px;
    }
}

.ps__rail-y {
  z-index: 3;
}

`;
