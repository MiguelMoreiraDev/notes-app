import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');


    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Inter", sans-serif;

    }
    
    html {
        font-size: 62.5% /* 1rem = 10px */;
        min-width: 100%;
        min-height: 100vh;
        -webkit-smoothing: antialiased;
    }

    body {
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
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

    label {
        display: block;
    }
    
    button,
    input,
    textarea {
      display: block;
      border: none;
      outline: none;
    }

    .content {
        max-width: 60rem;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .animeDown {
        opacity: 0;
        transform: translateY(2rem);
        animation: animeDown 1s forwards;
    }

    @keyframes animeDown {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animeRight {
        opacity: 0;
        transform: translateX(-2rem);
        animation: animeRight 1s forwards;
    }

    @keyframes animeRight {
        to {
            opacity: 1;
            transform: translateX(0);
        }    
    }

`;
