import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'boostrap/dist/css/bootstrap.css'
import App from './pages/App.tsx'
import NoteEditor from './pages/NoteEditor.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <NoteEditor />
  </StrictMode>,
)
