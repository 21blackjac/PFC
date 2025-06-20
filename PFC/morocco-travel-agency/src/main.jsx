import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter> {/* Ensure that BrowserRouter wraps your Routes */}

         <App />

      </BrowserRouter>
  </React.StrictMode>
)
