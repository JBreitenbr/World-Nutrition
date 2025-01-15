import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import StartPage from './StartPage'
import Chart1 from './Dashboard1'
import Chart2 from './Dashboard2'
import Chart3 from './Dashboard3'
import Header from './Header'

function App() {
  return (
    <><Header />
          <Routes>
            <Route path="/World-Nutrition" element={<StartPage/>} />
              <Route path="/World-Nutrition/dashboard1" element={<Chart1/>}/>
              <Route path="/World-Nutrition/dashboard2" element={<Chart2/>}/>
            <Route path="/World-Nutrition/dashboard3" element={<Chart3/>}/>
          </Routes>
    </>
  )
}

export default App