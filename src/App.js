import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>

    <BrowserRouter>
    
      <Routes>
        
        <Route path="/" element={<Home/>}>

            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>

        </Route>
 
        
      </Routes>    
    
    
    </BrowserRouter>




    </>
  )
}

export default App