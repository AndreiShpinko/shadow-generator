import { ActionTypes } from "../contants/action-types";

const { SET_SETTING, CHANGE_MODE } = ActionTypes;

export const setSetting = (setting) => {
  return {
    type: SET_SETTING,
    payload: setting,
  };
};

export const changeMode = (value) => {
  return {
    type: CHANGE_MODE,
    payload: value,
  };
};
