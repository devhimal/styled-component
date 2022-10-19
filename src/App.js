// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./component/StyledComponent/HeaderStyledComponent/Global";
import { ContentContainer } from "./component/StyledComponent/HeaderStyledComponent/Body.Styled";
import Data from "../src/component/Data/Data"
import ContentCard from "./component/ContentCard";

const theme = {
  colors: {
    bg: '#e6faff',
    color: '#000',
    border: '#00c7fa'
  },
  buttons: {
    bg: '#fff',
    color: '#585268',
    border: '#f052ca'
  },
  mobile: '768px',

}

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <div className="App">
        <Header />
        <ContentContainer>
          {
            Data.map((items, index) => {
              return (
                <ContentCard key={ index } content={ items } />
              )
            })
          }
        </ContentContainer>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
