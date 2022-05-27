import {
  ADD_PRESTATION,
  ADD_PRESTATION_SUCCESS,
  ADD_PRESTATION_ERROR,
  DOWNLOAD_PRESTATION__ERROR,
  START_DOWNLOAD_PRESTATIONS,
  PRESTATION_DOWNLOAD_SUCCESSFUL,
} from "../types";

//chaque réducteur a son propre état
const initialState = {
  prestations: [],
  error: null,
  loading: false,
  prestation: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRESTATION:
      return {
        ...state,
        error: null,
      };
    case ADD_PRESTATION_SUCCESS:
      return {
        ...state,
        error: null,
        prestations: [...state.prestations, action.payload],
      };
    case ADD_PRESTATION_ERROR:
      return {
        ...state,
        error: true,
      };
    case START_DOWNLOAD_PRESTATIONS:
      return {
        ...state,
        loading: true,
        //limpiar y reacrgar el productopara editar
        prestation: {},
      };
    case PRESTATION_DOWNLOAD_SUCCESSFUL:
      return {
        ...state,
        prestations: action.payload,
        loading: false,
        error: false,
        prestation: {},
      };
    case DOWNLOAD_PRESTATION__ERROR:
      return {
        ...state,
        prestations: [],
        loading: false,
        error: true,
        prestation: {},
      };
    default:
      return state;
  }
}
