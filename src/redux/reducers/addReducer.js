import { actionsTypes } from "../action-types";
const initialState = {
  tasks: [
    {
      id: 1,
      task: "sw",
    },
  ],
};

export const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_TASK:
      return state;

    default:
      return state;
  }
};
