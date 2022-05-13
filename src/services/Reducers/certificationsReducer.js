import {
  ADD_CERTIFICATE,
  ADD_CERTIFICATE_SUCCESS,
  ADD_CERTIFICATE_ERROR,
  DOWNLOAD_CERTIFICATE__ERROR,
  START_DOWNLOAD_CERTIFICATIONS,
  CERTIFICATE_DOWNLOAD_SUCCESSFUL,
} from "../types";

const initialState = {
  certifications: [],
  error: null,
  loading: false,
  certification: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CERTIFICATE:
      return {
        ...state,
        error: null,
      };
    case ADD_CERTIFICATE_SUCCESS:
      return {
        ...state,
        error: null,
        certifications: [...state.certifications, action.payload],
      };
    case ADD_CERTIFICATE_ERROR:
      return {
        ...state,
        error: true,
      };
    case START_DOWNLOAD_CERTIFICATIONS:
      return {
        ...state,
        loading: true,
        //limpiar y reacrgar el productopara editar
        certification: {},
      };
    case CERTIFICATE_DOWNLOAD_SUCCESSFUL:
      return {
        ...state,
        certifications: action.payload,
        loading: false,
        error: false,
        certification: {},
      };
    case DOWNLOAD_CERTIFICATE__ERROR:
      return {
        ...state,
        certifications: [],
        loading: false,
        error: true,
        certification: {},
      };
    default:
      return state;
  }
}
