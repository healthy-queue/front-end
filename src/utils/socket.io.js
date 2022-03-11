import io from 'socket.io-client';
import axios from 'axios';
import { useState, useEffect } from 'react';

const hub = io.connect(process.env.REACT_APP_HUB)

const SocketIo = () => {
const [queue, setQueue] = useState([{ name: 'Test Patient' }])

async function addPatient() {
  let patientData = {
    queue: 'red',
    patient: {
      name: 'Test patient',
      age: Math.floor(Math.random * 100)
    }
  }
  let response = await axios.post(`${process.env.REACT_APP_SERVER}/queue/enqueue`, patientData)
  if (response.status === 200) {
    hub.emit('queue-updated')
  }
}

async function fetchQueue() {
  let response = await axios.get(`${process.env.REACT_APP_SERVER}/queue`)
  let freshQueue = response.data
  console.log('Fetched the queue', freshQueue)
  setQueue(freshQueue);
}

hub.on('re-fetch', () => {
  fetchQueue()
})

useEffect(() => {
  fetchQueue()
}, [])

  return (
    <>
      {queue.map(patient => <h3>{JSON.stringify(patient)}</h3>)}
      <button onClick={() => addPatient()}>Add a patient</button>
    </>
  );
}
export default SocketIo
