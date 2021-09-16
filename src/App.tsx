import React from 'react'
import "./App.css"
import Song from './components/Song'
import User from './components/user'

function App() {

  return (
    <div className="App">
        <h1>Naaz Chudail hain</h1>
        <Song id={1} name="stay" cover="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/The_Kid_Laroi_an d_Justin_Bieber_-_Stay.png/220px-The_Kid_Laroi_and_Justin_Bieber_-_Stay.png" artists={["justin beiber", "the kid laroi"]} views={10000000}/>
        <User />
    </div>
  )
}

export default App
