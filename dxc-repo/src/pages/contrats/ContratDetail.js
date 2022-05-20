import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from "axios";
import "./contrat.css";
function ContratDetail(props) {
  const [contrats, setContrats] = useState([]);
  useEffect(() => {
    console.log("hello hjjjjj");

    axios
      .get("http://localhost:8080/api/contrats/allContrats", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then(function (res) {
        // handle success
        console.log("res", res.data);
        setContrats(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  return (
    <div>
      <div>
        <PageTitle
          title="Afficher d'un Contrat"
          path="/app/prestations/Contrats"
        />
      </div>

      <div class="demo">
        <h2 class="penName">Contrat</h2>
        
      </div>
    </div>
  );
}

export default ContratDetail;
