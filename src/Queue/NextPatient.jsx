import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActivePatient } from '../Patients/reducer';

const NextPatient = () => {
  // Grab activePatient from redux
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useAuth0();
  const userRole = ((user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0]) || 'general')

  const navigate = useNavigate()

  const handleDequeue = async () => {
    let result = await axios.post(`${process.env.REACT_APP_API}/queue/dequeue`);
    await axios.put(`${process.env.REACT_APP_API}/patient/${result.data.id}`, { enqueued: false })
    // Set Active patient
    dispatch(setActivePatient(result.data.id))
    navigate('/process')
  }

  return(
    isAuthenticated && (userRole === 'provider')
      ? <>
          <Button 
            color="primary"
            onClick={() => handleDequeue() }
            size="medium"
            variant="contained"
          > next 
          </Button>
        </>
      : null
  )
}

export default NextPatient
