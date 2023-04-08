import React, { useContext, useState } from 'react';
import ContextoGlobal from '../Context/ContextoGlobal';
import { useNavigate } from 'react-router-dom';


const InicioSesion = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { lstUsuarios, setConectado } = useContext(ContextoGlobal);
  const navigate = useNavigate();


  const validarUsuario = () => {
    const usuarioValido = lstUsuarios.find((usuario) => usuario.email === email && usuario.clave === password);

   
    if (usuarioValido) {
      setConectado(true);
      navigate('/');
    } else {
      setConectado(false);
    }
  }


  return (
    <div>
      <h1 style={{ fontSize: '18pt', marginTop: '3em', marginBottom: '2em', textAlign: 'center' }}>Inicia Sesión</h1>
      <form className='editForm'>
        <input type="text" name="email"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password" name="password"
          placeholder='Contraseña'
          onChange={(e) => setPassword(e.target.value)} />

        <button style={{ margin: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }}
          type="button"
          variant="outline-primary" class="btn btn-outline-primary"
          onClick={() => validarUsuario()}>Iniciar sesión</button>
      </form>
    </div>
  )
}


export default InicioSesion