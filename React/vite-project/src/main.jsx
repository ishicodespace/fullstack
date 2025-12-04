import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

//accessing the root div from index.html and rendering the App component inside it
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App ></App> //to render a component we can write it as a HTML tag
  // </StrictMode>,
)
