import Barra from './Components/Barra.jsx';
import Footer from './Components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home.jsx'
import UltPublics from './Views/UltPublics.jsx'
import InicioSesion from './Views/InicioSesion.jsx'
import Registro from './Views/Registro.jsx'
import Favoritos from './Views/Favoritos.jsx'
import Carrito from './Views/Carrito.jsx'
import Descripcion from './Views/Descripcion.jsx'
import CrearP from './Views/CrearP.jsx';
import MisPublicaciones from './Views/MisPublicaciones.jsx';

function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
      <Barra></Barra>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/UltPublics' element={<UltPublics></UltPublics>}></Route>
          <Route path='/InicioSesion' element={<InicioSesion></InicioSesion>}></Route>
          <Route path='/Registro' element={<Registro></Registro>}></Route>
          <Route path='/Carrito' element={<Carrito></Carrito>}></Route>
          <Route path='/Favoritos' element={<Favoritos></Favoritos>}></Route>
          <Route path='/Descripcion' element={<Descripcion></Descripcion>}></Route>
          <Route path='/CrearP' element={<CrearP></CrearP>}></Route>
          <Route path='/MisPulicaciones' element={<MisPublicaciones></MisPublicaciones>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
