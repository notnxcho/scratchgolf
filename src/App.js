import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Reserve'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:tab" element={<Book />} />
          <Route path="/book" element={<Book />} />
          <Route path="/reserve" element={<Book />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
