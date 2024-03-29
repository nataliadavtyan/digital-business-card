import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body, html {
        margin: 0;
        padding: 0;
    }

    body {
        display: flex;
        justify-content: start;
        align-items: center;
        height: 100vh;
        background: #23252C;
        font-family: Inter, sans-serif;
        color: #ffffff;
    }

    h1, h2, p {
        margin: 0;
    }
`