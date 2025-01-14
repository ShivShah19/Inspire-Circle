import './App.css'
import Add from './Component/Add';
import Home from './Component/Home'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/add' element={<Add />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
