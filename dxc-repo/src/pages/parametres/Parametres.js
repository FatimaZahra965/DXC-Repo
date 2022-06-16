import React from 'react';
import {Container } from '@material-ui/core';
// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Box from '@material-ui/core/Box';
import SettingsPassword from './SettingsPassword';

export default function Parametres() {
  return (
  <>
    <PageTitle title="Parametres"  path="/app/dashboard"/>
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ pt: 3 }}>
           <SettingsPassword/>
        </Box>
      </Container>
    </Box>
    
     
   </>  
   
  );
}
