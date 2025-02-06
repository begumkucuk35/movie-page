import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favourites from './pages/Favourites'

function App() {
  
  return (
   <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
      {/* 53:19 */}
    </Routes>
   </main>
  )
}

export default App
