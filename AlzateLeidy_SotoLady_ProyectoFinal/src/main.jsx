import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Routes/Contact.jsx'
import Detail from './Routes/Detail.jsx'
import Favs from './Routes/Favs.jsx'
import Home from './Routes/Home.jsx'
import NotFound from './Routes/NotFound.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ='/' element = {<App/>}>
            <Route path ='/home' element = {<Home/>}/> 
            <Route path ='/contact' element = {<Contact/>}/>
            <Route path ='/favs' element = {<Favs/>}/> 
            <Route path ='/detail/:id?' element = {<Detail/>}/>
            <Route path = '*' element = {<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
