import React, { useContext, useState } from 'react'
import ContextoGlobal from '../Context/ContextoGlobal';
import { useNavigate } from 'react-router-dom';

const Registro = () => {

  const [name, setName] = useState('');
  const [rut, setRut] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [clave, setClave] = useState('');

  const { lstUsuarios } = useContext(ContextoGlobal);
  const navigate = useNavigate();
  
  const registrarUsuario = () => {
    lstUsuarios.push({ name: name, rut: rut, telefono: telefono, email: email, direccion: direccion, clave: clave });
    navigate('/InicioSesion');
  }


  return (
    <div className='estilo'>
      <h1 style={{ fontSize: '18pt', marginTop: '3em', marginBottom: '2em', textAlign: 'center' }}>Regístrate</h1>

      <form className='editForm'>
        <input type="text" name="name"
          placeholder='Nombre'
          onChange={(e) => setName(e.target.value)}
          required />
        <div className='editForm1'>
          <input className='input1' type="text" name="rut"
            placeholder='Rut'
            onChange={(e) => setRut(e.target.value)} 
            required/>
          <input type="tel" name="telefono"
            placeholder='Teléfono'
            onChange={(e) => setTelefono(e.target.value)} 
            required/>
        </div>
        <input type="email" name="email"
          placeholder='Correo'
          onChange={(e) => setEmail(e.target.value)} 
          required/>
        <input type="text" name="text"
          placeholder='Dirección'
          onChange={(e) => setDireccion(e.target.value)}
          required />
        <div className='editForm1'>
          <input className='input1' type="password" name="text"
            placeholder='Contraseña'
            onChange={(e) => setClave(e.target.value)}
            required />
          <input type="password" name="text" placeholder='Repetir Contraseña' />
        </div>
        <button style={{ margin: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }}
          type="button"
          variant="outline-primary"
          className="btn btn-outline-primary"
          onClick={() => registrarUsuario()}
        >Guardar</button>

        <hr></hr>

        <div className='editForm2'>
          <input type="button" value="Registrate con Google" />
          <input type="button" value="Registrate con Facebook" />

        </div>
      </form>

    </div>
  )
}

export default Registro