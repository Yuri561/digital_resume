import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Feedback  from './components/Feedback/Feedback'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app">
    <div className="glass">
      <Sidebar/>
      <Main />
      <Feedback/>
    </div>
   </div>
  )
}

export default App
