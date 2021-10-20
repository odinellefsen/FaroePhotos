import { Fragment } from "react"
import styles from '../styles/Layout.module.css'
import styled, { createGlobalStyle } from "styled-components"
import Link from 'next/link'

const Layout = ({ children }) => {
    return (
        <Fragment>
            <GlobalStyle />
            { children }
        </Fragment>
    )
}

export default Layout

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

.fakebody {
    width: 100%;
    height: auto;
}

.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
}

.hometitle {
    font-size: 25px;
    font-family: 'Caveat';
}

.navlinks {
    display: flex;
    justify-content: space-around;
    width: 20%;
}

.navlinks li {
    list-style: none;
    padding-right: 15px;
    font-family: 'Caveat';
    font-size: 20px;
}

.h2 {
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

.h2h2 {
    font-size: 35px;
    font-family: Caveat;
}

b {
    font-weight: 700;
}

.allar-myndir {
    padding-top: 20px;
  }

.money {
    width: 575px;
    height: 400px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    margin: auto;
  }

  .cash {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 0px 40px 0px;
  }
  
  .myndatekstur {
      height: 40px;
      width: 575px;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.5);
  }
  
  .myndateksturparent {
      display: flex;
      justify-content: center;
  }

  @media(max-width: 768px) {
    .money {
      width: 450px;
      height: 350px;
    }
    .myndateksturparent {
      width: 450px;
      height: 40px;
    }
    .caption-ljósmyndir {
      margin: 0px 0px 16px 0px;
    }
  }
  
  .caption-ljósmyndir {
      padding: 0px 0px 0px 5px;
      margin: 0px 0px 20px 0px;
      font-size: 17px;
      font-family: Caveat;
  }
  
  .paragraph-caption {
      position: absolute;
      margin: -20px 0px 0px 0px;
      padding: 0px 0px 0px 5px;
      font-family: 'Times New Roman';
  }

  section {
    height: 55vh;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  
  .container {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 0px 20px #00000010;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
  }
  
  .form-group {
    width: 100%;
    margin-top: 20px;
    font-size: 20px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 5px;
    font-size: 18px;
    border: 1px solid rgba(128, 128, 128, 0.199);
    margin-top: 5px;
  }
  
  textarea{
    resize: none;
  }
  
  button[type="submit"] {
    width: 100%;
    border: none;
    outline: none;
    padding: 20px;
    font-size: 24px;
    border-radius: 8px;
    font-family; 'Times New Roman';
    color: rgb(27, 166, 247);
    cursor: pointer;
    margin-top: 10px;
    transition: 0.3s ease background-color;
  }
  
  button[type="submit"]:hover {
    background-color: rgb(214, 226, 236);
  }
  
  #status {
    width: 100%;
    max-width: 500px;
    text-align: center;
    padding: 10px;
    margin: 0 auto;
    border-radius: 8px;
  }
  
  #status.success {
    background-color: rgb(211, 250, 153);
    animation: status 4s ease forwards;
  }
  
  #status.error {
    background-color: rgb(250, 119, 92);
    color: white;
    animation: status 4s ease forwards;
  }
  
  @keyframes status {
    0% {
      opacity: 1;
      pointer-events: all;
    }
    90% {
      opacity: 1;
      pointer-events: all;
    }
    100% {
      opacity: 0;
      pointer-events: none;
    }
  }
`