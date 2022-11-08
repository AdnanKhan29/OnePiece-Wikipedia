import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Enroll from './components/Enroll'
import {  Routes,Route } from 'react-router';
function App() {
  return (
     <div className="App">
      <NavBar></NavBar>
      <Routes>
         <Route path='Home' element={<Home/>}/>
         <Route path='Enroll' element={<Enroll/>}/>
     </Routes>
    </div>
  )
}

export default App