import { combineReducers } from "redux";
import { addReducer } from "./addReducer";
const reducers = combineReducers({
  allTasks: addReducer,
});

export default reducers;
