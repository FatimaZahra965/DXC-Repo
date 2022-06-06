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
  GET_PRESTATION_EDIT,
  PRESTATION_EDIT_SUCCESS,
  PRESTATION_EDIT_ERROR,
} from "../types";
import Swal from "sweetalert2";

import clienteAxios from "../../config/axios";
import axios from "axios";
import moment from "moment";

//créer un nouveau produit - fonction principale
export function createNewPrestationAction(prestation) {
  console.log("prestation", prestation);
  return (dispatch) => {
    dispatch(newPrestation());
    clienteAxios
      .post("https://dxcrepo-prestation.azurewebsites.net/DXC/prestations/addPrestation", prestation)
      .then((res) => {
        console.log(res);
        Swal.fire({
          timer: 3000,
          text: "La prestation est ajouter avec succés",
          timeerProgressBar: true,
          icon: "success",
        });
        dispatch(addNewPrestationSuccess(prestation));
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

//obtenir la liste des produits de prestationsReducer (voir API)
export function getPrestationsAction() {
  return (dispatch) => {
    dispatch(getPrestationsStart());

    axios
      .get("https://dxcrepo-prestation.azurewebsites.net/DXC/prestations/allPrestations")
      .then((resp) => {
        console.log("all prestations ----->", resp.data);
        resp.data.forEach((element) => {
          element.dateDebut = moment(element.dateDebut).format("L");
          element.dateFin = moment(element.dateFin).format("L");
        });
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

export function editPrestationAction(prestation) {
  return (dispatch) => {
    dispatch(startEditPrestation());

    //interrogez l'API et envoyez une méthode put à mettre à jour
    clienteAxios
      .put(`https://dxcrepo-prestation.azurewebsites.net/DXC/prestations/updatePrestation`, prestation)
      .then((resp) => {
        //console.log(resp);
        dispatch(editPrestationSuccess(resp.data));
        Swal.fire({
          timer: 3000,
          text: "La prestation est modifier avec succés",
          timeerProgressBar: true,
          icon: "success",
        });
      })
      .catch((error) => {
        //console.log(error);
        dispatch(editPrestationError());
      });
  };
}

export const startEditPrestation = () => ({
  type: BEGIN_PRESTATION_EDIT,
});

export const editPrestationSuccess = (prestation) => ({
  type: EDITION_PRESTATION_SUCCESS,
  payload: prestation,
});

export const editPrestationError = () => ({
  type: EDIT_PRESTATION_ERROR,
});

export function getPrestationAction(id) {
  return (dispatch) => {
    dispatch(getEditPrestationsAction());

    //obtenir le produit de l'api
    clienteAxios
      .get(`https://dxcrepo-prestation.azurewebsites.net/DXC/prestations/Prestation/${id}`)
      .then((resp) => {
        console.log(resp.data);
        dispatch(getPrestationEditSuccess(resp.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getPrestationEditError());
      });
  };
}

export const getEditPrestationsAction = (id) => ({
  type: GET_PRESTATION_EDIT,
});

export const getPrestationEditSuccess = (prestation) => ({
  type: PRESTATION_EDIT_SUCCESS,
  payload: prestation,
});

export const getPrestationEditError = () => ({
  type: PRESTATION_EDIT_ERROR,
});
