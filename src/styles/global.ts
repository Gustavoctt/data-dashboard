import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 14px Montserrat, sans-serif;
    background: var(--gray-500);
  }

  :root{
    --white: #fff;

    --gray-500: #E5E5E5;
    --gray-600: #CEC6CE;
    --gray-700: #828282;
    
    --purple-700: #5D405C;
  }
`