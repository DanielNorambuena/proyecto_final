import React from 'react'
import Perfil from '../Components/Perfil'

const CrearP = () => {
  return (
    <>
      <Perfil></Perfil>
      <div>
        <div className='crear-publi'>
          <h1>Crear Publicacion</h1>
          <hr></hr>
        </div>
        <form className='editForm'>
          <input type="text" name="name" placeholder='Nombre' />
          <div className='editForm1'>
            <input className='input1' type="text" name="precio" placeholder='Precio' />
            <input type="tel" name="telefono" placeholder='Subir foto' />
          </div>
          <textarea className='textarea' name="comentarios" rows="5" placeholder='Descripción'></textarea>
          <input type="submit" value="Subir" />
        </form>
      </div>
    </>

  )
}

export default CrearP