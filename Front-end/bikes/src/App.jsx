import { Home } from './pages/Home'
import { Inicio_Registro } from './pages/Inicio_Registro'
import "./assets/css/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrito from './pages/Carrito.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Productos from './pages/Productos.jsx';

function App() {

  return (
    <>

      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/productos' element={<Productos/>}/>
          <Route />
        </Routes>
      </Router>
      
    </>

  )
}

export default App
