import { actionsTypes } from "./action-types";
export const addTask = (task) => {
  return {
    type: actionsTypes.ADD_TASK,
    payload: task,
  };
};
export const markComplete = (isActive) => {
  return {
    type: actionsTypes.MARK_COMPLETE_TASK,
    payload: isActive,
  };
};
