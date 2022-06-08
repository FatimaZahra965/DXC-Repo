import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Container, Divider, TextField, Typography } from '@material-ui/core';
// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import SettingsPassword from './SettingsPassword';
import SettingsNotifications from './SettingsNotifications';
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
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
           <SettingsPassword/>
        </Box>
      </Container>
    </Box>
    
     
   </>  
   
  );
}
