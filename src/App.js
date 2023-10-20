import React from 'react'
import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Components/About/About'
import Portofolio from './Components/Portfolio/Portofolio'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Notfound from './Components/Notfound/Notfound'
export default function App() {
  let routs = createBrowserRouter([
    {path:'',element:<Layout/> ,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portofolio',element:<Portofolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<Notfound/>},
    ]}
  ])
  return<>
      <RouterProvider router={routs}></RouterProvider>
  </>
}
