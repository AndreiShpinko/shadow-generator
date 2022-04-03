import { ActionTypes } from "../contants/action-types";

const initalState = {
  horizontal: 30,
  vertical: 30,
  blur: 20,
  spread: 20,
  color: "#8852DE",
  inset: false,
};

export const shadowReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SETTING:
      state[payload.title] = payload.value;
      return { ...state };

    default:
      return state;
  }
};

export const modeReducer = (state = {darkmode: false}, { type, payload }) => {
  switch (type) {
    case ActionTypes.CHANGE_MODE:
      return { darkmode: payload };

    default:
      return state;
  }
};
