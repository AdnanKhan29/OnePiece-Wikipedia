import React from 'react'
function Home() {
  return (
    <div>
        <div className='App'>
      <img src={require('./storage/header.png')} alt="logo" />
      <h4>Enter the Devil Fruit or the Devil fruit user name</h4>
      <input type="text" placeholder="search ..."></input>
    </div>
    </div>
  )
}

export default Home