import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Questions from './Questions'  
import AskQuestion from './AskQuestion'
import DisplayQuestion from './DisplayQuestion'
export default function AllRoutes() {
  return (
    <Routes>
        <Route  path = "/" element ={<Home/>}/>
        <Route  path = "/Login" element ={<Login/>}/>
        <Route  path = "/Questions" element ={<Questions/>}/>
        <Route  path = "/Question/:id" element = {<DisplayQuestion />}/>
        <Route  path = "/AskQuestion" element= {<AskQuestion />}/>
    </Routes>
  )
}
