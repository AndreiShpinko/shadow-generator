import React from "react";
import styled from "styled-components";

import Variables from "../Variables";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Shadow Generator</h1>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;

  padding: 15px;
  margin-bottom: 10px;

  color: ${Variables.color_white};

  @media screen and (max-width: 480px) {
    padding: 15px 0;
  }
`;

export default Header;
