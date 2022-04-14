import { combineReducers } from "redux";
import { Reducers } from "./reducers";
const reducers = combineReducers({
  allTasks: Reducers,
});

export default reducers;
