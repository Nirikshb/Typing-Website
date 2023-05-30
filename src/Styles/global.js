//coming from styled components
import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
body{
    background = black;
    color = white;
}

.upper-menu{
    display : flex;
    width : 1000px;
    margin-left : auto;
    margin-right : auto;
    font-size : 1.4rem;
    justify-content : space-between;
    padding : 0.5rem;
}

.modes{
    display : flex;
    gap : 0.4rem;
}

.time-mode:hover{
    color : green;
    cursor : pointer;
}


.correct{
    color : green
}

.incorrect{
    color : red
}

.upper-menu{
    display : flex;
    width : 1000px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.35rem;
    justify-content:space-between;
    padding:0.5rem;
}

.modes{
    display : flex;
    gap:0.2rem;
}

.time-mode:hover{
    color:green;
    cursor:pointer;
}

`