import { useAuth0 } from "@auth0/auth0-react";
import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DataTable from '../Components/DataTable';
import CreatePatientModal from './CreatePatientModal';
import { setPatients } from './reducer';
const axios = require('axios');


const PatientTable = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useAuth0();
  const userRole = (user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0]) || 'general'

  // Get Patients on initial load
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${process.env.REACT_APP_API}/patients`)
      console.log(result.data)
      dispatch(setPatients(result.data))
    }
    fetchData().catch(console.error)
  }, [])

  return (
    isAuthenticated && (userRole === 'triage' || userRole === 'provider')
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
