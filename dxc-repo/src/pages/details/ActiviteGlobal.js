import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivitesAction } from "../../services/Actions/activitesActions";

const ActiviteGlobal = () => {  
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.activites.loading);
  const error = useSelector((state) => state.activites.error);
  const activites = useSelector((state) => state.activites.activites);

  useEffect(() => {
    const loadActivites = () => dispatch(getActivitesAction());
    loadActivites();
  }, []);

  return (

    <div class="container">
         {activites.map((activite) => (
  <ul class="responsive-table">
 
    <li class="table-row">
      <div class="col col-1" data-label="nomActivite">{activite.nomActivite}</div>
      <div class="col col-2" data-label="dateDebut">{activite.dateDebut}</div>
      <div class="col col-3" data-label="dateFin">{activite.dateFin}</div>
    </li>

  </ul>
   ))}
</div>
   
  );
};

export default ActiviteGlobal;