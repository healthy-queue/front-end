// import { useEffect } from 'react'
// import io from 'socket.io-client'
import Header from '../Header/Header';
import MyRouter from '../Router/Router';
import './App.scss';

function App() {

  // const socket = io.connect('http://localhost:8000')
  // useEffect(() => {
  //   socket.on("new-message", payload => console.log('server payload: ', payload))
  // }, [])

  return (
    <div className="App">
      <Header />
      <MyRouter />
    </div>
  );
}

export default App;
