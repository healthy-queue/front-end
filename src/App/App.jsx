import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import io from 'socket.io-client';
import Header from '../Header/Header';
import { fetchAllPatients } from '../Patients/reducer';
import { fetchAllQueues } from '../Queue/reducer';
import MyRouter from '../Router/Router';
import './App.scss';

function App() {
  const dispatch = useDispatch()

  // Adding Socket.io listeners in a use effect on app mount to avoid multiple listeners being created
  useEffect(() => {
    try {
      const socket = io.connect(process.env.REACT_APP_API || 'http://localhost:3001')
      socket.on('refetch queue', () => dispatch(fetchAllQueues()))
      socket.on('refetch patients', () => dispatch(fetchAllPatients()))
    } catch (e) {
      console.warn('Error connecting to Socket.io server: ', e)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <MyRouter />
    </div>
  );
}

export default App;
