import Home from '../Home/Home';
import About from '../About/About';
import Map from '../Map/Map';
import PatientQueue from '../PatientQueue/PatientQueue';
import CreatePatient from '../CreatePatient/CreatePatient';

import { Routes, Route } from "react-router-dom";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } />
      <Route path="map" element={ <Map />} />
      <Route path="patient-queue" element={ <PatientQueue /> } />
      <Route path="create-patient" element={ <CreatePatient /> } />
    </Routes>
  )
}

export default MyRouter;
