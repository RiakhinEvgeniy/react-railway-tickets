import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* дальше будут другие маршруты */}
      </Routes>
    </>
  )
}

export default App
