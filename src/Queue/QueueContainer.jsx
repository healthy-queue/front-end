import Container from '@material-ui/core/Container';
import QueueTabs from './QueueTabs';
import { useAuth0 } from '@auth0/auth0-react';

const QueueContainer = () => {

  const { isAuthenticated, user } = useAuth0();
  const userRole = user && user['http://localhost:3000/role'] && user['http://localhost:3000/role'][0] || 'general'
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
