import {
  ADD_ACTIVITE,
  ADD_ACTIVITE_SUCCESS,
  ADD_ACTIVITE_ERROR,
  BEGIN_ACTIVITE_EDIT,
  EDITION_ACTIVITE_SUCCESS,
  EDIT_ACTIVITE_ERROR,
  START_DOWNLOAD_ACTIVITES,
  ACTIVITE_DOWNLOAD_SUCCESSFUL,
  DOWNLOAD_ACTIVITE__ERROR,
  GET_ACTIVITE_EDIT,
  ACTIVITE_EDIT_SUCCESS,
  ACTIVITE_EDIT_ERROR,
} from "../types";
import Swal from "sweetalert2";

import clienteAxios from "../../config/axios";
import axios from "axios";
import moment from "moment";

//
export function createNewActiviteAction(activite) {
  console.log("activite", activite);
  return (dispatch) => {
    dispatch(newActivite());
    clienteAxios
      .post("http://localhost:9006/dxc/activites/addActivite", activite)
      .then((res) => {
        console.log(res);
        Swal.fire({
          timer: 3000,
          text: "L'activité a été ajoutée avec succès",
          timeerProgressBar: true,
          icon: "success",
        });
        dispatch(addNewActiviteSuccess(activite));
      })
      .catch((error) => {
        console.log(error);

        dispatch(addNewActiviteError());
      });
  };
}

export const newActivite = () => ({
  type: ADD_ACTIVITE,
});

export const addNewActiviteSuccess = (activite) => ({
  type: ADD_ACTIVITE_SUCCESS,
  payload: activite,
});

export const addNewActiviteError = (error) => ({
  type: ADD_ACTIVITE_ERROR,
});

//obtenir la liste des activités de activitesReducer (voir API)
export function getActivitesAction() {
  return (dispatch) => {
    dispatch(getActivitesStart());
    axios
      .get("http://localhost:9006/dxc/activites/allActivites")
      .then((resp) => {
        console.log("activites ----->", resp.data);
        resp.data.forEach((element) => {
          element.dateDebut = moment(element.dateDebut).format("L");
          element.dateFin = moment(element.dateFin).format("L");
        });
        dispatch(downloadActivitesSuccessful(resp.data));
        // for (let i = 0; i < resp.data.length; i++) {
        //   let id = resp.data[i].idPrestation;
        //   console.log("id/*//*/***************>>>>>>>", id);
        //   axios
        //     .get(`http://localhost:9002/dxc/prestations/Prestation/${id}`)
        //     .then((res) => {
        //       resp.data.forEach((element) => {
        //         element.idPrestation = res.data.titre;
        //         console.log("------>res.data.titre", res.data.titre);
        //       });
        //       dispatch(downloadActivitesSuccessful(resp.data));
        //       console.log("****-****", resp.data);
        //     });
        // }
      })
      .catch((error) => {
        //console.log(error);
        dispatch(descargaActivitesError());
      });
  };
}
export const getActivitesStart = () => ({
  type: START_DOWNLOAD_ACTIVITES,
});

//API de requête
export const downloadActivitesSuccessful = (activites) => ({
  type: ACTIVITE_DOWNLOAD_SUCCESSFUL,
  payload: activites,
});

export const descargaActivitesError = () => ({
  type: DOWNLOAD_ACTIVITE__ERROR,
});

export function editActiviteAction(activite) {
  return (dispatch) => {
    dispatch(startEditActivite());

    //interrogez l'API et envoyez une méthode put à mettre à jour
    clienteAxios
      .put(`http://localhost:9006/dxc/activites/updateActivite`, activite)
      .then((resp) => {
        //console.log(resp);
        dispatch(editActiviteSuccess(resp.data));
        Swal.fire({
          timer: 3000,
          text: "L'activité a été modifiée avec succès",
          timeerProgressBar: true,
          icon: "success",
        });
      })
      .catch((error) => {
        //console.log(error);
        dispatch(editActiviteError());
      });
  };
}

export const startEditActivite = () => ({
  type: BEGIN_ACTIVITE_EDIT,
});

export const editActiviteSuccess = (activite) => ({
  type: EDITION_ACTIVITE_SUCCESS,
  payload: activite,
});

export const editActiviteError = () => ({
  type: EDIT_ACTIVITE_ERROR,
});

export function getActiviteAction(id) {
  return (dispatch) => {
    dispatch(getEditActivitesAction());
    console.log("-------->id", id);
    clienteAxios
      .get(`http://localhost:9006/dxc/activites/Activite/${id}`)
      .then((resp) => {
        console.log("here we are -----------//----->", resp.data);
        dispatch(getActiviteEditSuccess(resp.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getActiviteEditError());
      });
  };
}

export const getEditActivitesAction = (id) => ({
  type: GET_ACTIVITE_EDIT,
});

export const getActiviteEditSuccess = (activite) => ({
  type: ACTIVITE_EDIT_SUCCESS,
  payload: activite,
});

export const getActiviteEditError = () => ({
  type: ACTIVITE_EDIT_ERROR,
});
