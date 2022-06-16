import {
    ADD_COMPETANCE,
    ADD_COMPETANCE_SUCCESS,
    ADD_COMPETANCE_ERROR,
    START_DOWNLOAD_COMPETANCES,
    COMPETANCE_DOWNLOAD_SUCCESSFUL,
    DOWNLOAD_COMPETANCE__ERROR,
    GET_COMPETANCE_EDIT,
    COMPETANCE_EDIT_SUCCESS,
    COMPETANCE_EDIT_ERROR,
    BEGIN_COMPETANCE_EDIT,
    EDITION_COMPETANCE_SUCCESS,
    EDIT_COMPETANCE_ERROR,
  } from "../types";
  import Swal from "sweetalert2";
  
  import clienteAxios from "../../config/axios";
  
  //créer un nouveau Competance - fonction principale
  export function createNewCompetanceAction(competance) {
    console.log("competance", competance);
    return (dispatch) => {
      dispatch(newCompetance());
  
          clienteAxios
            .post("https://dxcrepo-competance.azurewebsites.net/DXC/competances/addCompetance", competance)
            .then((res) => {
              console.log(res);
              //si se inserta correctamente
              dispatch(addNewCompetanceSuccess(competance));
              Swal.fire({
                text: 'la Competance été ajouter avec succés',
                 timer: 1500 ,
                  timer: 3000,
                  timerProgressBar: true,
                })
            })
            .catch((error) => {
              console.log(error);
              //si hay un error
              dispatch(addNewCompetanceError());
            });
    };
  }
  export const newCompetance = () => ({
    type: ADD_COMPETANCE,
  });
  
  export const addNewCompetanceSuccess = (competance) => ({
    type: ADD_COMPETANCE_SUCCESS,
    payload: competance,
  });
  
  export const addNewCompetanceError = (error) => ({
    type: ADD_COMPETANCE_ERROR,
  });
  
  //obtenir la liste des Competances de CompetancesReducer (voir API)
  export function getCompetancesAction() {
    return (dispatch) => {
      dispatch(getCompetancesStart());
  
      // interroger l'API
        clienteAxios
          .get("https://dxcrepo-competance.azurewebsites.net/DXC/competances/allCompetances")
          .then((resp) => {
            //console.log(resp);
            dispatch(downloadCompetancesSuccessful(resp.data));
          })
          .catch((error) => {
            //console.log(error);
            dispatch(descargaCompetancesError());
          });
    };
  }
  
  export const getCompetancesStart = () => ({
    type: START_DOWNLOAD_COMPETANCES,
  });
  
  //API de requête
  export const downloadCompetancesSuccessful = (competance) => ({
    type: COMPETANCE_DOWNLOAD_SUCCESSFUL,
    payload: competance,
  });
  
  export const descargaCompetancesError = () => ({
    type: DOWNLOAD_COMPETANCE__ERROR,
  });
  //fonction pour obtenir la Competance à modifier
  export function getCompetanceAction(id) {
    return (dispatch) => {
      dispatch(getEditCompetanceAction());
  
      //obtenir l'api de  la Competance
      clienteAxios
        .get(`https://dxcrepo-competance.azurewebsites.net/DXC/competances/competance/${id}`)
        .then((resp) => {
          console.log(resp.data);
          dispatch(getCompetanceEditSuccess(resp.data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(getCompetanceEditError());
        });
    };
  }

  
  
  export const getEditCompetanceAction = (id) => ({
    type: GET_COMPETANCE_EDIT,
  });
  
  export const getCompetanceEditSuccess = (competance) => ({
    type: COMPETANCE_EDIT_SUCCESS,
    payload: competance,
  });
  
  export const getCompetanceEditError = () => ({
    type: COMPETANCE_EDIT_ERROR,
  });
  
  //MODIFIER une Competance DANS L'API ET L'ETAT
  export function editCompetanceAction(competance) {
    return (dispatch) => {
      dispatch(startEditCompetance());
  
      //interrogez l'API et envoyez une méthode put à mettre à jour
      clienteAxios
        .put(`https://dxcrepo-competance.azurewebsites.net/DXC/competances/updateCompetance`, competance)
        .then((resp) => {
          //console.log(resp);
          dispatch(editCompetanceSuccess(resp.data));
          Swal.fire({
            text: 'la Competance été modifier avec succés',
              timer: 3000,
              timerProgressBar: true,
            })
          
        })
        .catch((error) => {
          //console.log(error);
          dispatch(editCompetanceError());
          Swal.fire({
            timer: 3000,
            text: "La competence n'est pas modifié",
            timeerProgressBar: true,
            icon: "error",
          });
        });
    };
  }
  
  export const startEditCompetance = () => ({
    type: BEGIN_COMPETANCE_EDIT,
  });
  
  export const editCompetanceSuccess = (competance) => ({
    type: EDITION_COMPETANCE_SUCCESS,
    payload: competance,
  });
  
  export const editCompetanceError = () => ({
    type: EDIT_COMPETANCE_ERROR,
  });
  