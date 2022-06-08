import {
    ADD_ACTIVITE,
    ADD_ACTIVITE_SUCCESS,
    ADD_ACTIVITE_ERROR,
    DOWNLOAD_ACTIVITE__ERROR,
    START_DOWNLOAD_ACTIVITES,
    ACTIVITE_DOWNLOAD_SUCCESSFUL,
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
      default:
        return state;
    }
  }
  