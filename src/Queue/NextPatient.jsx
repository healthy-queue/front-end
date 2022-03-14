import axios from 'axios'
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'

const NextPatient = () => {
  const { isAuthenticated, user } = useAuth0();
  const userRole = ((user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0]) || 'general')

  const navigate = useNavigate()

  const handleDequeue = async () => {
    let result = await axios.post(`${process.env.REACT_APP_API}/queue/dequeue`);
    await axios.put(`${process.env.REACT_APP_API}/patient/${result.data.id}`, { enqueued: false })
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
