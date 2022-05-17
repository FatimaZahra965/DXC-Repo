import {
  ADD_PRESTATION,
  ADD_PRESTATION_SUCCESS,
  ADD_PRESTATION_ERROR,
  BEGIN_PRESTATION_EDIT,
  EDITION_PRESTATION_SUCCESS,
  EDIT_PRESTATION_ERROR,
  START_DOWNLOAD_PRESTATIONS,
  PRESTATION_DOWNLOAD_SUCCESSFUL,
  DOWNLOAD_PRESTATION__ERROR,
} from "../types";
import Swal from "sweetalert2";

import clienteAxios from "../../config/axios";
import axios from "axios";

//créer un nouveau produit - fonction principale
export function createNewPrestationAction(prestation) {
  console.log("prestation", prestation);
  return (dispatch) => {
    dispatch(newPrestation());
    clienteAxios
      .post("http://localhost:9002/DXC/prestations/addPrestation", prestation)
      .then((res) => {
        console.log(res);
        //dispatch(addNewPrestationSuccess(prestation));
      })
      .catch((error) => {
        console.log(error);
        //si hay un error
        dispatch(addNewPrestationError());
      });
  };
}

export const newPrestation = () => ({
  type: ADD_PRESTATION,
});

export const addNewPrestationSuccess = (prestation) => ({
  type: ADD_PRESTATION_SUCCESS,
  payload: prestation,
});

export const addNewPrestationError = (error) => ({
  type: ADD_PRESTATION_ERROR,
});

//obtenir la liste des produits de productsReducer (voir API)
export function getPrestationsAction() {
  return (dispatch) => {
    dispatch(getPrestationsStart());

    axios
      .get("http://localhost:9002/DXC/prestations/allPrestations")
      .then((resp) => {
        console.log("all prestations ----->", resp.data);
        dispatch(downloadPrestationsSuccessful(resp.data));
      })
      .catch((error) => {
        //console.log(error);
        dispatch(descargaPrestationsError());
      });
  };
}

export const getPrestationsStart = () => ({
  type: START_DOWNLOAD_PRESTATIONS,
});

//API de requête
export const downloadPrestationsSuccessful = (prestations) => ({
  type: PRESTATION_DOWNLOAD_SUCCESSFUL,
  payload: prestations,
});

export const descargaPrestationsError = () => ({
  type: DOWNLOAD_PRESTATION__ERROR,
});

export function editRessourceAction(prestation) {
  return (dispatch) => {
    dispatch(startEditRessource());

    // clienteAxios
    //   .put(`route/api/${prestation.id}`, prestation)
    //   .then((resp) => {
    //     //console.log(resp);
    //     dispatch(editRessourceSuccess(resp.data));
    //     Swal.fire("Stored", "The Product was successfully updated", "success");
    //   })
    //   .catch((error) => {
    //     //console.log(error);
    //     dispatch(editRessourceError());
    //   });
  };
}

export const startEditRessource = () => ({
  type: BEGIN_PRESTATION_EDIT,
});

export const editRessourceSuccess = (prestation) => ({
  type: EDITION_PRESTATION_SUCCESS,
  payload: prestation,
});

export const editRessourceError = () => ({
  type: EDIT_PRESTATION_ERROR,
});
