import {
  ADD_CAPABILITE,
  ADD_CAPABILITE_SUCCESS,
  ADD_CAPABILITE_ERROR,
  START_DOWNLOAD_CAPABILITES,
  CAPABILITE_DOWNLOAD_SUCCESSFUL,
  DOWNLOAD_CAPABILITE__ERROR,
  GET_CAPABILITE_EDIT,
  CAPABILITE_EDIT_SUCCESS,
  CAPABILITE_EDIT_ERROR,
  BEGIN_CAPABILITE_EDIT,
  EDITION_CAPABILITE_SUCCESS,
  EDIT_CAPABILITE_ERROR,
  SHOWRESSOURCES_CAP,
} from "../types";

//chaque réducteur a son propre état
const initialState = {
  capabilites: [],
  error: null,
  loading: false,
  capabilite: {},
  idCapabilite: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOWRESSOURCES_CAP:
      return {
        ...state,
        idCapabilite: action.payload,
      };
    case ADD_CAPABILITE:
      return {
        ...state,
        error: null,
      };
    case ADD_CAPABILITE_SUCCESS:
      return {
        ...state,
        error: null,
        capabilites: [...state.capabilites, action.payload],
      };
    case ADD_CAPABILITE_ERROR:
      return {
        ...state,
        error: true,
      };
    case START_DOWNLOAD_CAPABILITES:
      return {
        ...state,
        loading: true,
        capabilite: {},
      };
    case CAPABILITE_DOWNLOAD_SUCCESSFUL:
      return {
        ...state,
        capabilites: action.payload,
        loading: false,
        error: false,
        capabilite: {},
      };
    case DOWNLOAD_CAPABILITE__ERROR:
      return {
        ...state,
        capabilites: [],
        loading: false,
        error: true,
        capabilite: {},
      };
    case GET_CAPABILITE_EDIT:
      return {
        ...state,
        error: null,
      };
    case CAPABILITE_EDIT_SUCCESS:
      return {
        ...state,
        error: null,
        capabilite: action.payload,
      };
    case CAPABILITE_EDIT_ERROR:
      return {
        ...state,
        error: true,
      };
    case BEGIN_CAPABILITE_EDIT:
      return {
        ...state,
        error: null,
      };
    case EDITION_CAPABILITE_SUCCESS:
      return {
        ...state,
        error: null,
        capabilites: state.capabilites.map((capabilite) =>
          capabilite.id === action.payload.id
            ? (capabilite = action.payload)
            : capabilite,
        ),
      };
    case EDIT_CAPABILITE_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
