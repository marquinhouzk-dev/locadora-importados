import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Carros from './pages/Carros'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carros" element={<Carros />} />
      </Routes>
    </BrowserRouter>
  )
}