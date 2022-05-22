import {
  ADD_RESSOURCE,
  ADD_RESSOURCE_SUCCESS,
  ADD_RESSOURCE_ERROR,
  START_DOWNLOAD_RESSOURCES,
  RESSOURCE_DOWNLOAD_SUCCESSFUL,
  DOWNLOAD_RESSOURCE__ERROR,
  GET_RESSOURCE_REMOVE,
  DELETE_RESSOURCE_SUCCESS,
  DELETE_RESSOURCE_ERROR,
  GET_RESSOURCE_EDIT,
  RESSOURCE_EDIT_SUCCESS,
  RESSOURCE_EDIT_ERROR,
  BEGIN_RESSOURCE_EDIT,
  EDITION_RESSOURCE_SUCCESS,
  EDIT_RESSOURCE_ERROR,
} from "../types";
import Swal from "sweetalert2";

import clienteAxios from "../../config/axios";
import axios from "axios";

//créer un nouveau produit - fonction principale
export function createNewRessourceAction(ressource) {
  console.log("ressource", ressource);
  return (dispatch) => {
    dispatch(newRessource());
    axios
      .post("http://localhost:9000/DXC/addRessource", ressource)
      .then((res) => {
        console.log(res);
        dispatch(addNewRessourceSuccess(ressource));
      })
      .catch((error) => {
        console.log(error);
        dispatch(addNewRessourceError());
      });
  };
}

export const newRessource = () => ({
  type: ADD_RESSOURCE,
});

export const addNewRessourceSuccess = (ressource) => ({
  type: ADD_RESSOURCE_SUCCESS,
  payload: ressource,
});

export const addNewRessourceError = (error) => ({
  type: ADD_RESSOURCE_ERROR,
});

//obtenir la liste des produits de productsReducer (voir API)
export function getRessourcesAction() {
  return (dispatch) => {
    dispatch(getRessourcesStart());
    axios
      .get("http://localhost:9000/DXC/ressource")
      .then((resp) => {
        console.log(resp.data);
        dispatch(downloadRessourcesSuccessful(resp.data));
      })
      .catch((error) => {
        //console.log(error);
        dispatch(descargaRessourcesError());
      });
  };
}

export const getRessourcesStart = () => ({
  type: START_DOWNLOAD_RESSOURCES,
});

//API de requête
export const downloadRessourcesSuccessful = (ressources) => ({
  type: RESSOURCE_DOWNLOAD_SUCCESSFUL,
  payload: ressources,
});

export const descargaRessourcesError = () => ({
  type: DOWNLOAD_RESSOURCE__ERROR,
});

//fonction qui supprime un produit spécifique
export function deleteRessourceAction(id) {
  return (dispatch) => {
    dispatch(getRessourceDelete());

    //supprimer de l'API
    // clienteAxios
    //   .delete(`/route/api/${id}`)
    //   .then((resp) => {
    //     //console.log(resp);
    //     dispatch(deleteRessourceSuccess(id));
    //   })
    //   .catch((error) => {
    //     //console.log(error);
    //     dispatch(deleteRessourceError());
    //   });
  };
}

export const getRessourceDelete = () => ({
  type: GET_RESSOURCE_REMOVE,
});

export const deleteRessourceSuccess = (id) => ({
  type: DELETE_RESSOURCE_SUCCESS,
  payload: id,
});

export const deleteRessourceError = () => ({
  type: DELETE_RESSOURCE_ERROR,
});

//fonction pour obtenir le produit à modifier
export function getRessourceAction(id) {
  return (dispatch) => {
    dispatch(getEditRessourcesAction());

    //obtenir le produit de l'api
    clienteAxios
      .get(`/route/api/${id}`)
      .then((resp) => {
        console.log(resp.data);
        dispatch(getRessourceEditSuccess(resp.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getRessourceEditError());
      });
  };
}

export const getEditRessourcesAction = (id) => ({
  type: GET_RESSOURCE_EDIT,
});

export const getRessourceEditSuccess = (ressource) => ({
  type: RESSOURCE_EDIT_SUCCESS,
  payload: ressource,
});

export const getRessourceEditError = () => ({
  type: RESSOURCE_EDIT_ERROR,
});

//MODIFIER UN PRODUIT DANS L'API ET L'ETAT
export function editRessourceAction(ressource) {
  return (dispatch) => {
    dispatch(startEditRessource());

    //interrogez l'API et envoyez une méthode put à mettre à jour
    const ressource_date = {
      matricule: ressource.Matricule,
      status: ressource.Status,
      genre: ressource.Genre,
      dateAmbauche: ressource.DateAmbauche,
      firstName: ressource.Nom,
      dateNaissance: ressource.DateNaissance,
      lastName: ressource.Prenom,
    };
    clienteAxios
      .put(`http://localhost:9000/DXC/update`, ressource_date)
      .then((resp) => {
        //console.log(resp);
        dispatch(editRessourceSuccess(resp.data));
        Swal.fire(
          "Stored",
          "The Ressource was successfully updated",
          "success",
        );
      })
      .catch((error) => {
        //console.log(error);
        dispatch(editRessourceError());
      });
  };
}

export const startEditRessource = () => ({
  type: BEGIN_RESSOURCE_EDIT,
});

export const editRessourceSuccess = (ressource) => ({
  type: EDITION_RESSOURCE_SUCCESS,
  payload: ressource,
});

export const editRessourceError = () => ({
  type: EDIT_RESSOURCE_ERROR,
});
