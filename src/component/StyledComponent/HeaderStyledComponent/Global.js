import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/csse2?family=poppins:wght@300;400;600;700&display=swap');

    *{
        box-sizing:border-box;
    }

    body{

        background:#fff;
        font-family: 'poppins;, sans-serif;
        font-size:1.15em;
        margin:0;
        padding:0
    }
    img{
        max-width:100%;
    }
`