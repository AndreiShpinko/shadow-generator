import "./App.css";

import Header from "./components/Header";
import SettingsSection from "./components/SettingsSection";
import BoxSection from "./components/BoxSection";
import CodeSection from "./components/CodeSection";

import styled from "styled-components";

import Variables from "./Variables";

function App() {
  return (
    <AppWrapper>
      <Container>
        <Header />
        <Content>
          <SettingsSection />
          <BoxSection />
          <CodeSection />
        </Content>
      </Container>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  @keyframes animate {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  padding: 0 15px;
  min-height: 100vh;
  background-image: linear-gradient(to left top, #ff8bf1, #f78af4, #ee89f7, #e588f9, #dc88fc, #d487fd, #cb86fd, #c285fe, #b883fd, #ae82fb, #a481fa, #997ff8);
  background-size: 400% 400%;
  position: relative;
  animation: animate 20s ease-in-out infinite;
  @media screen and (max-width: 480px) {
    padding: 0 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1320px;
  @media screen and (max-width: 1400px) {
    max-width: 1140px;
  }
  @media screen and (max-width: 1200px) {
    max-width: 960px;
  }
  @media screen and (max-width: 992px) {
    max-width: 720px;
  }
  @media screen and (max-width: 768px) {
    max-width: 540px;
  }
  @media screen and (max-width: 576px) {
    max-width: none;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 13px;
  & > * {
    border-radius: 13px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    background-color: ${Variables.color_white};
  }
  @media screen and (max-width: 992px) {
    grid-gap: 8px;
  }
`;

export default App;
