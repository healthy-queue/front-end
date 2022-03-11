import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setActivePatient } from './reducer'
import DataTable from '../Home/Table';
import Container from "@material-ui/core/Container"

const PatientQueue = () => {
  const queueData = useSelector(state => state.patientQueue.queue)
  const selectedPatient = useSelector(state => state.patientQueue.activePatient)
  const dispatch = useDispatch()

  return (
    <Container
      align="center" 
      component="main" 
      maxWidth="lg"
    >
      <div>
        { queueData.map((item, idx) => {
          return <button onClick={() => dispatch(setActivePatient(item.id))} key={idx}>{item.name}</button>
        }) }
        <span>{selectedPatient.name}</span>
      </div>
      <div>
        <DataTable />
      </div>

    </Container >
  );
}

export default PatientQueue;
