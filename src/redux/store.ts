// ========== Store
// import all packages
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, FLUSH, PERSIST, PURGE, REGISTER, REHYDRATE, PAUSE } from 'redux-persist'
import rootReducer from './features'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, FLUSH, PERSIST, REGISTER, PURGE, PAUSE]
      }
    })
  )
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
