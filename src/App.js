import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <div className="App">
        <Header/>
      </div>
      <Routes>
        <Route path='/checkout' pageTitle='Checkout' element={<Checkout />}/>
        <Route path='/' pageTitle='Home' render element={<Home />}/>
      </Routes>
    </>
    
  );
}

export default App;
