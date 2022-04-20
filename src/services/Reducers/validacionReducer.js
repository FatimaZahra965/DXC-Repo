import {
  VALIDATE_FORM,
  VALIDATE_FORM_SUCCESS,
  VALIDATE_FORM_ERROR,
} from "../types";

//state principal
const initialState = {
  error: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case VALIDATE_FORM:
      return {
        ...state,
        error: null,
      };
    case VALIDATE_FORM_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case VALIDATE_FORM_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
