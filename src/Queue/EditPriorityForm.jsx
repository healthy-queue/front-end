import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
const axios = require('axios');


const EditPriorityForm = ({handleClose}) => {
  const [priority, setPriority] = useState('');
  const activePatient = useSelector(state => state.patients.activePatient)
  
  const { isAuthenticated, user } = useAuth0();
  const userRole = user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0] || 'general'
  
  // // TODO: do something with the errors - Stretch
  // const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = async () => {
    try {
      console.log('Submitting queue change')
      await axios.post(`${process.env.REACT_APP_API}/queue/change-priority`,
      { 
        patient: activePatient, 
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
     ? <form style={{maxHeight: 300}}>
        <h2>Select Queue</h2>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => setPriority(e.target.value)}
          >
            <FormControlLabel value="red" control={<Radio />} label="red" />
            <FormControlLabel value="yellow" control={<Radio />} label="yellow" />
            <FormControlLabel value="green" control={<Radio />} label="green" />
          </RadioGroup>
        </FormControl>
        <div className="submit-button">
          <Button disabled={priority === ''} onClick={() => onSubmit()}>Submit</Button>
        </div>
      </form>
      : null
  );
}

export default EditPriorityForm;
