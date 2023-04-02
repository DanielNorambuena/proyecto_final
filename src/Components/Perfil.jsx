import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Perfil = () => {
    return (
        <div className='caja'>
            <div className='perfil-contenedor'>
                <img className='imgRedonda' src='https://lapi.com.mx/web/image/product.product/33844/image_1024/Paquete%20Perfil%20Mujer%20MID%20%28M%C3%A9rida%20Altabrisa%29?unique=8a485fd'></img>
                <div>
                    <h3>Hola: Myriam</h3>
                    <p>Editar Perfil</p>
                </div>
            </div>
            <Navbar >
                <Container  >
                    <Nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <NavLink style={{ border: '2px solid', borderRadius: '14px', marginLeft: '1em', marginRight: '1.5em', padding: '10px 80px' }}
                            className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/CrearPublic">Crear Publicacion</NavLink>
                        <NavLink style={{ border: '2px solid', borderRadius: '14px', marginLeft: '1em', marginRight: '1.5em', padding: '10px 80px' }}
                            className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/Favoritos">Favoritos</NavLink>
                        <NavLink style={{ border: '2px solid', borderRadius: '14px', marginLeft: '1em', marginRight: '1.5em', padding: '10px 80px' }}
                            className={({ isActive }) => (isActive ? "viewActiva" : "view")} to="/MisPublicaciones">Mis Publicaciones</NavLink>
                    </Nav>
                </Container>
            </Navbar>





        </div>
    )
}

export default Perfil