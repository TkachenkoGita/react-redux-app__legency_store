import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./reducer";

//Ф-ция менеджер- store, в которую заворачиваем состояние и действие
//хранилище= состояние+ как изменять состояние (reducer)
const store = legacy_createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware())
);

export default store