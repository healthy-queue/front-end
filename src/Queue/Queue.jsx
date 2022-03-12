import React from 'react';
import Container from "@material-ui/core/Container";
import QueueTabs from "./QueueTabs";
// import { useDispatch, useSelector } from 'react-redux'
// import { setActivePatient } from '../ReduxReducers/reducer'

const Queue = () => {
  // const queueData = useSelector(state => state.patientQueue.queue)
  // const selectedPatient = useSelector(state => state.patientQueue.activePatient)
  // const dispatch = useDispatch()
  console.log('Queue')
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

export default Queue;
