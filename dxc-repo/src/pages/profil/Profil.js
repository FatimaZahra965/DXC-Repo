import { Grid } from '@material-ui/core';
import React from 'react';
import Tabs from './Tabs';
import useStyles from "./styles";
import CertificationProfil from './CertificationProfil';
import CompetencesProfil from './CompetencesProfil';
import InformationsProfil from './InformationsProfil';
import PageTitle from '../../components/PageTitle/PageTitle';
function Profil(props) {
    const classes = useStyles();
    return (
        <div>
             <PageTitle title="Informations sur le profil"  path="/app/dashboard"/>
        <div >
        <Grid container spacing={3}>
            test
        </Grid>
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
      </Tabs>
        </Grid>
        </div> 
        </div> 
    );
}

export default Profil;