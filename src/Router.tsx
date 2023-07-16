// ========== Router
// import all packages
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import all pages
import { ChatRoom } from './pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
