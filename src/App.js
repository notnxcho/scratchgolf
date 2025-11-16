import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HomeAlt from './pages/HomeAlt'
import Book from './pages/Reserve'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alt" element={<HomeAlt />} />
          <Route path="/book/:tab" element={<Book />} />
          <Route path="/book" element={<Book />} />
          <Route path="/reserve" element={<Book />} />
          <Route path="/legal/:tab" element={<Legal />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
