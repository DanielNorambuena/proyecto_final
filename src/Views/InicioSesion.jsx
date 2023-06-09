import React, { useContext, useState } from 'react';
import ContextoGlobal from '../Context/ContextoGlobal';
import { useNavigate } from 'react-router-dom';


const InicioSesion = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { lstUsuarios, setUsuario } = useContext(ContextoGlobal);
  const navigate = useNavigate();


  const validarUsuario = () => {
    const usuarioValido = lstUsuarios.find((usuario) => usuario.email === email && usuario.clave === password);


    if (usuarioValido) {
      setUsuario({
        conectado: true,
        id: usuarioValido.id,
        name: usuarioValido.name,
        clave: usuarioValido.clave,
        email: usuarioValido.email,
        img: usuarioValido.img,
        rut: usuarioValido.rut,
        telefono: usuarioValido.telefono,
        direccion: usuarioValido.direccion,
      });
      navigate('/');
    } else {
      alert('Usuario invalido');
    }
  }


  return (
    <div className='estilo'>
      <h1 style={{ fontSize: '18pt', marginTop: '3em', marginBottom: '2em', textAlign: 'center' }}>Inicia Sesión</h1>
      <form className='editForm'>
        <input type="text" name="email"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required />

        <input type="password" name="password"
          placeholder='Contraseña'
          onChange={(e) => setPassword(e.target.value)}
          required />


        <button style={{ margin: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }}
          type="button"
          variant="outline-primary" className="btn btn-outline-primary"
          onClick={() => validarUsuario()}>Iniciar sesión</button>
      </form>
    </div>
  )
}


export default InicioSesion