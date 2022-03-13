import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import QueueForm from '../Queue/QueueForm'
import { sanitizeFormInput } from '../utils/sanitizeFormInput'
const axios = require('axios');


const AddVisitForm = ({handleClose}) => {
  const [priority, setPriority] = useState('');
  const activePatient = useSelector(state => state.patients.activePatient)
  
  const { isAuthenticated, user } = useAuth0();
  const userRole = ((user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0]) || 'general')
  
  // TODO: do something with the errors - Stretch
  const { register, handleSubmit} = useForm();

  const onSubmit = async data => {
    try {
      await axios.post(`${process.env.REACT_APP_API}/queue/enqueue`,
      { 
        patient: { ...activePatient, ...sanitizeFormInput(data), admission_date: new Date()}, 
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
    isAuthenticated && (userRole === 'triage' || userRole === 'provider')
     ? <>
        <h2>Select Queue</h2>
        <QueueForm setPriority={setPriority}/>
        <h2>Visit Information</h2>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <div className="input-items">
            <InputLabel>Notes</InputLabel>
            <TextField
              variant="outlined"
              id="outlined-basic"
              type="text"
              fullWidth
              multiline
              rows={4}
              placeholder="Reason For Visit"
              {...register("primary_ailment", { required: true, maxLength: 500 })}
            />
          </div> 
          <div className="submit-button">
            <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
          </div>
        </form>
      </>
      : null
  );
}

export default AddVisitForm;
