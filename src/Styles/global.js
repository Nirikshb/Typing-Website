import { createGlobalStyle } from "styled-components";

// Define global styles using createGlobalStyle
const GlobalStyles = createGlobalStyle`
  /* Define CSS variables (colors) */
  :root {
    --black: #111;
    --white: #f3f3f3;
    --green: green;
    --red: red;
  }

  /* Apply box-sizing to all elements */
  * {
    box-sizing: border-box;
  }

  /* Global styles for the body */
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }

  /* Styles for the main canvas container */
  .canvas {
    display: grid;
    min-height: 100vh;
    grid-auto-flow: row;
    grid-template-rows: auto 1fr auto;
    gap: 0.4rem;
    padding: 1.2rem;
    width: 100vw;
    align-items: center;
    text-align: center;
  }

  /* Styles for the header */
  .header {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 2px solid;
  }

  /* Styles for the logo */
  .logo {
    font-size: 28px;
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
  }

  /* Styles for the logo span */
  .logo span {
    background: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.background};
    padding: 3px 6px;
    margin-left: 3px;
    border-radius: 10px;
    font-weight: bolder;
  }

  /* Styles for the upper menu */
  .upper-menu {
    width: 1000px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.3rem;
    justify-content: space-between;
    padding: 0.5rem;
  }

  /* Styles for the modes */
  .modes {
    display: flex;
    gap: 0.4rem;
  }

  /* Styles for the time mode on hover */
  .time-mode:hover {
    color: var(--green);
    cursor: pointer;
  }

  /* Styles for the type box */
  .type-box {
    display: block;
    max-width: 1000px;
    height: 140px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }

  /* Styles for the words */
  .words {
    font-size: 32px;
    display: flex;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.typeBoxText};
  }

  /* Styles for individual word */
  .word {
    margin: 5px;
    padding-right: 2px;
  }

  /* Styles for the hidden input */
  .hidden-input {
    opacity: 0;
  }

  /* Styles for the current word */
  .current {
    border-left: 1px solid var(--black);
    animation: blinking 2s infinite;
    animation-timing-function: ease;
  }

  @keyframes blinking {
    0% {
      border-left-color: ${({ theme }) => theme.textColor};
    }
    25% {
      border-left-color: ${({ theme }) => theme.background};
    }
    50% {
      border-left-color: ${({ theme }) => theme.textColor};
    }
    75% {
      border-left-color: ${({ theme }) => theme.background};
    }
    100% {
      border-left-color: ${({ theme }) => theme.textColor};
    }
  }

  /* Styles for the current right word */
  .current-right {
    border-right: 1px solid ${({ theme }) => theme.background};
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;
  }

  @keyframes blinkingRight {
    0% {
      border-right-color: ${({ theme }) => theme.textColor};
    }
    25% {
      border-right-color: ${({ theme }) => theme.background};
    }
    50% {
      border-right-color: ${({ theme }) => theme.textColor};
    }
    75% {
      border-right-color: ${({ theme }) => theme.background};
    }
    100% {
      border-right-color: ${({ theme }) => theme.textColor};
    }
  }

  /* Styles for the correct word */
  .correct {
    color: ${({ theme }) => theme.textColor};
  }

  /* Styles for the incorrect word */
  .incorrect {
    color: var(--red);
  }

  /* Styles for the footer */
  .footer {
    width: 1000px;
    border-top: 2px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    margin-left: auto;
    margin-right: auto;
  }

  /* Styles for the stats box */
  .stats-box {
    display: flex;
    width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }

  /* Styles for the left stats */
  .left-stats {
    width: 30%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  /* Styles for the right stats */
  .right-stats {
    width: 30%;
  }

  /* Styles for the title */
  .title {
    font-size: 20px;
    color: ${({ theme }) => theme.typeBoxText};
  }

  /* Styles for the subtitle */
  .subtitle {
    font-size: 30px;
  }

  /* Styles for the user canvas */
  .user-canvas {
    gap: 1.5rem;
  }

  /* Styles for the user profile */
  .user-profile {
    width: 1000px;
    margin: auto;
    display: flex;
    height: 15rem;
    background: ${({ theme }) => theme.typeBoxText};
    color: ${({ theme }) => theme.background};
    border-radius: 20px;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }

  /* Styles for the user */
  .user {
    width: 50%;
    display: flex;
    font-size: 1.5rem;
    padding: 1rem;
    border-right: 2px solid;
  }

  /* Styles for the info */
  .info {
    width: 60%;
    padding: 1rem;
    margin-top: 0.8rem;
  }

  /* Styles for the picture */
  .picture {
    width: 40%;
  }

  /* Styles for the total tests */
  .total-tests {
    width: 50%;
    font-size: 3rem;
  }

  /* Styles for the graph */
  .graph {
    margin: auto;
    width: 700px;
  }

  /* Styles for the table and graph in user page */
  .table,
  .graph-user-page {
    margin: auto;
    width: 1000px;
  }

  /* Styles for center of the screen */
  .center-of-screen {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }

  /* Styles for the links */
  .links {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
    width: 1rem;
  }
`;
export default GlobalStyles;