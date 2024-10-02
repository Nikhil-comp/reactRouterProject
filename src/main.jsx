import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import User from './components/User.jsx/User.jsx'
import {RouterProvider} from 'react-router-dom' 
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>} >
    <Route path='/user/:userId' element={<User/>}/>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
  </Route>   
)
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
