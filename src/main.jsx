import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import './index.css'
import Collection from './composant/Collection.jsx'
import Boutique from './pages/Boutique.jsx'
import PageProduit from './composant/PageProduit.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "boutique",
    element: <Boutique />,
    
    
  },
      {
        path: "boutique/pageProduit/:productId",
        element: <PageProduit />,
      }
    ],
  
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>,
)
