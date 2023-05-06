import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.colors.gray900};
    color: ${(props) => props.theme.colors.gray900};
  }

  body, input, textarea, button {
   font-weight: 400;
  }
`;
