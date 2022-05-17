import {
  ADD_RESSOURCE,
  ADD_RESSOURCE_SUCCESS,
  ADD_RESSOURCE_ERROR,
  START_DOWNLOAD_RESSOURCES,
  RESSOURCE_DOWNLOAD_SUCCESSFUL,
  DOWNLOAD_RESSOURCE__ERROR,
  GET_RESSOURCE_REMOVE,
  DELETE_RESSOURCE_SUCCESS,
  DELETE_RESSOURCE_ERROR,
  GET_RESSOURCE_EDIT,
  RESSOURCE_EDIT_SUCCESS,
  RESSOURCE_EDIT_ERROR,
  BEGIN_RESSOURCE_EDIT,
  EDITION_RESSOURCE_SUCCESS,
  EDIT_RESSOURCE_ERROR,
} from "../types";

//chaque réducteur a son propre état
const initialState = {
  ressources: [],
  error: null,
  loading: false,
  ressource: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_RESSOURCE:
      return {
        ...state,
        error: null,
      };
    case ADD_RESSOURCE_SUCCESS:
      return {
        ...state,
        error: null,
        ressources: [...state.ressources, action.payload],
      };
    case ADD_RESSOURCE_ERROR:
      return {
        ...state,
        error: true,
      };
    case START_DOWNLOAD_RESSOURCES:
      return {
        ...state,
        loading: true,
        //limpiar y reacrgar el productopara editar
        ressource: {},
      };
    case RESSOURCE_DOWNLOAD_SUCCESSFUL:
      return {
        ...state,
        ressources: action.payload,
        loading: false,
        error: false,
        ressource: {},
      };
    case DOWNLOAD_RESSOURCE__ERROR:
      return {
        ...state,
        ressources: [],
        loading: false,
        error: true,
        ressource: {},
      };
    case GET_RESSOURCE_REMOVE:
      return {
        ...state,
        error: null,
      };
    case DELETE_RESSOURCE_SUCCESS:
      return {
        ...state,
        error: null,
        ressources: state.ressources.filter(
          (ressource) => ressource.id !== action.payload,
        ),
      };
    case DELETE_RESSOURCE_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_RESSOURCE_EDIT:
      return {
        ...state,
        error: null,
      };
    case RESSOURCE_EDIT_SUCCESS:
      return {
        ...state,
        error: null,
        ressource: action.payload,
      };
    case RESSOURCE_EDIT_ERROR:
      return {
        ...state,
        error: true,
      };
    case BEGIN_RESSOURCE_EDIT:
      return {
        ...state,
        error: null,
      };
    case EDITION_RESSOURCE_SUCCESS:
      return {
        ...state,
        error: null,
        ressources: state.ressources.map((ressource) =>
          ressource.id === action.payload.id
            ? (ressource = action.payload)
            : ressource,
        ),
      };
    case EDIT_RESSOURCE_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
