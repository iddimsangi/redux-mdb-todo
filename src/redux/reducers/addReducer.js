import { actionsTypes } from "../action-types";
const initialState = {
  tasks: [],
};

export const addReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_TASK:
      return {
        ...state,
        tasks: payload,
      };

    default:
      return state;
  }
};
