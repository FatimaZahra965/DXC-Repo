import {
  ADD_CERTIFICATE,
  ADD_CERTIFICATE_SUCCESS,
  ADD_CERTIFICATE_ERROR,
  BEGIN_CERTIFICATE_EDIT,
  EDITION_CERTIFICATE_SUCCESS,
  EDIT_CERTIFICATE_ERROR,
  START_DOWNLOAD_CERTIFICATE,
  CERTIFICATE_DOWNLOAD_SUCCESSFUL,
  DOWNLOAD_CERTIFICATE__ERROR,
} from "../types";

import clienteAxios from "../../config/axios";
import axios from "axios";

export function createNewCertificateAction(certificate) {
  console.log("certificate", certificate);
  return (dispatch) => {
    dispatch(newCertificate());
    clienteAxios
      .post(
        "http://localhost:8081/DXC/certificates/addCertificate",
        certificate,
      )
      .then((res) => {
        console.log(res);
        //dispatch(addNewCertificateSuccess(certificate));
      })
      .catch((error) => {
        console.log(error);
        //si hay un error
        dispatch(addNewCertificateError());
      });
  };
}

export const newCertificate = () => ({
  type: ADD_CERTIFICATE,
});

export const addNewCertificateSuccess = (certificate) => ({
  type: ADD_CERTIFICATE_SUCCESS,
  payload: certificate,
});

export const addNewCertificateError = (error) => ({
  type: ADD_CERTIFICATE_ERROR,
});

//obtenir la liste des produits de productsReducer (voir API)
export function getCertificationsAction() {
  return (dispatch) => {
    dispatch(getCertficationStart());

    axios
      .get("http://localhost:8081/DXC/certifications/allPrestations")
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
  type: START_DOWNLOAD_CERTIFICATE,
});

export const downloadCertificationsSuccessful = (certifications) => ({
  type: CERTIFICATE_DOWNLOAD_SUCCESSFUL,
  payload: certifications,
});

export const descargaCertificationsError = () => ({
  type: DOWNLOAD_CERTIFICATE__ERROR,
});

export function editCertificateAction(certificate) {
  return (dispatch) => {
    dispatch(startEditCertificate());

    // clienteAxios
    //   .put(`route/api/${certificate.id}`, certificate)
    //   .then((resp) => {
    //     //console.log(resp);
    //     dispatch(editCertificateSuccess(resp.data));
    //     Swal.fire("Stored", "The Product was successfully updated", "success");
    //   })
    //   .catch((error) => {
    //     //console.log(error);
    //     dispatch(editCertificateError());
    //   });
  };
}

export const startEditCertificate = () => ({
  type: BEGIN_CERTIFICATE_EDIT,
});

export const editCertificateSuccess = (certificate) => ({
  type: EDITION_CERTIFICATE_SUCCESS,
  payload: certificate,
});

export const editCertificateError = () => ({
  type: EDIT_CERTIFICATE_ERROR,
});
