import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import QueueForm from '../Queue/QueueForm'
import { sanitizeFormInput } from '../utils/sanitizeFormInput'
import { useSelector } from 'react-redux';
const axios = require('axios');


const VisitForm = ({handleClose}) => {
  const [priority, setPriority] = useState('');
  const activePatient = useSelector(state => state.patients.activePatient)
  
  const { isAuthenticated, user } = useAuth0();
  const userRole = user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0] || 'general'
  
  // TODO: do something with the errors - Stretch
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = async data => {
    try {
      await axios.post(`${process.env.REACT_APP_API}/queue/enqueue`,
      { 
        patient: { ...activePatient, ...sanitizeFormInput(data)}, 
        priority: priority 
      });
      handleClose()
    } catch (e) {
      console.error(e)
    }
  }

  // TODO: lets see about using roles more better - Set user roles in Auth0
  // https://manage.auth0.com/dashboard/us/<Auth0 Domain>/users
  // patient_id and primary_aliment        
  return (
    isAuthenticated && userRole === 'triage' || userRole === 'provider'
     ? <>
        <h2> Select Queue </h2>
        <QueueForm setPriority={setPriority}/>
        <h2> Visit Information </h2>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <div className="input-items">
            {/* <Input 
              type="number" 
              placeholder="patient id" 
              {...register("patient_id", {required: true, maxLength: 80})} 
            /> */}
            <div>
              <InputLabel>Admission Date</InputLabel>
              <Input 
                type="date" 
                placeholder="Admission date" 
                {...register("admission_date", {required: true, maxLength: 100})} 
              />
            </div>
            {/* <Input 
              type="date"
              title="discharge date"
              // placeholder="discharge date" 
              {...register("discharge_date", {required: true, maxLength: 100})} 
            /> */}
            <div>
              <InputLabel>Notes</InputLabel>
              <Input
                type="text"
                multiline={true}
                placeholder="Reason For Visit" 
                {...register("primary_ailment", {required: true, maxLength: 500})} 
              />
            </div>
            {/* <Input
              type="text" 
              placeholder="room" 
              {...register("room", {required: false, maxLength: 100})} 
            /> */}
          </div> 
          <div className="submit-button">
            <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
          </div>
        </form>
      </>
      : null
  );
}

export default VisitForm;
