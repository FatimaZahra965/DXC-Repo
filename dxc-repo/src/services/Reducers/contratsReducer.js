import {
    ADD_CONTRAT,
    ADD_CONTRAT_SUCCESS,
    ADD_CONTRAT_ERROR,
    START_DOWNLOAD_CONTRATS,
    CONTRAT_DOWNLOAD_SUCCESSFUL,
    DOWNLOAD_CONTRAT__ERROR,
    GET_CONTRAT_EDIT,
    CONTRAT_EDIT_SUCCESS,
    CONTRAT_EDIT_ERROR,
    BEGIN_CONTRAT_EDIT,
    EDITION_CONTRAT_SUCCESS,
    EDIT_CONTRAT_ERROR,
  } from "../types";
  
  //chaque réducteur a son propre état
  const initialState = {
    contrats: [],
    error: null,
    loading: false,
    contrat: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_CONTRAT:
        return {
          ...state,
          error: null,
        };
      case ADD_CONTRAT_SUCCESS:
        return {
          ...state,
          error: null,
          contrats: [...state.contrats, action.payload],
        };
      case ADD_CONTRAT_ERROR:
        return {
          ...state,
          error: true,
        };
      case START_DOWNLOAD_CONTRATS:
        return {
          ...state,
          loading: true,
          //limpiar y reacrgar el productopara editar
          contrat: {},
        };
      case CONTRAT_DOWNLOAD_SUCCESSFUL:
        return {
          ...state,
          contrats: action.payload,
          loading: false,
          error: false,
          contrat: {},
        };
      case DOWNLOAD_CONTRAT__ERROR:
        return {
          ...state,
          contrats: [],
          loading: false,
          error: true,
          contrat: {},
        };
      case GET_CONTRAT_EDIT:
        return {
          ...state,
          error: null,
        };
      case CONTRAT_EDIT_SUCCESS:
        return {
          ...state,
          error: null,
          contrat: action.payload,
        };
      case CONTRAT_EDIT_ERROR:
        return {
          ...state,
          error: true,
        };
      case BEGIN_CONTRAT_EDIT:
        return {
          ...state,
          error: null,
        };
      case EDITION_CONTRAT_SUCCESS:
        return {
          ...state,
          error: null,
          contrats: state.contrats.map((contrat) =>
            contrat.id === action.payload.id
              ? (contrat = action.payload)
              : contrat,
          ),
        };
      case EDIT_CONTRAT_ERROR:
        return {
          ...state,
          error: true,
        };
      default:
        return state;
    }
  }
  