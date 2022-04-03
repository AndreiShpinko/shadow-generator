import React from "react";
import styled from "styled-components";

import Variables from "../Variables";
import Switcher from "./Switcher";

import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../redux/actions/Actions";

const BoxSection = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const mode = useSelector((state) => state.mode).darkmode;

  return (
    <Box className={mode && "darkmode"}>
      <SwitcherWrapper>
        <Switcher
          labelFor="darkmode"
          switchHandler={(e) => dispatch(changeMode(e.target.checked))}
        />
      </SwitcherWrapper>
      <BoxInner
        style={{
          boxShadow: `${settings.inset ? "inset" : ""} ${
            settings.horizontal
          }px ${settings.vertical}px ${settings.blur}px ${settings.spread}px ${
            settings.color
          }`,
        }}
        id="boxInner"
      />
    </Box>
  );
};

const Box = styled.div`
  grid-column-start: 6;
  grid-column-end: 13;

  @media screen and (max-width: 992px) {
    grid-column-start: 1;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  padding: 100px;
  transition: 0.3s;
  position: relative;

  &.darkmode {
    background-color: ${Variables.color_black};
    #boxInner {
      background-color: ${Variables.color_white};
    }
  }

  @media screen and (max-width: 480px) {
    padding: 80px;
  }
`;

const SwitcherWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  @media screen and (max-width: 480px) {
    top: 10px;
    left: 10px;
  }
`;

const BoxInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;
  background-color: ${Variables.color_black};
  border-radius: 15px;
  transition: 0.3s;

  @media screen and (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
  @media screen and (max-width: 480px) {
    width: 120px;
    height: 120px;
    border-radius: 10px;
  }
`;

export default BoxSection;
