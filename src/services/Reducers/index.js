import { combineReducers } from "redux";
import ressourcesReducer from "./ressourcesReducer";
import prestationsReducer from "./prestationsReducer";
import validacionReducer from "./validacionReducer";

export default combineReducers({
  prestations: prestationsReducer,
  ressources: ressourcesReducer,
  error: validacionReducer,
});
