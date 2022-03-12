import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import patientReducer from '../Patients/reducer'
 
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

// TODO: create some reducers and then combine them here
const rootReducer = combineReducers({
  patients: patientReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})
