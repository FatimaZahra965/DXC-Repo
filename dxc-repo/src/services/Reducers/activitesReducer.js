import {
  ADD_ACTIVITE,
  ADD_ACTIVITE_SUCCESS,
  ADD_ACTIVITE_ERROR,
  DOWNLOAD_ACTIVITE__ERROR,
  START_DOWNLOAD_ACTIVITES,
  ACTIVITE_DOWNLOAD_SUCCESSFUL,
  GET_ACTIVITE_EDIT,
  EDIT_ACTIVITE_ERROR,
  EDITION_ACTIVITE_SUCCESS,
  BEGIN_ACTIVITE_EDIT,
  ACTIVITE_EDIT_ERROR,
  ACTIVITE_EDIT_SUCCESS,
} from "../types";

//chaque réducteur a son propre état
const initialState = {
  activites: [],
  error: null,
  loading: false,
  activite: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ACTIVITE:
      return {
        ...state,
        error: null,
      };
    case ADD_ACTIVITE_SUCCESS:
      return {
        ...state,
        error: null,
        activites: [...state.activites, action.payload],
      };
    case ADD_ACTIVITE_ERROR:
      return {
        ...state,
        error: true,
      };
    case START_DOWNLOAD_ACTIVITES:
      return {
        ...state,
        loading: true,
        activite: {},
      };
    case ACTIVITE_DOWNLOAD_SUCCESSFUL:
      return {
        ...state,
        activites: action.payload,
        loading: false,
        error: false,
        activite: {},
      };
    case DOWNLOAD_ACTIVITE__ERROR:
      return {
        ...state,
        activites: [],
        loading: false,
        error: true,
        activite: {},
      };
    case GET_ACTIVITE_EDIT:
      return {
        ...state,
        error: null,
      };
    case ACTIVITE_EDIT_SUCCESS:
      return {
        ...state,
        error: null,
        ACTIVITE: action.payload,
      };
    case ACTIVITE_EDIT_ERROR:
      return {
        ...state,
        error: true,
      };
    case BEGIN_ACTIVITE_EDIT:
      return {
        ...state,
        error: null,
      };
    case EDITION_ACTIVITE_SUCCESS:
      return {
        ...state,
        error: null,
        ACTIVITEs: state.ACTIVITEs.map((ACTIVITE) =>
          ACTIVITE.id === action.payload.id
            ? (ACTIVITE = action.payload)
            : ACTIVITE,
        ),
      };
    case EDIT_ACTIVITE_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
