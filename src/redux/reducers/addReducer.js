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
    case actionsTypes.MARK_COMPLETE_TASK:
      let taskObj = state.tasks.find((task) => task.id === payload);
      let taskObjIndex = state.tasks.findIndex((task) => task.id === payload);
      const taskCopy = state.tasks;
      taskCopy[taskObjIndex] = {
        ...taskObj,
        isActive: !taskObj.isActive,
      };
      console.log(taskObj);
      return {
        tasks: [...taskCopy],
      };
    default:
      return state;
  }
};
