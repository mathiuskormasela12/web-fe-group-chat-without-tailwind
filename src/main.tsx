// ========== Main
// import all packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.tsx'

// import all components
import { ReduxWrapper } from './components'

// import global styles
import GlobalStyle from './styles/GlobalStyle.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxWrapper>
      <GlobalStyle />
      <Router />
    </ReduxWrapper>
  </React.StrictMode>
)
