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
    console.log('Adding socket.io listeners!')
    const socket = io.connect(process.env.REACT_APP_SOCKET_IO || 'http://localhost:8000')
    socket.on('refetch queue', () => { console.log('Refetch Queues!'); dispatch(fetchAllQueues())})
    socket.on('refetch patients', () => { console.log('Refetch Patients!'); dispatch(fetchAllPatients())})
  }, []);

  return (
    <div className="App">
      <Header />
      <MyRouter />
    </div>
  );
}

export default App;
