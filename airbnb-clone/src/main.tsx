import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/navbar/NavBar.tsx'
import RegisterModal from './components/modals/RegisterModal.tsx'
import ToasterProvider from './providers/ToasterProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToasterProvider />
    <RegisterModal />
    <Navbar />
    <App />
  </React.StrictMode>,
)
