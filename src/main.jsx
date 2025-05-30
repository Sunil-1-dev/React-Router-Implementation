import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter, createRoutesFromChildren, Route } from 'react-router'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoloader } from './Components/Github/Github.jsx'
import Login from './Components/Login/Login.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"Contact",
//       element:<Contact/>
//     }
//   ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
      loader={githubInfoloader}
       path='Github' element={<Github/>}/>
      <Route path='Login' element={<Login />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
