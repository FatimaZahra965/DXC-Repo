import {
  ADD_CAPABILITE,
  ADD_CAPABILITE_SUCCESS,
  ADD_CAPABILITE_ERROR,
  START_DOWNLOAD_CAPABILITES,
  CAPABILITE_DOWNLOAD_SUCCESSFUL,
  DOWNLOAD_CAPABILITE__ERROR,
  GET_CAPABILITE_EDIT,
  CAPABILITE_EDIT_SUCCESS,
  CAPABILITE_EDIT_ERROR,
  BEGIN_CAPABILITE_EDIT,
  EDITION_CAPABILITE_SUCCESS,
  EDIT_CAPABILITE_ERROR,
  SHOWRESSOURCES_CAP,
} from "../types";
import Swal from "sweetalert2";

import clienteAxios from "../../config/axios";
import Capabilites from "../../pages/capabilites/Capabilites";

//créer un nouveau CAPABILITE - fonction principale
export function createNewCapabiliteAction(capabilite) {
  console.log("capabilite", capabilite);
  return (dispatch) => {
    dispatch(newCapabilite());
    clienteAxios
      .post(
        "https://dxcrepo-capabilite.azurewebsites.net/DXC/capabilites/addCapabilite",
        capabilite,
      )
      .then((res) => {
        console.log(res.data);
        //si se inserta correctamente
        dispatch(addNewCapabiliteSuccess(capabilite));
        Swal.fire({
          text: "le capabilite été ajouter avec succés",
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        //si hay un error
        dispatch(addNewCapabiliteError());
      });
  };
}

export const newCapabilite = () => ({
  type: ADD_CAPABILITE,
});

export const addNewCapabiliteSuccess = (capabilite) => ({
  type: ADD_CAPABILITE_SUCCESS,
  payload: capabilite,
});

export const addNewCapabiliteError = (error) => ({
  type: ADD_CAPABILITE_ERROR,
});
export function showRessourcesCap(value) {
  return (dispatch) => {
    console.log("show ressource action ", value);
    dispatch(showRessourceCap(value));
  };
}
export const showRessourceCap = (value) => ({
  type: SHOWRESSOURCES_CAP,
  payload: value,
});

//obtenir la liste des CAPABILITEs de CAPABILITEsReducer (voir API)
export function getCapabilitesAction() {
  return (dispatch) => {
    console.log("*****************************");
    dispatch(getCapabilitesStart());
    // interroger l'API
    clienteAxios
      .get(
        "https://dxcrepo-capabilite.azurewebsites.net/DXC/capabilites/allCapabilites",
      )
      .then((resp) => {
        console.log("===================>", resp);
        dispatch(downloadCapabilitesSuccessful(resp.data));
      })
      .catch((error) => {
        console.log("=======>", error);
        dispatch(descargaCapabilitesError());
      });
  };
}

export const getCapabilitesStart = () => ({
  type: START_DOWNLOAD_CAPABILITES,
});

//API de requête
export const downloadCapabilitesSuccessful = (capabilite) => ({
  type: CAPABILITE_DOWNLOAD_SUCCESSFUL,
  payload: capabilite,
});

export const descargaCapabilitesError = () => ({
  type: DOWNLOAD_CAPABILITE__ERROR,
});
//fonction pour obtenir le CAPABILITE à modifier
export function getCapabiliteAction(id) {
  return (dispatch) => {
    dispatch(getEditCapabiliteAction());

    //obtenir l'api de  le CAPABILITE
    clienteAxios
      .get(
        `https://dxcrepo-capabilite.azurewebsites.net/DXC/capabilites/Capabilite/${id}`,
      )
      .then((resp) => {
        // console.log("reponse data",resp.data);
        dispatch(getCapabiliteEditSuccess(resp.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getCapabiliteEditError());
      });
  };
}

export const getEditCapabiliteAction = (id) => ({
  type: GET_CAPABILITE_EDIT,
});

export const getCapabiliteEditSuccess = (capabilite) => ({
  type: CAPABILITE_EDIT_SUCCESS,
  payload: capabilite,
});

export const getCapabiliteEditError = () => ({
  type: CAPABILITE_EDIT_ERROR,
});

//MODIFIER un CAPABILITE DANS L'API ET L'ETAT
export function editCapabiliteAction(capabilite) {
  return (dispatch) => {
    dispatch(startEditCapabilite());

    //interrogez l'API et envoyez une méthode put à mettre à jour
    clienteAxios
      .put(
        `https://dxcrepo-capabilite.azurewebsites.net/DXC/capabilites/updateCapabilite`,
        capabilite,
      )
      .then((resp) => {
        //console.log(resp);
        dispatch(editCapabiliteSuccess(resp.data));
        Swal.fire({
          text: "le CAPABILITE été modifier avec succés",
          timer: 1500,
          timer: 3000,
          timerProgressBar: true,
        });
      })
      .catch((error) => {
        //console.log(error);
        dispatch(editCapabiliteError());
      });
  };
}

export const startEditCapabilite = () => ({
  type: BEGIN_CAPABILITE_EDIT,
});

export const editCapabiliteSuccess = (capabilite) => ({
  type: EDITION_CAPABILITE_SUCCESS,
  payload: capabilite,
});

export const editCapabiliteError = () => ({
  type: EDIT_CAPABILITE_ERROR,
});
