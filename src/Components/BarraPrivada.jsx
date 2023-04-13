import React, { useContext } from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../Img/logo.png'
import ContextoGlobal from '../Context/ContextoGlobal'

const BarraPrivada = () => {

    const { setUsuario, usuario, total, totalLike } = useContext(ContextoGlobal);
    const totalbarra = total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

    const navigate = useNavigate();

    const cerrarApp = () => {
        setUsuario({ conectado: false, nombre: '' });
        navigate(`/`);
    };


    return (
        <Navbar className='barra'>
            <Container >
                <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/"><img alt="logo" src={logo} style={{ width: '220px' }} /></NavLink>
                <Nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <NavLink style={{ marginRight: '2em' }} className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/UltPublics">Catálogo de productos</NavLink>
                    <NavDropdown title="Perfil" id="basic-nav-dropdown" style={{ marginRight: '2em' }}>
                        <h6 className="barra-privada" style={{ marginLeft: '1em' }}>{usuario.name}</h6>
                        <NavDropdown.Item> <NavLink to="/EditarPerfil" className="barra-privada" >Editar Perfil</NavLink></NavDropdown.Item>
                        <NavDropdown.Item> <NavLink to="/Favoritos" className="barra-privada" >Favoritos</NavLink></NavDropdown.Item>
                        <NavDropdown.Item> <NavLink to="/CrearPublic" className="barra-privada" >Subir Publicacion</NavLink></NavDropdown.Item>
                        <NavDropdown.Item> <NavLink to="/MisPublicaciones" className="barra-privada" >Mis Publicaciones</NavLink></NavDropdown.Item>
                    </NavDropdown>

                    <NavLink style={{ marginRight: '2em' }} className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/Favoritos"><i className="fa-solid fa-heart"></i> {totalLike}</NavLink>
                    <NavLink style={{ marginRight: '2em' }} className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/Carrito"><i className="fa-solid fa-cart-shopping"></i> {totalbarra}</NavLink> 
                    <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")}  onClick={() => cerrarApp()}><i className="fa-solid fa-right-from-bracket"></i></NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default BarraPrivada