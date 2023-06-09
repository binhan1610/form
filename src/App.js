import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<Signin/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App