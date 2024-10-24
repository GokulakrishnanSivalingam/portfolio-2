import React, { useState } from 'react'
import App from './App.jsx'
import Project from './Project.jsx'

import {BrowserRouter,Routes,Route} from 'react-router-dom'




function Index() {
  const [count, setCount] = useState(0)
  

  return (
  
        <BrowserRouter>
      <Routes>
        
<Route path='/' element={<App/>}/>
<Route path='/project' element={<Project/>}/>



      </Routes>
      </BrowserRouter>
      
  )
}

export default Index
