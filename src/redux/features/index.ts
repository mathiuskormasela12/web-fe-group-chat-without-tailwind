// ========== Root Reducer
// import all packages
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

// import redux slices
import authSlice from './auth-slice/auth.slice'
import counterSlice from './counter-slice/counter.slice'

const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['counterReducer']
}

const rootReducer = combineReducers({
  authReducer: authSlice,
  counterReducer: counterSlice
})

export default persistReducer(rootPersistConfig, rootReducer)
