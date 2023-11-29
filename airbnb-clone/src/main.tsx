import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/navbar/NavBar.tsx'
import Modal from './components/modals/Modal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Modal isOpen />
    <Navbar />
    <App />
  </React.StrictMode>,
)
