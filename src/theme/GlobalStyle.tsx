import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        height: 100%;
    }

    #root {
        display: flex;
        flex-direction: column;
    }
`