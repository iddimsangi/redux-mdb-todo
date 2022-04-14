import { actionsTypes } from "../action-types";
const initialState = {
  tasks: [],
};

export const Reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_TASK:
      return {
        tasks: [payload, ...state.tasks],
      };
    case actionsTypes.MARK_COMPLETE_TASK:
      let taskObj = state.tasks.find((task) => task.id === payload);
      let taskObjIndex = state.tasks.findIndex((task) => task.id === payload);
      const taskCopy = state.tasks;
      taskCopy[taskObjIndex] = {
        ...taskObj,
        isActive: !taskObj.isActive,
      };
      return {
        tasks: [...taskCopy],
      };
    default:
      return state;
  }
};
