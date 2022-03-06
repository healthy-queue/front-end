import React from 'react';
import { Link } from "react-router-dom";
import PatientQueue from '../PatientQueue/PatientQueue';

const Home = () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <PatientQueue />
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/map">Map</Link>
      </nav>
    </>
  );
}

export default Home;