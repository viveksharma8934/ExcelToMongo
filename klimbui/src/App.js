import React from 'react'
import Home from './components/Home';
import Success from './components/Success';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
      <>
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/success' element={<Success />} />
            </Routes>
        </BrowserRouter>
      </>
    )
  }
export default App;