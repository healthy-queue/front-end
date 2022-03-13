import Container from '@material-ui/core/Container';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import PatientTable from '../Patients/PatientTable';
import QueueContainer from '../Queue/QueueContainer';


const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } />
      <Route path="queue" element={ <QueueContainer /> } />
      <Route path="patients" 
        element={ 
          <Container
            align="center" 
            component="main" 
            maxWidth="lg"
          >
            <PatientTable />
          </Container>
        } 
      />
    </Routes>
  )
}

export default MyRouter;
