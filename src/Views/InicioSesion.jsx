import React from 'react'

const InicioSesion = () => {
  return (
    <div>
      <h1 style={{ fontSize: '18pt', marginTop: '3em', marginBottom: '2em', textAlign: 'center' }}>Inicia Sesión</h1>

      <form className='editForm'>
        <input type="text" name="email" placeholder='Email' />
        <input type="password" name="password" placeholder='Contraseña' />
        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  )
}

export default InicioSesion