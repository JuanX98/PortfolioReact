import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav_app from './assets/Nav_app/Nav_app'
import Swipper from './assets/Swipper/Swipper'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav_app />
    <Swipper />
  </React.StrictMode>,
)
