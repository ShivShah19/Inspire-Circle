
import { createContext, useState } from 'react';
import './App.css'
import Add from './Component/Add';
import Home from './Component/Home'
import { BrowserRouter, Routes, Route } from "react-router";

export const AppContext = createContext();
function App() {
  const [user, setUser] = useState([]);
  console.log(user);
  
  return (
    <AppContext.Provider value={{user, setUser }}>
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/add' element={<Add />} />
    </Routes>
    </BrowserRouter>
    </ AppContext.Provider >
  )
}

export default App
