import {createGlobalStyle} from 'styled-components'; //createGlobalStyle é uma função do pacote "styled-components" que permite criar estilos globais para a aplicação.

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
`;