import { actionsTypes } from "./action-types";
export const addTask = (task) => {
  return {
    type: actionsTypes.ADD_TASK,
    payload: task,
  };
};
export const markComplete = (completeId) => {
  return {
    type: actionsTypes.MARK_COMPLETE_TASK,
    payload: completeId,
  };
};

export const filterTodoComplete = (isComplete) => {
  return {
    type: actionsTypes.FILTERS_TODO_COMPLETE,
    payload: isComplete,
  };
};
