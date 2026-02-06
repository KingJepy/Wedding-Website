import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Rsvp from './components/Rsvp'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/details' element={<Details />} />
        <Route path='/rsvp' element={<Rsvp />} />
      </Routes>
    
    </BrowserRouter>

  )
}

export default App
