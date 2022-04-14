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

export const activeFilters = (tasks) => {
  return {
    type: actionsTypes.ACTIVE_FILTER_TASKS,
    payload: tasks,
  };
};
export const completeFilters = (tasksComplete) => {
  return {
    type: actionsTypes.COMPLETE_FILTER_TASKS,
    payload: tasksComplete,
  };
};

export const allFilters = (allTasks) => {
  return {
    type: actionsTypes.ALL_FILTER_TASKS,
    payload: allTasks,
  };
};
