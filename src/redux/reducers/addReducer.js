import { actionsTypes } from "../action-types";
const initialState = {
  tasks: [
    {
      id: 0,
      isActive: true,
      inputValue: "yy",
    },
    {
      id: 2,
      isActive: true,
      inputValue: "xx",
    },
    {
      id: 3,
      isActive: true,
      inputValue: "qq",
    },
  ],
};

export const addReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_TASK:
      return {
        tasks: [...state.tasks, payload],
      };

    default:
      return state;
  }
};
