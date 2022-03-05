import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import { Routes, Route } from "react-router-dom";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } />
    </Routes>
  )
}

export default MyRouter;