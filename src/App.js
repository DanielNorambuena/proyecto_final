import Barra from './Components/Barra.jsx';
import Footer from './Components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home.jsx';
import UltPublics from './Views/UltPublics.jsx';
import InicioSesion from './Views/InicioSesion.jsx';
import Registro from './Views/Registro.jsx';
import Favoritos from './Views/Favoritos.jsx';
import Carrito from './Views/Carrito.jsx';
import Descripcion from './Views/Descripcion.jsx';
import NotFound from './Views/NotFound.jsx';
import CrearPublic from './Views/CrearPublic.jsx';
import MisPublicaciones from './Views/MisPublicaciones.jsx';
import BarraPrivada from './Components/BarraPrivada.jsx';
import ContextoGlobal from './Context/ContextoGlobal.jsx';
import { useContext } from 'react';


function App() {
  const { usuario, } = useContext(ContextoGlobal);


  return (
    <>
        <BrowserRouter>

          {usuario.conectado === true ? (
            <BarraPrivada />
          ) : (
            <Barra />
          )}

          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/UltPublics' element={<UltPublics></UltPublics>}></Route>
            <Route path='/InicioSesion' element={<InicioSesion></InicioSesion>}></Route>
            <Route path='/Registro' element={<Registro></Registro>}></Route>
            <Route path='/Descripcion/:id' element={<Descripcion></Descripcion>}></Route>
            {usuario.conectado &&
              <>
                <Route path='/Favoritos' element={<Favoritos></Favoritos>}></Route>
                <Route path='/CrearPublic' element={<CrearPublic></CrearPublic>}></Route>
                <Route path='/MisPublicaciones' element={<MisPublicaciones></MisPublicaciones>}></Route>
                <Route path='/Carrito' element={<Carrito></Carrito>}></Route>
              </>
            }
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
    </>
  );
}

export default App;
