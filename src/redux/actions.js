import { actionsTypes } from "./action-types";
export const addTask = (task) => {
  return {
    type: actionsTypes.ADD_TASK,
    payload: task,
  };
};
