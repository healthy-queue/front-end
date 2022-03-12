import About from '../About/About';
import Container from '@material-ui/core/Container'
import Home from '../Home/Home';
import PatientTable from '../Patients/PatientTable';
import Queue from '../Queue/Queue';

import { Routes, Route } from 'react-router-dom';

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } />
      <Route path="queue" element={ <Queue /> } />
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
