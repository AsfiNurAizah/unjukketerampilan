import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/home'
import AddNote from './components/addnote'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <h1>Selamat Datang Di Project Saya</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addnote">AddNote</Link></li>
      </ul>
    </nav>
    <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/AddNote" element={<AddNote />} />
      </Routes>
    </BrowserRouter>
  )   
}

export default App