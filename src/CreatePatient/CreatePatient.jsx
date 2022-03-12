import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@mui/material/Input'
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
import './CreatePatient.scss'

const CreatePatient = () => {
  const { isAuthenticated, user } = useAuth0();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  // TODO: lets see about using roles more better - Set user roles in Auth0
  // https://manage.auth0.com/dashboard/us/<Auth0 Domain>/users
  const userRole = user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0] || 'general'
  
  return (
    isAuthenticated && userRole === 'triage'
      ? <>
          <h2> Add Patient Info </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-items">
              <Input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
              <Input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
              <Input type="datetime" placeholder="Date of Birth" {...register("Date of Birth", {require: true})} />
              <Input type="tel" placeholder="Phone number" {...register("Phone number", { required: false, maxLength: 12})} />
              <Input type="text" placeholder="Email" {...register("Email", { required: false, pattern: /^\S+@\S+$/i})} />

              <Input type="text" placeholder="Insurance Carrier" {...register("Insurance Carrier", {})} />
              <Input type="text" placeholder="Insurance Group" {...register("Insurance Group", {})} />
            </div>
            <div className="submit-button">
              <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
            </div>
          </form>
        </>
      : null
  );
}

export default CreatePatient;
