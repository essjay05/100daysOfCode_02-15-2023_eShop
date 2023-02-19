import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'

import './App.css'

import Home from './pages/Home/Home'
import Checkout from './pages/Checkout/Checkout'
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      <div className="App">
        <Header/>
      </div>
      <Routes>
        <Route path='/login' pageTitle='Sign In' element={<Login />}/>
        <Route path='/checkout' pageTitle='Checkout' element={<Checkout />}/>
        <Route path='/' pageTitle='Home' render element={<Home />}/>
      </Routes>
    </>
    
  )
}

export default App
