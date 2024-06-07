
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Favourites from './pages/Favourites'
import HomePage from './pages/HomePage'


function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/fav' element={<Favourites/>}></Route>
    </Routes>
     
    </>
  )
}

export default App
