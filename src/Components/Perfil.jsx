import React, { useContext } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ContextoGlobal from '../Context/ContextoGlobal';

const Perfil = () => {

    const { usuario } = useContext(ContextoGlobal);



    return (
        <div className='caja'>
            <div className='perfil-contenedor'>
                <img className='imgRedonda' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'></img>
                <div>
                    <h3>Hola: {usuario.name}</h3>
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