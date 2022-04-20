import { combineReducers } from "redux";
import ressourcesReducer from "./ressourcesReducer";
import validacionReducer from "./validacionReducer";

export default combineReducers({
  ressources: ressourcesReducer,
  error: validacionReducer,
});
