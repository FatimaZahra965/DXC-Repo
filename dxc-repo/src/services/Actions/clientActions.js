import {
    ADD_CLIENT,
    ADD_CLIENT_SUCCESS,
    ADD_CLIENT_ERROR,
    START_DOWNLOAD_CLIENTS,
    CLIENT_DOWNLOAD_SUCCESSFUL,
    DOWNLOAD_CLIENT__ERROR,
    GET_CLIENT_REMOVE,
    DELETE_CLIENT_SUCCESS,
    DELETE_CLIENT_ERROR,
    GET_CLIENT_EDIT,
    CLIENT_EDIT_SUCCESS,
    CLIENT_EDIT_ERROR,
    BEGIN_CLIENT_EDIT,
    EDITION_CLIENT_SUCCESS,
    EDIT_CLIENT_ERROR,
  } from "../types";
  import Swal from "sweetalert2";
  
  import clienteAxios from "../../config/axios";
  
  //créer un nouveau client - fonction principale
  export function createNewClientAction(client) {
    console.log("client", client);
    return (dispatch) => {
      dispatch(newClient());
  
          clienteAxios
            .post("http://localhost:8080/DXC/clients/addClient", client)
            .then((res) => {
              console.log(res);
              //si se inserta correctamente
              dispatch(addNewClientSuccess(client));
              Swal.fire({
                text: 'le Client été ajouter avec succés',
                 timer: 1500 ,
                  timer: 3000,
                  timerProgressBar: true,
                })
            })
            .catch((error) => {
              console.log(error);
              //si hay un error
              dispatch(addNewClientError());
            });
    };
  }
  
  export const newClient = () => ({
    type: ADD_CLIENT,
  });
  
  export const addNewClientSuccess = (client) => ({
    type: ADD_CLIENT_SUCCESS,
    payload: client,
  });
  
  export const addNewClientError = (error) => ({
    type: ADD_CLIENT_ERROR,
  });
  
  //obtenir la liste des clients de clientsReducer (voir API)
  export function getClientsAction() {
    return (dispatch) => {
      dispatch(getClientsStart());
  
      //interroger l'API
        clienteAxios
          .get("http://localhost:8080/DXC/clients/allClients")
          .then((resp) => {
            //console.log(resp);
            dispatch(downloadClientsSuccessful(resp.data));
          })
          .catch((error) => {
            //console.log(error);
            dispatch(descargaClientsError());
          });
    };
  }
  
  export const getClientsStart = () => ({
    type: START_DOWNLOAD_CLIENTS,
  });
  
  //API de requête
  export const downloadClientsSuccessful = (client) => ({
    type: CLIENT_DOWNLOAD_SUCCESSFUL,
    payload: client,
  });
  
  export const descargaClientsError = () => ({
    type: DOWNLOAD_CLIENT__ERROR,
  });
  //fonction pour obtenir le client à modifier
  export function getClientAcoution(id) {
    return (dispatch) => {
      dispatch(getEditClientAction());
  
      //obtenir l'api de  le client
      clienteAxios
        .get(`http://localhost:8080/DXC/clients/Client/${id}`)
        .then((resp) => {
          console.log(resp.data);
          dispatch(getClientEditSuccess(resp.data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(getClientEditError());
        });
    };
  }
  
  export const getEditClientAction = (id) => ({
    type: GET_CLIENT_EDIT,
  });
  
  export const getClientEditSuccess = (client) => ({
    type: CLIENT_EDIT_SUCCESS,
    payload: client,
  });
  
  export const getClientEditError = () => ({
    type: CLIENT_EDIT_ERROR,
  });
  
  //MODIFIER un client DANS L'API ET L'ETAT
  export function editClientAction(client) {
    return (dispatch) => {
      dispatch(startEditClient());
  
      //interrogez l'API et envoyez une méthode put à mettre à jour
      clienteAxios
      
        .put(`http://localhost:8080/DXC/clients/updateClient`, client)
        .then((resp) => {
          //console.log(resp);
          dispatch(editClientSuccess(resp.data));
          Swal.fire({
            text: 'le client été modifier avec succés',
             timer: 1500 ,
              timer: 3000,
              timerProgressBar: true,
            })
         
        })
        .catch((error) => {
          //console.log(error);
          dispatch(editClientError());
        });
    };
  }
  
  export const startEditClient = () => ({
    type: BEGIN_CLIENT_EDIT,
  });
  
  export const editClientSuccess = (client) => ({
    type: EDITION_CLIENT_SUCCESS,
    payload: client,
  });
  
  export const editClientError = () => ({
    type: EDIT_CLIENT_ERROR,
  });
  