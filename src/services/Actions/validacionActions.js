import {
  VALIDATE_FORM,
  VALIDATE_FORM_SUCCESS,
  VALIDATE_FORM_ERROR,
} from "../types";

export function validarFormularioAction() {
  return (dispatch) => {
    dispatch(iniciarValidacion());
  };
}

export const iniciarValidacion = () => {
  return {
    type: VALIDATE_FORM,
  };
};

export const validationSuccess = () => {
  return {
    type: VALIDATE_FORM_SUCCESS,
  };
};

export const validacionError = () => {
  return {
    type: VALIDATE_FORM_ERROR,
  };
};
