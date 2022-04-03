import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Variables from "../Variables";

const CodeSection = () => {
  const settings = useSelector((state) => state.settings);
  const { inset, horizontal, vertical, blur, spread, color } = settings;

  const [CopyAnimation, setCopyAnimation] = useState(false);

  const handleCopyButton = (e, cssShadow) => {
    e.preventDefault();
    navigator.clipboard.writeText(cssShadow);
    setCopyAnimation(true);
    setTimeout(() => setCopyAnimation(false), 3000);
  };

  const cssShadowBody = `box-shadow: ${
    inset ? "inset " : ""
  }${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};`;
  const cssShadow = `-webkit-box-shadow: ${cssShadowBody};\n-moz-box-shadow: ${cssShadowBody};\nbox-shadow: ${cssShadowBody};`;

  return (
    <Code>
      <CodeTitle>CSS</CodeTitle>
      <CodeMessage CopyAnimation={CopyAnimation}>
        {window.innerWidth > 480 ? "Copied to clipboard ✅" : "Copied ✅"}
      </CodeMessage>
      <CopyButton onClick={(e) => handleCopyButton(e, cssShadow)}>
        Copy
      </CopyButton>
      <CodePre>
        {`-webkit-${cssShadowBody}`}
        <br />
        {`-moz-${cssShadowBody}`}
        <br />
        {cssShadowBody}
      </CodePre>
    </Code>
  );
};

const Code = styled.div`
  grid-column-start: 1;
  grid-column-end: 13;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  margin-bottom: 15px;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const CodeTitle = styled.h2`
  margin-left: 25px;
  @media screen and (max-width: 480px) {
    margin: 0;
  }
`;

const CodeMessage = styled.span`
  justify-self: center;
  transition: 0.3s;
  font-size: 18px;
  opacity: ${(props) => (props.CopyAnimation ? 1 : 0)};
  text-align: center;
  position: relative;
  @media screen and (max-width: 480px) {
    font-size: 17px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const CodePre = styled.code`
  grid-column: 1/4;
  padding: 15px;
  border-radius: 10px;
  background-color: ${Variables.color_gray};
  color: ${Variables.color_black};
`;

const CopyButton = styled.button`
  justify-self: end;

  outline: none;
  border: none;
  font-size: 18px;
  background-color: ${Variables.color_black};
  color: ${Variables.color_white};
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 25px;
  transition: 0.1s;

  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 5px 10px;
  }

  box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%),
    0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%),
    inset 0px -0.01em 0px rgb(58 65 111 / 50%);
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transform: translateY(0);
  
  @media (hover: hover) {
    &:hover {
      box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%),
        0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #111;
      transform: translateY(-2px);
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default CodeSection;
