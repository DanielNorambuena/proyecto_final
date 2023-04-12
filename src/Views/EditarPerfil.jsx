import React, { useContext, useState } from 'react'
import Perfil from '../Components/Perfil';
import ContextoGlobal from '../Context/ContextoGlobal';
import { useNavigate } from 'react-router-dom';


const EditarPerfil = () => {


    const { usuario, setUsuario } = useContext(ContextoGlobal);
    const navigate = useNavigate();

    const [name, setName] = useState(usuario.name);
    const [rut, setRut] = useState(usuario.rut);
    const [telefono, setTelefono] = useState(usuario.telefono);
    const [email, setEmail] = useState(usuario.email);
    const [direccion, setDireccion] = useState(usuario.direccion);
    const [clave, setClave] = useState(usuario.clave);
    const [img, setImg] = useState(usuario.img);

    const actualizarUsuario = () => {

        const usuarioActualizado = {
            conectado: true,
            id: usuario.id,
            email: email,
            clave: clave,
            name: name,
            img: img,
            rut: rut,
            telefono: telefono,
            direccion: direccion,
        };

        setUsuario(usuarioActualizado);

        navigate('/MisPublicaciones');
    }

    return (
        <>
            <Perfil></Perfil>
            <div>
                <div className='crear-publi'>
                    <h1>Editar Perfil</h1>
                    <hr></hr>
                </div>


                <form className='editForm'>
                    <input
                        type="text"
                        name="name"
                        placeholder='Nombre'
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                    <div className='editForm1'>
                        <input
                            className='input1'
                            type="text"
                            name="rut"
                            placeholder='Rut'
                            onChange={(e) => setRut(e.target.value)}
                            value={rut} />
                        <input
                            type="tel"
                            name="telefono"
                            placeholder='Teléfono'
                            onChange={(e) => setTelefono(e.target.value)}
                            value={telefono} />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder='Correo'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                    <input
                        type="text"
                        name="text"
                        placeholder='Dirección'
                        onChange={(e) => setDireccion(e.target.value)}
                        value={direccion} />
                    <input
                        type="url"
                        name="text"
                        placeholder="Ingrese URL de la imagen"
                        id="url"
                        onChange={(e) => setImg(e.target.value)} />
                    <div className='editForm1'>
                        <input className='input1'
                            type="password"
                            name="text"
                            placeholder='Contraseña'
                            onChange={(e) => setClave(e.target.value)}
                            value={clave} />
                        <input
                            type="password"
                            name="text"
                            placeholder='Repetir Contraseña' />
                    </div>
                    <button style={{ margin: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }}
                        type="button"
                        variant="outline-primary"
                        className="btn btn-outline-primary"
                        onClick={() => actualizarUsuario()}
                    >Actualizar</button>
                </form>
            </div>
        </>
    )

}

export default EditarPerfil