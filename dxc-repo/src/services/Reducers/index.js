import { combineReducers } from "redux";
import ressourcesReducer from "./ressourcesReducer";
import prestationsReducer from "./prestationsReducer";
import validacionReducer from "./validacionReducer";
import certificationsReducer from "./certificationsReducer";
import competancesReducer from "./competancesReducer";
import contratsReducer from "./contratsReducer";
import clientsReducer from "./clientsReducer";
import activitesReducer from "./activitesReducer";

export default combineReducers({
  certifications: certificationsReducer,
  prestations: prestationsReducer,
  ressources: ressourcesReducer,
  competances: competancesReducer,
  contrats: contratsReducer,
  clients: clientsReducer,
  activites: activitesReducer,
  error: validacionReducer,
});
