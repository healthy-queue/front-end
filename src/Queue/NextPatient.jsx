import axios from 'axios'
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";

const style = {
  position: 'absolute',
  marginTop:'5px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 450,
  borderRadius: 5,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const NextPatient = () => {
  const { isAuthenticated, user } = useAuth0();

  const userRole = (user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0]) || 'general'
  
  const handleDequeue = async() => {
    await axios.post(`${process.env.REACT_APP_API}/queue/dequeue`);
  }

  return(
    isAuthenticated && (userRole === 'triage' || userRole === 'provider')
      ? <>
          <Button 
            color="primary"
            onClick={() => handleDequeue()}
            size="medium"
            variant="contained"
          > next 
          </Button>
        </>
      :null
  )
}

export default NextPatient
