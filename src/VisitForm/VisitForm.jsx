import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import { useAuth0 } from "@auth0/auth0-react"
import QueueForm from './QueueForm'

const VisitForm = () => {
  const { isAuthenticated, user } = useAuth0();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log('visit info button',data);

  // TODO: lets see about using roles more better - Set user roles in Auth0
  // https://manage.auth0.com/dashboard/us/<Auth0 Domain>/users
  const userRole = user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0] || 'general'
  console.log(userRole)
  // patient_id and primary_aliment        
  return (
    // isAuthenticated && userRole === 'general'
    isAuthenticated && userRole === 'triage'
      ? <>
          <h2> Select Queue </h2>
          <QueueForm />
          <h2> Add Visit Info </h2>
          <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="input-items">
              <Input 
                type="number" 
                placeholder="patient id" 
                {...register("patient_id", {required: true, maxLength: 80})} 
              />
              <Input 
                type="date" 
                placeholder="admission date" 
                {...register("admission_date", {required: true, maxLength: 100})} 
              />
              <Input 
                type="date"
                title="discharge date"
                // placeholder="discharge date" 
                {...register("discharge_date", {required: true, maxLength: 100})} 
              />
              <Input
                type="text" 
                placeholder="primary ailment" 
                {...register("primary_ailment", {required: true, maxLength: 100})} 
              />
              <Input
                type="text" 
                placeholder="room" 
                {...register("room", {required: false, maxLength: 100})} 
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

export default VisitForm;
