import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { findNestedObj } from '../utils/findNestedValue'
const axios = require('axios');

export const fetchAllQueues = createAsyncThunk(
  'queue/fetchAll',
  async () => {
    try { 
      const queue = await axios.get(`${process.env.REACT_APP_API}/queue`)
      return queue
    } catch(err) { 
      console.error('ERR', err) 
    }
  }
)

const initialState = {
  activeQueueItem: {},
  queue: {},
  status: ''
}

export const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    setActiveQueueItem: (state, action) => {
      state.activeQueueItem = findNestedObj(state.queue, 'id', action.payload.id)
    },
    setQueue: (state, action) => {
      state.queue = action.payload
    }
  },
  extraReducers: {
    [fetchAllQueues.pending] : (state) => {
      state.status = 'loading'
    },
    [fetchAllQueues.fulfilled] : (state , action) => {
      state.queue = { ...action.payload.data }
      state.status = 'success'
      },
    [fetchAllQueues.rejected] : (state, { payload }) => {
      state.error = { ...payload }
      state.status = 'rejected'
    }
  }
})

// Action creators are generated for each case reducer function
export const { setActiveQueueItem, setQueue } = queueSlice.actions

export default queueSlice.reducer
