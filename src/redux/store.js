import { createStore } from "redux";
import reducers from "./reducers/index";
import { saveState, loadState } from "../localStorage/localStorage";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(() => saveState(store.getState()));
export const persistor = persistStore(store);
export default store;
