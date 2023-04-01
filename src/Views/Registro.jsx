import React from 'react'

const Registro = () => {
  return (
    <div>
      <h1 style={{ fontSize: '18pt', marginTop: '3em', marginBottom: '2em', textAlign: 'center' }}>Regístrate</h1>

      <form className='editForm'>
        <input type="text" name="name" placeholder='Nombre' />
        <div className='editForm1'>
          <input className='input1' type="text" name="rut" placeholder='Rut' />
          <input type="tel" name="telefono" placeholder='Teléfono' />
        </div>
        <input type="email" name="email" placeholder='Correo' />
        <input type="text" name="text" placeholder='Dirección' />
        <div className='editForm1'>
          <input className='input1' type="password" name="text" placeholder='Contraseña' />
          <input type="password" name="text" placeholder='Repetir Contraseña' />
        </div>
        <input type="submit" value="Guardar" />

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