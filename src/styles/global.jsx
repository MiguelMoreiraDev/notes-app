import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html {
        font-size: 62.5% /* 1rem = 10px */;
        min-width: 100%;
        min-height: 100vh;
    }
    
    a {
      text-decoration: none;
    }
    
    ul {
      list-style: none;
    }
    
    img {
      display: block;
      max-width: 100%;
      object-fit: cover;
    }

    button {
      cursor: pointer;
    }
    
    button,
    input,
    textarea {
      display: block;
      border: none;
      outline: none;
    }
    
`;
