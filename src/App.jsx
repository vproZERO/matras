


import "./app.css"
import { Home } from "./pages/home/home"
import { Login } from "./pages/login/login"
import { Admin } from "./pages/admin/admin"

import { Routes  , Route } from "react-router-dom"
import React, { useState } from "react"

function App() {

  const [token , setToken] = useState('');
  console.log(token);

  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login setToken={setToken} />}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
        
        
    </>
  )
}

export default App
