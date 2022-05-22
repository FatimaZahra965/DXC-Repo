import {
    ADD_COMPETANCE,
    ADD_COMPETANCE_SUCCESS,
    ADD_COMPETANCE_ERROR,
    DOWNLOAD_COMPETANCE__ERROR,
    START_DOWNLOAD_COMPETANCES,
    COMPETANCE_DOWNLOAD_SUCCESSFUL,
  } from "../types";
  
  const initialState = {
    competances: [],
    error: null,
    loading: false,
    competance: {},
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_COMPETANCE:
        return {
          ...state,
          error: null,
        };
      case ADD_COMPETANCE_SUCCESS:
        return {
          ...state,
          error: null,
          competances: [...state.competances, action.payload],
        };
      case ADD_COMPETANCE_ERROR:
        return {
          ...state,
          error: true,
        };
      case START_DOWNLOAD_COMPETANCES:
        return {
          ...state,
          loading: true,
          //limpiar y reacrgar el productopara editar
          competance: {},
        };
      case COMPETANCE_DOWNLOAD_SUCCESSFUL:
        return {
          ...state,
          competances: action.payload,
          loading: false,
          error: false,
          competance: {},
        };
      case DOWNLOAD_COMPETANCE__ERROR:
        return {
          ...state,
          competances: [],
          loading: false,
          error: true,
          competance: {},
        };
      default:
        return state;
    }
  }
  