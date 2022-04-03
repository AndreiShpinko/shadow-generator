import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSetting } from "../redux/actions/Actions";
import styled from "styled-components";
import Variables from "../Variables";

const RangeSetting = ({ setting, min }) => {
  const dispatch = useDispatch();
  const settingsValues = useSelector((state) => state.settings);

  const ProgressPercent = () => {
    let percent = ((settingsValues[setting] - min) / (100 - min)) * 100;
    return `${percent}%`;
  };

  return (
    <RangeSettingWrapper>
      <label htmlFor={setting}>
        {setting[0].toUpperCase() + setting.substr(1)}
      </label>
      <InputNumber
        type="number"
        min={min}
        max="100"
        id={setting}
        value={settingsValues[setting]}
        onChange={(e) =>
          dispatch(setSetting({ title: setting, value: e.target.value }))
        }
      />

      <InputRange
        type="range"
        min={min}
        max="100"
        value={settingsValues[setting]}
        ProgressPercent={ProgressPercent}
        onChange={(e) =>
          dispatch(setSetting({ title: setting, value: e.target.value }))
        }
      />
    </RangeSettingWrapper>
  );
};

const RangeSettingWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin-top: 25px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const InputNumber = styled.input`
  justify-self: end;
  border: none;
  outline: none;
  background-color: ${Variables.color_gray};
  padding: 5px 10px;
  border-radius: 5px;
  width: 75px;
  box-shadow: 0px 2px 4px -3px #000;
  font-size: 16px;
`;

const InputRange = styled.input`
  grid-column: 1/3;
  cursor: pointer;

  -webkit-appearance: none;
  outline: none;

  // THUMB
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    margin-top: calc(((16px - 6px) / 2) * -1);
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    height: 6px;
    background-image: linear-gradient(
      90deg,
      ${Variables.color_black} ${(props) => props.ProgressPercent},
      ${Variables.color_gray} ${(props) => props.ProgressPercent}
    );
    border-radius: 10px;
  }
`;

export default RangeSetting;
