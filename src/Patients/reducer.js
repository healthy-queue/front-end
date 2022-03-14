import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios');

export const fetchAllPatients = createAsyncThunk(
  'patients/fetchAll',
  async () => {
    try { 
      const patients = await axios.get(`${process.env.REACT_APP_API}/patients`)
      return patients
    } catch(err) { 
      console.error('ERR', err) 
    }
  }
)

const initialState = {
  activePatient: {},
  patients: [],
  status: ''
}

export const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    setActivePatient: (state, action) => {
      state.activePatient = state.patients.find(patient => patient.id === action.payload)
    },
    setPatients: (state, action) => {
      state.patients = action.payload
    }
  },
  extraReducers: {
    [fetchAllPatients.pending] : (state) => {
      state.status = 'loading'
    },
    [fetchAllPatients.fulfilled] : (state , action) => {
      state.patients = [...action.payload.data]
      state.status = 'success'
      },
    [fetchAllPatients.rejected] : (state, { payload }) => {
      state.error = { ...payload }
      state.status = 'rejected'
    }
  }
})

// Action creators are generated for each case reducer function
export const { setActivePatient, setPatients } = patientsSlice.actions

export default patientsSlice.reducer
