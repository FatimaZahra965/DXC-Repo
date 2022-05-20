import {
    ADD_CLIENT,
    ADD_CLIENT_SUCCESS,
    ADD_CLIENT_ERROR,
    START_DOWNLOAD_CLIENTS,
    CLIENT_DOWNLOAD_SUCCESSFUL,
    DOWNLOAD_CLIENT__ERROR,
    CLIENT_EDIT_SUCCESS,
    CLIENT_EDIT_ERROR,
    BEGIN_CLIENT_EDIT,
    EDITION_CLIENT_SUCCESS,
    EDIT_CLIENT_ERROR,
  } from "../types";
  
  //chaque réducteur a son propre état
  const initialState = {
    clients: [],
    error: null,
    loading: false,
    client: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_CLIENT:
        return {
          ...state,
          error: null,
        };
      case ADD_CLIENT_SUCCESS:
        return {
          ...state,
          error: null,
          clients: [...state.clients, action.payload],
        };
      case ADD_CLIENT_ERROR:
        return {
          ...state,
          error: true,
        };
      case START_DOWNLOAD_CLIENTS:
        return {
          ...state,
          loading: true,
          //limpiar y reacrgar el productopara editar
          client: {},
        };
      case CLIENT_DOWNLOAD_SUCCESSFUL:
        return {
          ...state,
          clients: action.payload,
          loading: false,
          error: false,
          client: {},
        };
      case DOWNLOAD_CLIENT__ERROR:
        return {
          ...state,
          clients: [],
          loading: false,
          error: true,
          client: {},
        };
   
      case CLIENT_EDIT_SUCCESS:
        return {
          ...state,
          error: null,
          client: action.payload,
        };
      case CLIENT_EDIT_ERROR:
        return {
          ...state,
          error: true,
        };
      case BEGIN_CLIENT_EDIT:
        return {
          ...state,
          error: null,
        };
      case EDITION_CLIENT_SUCCESS:
        return {
          ...state,
          error: null,
          clients: state.clients.map((client) =>
            client.id === action.payload.id
              ? (client = action.payload)
              : client,
          ),
        };
      case EDIT_CLIENT_ERROR:
        return {
          ...state,
          error: true,
        };
      default:
        return state;
    }
  }
  