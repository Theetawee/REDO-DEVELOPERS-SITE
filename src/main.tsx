import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import ReactGA from "react-ga";

if (process.env.NODE_ENV === "production") {
  ReactGA.initialize("G-ZGCSEZW5WV");
}






ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
