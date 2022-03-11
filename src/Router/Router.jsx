import About from '../About/About';
import Container from "@material-ui/core/Container"
import CreatePatient from '../CreatePatient/CreatePatient';
import Home from '../Home/Home';
import Map from '../Map/Map';
import PatientTable from '../PatientTable/PatientTable';
import PatientQueue from '../PatientQueue/PatientQueue';

import { Routes, Route } from "react-router-dom";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } />
      <Route path="map" element={ <Map />} />
      <Route path="patient-queue" element={ <PatientQueue /> } />
      <Route path="create-patient" 
        element={ 
          <Container
            align="center" 
            component="main" 
            maxWidth="lg"
          >
            {/* <CreatePatient />  */}
            <PatientTable />
          </Container>
        } 
      />
    </Routes>
  )
}

export default MyRouter;
