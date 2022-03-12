import React from 'react';
import Container from '@material-ui/core/Container';
import QueueTabs from './QueueTabs';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux'
// import { setActivePatient } from '../Patient/reducer'

const Queue = () => {
  const { isAuthenticated, user } = useAuth0();
  const userRole = user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0] || 'general'
  const queueData = useSelector(state => state.queue.queue)
  const selectedPatient = useSelector(state => state.patients.activePatient)
  const dispatch = useDispatch()
  console.log('Queue')
  return (
    isAuthenticated && userRole === 'triage' || userRole === 'provider'
      ? <>
          <Container
            align="center" 
            component="main" 
            maxWidth="lg"
            >
            <h2> Live Queue Information </h2>
            <QueueTabs />
            {/* { queueData.map((item, idx) => {
              return <button key={idx}>{item.name}</button>
            }) }
            <span>{selectedPatient.name}</span> */}
          </Container >
        </>
      : null
  );
}

export default Queue;
