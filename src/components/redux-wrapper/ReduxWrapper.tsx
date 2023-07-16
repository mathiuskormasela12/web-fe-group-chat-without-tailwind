// ========== Redux Wrapper
// import all packages
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { type IProps } from '../../types'

// import store
import { store, persistor } from '../../redux/store'

export const ReduxWrapper: React.FC<IProps> = (props) => {
  const { children } = props

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
