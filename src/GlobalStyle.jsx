import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #EFEFEF;
    }
    *{
        box-sizing: border-box;
        font-family: 'Pretendard', sans-serif;
    }
    a {
        text-decoration: unset;
        color: #111;
    }
    input {
        padding: 0 8px;
        border: unset;
    }
    button {
        border: unset;
        cursor: pointer;
    }
`;

export default GlobalStyle;
