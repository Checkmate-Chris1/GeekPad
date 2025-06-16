import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import NoteEditor from './pages/NoteEditor.tsx'
import HomePage, { type Note } from './pages/HomePage.tsx'
import App from './pages/App.tsx'

createRoot(document.getElementById('root')!).render(  
  <StrictMode>
    <App />
  </StrictMode>,
)