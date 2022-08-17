import {
  ADD_CERTIFICATION,
  ADD_CERTIFICATION_SUCCESS,
  ADD_CERTIFICATION_ERROR,
  BEGIN_CERTIFICATION_EDIT,
  EDITION_CERTIFICATION_SUCCESS,
  EDIT_CERTIFICATION_ERROR,
  START_DOWNLOAD_CERTIFICATIONS,
  CERTIFICATION_DOWNLOAD_SUCCESSFUL,
  DOWNLOAD_CERTIFICATION__ERROR,
  GET_CERTIFICATION_EDIT,
  CERTIFICATION_EDIT_SUCCESS,
  CERTIFICATION_EDIT_ERROR,
} from "../types";

import clienteAxios from "../../config/axios";
import axios from "axios";
import Swal from "sweetalert2";

export function createNewcertificationAction(CERTIFICATION) {
  console.log("CERTIFICATION", CERTIFICATION);
  return (dispatch) => {
    dispatch(newCERTIFICATION());
    clienteAxios
      .post(
        "https://localhost:9001/dxc/certifications/addcertif",
        CERTIFICATION,
      )
      .then((res) => {
        console.log(res);
        dispatch(addNewCERTIFICATIONSuccess(CERTIFICATION));
        Swal.fire({
          timer: 3000,
          text: "La certif est ajouter avec succés",
          timeerProgressBar: true,
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        //si hay un error
        dispatch(addNewCERTIFICATIONError());
        Swal.fire({
          timer: 3000,
          text: "La ressource n'est pas ajouté",
          timeerProgressBar: true,
          icon: "error",
        });
      });
  };
}

export const newCERTIFICATION = () => ({
  type: ADD_CERTIFICATION,
});

export const addNewCERTIFICATIONSuccess = (CERTIFICATION) => ({
  type: ADD_CERTIFICATION_SUCCESS,
  payload: CERTIFICATION,
});

export const addNewCERTIFICATIONError = (error) => ({
  type: ADD_CERTIFICATION_ERROR,
});

//obtenir la liste des produits de productsReducer (voir API)
export function getCertificationsAction() {
  return (dispatch) => {
    dispatch(getCertficationStart());

    axios
      .get("https://localhost:9001/dxc/certifications/")
      .then((resp) => {
        console.log("all certifications ----->", resp.data);
        dispatch(downloadCertificationsSuccessful(resp.data));
      })
      .catch((error) => {
        //console.log(error);
        dispatch(descargaCertificationsError());
      });
  };
}

export const getCertficationStart = () => ({
  type: START_DOWNLOAD_CERTIFICATIONS,
});

export const downloadCertificationsSuccessful = (certifications) => ({
  type: CERTIFICATION_DOWNLOAD_SUCCESSFUL,
  payload: certifications,
});

export const descargaCertificationsError = () => ({
  type: DOWNLOAD_CERTIFICATION__ERROR,
});

export function editCertificationction(CERTIFICATION) {
  return (dispatch) => {
    dispatch(startEditCERTIFICATION());

    // clienteAxios
    //   .put(`route/api/${CERTIFICATION.id}`, CERTIFICATION)
    //   .then((resp) => {
    //     //console.log(resp);
    //     dispatch(editCERTIFICATIONSuccess(resp.data));
    //     Swal.fire("Stored", "The Product was successfully updated", "success");
    //   })
    //   .catch((error) => {
    //     //console.log(error);
    //     dispatch(editCERTIFICATIONError());
    //   });
  };
}

export const startEditCERTIFICATION = () => ({
  type: BEGIN_CERTIFICATION_EDIT,
});

export const editCERTIFICATIONSuccess = (CERTIFICATION) => ({
  type: EDITION_CERTIFICATION_SUCCESS,
  payload: CERTIFICATION,
});

export const editCERTIFICATIONError = () => ({
  type: EDIT_CERTIFICATION_ERROR,
});
export function getCertificationAction(id) {
  return (dispatch) => {
    dispatch(getEditCertificationsAction());

    clienteAxios
      .get(
        `https://localhost:9001/dxc/certifications/Certification/${id}`,
      )
      .then((resp) => {
        console.log("get Certification by id", resp.data);
        dispatch(getCertificationEditExito(resp.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getCertificationEditError());
      });
  };
}

export const getEditCertificationsAction = (id) => ({
  type: GET_CERTIFICATION_EDIT,
});

export const getCertificationEditExito = (Certification) => ({
  type: CERTIFICATION_EDIT_SUCCESS,
  payload: Certification,
});

export const getCertificationEditError = () => ({
  type: CERTIFICATION_EDIT_ERROR,
});
