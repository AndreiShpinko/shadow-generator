import React from "react";
import styled from "styled-components";

import Variables from "../Variables";

const Switcher = ({ labelFor, switchHandler }) => {
  return (
    <>
      <CheckboxInput type="checkbox" id={labelFor} onChange={switchHandler} />
      <SwitcherLabel labelFor={labelFor} />
    </>
  );
};

const CheckboxInput = styled.input`
  display: none;
  &:checked + * {
    background-color: #8852de;
    &:after {
      transform: translate3d(20px, 2px, 0);
    }
  }
`;

const SwitcherLabel = styled.label.attrs((props) => ({
  htmlFor: props.labelFor || "0",
}))`
  position: relative;
  box-shadow: 0px 2px 4px -3px #000;
  cursor: pointer;
  display: inline-block;
  width: 42px;
  height: 24px;
  background-color: ${Variables.color_darken_gray};
  border-radius: 22px;
  vertical-align: text-bottom;
  transition: all 0.3s linear;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 11px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
    transform: translate3d(2px, 2px, 0);
    transition: all 0.2s ease-in-out;
  }
`;

export default Switcher;
