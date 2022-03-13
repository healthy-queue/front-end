import About from '../About/About';
import Container from '@material-ui/core/Container'
import Home from '../Home/Home';
import PatientTable from '../Patients/PatientTable';
import QueueContainer from '../Queue/QueueContainer';
import ProcessPatient from '../Patients/ProcessPatient';

import { Routes, Route } from 'react-router-dom';

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } />
      <Route path="queue" element={ <QueueContainer /> } />
      <Route path="process" element={ <ProcessPatient /> } />
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
      {/* <Route path="process" element={  } */}
    </Routes>
  )
}

export default MyRouter;
