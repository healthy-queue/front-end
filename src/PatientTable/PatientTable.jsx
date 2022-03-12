import React from 'react';
import DataTable from '../Home/Table';
import Grid from "@material-ui/core/Grid"
import AddPatientModal from '../Modals/AddPatientModal'

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
      ><AddPatientModal />
      </Grid>
    </Grid>
    <DataTable />
    </>
  );
}

export default PatientTable;
