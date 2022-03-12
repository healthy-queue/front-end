import About from '../About/About';
import Container from "@material-ui/core/Container"
import Home from '../Home/Home';
import PatientTable from '../PatientTable/PatientTable';
import PatientQueue from '../PatientQueue/PatientQueue';

import { Routes, Route } from "react-router-dom";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } /> 
      <Route path="patient-queue" element={ <PatientQueue /> } />
      <Route path="create-patient" 
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
