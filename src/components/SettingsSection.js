import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSetting } from "../redux/actions/Actions";

import RangeSetting from "./RangeSetting";
import Switcher from "./Switcher";

const SettingsSection = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  return (
    <Settings>
      <h2>CSS box-shadow</h2>
      <RangeSetting setting={"horizontal"} min="-100" />
      <RangeSetting setting={"vertical"} min="-100" />
      <RangeSetting setting={"blur"} min="0" />
      <RangeSetting setting={"spread"} min="-100" />
      <ColorInset>
        <ColorSetting>
          <label htmlFor="shadowColor">Color</label>
          <ColorInput
            type="color"
            id="shadowColor"
            value={settings.color}
            onChange={(e) =>
              dispatch(
                setSetting({ title: "color", value: e.target.value + "" })
              )
            }
          />
        </ColorSetting>
        <InsetSetting>
          <label htmlFor="shadowInset">Inset</label>
          <Switcher
            labelFor="shadowInset"
            switchHandler={(e) =>
              dispatch(setSetting({ title: "inset", value: e.target.checked }))
            }
          />
        </InsetSetting>
      </ColorInset>
    </Settings>
  );
};

const Settings = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;

  @media screen and (max-width: 992px) {
    grid-column-end: 13;
  }

  label {
    font-size: 18px;
  }
  padding: 20px;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const ColorInput = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  width: 30px;
  height: 30px;
  background: none;
  cursor: pointer;

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-color-swatch {
    border: 0;
    border-radius: 7px;
    box-shadow: 0px 2px 4px -3px #000;
  }

  ::-moz-color-swatch,
  ::-moz-focus-inner {
    border: 0;
  }

  ::-moz-focus-inner {
    padding: 0;
  }
`;

const ColorSetting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  label {
    margin-right: 15px;
  }
`;

const ColorInset = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const InsetSetting = ColorSetting;

export default SettingsSection;
