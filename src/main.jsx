import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import './index.css'
import Collection from './composant/Collection.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // errorElement: <Errr/> 
  },
 {
 
  path: "Collection",
  element:(
    <>
      <Collection/>
      <Outlet/>
   
        
   </> 
    // ),
    // children: [{
    //    path: "/about/Team",
    //     element: <Team/>},
    //   {
    //    path: "/about/Pojo",
    //     element: <Pojo/>}
    // ]
 ) }
  // {
  //   path: "*",
  //   element: <ErrorGEN/>
  // }
]) ;  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>,
)
