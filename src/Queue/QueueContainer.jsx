import { useAuth0 } from '@auth0/auth0-react';
import Container from '@material-ui/core/Container';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import QueueTabs from './QueueTabs';
import { setQueue } from './reducer';
const axios = require('axios');


const QueueContainer = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useAuth0();
  const userRole = user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0] || 'general'

  // Get Queue on initial load
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${process.env.REACT_APP_API}/queue`)
      console.log(result.data)
      dispatch(setQueue(result.data))
    }
    fetchData().catch(console.error)
  }, [])
  
  return (
    isAuthenticated && userRole === 'triage' || userRole === 'provider'
      ? <>
          <Container align="center" component="main" maxWidth="lg">
            <h2> Live Queue Information </h2>
            <QueueTabs />
          </Container >
        </>
      : null
  );
}

export default QueueContainer;
