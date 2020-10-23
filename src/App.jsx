import React from "react";
import styled from "styled-components";
import ProfileBox from "./components/Profile";
import Skills from "./components/Skills";

function App() {
  return (
    <AppContainer>
      <PortfolioContainer>
        <ProfileBox />
        <Skills />
      </PortfolioContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background: #17132a;
  width: 100vw;
  /* padding: 20px; */
`;

const PortfolioContainer = styled.div`
  width: 100%;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: 20% 1 1 20%;
  grid-template-rows: 16% 20% 20%;
  grid-template-areas:
    " . profileBox skillsBox . "
    " . project project ."
    " . project project .";
`;
