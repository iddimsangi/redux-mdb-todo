import { combineReducers } from "redux";
import { Reducers, FilterReducer } from "./reducers";
const reducers = combineReducers({
  allTasks: Reducers,
  filters: FilterReducer,
});

export default reducers;
