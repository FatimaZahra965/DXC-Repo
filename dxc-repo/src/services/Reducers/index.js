import { combineReducers } from "redux";
import ressourcesReducer from "./ressourcesReducer";
import prestationsReducer from "./prestationsReducer";
import validacionReducer from "./validacionReducer";
import certificationsReducer from "./certificationsReducer";

export default combineReducers({
  certifications: certificationsReducer,
  prestations: prestationsReducer,
  ressources: ressourcesReducer,
  error: validacionReducer,
});
