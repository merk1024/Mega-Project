import { useState } from 'react'
import './App.css'
import background from './assets/background.png'
import Get_cod from './components/Get_cod'
import New_pass from './components/New_pass'
import Sign_in from './components/Sign_in'
import Sign_up from './components/Sign_up'
import Main from './components/Main_page'


function App() {
  

  return (
    <div className="App">
      <h1>Sign_in</h1>
      <Sign_in/>

      <h1>Get_cod</h1>
      <Get_cod/>

      <h1>Sign_up</h1>
      <Sign_up/>

      <h1>New_pass</h1>
      <New_pass/>

      
    </div>
  )
}

export default App
