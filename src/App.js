import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Components/Error'


const App = () => {
  return (
    <>

    <BrowserRouter>
    
      <Routes>
        
        <Route path="/" element={<Home/>} />

        <Route path="/about" element={<About/>}/>

        <Route path="/contact" element={<Contact/>}/>

        <Route path='*' element={<Error/>}/>
      </Routes>    
    
    
    </BrowserRouter>




    </>
  )
}

export default App