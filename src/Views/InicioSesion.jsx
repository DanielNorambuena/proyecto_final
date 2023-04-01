import React from 'react'

const InicioSesion = () => {
  return (
    <div>
      <h1 style={{ fontSize: '18pt', marginTop: '3em', marginBottom: '2em', textAlign: 'center' }}>Inicia Sesión</h1>

/** Formulario */

      <form className='editForm'>
        <input type="text" name="email" placeholder='Email' />
        <input type="password" name="password" placeholder='Contraseña' />
        <button style={{ margin: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }} type="button" class="btn btn-outline-dark">Iniciar sesión</button>
      </form>
    </div>
  )
}


export default InicioSesion