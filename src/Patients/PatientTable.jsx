import React from 'react';
import DataTable from '../Components/DataTable';
import Grid from "@material-ui/core/Grid"
import CreatePatientModal from './CreatePatientModal'

const PatientTable = () => {
  return (
    <>
    <h2> All Registered Patients </h2>
    <Grid container item direction="row" >
      <Grid
        item
        container
        direction="column"
        alignItems="flex-end"
        justify="flex-end"
      ><CreatePatientModal />
      </Grid>
    </Grid>
    <DataTable />
    </>
  );
}

export default PatientTable;
