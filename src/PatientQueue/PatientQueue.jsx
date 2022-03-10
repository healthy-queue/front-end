import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setActivePatient } from './reducer'
import DataTable from '../Home/Table';

const PatientQueue = () => {
  const queueData = useSelector(state => state.patientQueue.queue)
  const selectedPatient = useSelector(state => state.patientQueue.activePatient)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <DataTable />
      </div>
      <div>
        { queueData.map((item, idx) => {
          return <button onClick={() => dispatch(setActivePatient(item.id))} key={idx}>{item.name}</button>
        }) }
        <span>{selectedPatient.name}</span>
      </div>
    </>
    
  );
}

export default PatientQueue;
