import {
    ADD_CONTRAT,
    ADD_CONTRAT_SUCCESS,
    ADD_CONTRAT_ERROR,
    START_DOWNLOAD_CONTRATS,
    CONTRAT_DOWNLOAD_SUCCESSFUL,
    DOWNLOAD_CONTRAT__ERROR,
    GET_CONTRAT_EDIT,
    CONTRAT_EDIT_SUCCESS,
    CONTRAT_EDIT_ERROR,
    BEGIN_CONTRAT_EDIT,
    EDITION_CONTRAT_SUCCESS,
    EDIT_CONTRAT_ERROR,
  } from "../types";
  import Swal from "sweetalert2";
  
  import clienteAxios from "../../config/axios";
  
  //créer un nouveau contrat - fonction principale
  export function createNewContratAction(contrat) {
    console.log("contrat", contrat);
    return (dispatch) => {
      dispatch(newContrat());
  
          clienteAxios
            .post("http://localhost:9003/DXC/contrats/addContrat", contrat)
            .then((res) => {
              console.log(res);
              //si se inserta correctamente
              dispatch(addNewContratSuccess(contrat));
            })
            .catch((error) => {
              console.log(error);
              //si hay un error
              dispatch(addNewContratError());
            });
    };
  }
  
  export const newContrat = () => ({
    type: ADD_CONTRAT,
  });
  
  export const addNewContratSuccess = (contrat) => ({
    type: ADD_CONTRAT_SUCCESS,
    payload: contrat,
  });
  
  export const addNewContratError = (error) => ({
    type: ADD_CONTRAT_ERROR,
  });
  
  //obtenir la liste des contrats de contratsReducer (voir API)
  export function getContratsAction() {
    return (dispatch) => {
      dispatch(getContratsStart());
  
      // interroger l'API
        clienteAxios
          .get("http://localhost:9003/DXC/contrats/allContrats")
          .then((resp) => {
            //console.log(resp);
            dispatch(downloadContratsSuccessful(resp.data));
          })
          .catch((error) => {
            //console.log(error);
            dispatch(descargaContratsError());
          });
    };
  }
  
  export const getContratsStart = () => ({
    type: START_DOWNLOAD_CONTRATS,
  });
  
  //API de requête
  export const downloadContratsSuccessful = (contrat) => ({
    type: CONTRAT_DOWNLOAD_SUCCESSFUL,
    payload: contrat,
  });
  
  export const descargaContratsError = () => ({
    type: DOWNLOAD_CONTRAT__ERROR,
  });
  //fonction pour obtenir le contrat à modifier
  export function getContratAction(id) {
    return (dispatch) => {
      dispatch(getEditContratAction());
  
      //obtenir l'api de  le Contrat
      clienteAxios
        .get(`http://localhost:9003/DXC/contrats/Contrat/${id}`)
        .then((resp) => {
          // console.log("reponse data",resp.data);
          dispatch(getContratEditSuccess(resp.data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(getContratEditError());
        });
    };
  }
  
  export const getEditContratAction = (id) => ({
    type: GET_CONTRAT_EDIT,
  });
  
  export const getContratEditSuccess = (contrat) => ({
    type: CONTRAT_EDIT_SUCCESS,
    payload: contrat,
  });
  
  export const getContratEditError = () => ({
    type: CONTRAT_EDIT_ERROR,
  });
  
  //MODIFIER un contrat DANS L'API ET L'ETAT
  export function editContratAction(contrat) {
    return (dispatch) => {
      dispatch(startEditContrat());
  
      //interrogez l'API et envoyez une méthode put à mettre à jour
      clienteAxios
        .put(`http://localhost:9003/DXC/contrats/updateContrat`, contrat)
        .then((resp) => {
          //console.log(resp);
          dispatch(editContratSuccess(resp.data));
          Swal.fire("Stored", "le Contrat été modifier avec succés ", "success");
        })
        .catch((error) => {
          //console.log(error);
          dispatch(editContratError());
        });
    };
  }
  
  export const startEditContrat = () => ({
    type: BEGIN_CONTRAT_EDIT,
  });
  
  export const editContratSuccess = (contrat) => ({
    type: EDITION_CONTRAT_SUCCESS,
    payload: contrat,
  });
  
  export const editContratError = () => ({
    type: EDIT_CONTRAT_ERROR,
  });
  