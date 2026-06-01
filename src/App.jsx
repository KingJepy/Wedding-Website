import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Rsvp from './components/Rsvp'
import Confirmation from './components/Confirmation'
import Carousel from './components/Carousel'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/details' element={<Details />} />
        <Route path='/rsvp' element={<Rsvp />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='/carousel' element={<Carousel />} />
      </Routes>
    
    </BrowserRouter>

  )
}

export default App
