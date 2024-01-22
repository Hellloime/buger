import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'

function Navigation() {
  return (
    <div>
  <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* ... autres routes ... */}
       
      </Routes>
      {/* <HomePage/> */}
    </Router>
      
    </div>
  )
}

export default Navigation