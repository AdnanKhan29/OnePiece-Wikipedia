import React from 'react'
import './App.css'
function App() {
  return (
    <div className='App'>
      <img src={require('./components/storage/header.png')} alt="logo" />
      <input type="text" placeholder="search ..."></input>
    </div>
  )
}

export default App