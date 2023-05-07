import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider } from 'react-router-dom';
import { Router } from "./components/Routes/Router.tsx"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Router} fallbackElement={<div>Loading....</div>} >
      <App />
    </RouterProvider>
  </React.StrictMode >,
)
