import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&display=swap');

  body {
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    padding: 0;
    margin: 0;

    &, * {
      font-family: 'Raleway', sans-serif;
    }
  }

  a {
    text-decoration: none;
    color: #aaa;
    padding: .4em 1em;
    min-width: 200px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    background: #fff;
    border-radius: .4em;
    box-shadow: 0 0 8px rgba(0,0,0,10%);
    transition: .3s;

    &:hover {
      color: #004444;
    }
  }
`;

export default GlobalStyle;
