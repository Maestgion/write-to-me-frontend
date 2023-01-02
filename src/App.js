import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Logout from './Components/Logout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Components/Error'
import { createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer/UseReducer'
import toast, { Toaster } from 'react-hot-toast';

const toastContainer = ()=>{
  toast.success("login successful")
}
 

// creating a context

export const UserContext = createContext()

const App = () => {  

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>

<Toaster
  position="top-center"
  reverseOrder={false}
/>

{/* Provider */}
    <BrowserRouter>

    <UserContext.Provider value={{state, dispatch}}>
  
      <Routes>
        
        <Route path="/" element={<Home toastContainer={toastContainer}/>} />

        <Route path="/about" element={<About/>}/>

        <Route path="/contact" element={<Contact/>}/>

        <Route path="/logout" element={<Logout/>} />

        <Route path='*' element={<Error/>}/>

      </Routes>    

      </UserContext.Provider>
    
    
    </BrowserRouter>




    </>
  )
}

export default App