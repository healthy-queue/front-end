import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { sanityFormInput } from '../Utils/sanitizeFormInput'
import React from 'react';
import { useForm } from 'react-hook-form';
import './CreatePatient.scss';
const axios = require('axios');

const CreatePatient = () => {
  const { isAuthenticated, user } = useAuth0();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    await axios.post(`${process.env.REACT_APP_API}/patient`, sanityFormInput(data));
  }

  // TODO: lets see about using roles more better - Set user roles in Auth0
  // https://manage.auth0.com/dashboard/us/<Auth0 Domain>/users
  const userRole = user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0] || 'general'
  
  return (
    isAuthenticated && userRole === 'triage'
      ? <>
          <h2> Add Patient Info </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-items">
              <Input type="text" placeholder="First name" {...register("first_name", { required: true, maxLength: 80 })} />
              <Input type="text" placeholder="Last name" {...register("last_name", {required: true, maxLength: 100})} />
              <Input type="datetime" placeholder="Date of Birth" {...register("date_of_birth", {require: true})} />
              <Input type="tel" placeholder="Phone number" {...register("phone_number", { required: false, maxLength: 12})} />
              <Input type="text" placeholder="Email" {...register("email_address", { required: false, pattern: /^\S+@\S+$/i})} />

              <Input type="text" placeholder="Insurance Carrier" {...register("insurance_carrier", {})} />
              <Input type="text" placeholder="Insurance Group" {...register("insurance_group", {})} />
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
