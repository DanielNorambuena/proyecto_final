import React, { useContext } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ContextoGlobal from '../Context/ContextoGlobal';

const Perfil = () => {

    const { usuario } = useContext(ContextoGlobal);



    return (
        <div className='caja'>
            <div className='perfil-contenedor'>
                <img className='imgRedonda' alt={usuario.name} src={usuario.img}></img>
                <div>
                    <h3 style={{ marginLeft: '5px' }}>Hola: {usuario.name}</h3>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        className={({ isActive }) => (isActive ? "viewActiva" : "view")}
                        to="/EditarPerfil">Editar Perfil</NavLink>
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