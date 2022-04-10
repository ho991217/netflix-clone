import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import "../Fonts/Font.css";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        font-family: 'Netflix Sans', Helvetica, Arial, sans-serif;
        --default-font-size: 16px;
        --netflix-red: #e50914;
        --default-black: #333;
        --default-white: #fff;
        --default-border-radius: 3px;
    }

    body {
        background-color: black;
        word-break: keep-all;
        -webkit-font-smoothing: antialiased;
        font-size: var(--default-font-size);
    }
`;
