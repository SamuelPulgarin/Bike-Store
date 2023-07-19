import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrito from './pages/Carrito.jsx';
import Navbar from './components/navbar/Navbar.jsx';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/Carrito' element={<Carrito />} />
          <Route />
        </Routes>
      </Router>
    </>
  )
}

export default App
