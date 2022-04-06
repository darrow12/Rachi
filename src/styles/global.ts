import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :root {
      --blue: #0F9AFE;
      --white: #ffffff;
      --white-200-400: #EFF8FF;
      --gray: #6E7275;
      --gray-200: #293145;
      --gray-light: #DBDBDB;
    }

    body {
      background: var(--white);
      font-family: 'Sora', 'Inter', 'Roboto', 'Nunito', sans-serif;
    }
  }
`;