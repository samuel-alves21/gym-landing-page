import { createGlobalStyle } from "styled-components";
import { breakinpPoints } from "./utils/breakingPoints";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --primary-color: #A03333;
    --secundary-color: #222222;
    --secundary-color-hover: #333333;
    --terciary-color: #FF0202;    
    --terciary-color-hover: #fc4343;
    --quaternary-color: #B4B4B4;
    --quaternary-color-darker: #787878;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    color: #fff;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: 72px;
    color: #FFF;
    font-family: Bungee Outline;
    font-weight: 400;
  }

  h2 {
    color: #FFF;
    font-size: 92px;
    font-family: Bebas Neue;
  }

  h3 {
    color: #FFF;
    font-family: Bebas Neue;
    font-size: 22px;
  }

  h5 {
    color: #FFF;
    font-family: Bebas Neue;
    font-size: 32px;
  }

  section {
    height: fit-content;
    margin: 0 auto;
    width: 80%;
    max-width: 2000px;
    background-color: var(--primary-color);
    padding: 50px calc(20px + 4vw) 50px calc(20px + 4vw);
  }

  a {
    font-size: 22px;
    text-decoration: none;
    font-family: 'Bebas Neue', sans-serif;
    background-color: transparent;
    color: #fff;
  }

  button {
    outline: none;
    padding: 10px 20px;
    border: 2px solid var(--quaternary-color-darker);
    border-radius: 50px;
    cursor: pointer;
    background-color: transparent;
    color: var(--quaternary-color-darker);
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.3s;
  }

  input {
    background-color: transparent;
    padding: 10px 15px;
    border: 1px solid #fff;
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    -webkit-clip-path: polygon(0% 0%, 81% 0, 100% 52%, 100% 100%, 0% 100%); 
    clip-path: polygon(0% 0%, 81% 0, 100% 52%, 100% 100%, 0% 100%);
    position: relative;
  }

  button:hover {
    color: #fff;
    background-color: var(--quaternary-color-darker);
  }

  .path {
    -webkit-clip-path: polygon(0% 0%, 81% 0, 100% 52%, 100% 100%, 0% 100%); 
    clip-path: polygon(0% 0%, 81% 0, 100% 52%, 100% 100%, 0% 100%);
  }

  .styled-a {
    cursor: pointer;
    background-color: var(--secundary-color);
    padding: 10px 25px;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 7px;  

    -webkit-clip-path: polygon(0% 0%, 81% 0, 100% 52%, 100% 100%, 0% 100%); 
    clip-path: polygon(0% 0%, 81% 0, 100% 52%, 100% 100%, 0% 100%);

    & img {
      width: 15px;
    }
  }

  .styled-a:hover {
    background-color: var(--secundary-color-hover);
  }

  @media (max-width: ${breakinpPoints.largeDesktop}px)  {
    section {
      width: 100%;
    }
  }

  @media (max-width: ${breakinpPoints.desktop}px)  {
    p {
      font-size: 16px;
    }

    a {
      font-size: 18px;
    }

    h1 {
      font-size: 47px;
      margin-top: -45px;
    }

    h2 {
      font-size: 67px;
      margin-top: -45px;
    }
  }

  @media (max-width: ${breakinpPoints.tablet}px)  {
    section {
      padding-left: 5px;
      padding-right: 5px;
    }

    p {
      font-size: 16px;
    }

    a {
      font-size: 18px;
    }

    h1 {
      font-size: 37px;
      margin-top: -45px;
    }

    h2 {
      font-size: 57px;
      margin-top: -45px;
    }
  }

  @media (max-width: ${breakinpPoints.mobile}px)  {
    h1 {
      font-size: 32px;
      margin-top: -45px;
    }

    h2 {
      font-size: 52px;
      margin-top: -45px;
    }
  }
`