import React, { useContext } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../Img/logo.png'
import ContextoGlobal from '../Context/ContextoGlobal'

const Barra = () => {

  const { totalPedido } = useContext(ContextoGlobal);

  return (
    <Navbar className='barra'>
      <Container >
        <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/"><img alt="logo" src={logo} style={{ width: '220px' }} /></NavLink>
        <Nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <NavLink style={{ marginRight: '2em' }} className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/UltPublics">Catálogo de productos</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/InicioSesion">Iniciar sesión</NavLink>
          <NavLink style={{ border: '1px solid', borderRadius: '14px', marginLeft: '1em', marginRight: '1.5em', color: '#4688b1' }} className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/Registro">Registrate</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/InicioSesion"><i class="fa-solid fa-cart-shopping"></i>[{totalPedido}]</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Barra