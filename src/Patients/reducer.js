import { createSlice } from '@reduxjs/toolkit'
const Data = require('../data/sample-queue.json')

const initialState = {
  activePatient: {},
  patients: Data
}

export const patientQueueSlice = createSlice({
  name: 'patientQueue',
  initialState,
  reducers: {
    setActivePatient: (state, action) => {
      console.log('Payload', action.payload)
      state.activePatient = state.patients.find(patient => patient.id === action.payload)
    },
  }
})

// Action creators are generated for each case reducer function
export const { setActivePatient } = patientQueueSlice.actions

export default patientQueueSlice.reducer
