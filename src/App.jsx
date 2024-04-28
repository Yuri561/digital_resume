
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import RightSide from './components/Rightside/Rightside'

function App() {

  return (
   <div className="app">
    <div className="glass">
      <Sidebar/>
      <Main />
      <RightSide/>
    </div>
   </div>
  )
}

export default App
