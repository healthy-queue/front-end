import React from 'react';
import Container from "@material-ui/core/Container"
import QueueTabs from "../QueueTabs/QueueTabs"
// import { useDispatch, useSelector } from 'react-redux'
// import { setActivePatient } from '../ReduxReducers/reducer'

const PatientQueue = () => {
  // const queueData = useSelector(state => state.patientQueue.queue)
  // const selectedPatient = useSelector(state => state.patientQueue.activePatient)
  // const dispatch = useDispatch()

  return (
    <>
      <Container
        align="center" 
        component="main" 
        maxWidth="lg"
        >
        <h2> Live Queue Information </h2>
        <QueueTabs />
        {/* { queueData.map((item, idx) => {
          return <button onClick={() => dispatch(setActivePatient(item.id))} key={idx}>{item.name}</button>
        }) }
        <span>{selectedPatient.name}</span> */}
      </Container >
    </>
  );
}

export default PatientQueue;
