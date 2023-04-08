import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../Img/logo.png'

const BarraPrivada = () => {
    return (
        <Navbar className='barra'>
            <Container >
                <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/"><img alt="logo" src={logo} style={{ width: '220px' }} /></NavLink>
                <Nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <NavLink style={{ marginRight: '2em' }} className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/UltPublics">Catálogo de productos</NavLink>
                    <NavDropdown title="hola" id="basic-nav-dropdown" style={{ marginRight: '2em' }}>
                        <NavDropdown.Item> <NavLink to="/Favoritos" className="barra-privada" >Favoritos</NavLink></NavDropdown.Item>
                        <NavDropdown.Item> <NavLink to="/CrearPublic" className="barra-privada" >Subir Publicacion</NavLink></NavDropdown.Item>
                        <NavDropdown.Item> <NavLink to="/MisPublicaciones" className="barra-privada" >Mis Publicaciones</NavLink></NavDropdown.Item>
                    </NavDropdown>
                    <NavLink style={{ marginRight: '2em' }} className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/Carrito"><i class="fa-solid fa-cart-shopping"></i></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/Carrito"><i class="fa-solid fa-right-from-bracket"></i></NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default BarraPrivada