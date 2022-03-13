import { useAuth0 } from "@auth0/auth0-react";
import Grid from '@material-ui/core/Grid';
import React from 'react';
import DataTable from '../Components/DataTable';
import CreatePatientModal from './CreatePatientModal';


const PatientTable = () => {
  const { isAuthenticated, user } = useAuth0();
  const userRole = user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0] || 'general'

  return (
    isAuthenticated && userRole === 'triage' || userRole === 'provider'
      ? <>
        <h2> All Registered Patients </h2>
          <DataTable />
        <Grid container item direction="row" >
          <Grid
            item
            container
            direction="column"
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <CreatePatientModal />
          </Grid>
        </Grid>
      </>
    : null
  );
}

export default PatientTable;
