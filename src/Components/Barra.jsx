import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Barra = () => {
  return (
    <Navbar className='barra'>
      <Container >
        <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/">Logo</NavLink>
        <Nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <NavLink style={{ marginRight: '2em' }} className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/UltPublics">Catálogo de productos</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/InicioSesion">Iniciar sesión</NavLink>
          <NavLink style={{ border: '1px solid', borderRadius: '14px', marginLeft: '1em', marginRight: '1.5em' }} className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/Registro">Registrate</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/Carrito"><i class="fa-solid fa-cart-shopping"></i></NavLink>
          <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/Favoritos"><i class="fa-solid fa-heart"></i></NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Barra