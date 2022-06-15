import { Grid } from '@material-ui/core';
import React from 'react';
import Tabs from './Tabs';
import useStyles from "./styles";
import CertificationProfil from './CertificationProfil';
import CompetencesProfil from './Competanceprofil/CompetencesProfil';
import InformationsProfil from './InformationsProfil';
import TechnoMethodes from './TchnoMethodesProfil/TechnoMethodes';
import { CardTitle } from 'reactstrap';
function Profil(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
        <Grid className={classes.Tabs}>
       
             <Tabs >
        <div title="Profil" className={classes.title}>
       <InformationsProfil/>
        </div>
        <div title="Competences" className={classes.title}>
        <CompetencesProfil/>
        </div>
        <div title="Certification" className={classes.title}>
        <CertificationProfil/>
        </div>
        <div title="Autres" className={classes.title}>
        <TechnoMethodes/>
        </div>
      </Tabs>
        </Grid>
        </Grid>
    );
}

export default Profil;