import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik'
  }
  html, body, #root {
    height: 100%;
    box-sizing: border-box;
    background-color: #ffde59;

    -webkit-font-smoothing: antialiased
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`

export default GlobalStyle;