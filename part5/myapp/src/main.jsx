import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import DivOne from "./components/DivOne.jsx";
import DivTwo from "./components/DivTwo.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}


    <DivOne name="Aung Aung" age="30" />
    <DivOne name="Su Su" />

    <DivTwo name="Kyaw Kyaw" age="40" />
    <DivTwo name="Hla Hla" />
    <DivTwo />




  </StrictMode>,
)




